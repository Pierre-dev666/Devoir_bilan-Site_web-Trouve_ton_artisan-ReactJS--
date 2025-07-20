import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import Home from './pages/Home'
import ListOfCraftsman from './pages/ListOfCraftsman'
import CraftsmanSheetPage from './pages/CraftsmanSheetPage'
import LegalNotices from './pages/LegalNotices'
import PersonalData from './pages/PersonalData'
import Accessibility from './pages/Accessibility'
import Cookies from './pages/Cookies'
import Error from './pages/404Error'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchResults from './components/SearchResults';

function App() {
  const author = "Pierre Couderc";
  const [selectedSpeciality, setSelectedSpeciality] = useState("tous");

  return (
    <BrowserRouter>
      <Header
        selectedSpeciality={selectedSpeciality}
        setSelectedSpeciality={setSelectedSpeciality}
      />
      <Routes>
        <Route
          path="/"
          element={<Home selectedSpeciality={selectedSpeciality} />}
/>
        <Route path="/search/:term" element={<SearchResults />} />
        <Route path="/ListOfCraftsman/:speciality" element={<ListOfCraftsman />} />
        <Route path="/artisan/:id" element={<CraftsmanSheetPage auteur={author} />} />
        <Route path="/LegalNotices" element={<LegalNotices auteur={author} />} />
        <Route path="/PersonalData" element={<PersonalData auteur={author} />} />
        <Route path="/Accessibility" element={<Accessibility auteur={author} />} />
        <Route path="/Cookies" element={<Cookies auteur={author} />} />
        <Route path='*' element={<Error auteur={author} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;