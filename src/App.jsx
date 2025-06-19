import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  const author = "Pierre Couderc";
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home auteur={author} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
