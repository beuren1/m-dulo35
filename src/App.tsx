import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Restaurant />} />
      </Routes>
      <Footer />
    </>
  )
}
