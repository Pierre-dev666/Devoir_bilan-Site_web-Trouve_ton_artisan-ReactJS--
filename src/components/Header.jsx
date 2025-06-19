import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logo.png'
function Header() {
    return (
        <header>
            <div>
                <img src={Logo} id="logo" alt="Vite logo" />
            </div>

            <nav className="flex gap-4">
                <Link to="/" className="hover:bg-green-800 inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white">Accueil</Link>
                <Link to="/about" className="hover:bg-green-800 inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white">À propos</Link>
            </nav>
        </header>
    )
}

export default Header