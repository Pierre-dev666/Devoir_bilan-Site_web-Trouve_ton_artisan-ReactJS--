import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListOfCraftsman from './pages/ListOfCraftsman'
import LegalNotices from './pages/LegalNotices'
import PersonalData from './pages/PersonalData'
import Accessibility from './pages/Accessibility'
import Cookies from './pages/Cookies'
import Error from './pages/404Error'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const author = "Pierre Couderc";
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home auteur={author} />} />
        <Route path="/ListOfCraftsman" element={<ListOfCraftsman auteur={author} />} />
        <Route path="/LegalNotices" element={<LegalNotices auteur={author} />} />
        <Route path="/PersonalData" element={<PersonalData auteur={author} />} />
        <Route path="/Accessibility" element={<Accessibility auteur={author} />} />
        <Route path="/Cookies" element={<Cookies auteur={author} />} />
        <Route path='*'element={<Error auteur={author} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
