import React from 'react'
import './card.scss'
import cardImage from '../../assets/card-img.png'

function Card({ title }) {
    return(
        <div className='card'>
            <img src={ cardImage } className='card--image' alt="Location" />
            <div className='card--text'>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Card