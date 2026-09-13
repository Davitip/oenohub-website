/**
 * Postbuild prerender: serves dist/ with a tiny static server (clean-URL + SPA fallback, like Cloudflare Pages), renders every route in
 * every language with headless Chromium (Playwright), patches per-page SEO meta
 * (canonical, hreflang alternates, og:locale, localized title/description) and
 * writes static HTML snapshots:
 *   KA: dist/index.html, dist/ecosystem/index.html, ...
 *   EN: dist/en/index.html, dist/en/ecosystem/index.html, ...
 */
import { createServer } from 'node:http'
import { createReadStream, existsSync } from 'node:fs'
import { mkdir, rename, stat, writeFile } from 'node:fs/promises'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST = path.join(ROOT, 'dist')
const ORIGIN = 'https://oenohub.ge'
// port 0 = ephemeral port chosen by the OS (avoids EADDRINUSE in CI retries)
let PREVIEW_URL = 'http://127.0.0.1:0'

const ROUTES = [
  {
    path: '/',
    ka: {
      title: 'OenoHub.ge — ღვინისა და აგროინდუსტრიის ეკოსისტემა | ვენახიდან საბოლოო პროდუქტამდე',
      description:
        'ერთი ეკოსისტემა. სრული ტექნოლოგიური ჯაჭვი — 11 კომპანია: ტექნოლოგია, წარმოება და ტარა, ლოგისტიკა და განათლება, ერთი ხედვით.',
    },
    en: {
      title: 'OenoHub.ge — Wine & Agro Industry Ecosystem | From Vineyard to Final Product',
      description:
        'One ecosystem. A complete technological chain — 11 companies: technology, production and packaging, logistics and education, one vision.',
    },
  },
  {
    path: '/ecosystem',
    ka: {
      title: 'ეკოსისტემა — 11 კომპანია, ერთი ხედვა | OenoHub.ge',
      description:
        'OenoHub.ge-ს ეკოსისტემა ფარავს ღვინისა და აგროინდუსტრიის სრულ ჯაჭვს — ტექნოლოგიით ვენახში, წარმოებითა და ტარით, ლოგისტიკითა და საერთაშორისო განათლებით.',
    },
    en: {
      title: 'Ecosystem — 11 Companies, One Vision | OenoHub.ge',
      description:
        'The OenoHub.ge ecosystem covers the full wine and agro value chain — from technology in the vineyard to production and packaging, logistics and international education.',
    },
  },
  {
    path: '/education',
    ka: {
      title: 'განათლება და სერტიფიცირება — ISG & EWA კავკასიაში | OenoHub.ge',
      description:
        'OenoHub.ge არის International Sommelier Guild-ისა და Edinburgh Whisky Academy-ს ოფიციალური ფრანჩაიზის მფლობელი კავკასიაში. საერთაშორისო დიპლომები — ადგილზე, ქართულად.',
    },
    en: {
      title: 'Education & Certification — ISG & EWA in the Caucasus | OenoHub.ge',
      description:
        'OenoHub.ge is the official franchise holder of the International Sommelier Guild and Edinburgh Whisky Academy in the Caucasus. International diplomas and professional standards — locally, in Georgian.',
    },
  },
  {
    path: '/about',
    ka: {
      title: 'ჩვენ შესახებ — ერთი ბრენდი, მთელი ინდუსტრია | OenoHub.ge',
      description:
        'OenoHub.ge დაიბადა მარტივი აზრით: ქართული ღვინის ინდუსტრია იმსახურებს ერთიან, თანამედროვე და ერთმანეთთან დაკავშირებულ ეკოსისტემას — ვენახიდან საბოლოო პროდუქტამდე.',
    },
    en: {
      title: 'About Us — One Brand, an Entire Industry | OenoHub.ge',
      description:
        'OenoHub.ge was born of a simple idea: the Georgian wine industry deserves a unified, modern, interconnected ecosystem — from vineyard to the final product.',
    },
  },
  {
    path: '/contact',
    ka: {
      title: 'კონტაქტი — დაგვიკავშირდი | OenoHub.ge',
      description:
        'გინდა შეუერთდე ეკოსისტემას, შეუკვეთო ტარა, გაიარო სერტიფიცირება თუ გჭირდება კონსულტაცია — ერთი შეტყობინება საკმარისია.',
    },
    en: {
      title: 'Contact — Get in Touch | OenoHub.ge',
      description:
        'Whether you want to join the ecosystem, order packaging, earn a certification or need a consultation — one message is enough.',
    },
  },
]

function urlFor(lang, p) {
  return lang === 'en' ? `${ORIGIN}/en${p === '/' ? '' : p}` : `${ORIGIN}${p}`
}

function outFile(lang, p) {
  const rel = lang === 'en' ? path.join('en', p) : p
  return path.join(DIST, rel, 'index.html')
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url)
      if (res.ok) return
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 300))
  }
  throw new Error(`preview server did not start at ${url}`)
}

/** Patch the rendered document head with per-route, per-language SEO tags. */
function patchHead({ route, lang }) {
  const ORIGIN = 'https://oenohub.ge'
  const meta = route[lang]
  const kaUrl = `${ORIGIN}${route.path}`
  const enUrl = `${ORIGIN}/en${route.path === '/' ? '' : route.path}`
  const selfUrl = lang === 'en' ? enUrl : kaUrl

  document.documentElement.lang = lang
  document.title = meta.title

  const setMeta = (attr, key, content) => {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, key)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('name', 'description', meta.description)
  setMeta('property', 'og:title', meta.title)
  setMeta('property', 'og:description', meta.description)
  setMeta('property', 'og:url', selfUrl)
  setMeta('property', 'og:locale', lang === 'ka' ? 'ka_GE' : 'en_US')
  setMeta('property', 'og:locale:alternate', lang === 'ka' ? 'en_US' : 'ka_GE')
  setMeta('name', 'twitter:title', meta.title)
  setMeta('name', 'twitter:description', meta.description)

  // canonical points to itself (per language)
  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', selfUrl)

  // hreflang alternates (replace any existing)
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
  for (const [hreflang, href] of [
    ['ka', kaUrl],
    ['en', enUrl],
    ['x-default', kaUrl],
  ]) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', hreflang)
    link.setAttribute('href', href)
    document.head.appendChild(link)
  }
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.ico': 'image/x-icon',
}

/**
 * Minimal static server for dist/ that mirrors Cloudflare Pages behavior:
 * clean URLs resolve to <path>/index.html, unknown paths fall back to the SPA
 * shell (dist/index.html).
 */
function serveDist() {
  return createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname)
      const rel = path.normalize(urlPath).replace(/^([/\\])+/, '')
      const candidates = [
        path.join(DIST, rel),
        path.join(DIST, `${rel}.html`),
        path.join(DIST, rel, 'index.html'),
      ]
      for (const candidate of candidates) {
        if (!candidate.startsWith(DIST)) continue
        const st = await stat(candidate).catch(() => null)
        if (st?.isFile()) {
          res.writeHead(200, { 'content-type': MIME[path.extname(candidate)] || 'application/octet-stream' })
          createReadStream(candidate).pipe(res)
          return
        }
      }
      // SPA fallback
      res.writeHead(200, { 'content-type': MIME['.html'] })
      createReadStream(path.join(DIST, 'index.html')).pipe(res)
    } catch (err) {
      res.writeHead(500).end(String(err))
    }
  })
}

const execFileAsync = promisify(execFile)

/**
 * Resolve a working chromium and launch it. Order:
 *  1. explicit executable candidates (env CHROMIUM_PATH, system installs)
 *  2. playwright's own cached browsers (default launch)
 *  3. CI fallback: `npx playwright install chromium` once, then retry
 * Returns null when nothing works — callers must treat that as "skip prerender".
 */
async function launchBrowser() {
  const attempts = []
  if (process.env.PRERENDER_SKIP_SYSTEM_CHROME !== '1') {
    const candidates = [
      process.env.CHROMIUM_PATH,
      '/usr/bin/chromium',
      '/usr/bin/chromium-browser',
      '/usr/bin/google-chrome',
    ].filter(Boolean)
    for (const executablePath of candidates) {
      if (existsSync(executablePath)) attempts.push({ executablePath })
    }
  }
  // playwright-managed browsers from the download cache
  attempts.push({})

  for (const opts of attempts) {
    try {
      return await chromium.launch(opts)
    } catch (err) {
      console.warn(`  [prerender] chromium launch failed (${opts.executablePath || 'playwright cache'}): ${err.message.split('\n')[0]}`)
    }
  }

  // CI fallback: download a browser into the playwright cache (once per build).
  console.warn('  [prerender] no local chromium found; running `npx playwright install chromium` ...')
  try {
    const { stdout, stderr } = await execFileAsync('npx', ['playwright', 'install', 'chromium'], {
      cwd: ROOT,
      maxBuffer: 16 * 1024 * 1024,
    })
    if (stdout) console.warn(stdout.trim())
    if (stderr) console.warn(stderr.trim())
    return await chromium.launch({})
  } catch (err) {
    console.warn(`  [prerender] playwright install/launch fallback failed: ${err.message.split('\n')[0]}`)
    return null
  }
}

async function main() {
  const server = serveDist()
  await new Promise((resolve, reject) => {
    server.once('error', reject)
    server.listen(0, '127.0.0.1', resolve)
  })
  PREVIEW_URL = `http://127.0.0.1:${server.address().port}`
  try {
    await waitForServer(PREVIEW_URL)

    const browser = await launchBrowser()
    if (!browser) {
      console.warn('[prerender] WARNING: no chromium available — skipping prerender. dist/ keeps the plain SPA build; deploy continues.')
      return
    }
    const page = await browser.newPage()
    // Snapshots written earlier in this run may be served as the base HTML of
    // later routes (SPA fallback); clear #root before app scripts run so that
    // waiting for '#root h1' always means "freshly rendered by React".
    await page.addInitScript(() => {
      window.addEventListener('DOMContentLoaded', () => {
        const root = document.getElementById('root')
        if (root) root.innerHTML = ''
      })
    })
    page.on('pageerror', (err) => console.warn(`  [pageerror] ${err.message}`))

    for (const route of ROUTES) {
      for (const lang of ['ka', 'en']) {
        const target = lang === 'en' ? `/en${route.path === '/' ? '' : route.path}` : route.path
        const url = `${PREVIEW_URL}${target}`
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
        await page.waitForSelector('#root h1', { timeout: 60000 })
        // let lazy route chunks, fonts and animations settle
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {})
        await page.waitForTimeout(1200)

        await page.evaluate(patchHead, { route, lang })
        const html = await page.content()
        const file = outFile(lang, route.path)
        await mkdir(path.dirname(file), { recursive: true })
        // atomic write: never leave a truncated index.html behind
        const tmp = `${file}.tmp-${process.pid}`
        await writeFile(tmp, html, 'utf8')
        await rename(tmp, file)
        console.log(`rendered ${lang} ${target} -> ${path.relative(ROOT, file)} (${html.length} bytes)`)
      }
    }

    await browser.close()
  } finally {
    server.close()
  }
}

main().catch((err) => {
  // Never hard-fail the deploy: dist/ still contains a valid SPA build and
  // per-route snapshot writes are atomic, so a prerender error is non-fatal.
  console.warn(`[prerender] WARNING: prerendering failed, continuing without snapshots: ${err.message}`)
  process.exit(0)
})
