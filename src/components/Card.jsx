import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function Card() {
    const [user, setUsers] = useState([]);
    const getUserInformation = async () => {
        const res = await fetch("http://localhost:3000/users/test@test.fr");
        const json = await res.json();
        setUsers(json);
    }
    useEffect(() => {
        getUserInformation();

    }, []);
    function ClickOnCard(){
        window.location.replace("http://localhost:5173/CraftsmanSheetPage",
);}

    return (
        
        <div id='card' onClick={ClickOnCard}>
     
                <div id="card_first-part">
                    <p>{user.name}</p>
                </div>
                <div id="card_second-part">
                    <p>Note :{user.name}</p>
                </div>
                <div id="card_third-part">
                    <p>{user.name}</p>
                </div>
                <div id="card_fourth-part">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11441.390831487402!2d0.6291456000000001!3d44.1999046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12abb31daed28661%3A0x2ecfc644f277ef52!2sCIN%C3%89MA%20CGR%20Agen!5e0!3m2!1sfr!2sfr!4v1751423113600!5m2!1sfr!2sfr"></iframe>
                </div>
           
        </div>
    )
}

export default Card