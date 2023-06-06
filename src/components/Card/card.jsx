import { Link } from 'react-router-dom'
import './card.scss'



function Card({ title, id, cover }) {
    return(
        <Link to={`/logement/${id}`} className='card--link'>
            <div className='card'>
                <img src={cover} className='card--image' alt="Location" />
                <div className='card--text'>
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card