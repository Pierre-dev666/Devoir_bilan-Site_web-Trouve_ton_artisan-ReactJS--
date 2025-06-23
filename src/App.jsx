import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListOfCraftsman from './pages/ListOfCraftsman'
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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
