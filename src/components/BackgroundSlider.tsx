import React, { useState, useEffect } from 'react';
import bgCar1 from '../assets/bg-car-1.jpg';
import bgCar2 from '../assets/bg-car-2.jpg';
import bgCar3 from '../assets/bg-car-3.jpg';
import bgCar4 from '../assets/bg-car-4.jpg';
import bgCar5 from '../assets/bg-car-5.jpg';
import bgCar6 from '../assets/bg-car-6.jpg';
import bgCar7 from '../assets/bg-car-7.jpg';
import bgCar8 from '../assets/bg-car-8.jpg';
import bgCar9 from '../assets/bg-car-9.jpg';
import bgCar10 from '../assets/bg-car-10.jpg';

const BackgroundSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    bgCar1, bgCar2, bgCar3, bgCar4, bgCar5,
    bgCar6, bgCar7, bgCar8, bgCar9, bgCar10
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextIndex((currentIndex + 1) % images.length);
      
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Current Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      />
      
      {/* Next Image (for smooth transition) */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${images[nextIndex]})`,
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      
      {/* Bottom gradient for content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setNextIndex(index);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSlider;