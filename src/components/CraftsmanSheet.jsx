import React, { useEffect, useState } from "react"
import ImageIcon from '../assets/img/image_representation.png'
import ImageZeroStars from '../assets/img/0stars.png'
import ImageOneStars from '../assets/img/1stars.png'
import ImageTwoStars from '../assets/img/2stars.png'
import ImageThreeStars from '../assets/img/3stars.png'
import ImageFourStars from '../assets/img/4stars.png'
import ImageFiveStars from '../assets/img/5stars.png'

function CraftsmanSheet() {


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
        const res = await fetch("http://localhost:3000/artisans/68779ee281e1da4350a09157");
        const json = await res.json();
        setArtisans(json);

    }
    useEffect(() => {
        getArtisanInformation();

    }, []);
    let artisanMail = "mailto:"+artisan.artisan_email;

    return (
        <div id='craftsmansheet'>
            <div id="craftsmansheet_first-bloc">
                <div id='craftsmansheet_first-part'>
                     <img src={ImageIcon} alt="image_representation" />
                </div>
                <div id='craftsmansheet_second-part'>
                    <p>{artisan.nom_entreprise}</p>
                </div>
            </div>
            <div id="craftsmansheet_second-bloc">
                <div id='craftsmansheet_third-part'>
                    <p>{artisan.artisan_speciality}</p>
                </div>
                <div id='craftsmansheet_fourth-part'>
                     Note :<img src={stars} id="stars"></img>
                </div>
                <div id='craftsmansheet_fifth-part'>
                    <p id="about_part-1">A propos</p>
                    <p id="about_part-2">{artisan.artisan_about}</p>
                </div>
                <div id='craftsmansheet_sixth-part'>
                    <iframe src={artisan.artisan_localisation}></iframe>
                </div>
                <form  action={artisanMail} id='craftsmansheet_seventh-part' method="post">
                    <fieldset id="form">
                        <input type="text" placeholder="Nom..." id="name" required />
                        <label htmlFor="name"></label>
                        <input type="text" placeholder="Adresse mail..." id="mail" required />
                        <label htmlFor="mail"></label>
                        <input type="text" placeholder="Objet du message..." id="object" required />
                        <label htmlFor="object"></label>
                        <textarea name="demand" id="demand" cols="60" rows="10"
                            placeholder="Saisissez votre message ici" required></textarea>
                    </fieldset>
                    <input type="submit" value="Envoyer" id="validate"/>
                        <label htmlFor="validate"></label>
                </form>
            </div>
        </div>


    )
}

export default CraftsmanSheet