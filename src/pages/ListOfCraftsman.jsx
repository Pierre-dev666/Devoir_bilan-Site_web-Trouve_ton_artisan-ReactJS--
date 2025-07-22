import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function renderStars(note) {
  const max = 5;
  return "★".repeat(note) + "☆".repeat(max - note);
}
function normalize(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function ListOfCraftsman() {
  const { speciality } = useParams();
  const [artisans, setArtisans] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api-rest-trouve-ton-artisan.onrender.com/artisans")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(a =>
          normalize(a.artisan_category) === normalize(speciality)
        );
        setArtisans(filtered);
      })
      .catch((err) => console.error(err));
  }, [speciality]);

  return (
    <main id='home_cards'>
      <h1>Artisans de la catégorie : {speciality}</h1>
      <div id="artisan-list">
        {artisans.map((a) => (
          <div key={a._id} id="card" className="card" onClick={() => navigate(`/artisan/${a._id}`)}
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
            <iframe
              src={a.artisan_localisation}
              title="localisation"
            ></iframe>
          </div>
          </div>
        ))}
        {artisans.length === 0 && <p>Aucun artisan trouvé pour cette spécialité.</p>}
      </div>
    </main>
  );
}

export default ListOfCraftsman;