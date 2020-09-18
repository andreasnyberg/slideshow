import React, { useState } from 'react';
import { ButtonPrev, ButtonNext } from '../buttons';

const Slideshow = ({ images }) => {
  const initImage = images[0];
  const [currentImage, setCurrentImage] = useState(initImage);
  
  const handlePrevClick = () => {
    const lastIndex = images.length - 1;
    const currentIndex = images.indexOf(currentImage);
    let newIndex = lastIndex;

    if (currentIndex !== 0) {
      newIndex = currentIndex - 1;
    }

    setCurrentImage(images[newIndex]);
  };
  
  const handleNextClick = () => {
    const lastIndex = images.length - 1;
    const currentIndex = images.indexOf(currentImage);
    let newIndex = 0;

    if (currentIndex >= 0 && currentIndex < lastIndex) {
      newIndex = currentIndex + 1;
    }

    setCurrentImage(images[newIndex]);
  };
  
  const renderPagination = () => (
    images.map((img, i) => {
      const isActive = img.src === currentImage.src;

      return (
        <div
          className={`pagination-dot ${isActive ? 'pagination-dot--active' : ''}`}
          key={i}
        />
      );
    })
  );

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <ButtonPrev onPrevClick={handlePrevClick} />

        <div className="image-container">
          <img
            className="image"
            src={currentImage.src}
            alt={currentImage.alt}
          />
        </div>

        <ButtonNext onNextClick={handleNextClick} />
      </div>

      <div className="pagination">
        { renderPagination() }
      </div>
    </div>
  );
};

export default Slideshow;
