import {  Link, useLocation } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/logo-kasa.png'

function Header() {
    
    const location = useLocation()


    return (
        <header>
            <nav>
                <Link to='/' className="header__logo">
                    <img src={logo} alt="Kasa Logo" />
                </Link>
                <div className='nav__links'>
                    <ul>
                        <li><Link to='/'  className={`nav__links--link ${location.pathname === '/' ? 'active' : ""}`}>Accueil</Link></li>
                        <li><Link to='/about' className={`nav__links--link ${location.pathname === '/about' ? 'active' : ""}`}>A Propos</Link></li>                       
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header