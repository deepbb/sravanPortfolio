"use client"
import { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    '/profession02.jpg',
    '/profession03.jpg',
    '/profession04.jpg',
    '/profession04.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            width={200}
            height={150}
            style={{ borderRadius: 10, marginRight: 10 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
