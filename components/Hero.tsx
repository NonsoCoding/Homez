"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NavBar from './Navbar';
import Image from 'next/image';


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/Hero.jpg',
      title: 'Find the Perfect Home',
      description: 'Explore trusted listings, prime locations, and personalized support. Whether you\'re buying, selling, or renting, we make real estate seamless and stress-free.'
    },
    {
      image: '/Hero2.jpg', // Add your second image
      title: 'Luxury Properties Await',
      description: 'Discover premium real estate with stunning views and modern amenities. Your dream home is just a click away.'
    },
    {
      image: '/Hero3.jpg', // Add your third image
      title: 'Expert Guidance Every Step',
      description: 'Our experienced team is here to guide you through every stage of your real estate journey with confidence.'
    }
  ];

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="h-full bg-cover bg-center flex flex-col"
              >
                   <Image
    src={slide.image}
    alt={slide.title}
    fill
    className="object-cover"
    priority={index === 0}
  />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <NavBar className="w-[90%] mx-auto py-3 sticky inset-0" />
              
              <div className="flex-1 flex flex-col justify-center items-center gap-4 text-center px-4">
                <p className="text-5xl uppercase text-white font-bold max-w-4xl">
                  {slide.title}
                </p>
                <p className="text-white max-w-[90%] md:max-w-[45%] text-lg">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;