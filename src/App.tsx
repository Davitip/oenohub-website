import { Route, Routes } from 'react-router'
import Layout from '@/components/Layout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Ecosystem from '@/pages/Ecosystem'
import Education from '@/pages/Education'
import Home from '@/pages/Home'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
