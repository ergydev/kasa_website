import './card.scss'
import cardImage from '../../assets/card-img.png'

function Card() {
    return(
        <div className='card'>
            <img src={ cardImage } className='card--image' alt="Location" />
            <div className='card--text'>
                <p>Titre de la location</p>
            </div>
        </div>
    )
}

export default Card