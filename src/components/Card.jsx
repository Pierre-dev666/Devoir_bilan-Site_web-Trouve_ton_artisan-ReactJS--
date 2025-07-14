import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import ImageFullStar from '../assets/img/fullstar.png'
import ImageEmptyStar from '../assets/img/emptystar.png'

function Card() {
    const [artisan, setArtisans] = useState([]);
    const getArtisanInformation = async () => {
        const res = await fetch("http://localhost:3000/artisans/6874632aff1b1e2afa973074");
        const json = await res.json();
        setArtisans(json);

    }
    useEffect(() => {
        getArtisanInformation();

    }, []);
    function ClickOnCard() {
        window.location.replace("http://localhost:5173/CraftsmanSheetPage",

        );
    }

    function Note() {
        let note = 0;
        if (artisan.artisan_note >= 0 && artisan.artisan_note <= 1.4) {
            note = 1;
        }
        if (artisan.artisan_note >= 1.5 && artisan.artisan_note <= 2.4) {
            note = 2;
        }
        if (artisan.artisan_note >= 2.5 && artisan.artisan_note <= 3.4) {
            note = 3;
        }
        if (artisan.artisan_note >= 3.5 && artisan.artisan_note <= 4.4) {
            note = 4;
        }
        if (artisan.artisan_note >= 4.5 && artisan.artisan_note <= 5) {
            note = 5
            console.log(note)
        }
    }

    return (
        <div id='card' onClick={ClickOnCard}>

            <div id="card_first-part">
                <p>{artisan.nom_entreprise}</p>
            </div>
            <div id="card_second-part">
                Note :<p>{artisan.artisan_note}</p>
            </div>
            <div id="card_third-part">
                <p>{artisan.artisan_speciality}</p>
            </div>
            <div id="card_fourth-part">
                <iframe src={artisan.artisan_localisation}></iframe>
            </div>

        </div>
    )
}

export default Card