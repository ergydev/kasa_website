import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo-kasa.png'

function Header() {
    return (
        <nav>
            <Link to='/'></Link>
            <img src={logo} alt="Kasa Logo" />
            <Link to='/'>Accueil</Link>
            <Link to='/about'>A Propos</Link>
        </nav>
    )
}

export default Header