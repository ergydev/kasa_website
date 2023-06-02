import React, { useState, useEffect } from 'react'
import './slider.scss'
import data from '../../data'

import arrow from '../../assets/arrow.svg'

function Slider({ announceId }) {
    const [announces] = useState(data)
    const [index, setIndex] = useState(0)

    const currentAnnounce = announces.find((announce) => announce.id === announceId)
    const pictures = currentAnnounce ? currentAnnounce.pictures : []

    useEffect(() => {
        const lastIndex = announces.pictures.length -1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index> lastIndex){
            setIndex(0)
        }
    }, [index, announces])

    useEffect(()=> {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)
        return() => {
            clearInterval(slider)
        }
    }, [index])

    return (
        <section className='slider'>
            {pictures.map((picture, pictureIndex) => {
                let position = index === pictureIndex ? "activeSlide" : "" 
                if(index === pictureIndex - 1 || (index === 0 && pictureIndex === announces.pictures.length - 1)){
                    position = 'lastSlide'
                }

                const previousIndex = pictureIndex === 0 ? pictures.length - 1 : pictureIndex -1
                const nextIndex = pictureIndex === pictures.length - 1 ? 0 : pictureIndex + 1

                return(
                    <div className='slider__galery' key={pictureIndex}>
                        <div className='slider__galery--previous'>
                            <img src={arrow} alt="Previous" onClick={() => setIndex(previousIndex)} />
                        </div>
                        <img 
                            key={pictureIndex}
                            src={picture}
                            alt={`Slide ${pictureIndex}`}
                            className={`slide ${position}`}
                        />
                        <div className='slider__galery--next'>
                            <img src={arrow} alt="Next" onClick={() => setIndex(nextIndex)} />
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Slider