import ErrorImg from '../assets/img/error.png'

function Error() {

    return (
        <main>
            <img src={ErrorImg} id="ErrorImg" alt="Error Image" />
            <div id="bloc-error_H1">
                 <h1 id='error_H1'>Page non trouvée </h1>
            </div>
            <div id='bloc-txt_error'>
               
                <p>
                    La page que vous avez demandé a été supprimé ou n'existe pas
                </p>
            </div>
        </main>
    )
}

export default Error