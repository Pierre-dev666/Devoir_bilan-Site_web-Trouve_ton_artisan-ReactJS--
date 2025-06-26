import Card from '../components/Card'
function Home() {

    return (
        <main id="home">
            <div id="bloc-home_H1">
                <h1>Comment trouver ton artisan ?</h1>
            </div>
            <div id="bloc-txt_home">
                <ol>
                    <li>Choisir la catégorie d’artisanat dans le menu.</li>
                    <li>Choisir un artisan.</li>
                    <li>Le contacter via le formulaire de contact.</li>
                    <li>Une réponse sera apportée sous 48h.</li>
                </ol>
            </div>
            <div id='home_cards'>
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    )
}

export default Home