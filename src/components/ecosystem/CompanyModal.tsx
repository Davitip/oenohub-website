import { ArrowUpRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useLang } from '@/i18n/LanguageContext'
import { ECO_CATEGORIES, type EcoCompany } from './eco-data'

interface CompanyModalProps {
  company: EcoCompany | null
  onClose: () => void
}

export default function CompanyModal({ company, onClose }: CompanyModalProps) {
  const { d } = useLang()
  const category = company ? ECO_CATEGORIES.find((c) => c.id === company.category) : null
  const copy = company ? d.eco.companies[company.id] : null

  return (
    <Dialog open={company !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-h-[85dvh] max-w-[720px] gap-0 overflow-y-auto rounded-[20px] border-cream-200 bg-cream-50 p-0 shadow-[0_32px_80px_-24px_rgb(42_7_16/0.45)]"
      >
        {company && category && copy && (
          <div data-lenis-prevent className="flex flex-col">
            {/* header */}
            <div className="border-b border-cream-200 bg-cream-100 px-8 py-7">
              <div className="flex items-center gap-5 pr-8">
                <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border border-cream-200 bg-cream-50 px-3">
                  <img src={company.logo} alt="" className="max-h-8 w-auto" />
                </div>
                <div className="min-w-0">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.06em] ${category.badgeClass}`}
                  >
                    {d.eco.categories[category.id].badge}
                  </span>
                  <DialogHeader className="mt-2 space-y-1 text-left">
                    <DialogTitle className="font-serif text-[26px] font-semibold leading-[1.25] text-ink-900">
                      {company.name}
                    </DialogTitle>
                    <DialogDescription className="text-sm font-medium text-burgundy-700">
                      {copy.tagline}
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </div>
            </div>

            {/* body */}
            <div className="px-8 py-7">
              <div className="flex flex-col gap-4 text-[15px] leading-[1.75] text-ink-600">
                {copy.long.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <h4 className="mt-7 text-xs font-semibold tracking-[0.06em] text-ink-400">
                {d.eco.modal.features}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {copy.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-cream-200 bg-white/70 px-3 py-1 text-xs text-ink-600"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-cream-200 px-8 py-6">
              <span className="text-xs text-ink-400">{d.eco.modal.member}</span>
              <a
                href={company.url}
                target="_blank"
                rel="noreferrer"
                className="sheen inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-burgundy-950 transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
              >
                {d.eco.modal.visit}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
