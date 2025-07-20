import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function renderStars(note) {
  const max = 5;
  return "★".repeat(note) + "☆".repeat(max - note);
}

function CardDefault({ selectedSpeciality, topOnly = false }) {
  const [artisans, setArtisans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/artisans")
      .then(res => res.json())
      .then(data => setArtisans(data))
      .catch(err => console.error("Erreur :", err));
  }, []);

  let filtered = artisans;

  if (selectedSpeciality && selectedSpeciality !== "tous") {
    filtered = filtered.filter(a => a.artisan_speciality === selectedSpeciality);
  }

  if (topOnly) {
    filtered = [...filtered]
      .sort((a, b) => b.artisan_note - a.artisan_note)
      .slice(0, 3);
  }

  return (
    <div id="home_cards">
      {filtered.map((artisan) => (
        <div
          key={artisan._id}
          id="card"
          onClick={() => navigate(`/artisan/${artisan._id}`)}
          style={{ cursor: "pointer" }}
        >
          <div id="card_first-part">
            <p>{artisan.nom_entreprise}</p>
          </div>
          <div id="card_second-part">
            <p>
              <strong>Note :</strong>{" "}
              <span style={{ color: "blue", fontSize: "2rem" }}>
                {renderStars(artisan.artisan_note)}
              </span>
            </p>
          </div>
          <div id="card_third-part">
            <p>{artisan.artisan_speciality}</p>
          </div>
          <div id="card_fourth-part">
            <iframe
              src={artisan.artisan_localisation}
              title="localisation"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDefault;