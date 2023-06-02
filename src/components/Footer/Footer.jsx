import { Link } from 'react-router-dom'
import  logoFooter  from '../../assets/logo-kasa-footer.png'
import './footer.scss'

function Footer() {
    return(
        <section id='footer'>
            <div className="footer__center">
                <Link to='/'><img src={logoFooter} alt="Accueil" className='footer__center--logo' /></Link>
                <p className='footer__center--copyright'>&copy 2020 Kasa. All rigths reserved</p>
            </div>
        </section>
    )
}
export default Footer