import React, { createElement, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import ImageZeroStars from '../assets/img/0stars.png'
import ImageOneStars from '../assets/img/1stars.png'
import ImageTwoStars from '../assets/img/2stars.png'
import ImageThreeStars from '../assets/img/3stars.png'
import ImageFourStars from '../assets/img/4stars.png'
import ImageFiveStars from '../assets/img/5stars.png'

function CardDefault() {
    const tibody = 0;
    const [artisan, setArtisans] = useState([]);
    let stars = ImageZeroStars;
    let test = "blabla";
    let map = null;

    const getArtisanInformation = async () => {


        await fetch("http://localhost:3000/artisans")
            .then((response) => {

                return response.json();

            })
            .then((artisan) => {
                let i = 0;

                let nom = (artisan[i].nom_entreprise);
                let note = (artisan[i].artisan_note);
                let speciality = (artisan[i].artisan_speciality);
                let localisation = (artisan[i].artisan_localisation);
                
                document.getElementById("name").textContent = nom;
                document.getElementById("speciality").textContent = speciality;
                document.getElementById("map").src = localisation;
                console.log(artisan[0].artisan_localisation)

                let firstRead = 0;
                if (firstRead == 0) {
                    if (artisan.artisan_note >= 0 && artisan.artisan_note <= 0.4) {
                        stars = ImageZeroStars;
                        document.getElementById("stars").src = stars;
                    }
                    if (artisan.artisan_note >= 0.5 && artisan.artisan_note <= 1.4) {
                        stars = ImageOneStars;
                        document.getElementById("stars").src = stars;
                    }
                    if (artisan.artisan_note >= 1.5 && artisan.artisan_note <= 2.4) {
                        stars = ImageTwoStars;
                        document.getElementById("stars").src = stars;
                    }
                    if (artisan.artisan_note >= 2.5 && artisan.artisan_note <= 3.4) {
                        stars = ImageThreeStars;
                        document.getElementById("stars").src = stars;
                    }
                    if (artisan.artisan_note >= 3.5 && artisan.artisan_note <= 4.4) {
                        stars = ImageFourStars;
                        document.getElementById("stars").src = stars;
                    }
                    if (note >= 4.5 && note <= 5) {
                        stars = ImageFiveStars;
                        document.getElementById("stars").src = stars;
                    }
                    firstRead = 1;

                }





            })

    }
    useEffect(() => {
        getArtisanInformation();

    }, []);
    function ClickOnCard() {
        window.location.replace("http://localhost:5173/CraftsmanSheetPage",

        );
    }



    return (
        <div id='card' onClick={ClickOnCard}>

            <div id="card_first-part">
                <p id="name">{test}</p>
            </div>
            <div id="card_second-part">

                Note :<img src={stars} id="stars"></img>
            </div>
            <div id="card_third-part">
                <p id="speciality">{test}</p>
            </div>
            <div id="card_fourth-part">
                <iframe src={map} id="map"></iframe>
            </div>

        </div>
    )
}

export default CardDefault