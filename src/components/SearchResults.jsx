import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function renderStars(note) {
  const max = 5;
  return "★".repeat(note) + "☆".repeat(max - note);
}

function SearchResults() {
  const { term } = useParams();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api-rest-trouve-ton-artisan.onrender.com/artisans")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((a) =>
          a.nom_entreprise.toLowerCase().includes(term.toLowerCase())
        );
        setResults(filtered);
      })
      .catch((err) => console.error(err));
  }, [term]);

  return (
    <main id="craftsman_cards">
      <h1>Résultats pour : "{term}"</h1>
      <div id="artisan-list">
        {results.map((a) => (
          <div key={a._id} id="card" onClick={() => navigate(`/artisan/${a._id}`)}
          style={{ cursor: "pointer" }}
        >
            <div id="card_first-part">
              <p>{a.nom_entreprise}</p>
            </div>
            <div id="card_second-part">
              <p>
                <strong>Note :</strong>{" "}
                <span style={{ color: "blue", fontSize: "2rem" }}>
                  {renderStars(a.artisan_note)}
                </span>
              </p>
            </div>
            <div id="card_third-part">
              <p>{a.artisan_speciality}</p>
            </div>
            <div id="card_fourth-part">
              <iframe src={a.artisan_localisation} title="localisation" />
            </div>
          </div>
        ))}
        {results.length === 0 && <p>Aucun artisan trouvé pour ce nom.</p>}
      </div>
    </main>
  );
}

export default SearchResults;