import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logo.png'
function Header() {
    return (
        <header>
            <div id='header_first-part'>
                <Link to="/" id='logo_link'><img src={Logo} id="logo" alt="Vite logo" /></Link>
                <label for="site-search"></label>
                <input type="search" id="site-search" name="q" placeholder=' recherche...' />

                <button>Rechercher</button>
            </div>

            <nav className="flex gap-4" id='header_second-part'>
                <Link to="/ListOfCraftsman" ><button>Bâtiment</button></Link>
                <Link to="/ListOfCraftsman" ><button>Services</button></Link>
                <Link to="/ListOfCraftsman" ><button>Fabrication</button></Link>
                <Link to="/ListOfCraftsman" ><button>Alimentation</button></Link>
            </nav>
        </header>
    )
}

export default Header