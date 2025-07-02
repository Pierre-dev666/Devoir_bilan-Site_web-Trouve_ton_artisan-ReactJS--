import React, { useEffect, useState } from "react"

function CraftsmanSheet() {

    const [user, setUsers] = useState([]);
    const getUserInformation = async () => {
        const res = await fetch("http://localhost:3000/users/test@test.fr");
        const json = await res.json();
        setUsers(json);
    }
    useEffect(() => {
        getUserInformation();

    }, []);
    return (
        <div id='craftsmansheet'>
            <div id="craftsmansheet_first-bloc">
                <div id='craftsmansheet_first-part'>
                    <p>blabla</p>
                </div>
                <div id='craftsmansheet_second-part'>
                    <p>blabla</p>
                </div>
            </div>
            <div id="craftsmansheet_second-bloc">
                <div id='craftsmansheet_third-part'>
                    <p>blabla</p>
                </div>
                <div id='craftsmansheet_fourth-part'>
                    <p>blabla</p>
                </div>
                <div id='craftsmansheet_fifth-part'>
                    <p>blabla</p>
                </div>
                <div id='craftsmansheet_sixth-part'>
                    <p>blabla</p>
                </div>
                <form id='craftsmansheet_seventh-part'>
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