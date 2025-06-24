import { Link } from 'react-router-dom'
function Footer() {
    return (
        <header>
            <div id='footer_first-part'>
                <a href='https://www.google.com/maps/place/101+Cr+Charlemagne,+69002+Lyon/@45.7403517,4.8178441,18.75z/data=!4m22!1m15!4m14!1m6!1m2!1s0x47f4ebceb7217f5b:0x97dd96361cc92602!2s101+Cours+Charlemagne,+Lyon!2m2!1d4.8190973!2d45.7403373!1m6!1m2!1s0x47f4ecfb42ffac87:0xafa288732ed9370c!2s101+Cr+Charlemagne,+69002+Lyon!2m2!1d4.8194887!2d45.7406606!3m5!1s0x47f4ebceb7217f5b:0x97dd96361cc92602!8m2!3d45.7403373!4d4.8190973!16s%2Fg%2F11c213z3kc?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D' target='_blank'>Adresse : 101 cours Charlemagne   CS20033   69269            Lyon CEDEX 02              France</a>
                <div id='tel'>Téléphone: <a href="tel:+33426734000">+33(0)426734000</a></div>

            </div>

            <nav className="flex gap-4" id='footer_second-part'>
                <Link to="/LegalNotices" ><button>Mentions légales</button></Link>
                <Link to="/PersonalData" ><button>Données personnelles</button></Link>
                <Link to="/Accessibility" ><button>Accessibilité</button></Link>
                <Link to="/Cookies" ><button>Cookies</button></Link>
            </nav>
        </header>
    )
}

export default Footer