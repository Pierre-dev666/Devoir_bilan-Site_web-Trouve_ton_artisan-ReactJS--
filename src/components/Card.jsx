import React, { useEffect, useState } from "react"

function Card() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost/phpmyadmin/index.php?route=/database/structure&db=trouve_ton_artisan')
            .then(res => res.json())
            .then(data => res.setData(data))
            .then(err => console.log(err));
    }, [])

    return (
        <div id='card'>
            <table>
                
                {data.map((d, i) => (
                    <div key={i}>
                        <p>{d.id_artisan}</p>
                    </div>,
                    <div>
                    <p>test</p>
                </div>
                ))}

            </table>
        </div>
    )
}

export default Card