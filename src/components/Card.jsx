import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import ImageZeroStars from '../assets/img/0stars.png'
import ImageOneStars from '../assets/img/1stars.png'
import ImageTwoStars from '../assets/img/2stars.png'
import ImageThreeStars from '../assets/img/3stars.png'
import ImageFourStars from '../assets/img/4stars.png'
import ImageFiveStars from '../assets/img/5stars.png'

function Card() {

    const [artisan, setArtisans] = useState([]);

    let stars = ImageZeroStars;
    let firstRead = 0;
    if (firstRead == 0) {
        if (artisan.artisan_note >= 0 && artisan.artisan_note <= 0.4) {
            stars = ImageZeroStars;
        }
        if (artisan.artisan_note >= 0.5 && artisan.artisan_note <= 1.4) {
            stars = ImageOneStars;
        }
        if (artisan.artisan_note >= 1.5 && artisan.artisan_note <= 2.4) {
            stars = ImageTwoStars;
        }
        if (artisan.artisan_note >= 2.5 && artisan.artisan_note <= 3.4) {
            stars = ImageThreeStars;
        }
        if (artisan.artisan_note >= 3.5 && artisan.artisan_note <= 4.4) {
            stars = ImageFourStars;
        }
        if (artisan.artisan_note >= 4.5 && artisan.artisan_note <= 5) {
            stars = ImageFiveStars;
            console.log(stars)
        }
        firstRead = 1;
    }
    const getArtisanInformation = async () => {
        const res = await fetch("http://localhost:3000/artisans/"+"68779ee281e1da4350a09157");
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
 /*    var i = 1;
    var id = res._id('edit-link-name-'+i);*/


    return (
        <div id='card' onClick={ClickOnCard}>

            <div id="card_first-part">
                <p>{artisan.nom_entreprise}</p>
            </div>
            <div id="card_second-part">

                Note :<img src={stars} id="stars"></img>
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