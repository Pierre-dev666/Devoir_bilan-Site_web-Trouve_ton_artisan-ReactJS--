import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.png';

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const specialities = ["Alimentation", "Batiment", "Fabrication", "Services"];

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search/${encodeURIComponent(search)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header>
      <div id='header_first-part'>
        <Link to="/" id='logo_link'>
          <img src={Logo} id="logo" alt="Logo" />
        </Link>
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder="recherche..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button id='search_button' onClick={handleSearch}>
          Rechercher
        </button>
      </div>

      <div style={{ marginTop: "0.5rem", textAlign: "center", alignContent: "center" }}>
        {specialities.map((spec) => (
          <button
            key={spec}
            onClick={() => navigate(`/ListOfCraftsman/${spec}`)}
          >
            {spec}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;