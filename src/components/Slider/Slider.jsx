import { useState, useEffect } from 'react'
import './slider.scss'
import { announces } from '../../data/announces.js'

import arrow from '../../assets/arrow.svg'

function Slider({ announceId }) {
    const [announcesArray] = useState(announces)
    const [index, setIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState(1)
  
    const currentAnnounce = announcesArray.find((announce) => announce.id === announceId)
    const pictures = currentAnnounce ? currentAnnounce.pictures : []
  
    useEffect(() => {
      const lastIndex = pictures.length - 1
      if (index < 0) {
        setIndex(lastIndex)
      }
      if (index > lastIndex) {
        setIndex(0)
      }
    }, [index, pictures])
  
    useEffect(() => {
      let slider = setInterval(() => {
        setIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % pictures.length
            setCurrentImage(newIndex + 1)
            return newIndex
        })
    }, 5000)
    return () => {
        clearInterval(slider)
    }
    }, [pictures])
  
    return (
      <section className='slider'>
        {pictures.map((picture, pictureIndex) => {
          let position = index === pictureIndex ? 'activeSlide' : ''
          if (index === pictureIndex - 1 || (index === 0 && pictureIndex === pictures.length - 1)) {
            position = 'lastSlide'
          }
  
          const previousIndex = pictureIndex === 0 ? pictures.length - 1 : pictureIndex - 1
          const nextIndex = (pictureIndex + 1) % pictures.length
  
          return (
            <div className='slider__gallery' key={pictureIndex}>
              <div className='slider__gallery--previous'>
                <img src={arrow}
                     alt='Previous' 
                     onClick={() => {
                        setIndex(previousIndex(pictureIndex))
                        setCurrentImage(previousIndex(pictureIndex) + 1)
                    }} 
                />
              </div>
              <img
                src={picture}
                alt={`Slide ${pictureIndex}`}
                className={`slide ${position}`}
              />
              {pictures.length > 1 && (
                <div className='slider__counter'>
                    {`${currentImage}/${pictures.length}`}
                </div>
              )}
              <div className='slider__gallery--next'>
                <img 
                    src={arrow} 
                    alt='Next' 
                    onClick={() => {
                        setIndex(nextIndex(pictureIndex))
                        setCurrentImage(nextIndex(pictureIndex) + 1)
                    }} 
                />
              </div>
            </div>
          )
        })}
      </section>
    )
  }

export default Slider