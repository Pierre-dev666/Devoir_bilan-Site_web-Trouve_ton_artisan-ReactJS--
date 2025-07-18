import React, { createElement, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import ImageZeroStars from '../assets/img/0stars.png'
import ImageOneStars from '../assets/img/1stars.png'
import ImageTwoStars from '../assets/img/2stars.png'
import ImageThreeStars from '../assets/img/3stars.png'
import ImageFourStars from '../assets/img/4stars.png'
import ImageFiveStars from '../assets/img/5stars.png'

function Card() {
const tibody = 0;
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
        await fetch("http://localhost:3000/artisans")
            .then((response) => {

                return response.json();

            })
            .then((artisan) => {
                for (let i = 0; i < 17; i++) {
                let artisanId = (artisan[i]._id);
                    console.log(artisanId)
                    console.log(artisan[i])
                    let body = (artisan[0]._id);
                    console.log(body)
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
            <ul id="ul">
                <li id="card_first-part">
                    <p>{tibody}</p>
                </li>
                <li id="card_second-part">

                    Note :<img src={stars} id="stars"></img>
                </li>
                <li id="card_third-part">
                    <p>{artisan.artisan_speciality}</p>
                </li>
                <li id="card_fourth-part">
                    <iframe src={artisan.artisan_localisation}></iframe>
                </li>
            </ul>
        </div>
    )
}

export default Card