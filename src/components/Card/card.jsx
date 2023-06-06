import { Link } from 'react-router-dom'
import './card.scss'
import cardImage from '../../assets/card-img.png'


function Card({ title, id, cover }) {
    return(
        <div className='card'>
            <Link to={`/logement/${id}`}>
                <img src={cover} className='card--image' alt="Location" />
                <div className='card--text'>
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card