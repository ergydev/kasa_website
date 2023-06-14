import { useState, useEffect } from 'react';
import './slider.scss';
import { announces } from '../../data/announces.js';

import arrow from '../../assets/arrow.svg';

function Slider({ announceId }) {
  const [announcesArray] = useState(announces);
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(1);

  const currentAnnounce = announcesArray.find((announce) => announce.id === announceId);
  const pictures = currentAnnounce ? currentAnnounce.pictures : [];

  useEffect(() => {
    const lastIndex = pictures.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
    setCurrentImage(index + 1);
  }, [index, pictures]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, [pictures]);

  return (
    <section className="slider">
      <div className="slider__gallery">
        {pictures.map((picture, pictureIndex) => {
          let position = index === pictureIndex ? 'activeSlide' : '';

          const previousIndex = pictureIndex === 0 ? pictures.length - 1 : pictureIndex - 1;
          const nextIndex = (pictureIndex + 1) % pictures.length;

          return (
            <img
              key={pictureIndex}
              src={picture}
              alt={`Slide ${pictureIndex}`}
              className={`slide ${position}`}
            />
          );
        })}
      </div>

      {pictures.length > 1 && (
        <div className="slider__counter">
          {`${currentImage}/${pictures.length}`}
        </div>
      )}

      {pictures.length > 1 && (
        <div className="slider__gallery--previous">
          <img
            src={arrow}
            alt="Previous"
            onClick={() => setIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length)}
          />
        </div>
      )}

      {pictures.length > 1 && (
        <div className="slider__gallery--next">
          <img
            src={arrow}
            alt="Next"
            onClick={() => setIndex((prevIndex) => (prevIndex + 1) % pictures.length)}
          />
        </div>
      )}

    </section>
  );
}

export default Slider;
