import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/img/image_representation.png"

function renderStars(note) {
    return "★".repeat(note) + "☆".repeat(5 - note);
}

function CraftsmanSheetPage() {
    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);
    const mailTo = "mailto:"

    useEffect(() => {
        fetch(`http://localhost:3000/artisans/${id}`)
            .then(res => res.json())
            .then(setArtisan)
            .catch(console.error);
    }, [id]);

    if (!artisan) return <p>Chargement...</p>;

    return (
        <div id="" style={{ padding: "1rem", justifyItems: "center" }}>
            <div id="craftsmansheet_first-bloc">
                <div id="craftsmansheet_first-part">
                    <img src={Logo} alt="Logo" />
                </div>
                <div id="craftsmansheet_second-part">
                    <p> {artisan.nom_entreprise}</p>
                </div>
            </div>
            <div id="craftsmansheet_second-bloc">
                <div id="craftsmansheet_third-part">
                    <p>{artisan.artisan_speciality}</p>
                </div>
                <div id="craftsmansheet_fourth-part">
                    Note : <span style={{ color: "blue" }}>{renderStars(artisan.artisan_note)}</span>
                </div>
                <div id="craftsmansheet_fifth-part">
                    <p id="about_part-1"><strong>A propos</strong></p>
                    <p id="about_part-2">{artisan.artisan_about}</p>
                </div>
                <div id="craftsmansheet_sixth-part">
                    <iframe
                        src={artisan.artisan_localisation}
                        title="localisation"
                    ></iframe>
                </div>
                <div id="craftsmansheet_seventh-part">
                    <form id="form" action={mailTo+artisan.artisan_email} method="post">
                        <input type="text" placeholder="Nom..." required/>
                        <input type="text" placeholder="Adresse mail..." required/>
                        <input type="text" placeholder="Objet du message..." required/>
                        <textarea placeholder="Ma demande..." required></textarea>
                        <button id="" type="submit">Envoyer</button>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default CraftsmanSheetPage;