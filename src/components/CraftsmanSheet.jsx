import React, { useEffect, useState } from "react"
import ImageIcon from '../assets/img/image_representation.png'

function CraftsmanSheet() {


    const [artisan, setArtisans] = useState([]);
    const getArtisanInformation = async () => {
        const res = await fetch("http://localhost:3000/artisans/6874632aff1b1e2afa973074");
        const json = await res.json();
        setArtisans(json);

    }
    useEffect(() => {
        getArtisanInformation();

    }, []);

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
                    Note :<p>{artisan.artisan_note}</p>
                </div>
                <div id='craftsmansheet_fifth-part'>
                    <p id="about_part-1">A propos</p>
                    <p id="about_part-2">{artisan.artisan_about}</p>
                </div>
                <div id='craftsmansheet_sixth-part'>
                    <iframe src={artisan.artisan_localisation}></iframe>
                </div>
                <form  action="mailto:pierroxthefox@hotmail.fr" id='craftsmansheet_seventh-part' method="post">
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