import { Link } from 'react-router-dom'
import './error.scss'

function Error() {
    return(
        <div className="error__center">
            <div className='error__center--title'>
                <h1 className="error__title">404</h1>
                <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className='error__center--home'>
                <Link to="/" className='error__link'>Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
} 

export default Error