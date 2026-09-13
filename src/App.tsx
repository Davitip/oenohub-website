import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'

const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const Ecosystem = lazy(() => import('@/pages/Ecosystem'))
const Education = lazy(() => import('@/pages/Education'))

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
