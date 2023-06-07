import React, {  useState } from 'react'
import './collapse.scss'
import arrow from '../../assets/arrow.svg'

function Collapse({ title, content, isList }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className='collapside__wrapper'>
            <div className='collapside__title' onClick={handleToggle}>
                <h3>{title}</h3>
                <img src={arrow} alt="Ouvrir" className={isOpen ? 'rotate' : ""}/>
            </div>
            {isOpen && (
                <div className="collapside__content">
                    {isList ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ): (
                        <p>{content}</p>
                    )} 
                </div>
            ) }
        </div>
    )
}

export default Collapse