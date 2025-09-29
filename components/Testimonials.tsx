'use client'

import React, { JSX } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "What a great experience! I have visited one of the workshops and attended a masterclass, and both were super useful for young designers. Highly recommended.",
    author: "Ali Tufan",
    position: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 2,
    text: "The quality of education and mentorship here is outstanding. The instructors are industry experts who genuinely care about your growth and success.",
    author: "Sarah Chen",
    position: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3c4?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 3,
    text: "I've learned more in three months here than I did in years of self-study. The hands-on approach and real-world projects make all the difference.",
    author: "Marcus Johnson",
    position: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 4,
    text: "The community aspect is incredible. You're not just learning skills, you're building lifelong connections with other passionate designers and developers.",
    author: "Emma Rodriguez",
    position: "Brand Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 5,
    text: "From complete beginner to landing my dream job in 6 months. The career support and portfolio guidance were game-changers for me.",
    author: "David Kim",
    position: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
  }
];

export default function TestimonialCarousel(): JSX.Element {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [swiperRef, setSwiperRef] = React.useState<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType): void => {
    setActiveIndex(swiper.realIndex);
  };

  const handleProfileClick = (index: number): void => {
    if (swiperRef) {
      swiperRef.slideToLoop(index);
    }
  };

  return (
    <div className="bg-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-white mb-4">Testimonials</h2>
          <p className="text-gray-400 text-[16px]">Aliquam lacinia diam quis lacus euismod</p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            onSwiper={setSwiperRef}
            onSlideChange={handleSlideChange}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonial-swiper pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="text-center px-8 max-w-4xl mx-auto">
                  {/* Quote Icon */}
                  <div className="mb-8">
                    <svg className="w-9 h-9 text-gray-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-white text-[14px] md:text-[16px] leading-relaxed mb-8 font-light">
                    {testimonial.text}
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    <h4 className="text-white font-semibold text-[16px] mb-1">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-400 text-[13px]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Profile Images Row */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                onClick={() => handleProfileClick(index)}
                className={`relative transition-all duration-300 cursor-pointer ${
                  index === activeIndex 
                    ? 'opacity-100 scale-110 transform' 
                    : 'opacity-60 scale-100 hover:opacity-80'
                }`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className={`w-9 h-9 rounded-full border-2 transition-all duration-300 ${
                    index === activeIndex 
                      ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                />
                {index === activeIndex && (
                  <div className="absolute -inset-1 rounded-full border-2 border-blue-500 animate-pulse opacity-50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          position: static !important;
          margin-top: 2rem;
        }
        
        .testimonial-swiper .swiper-pagination-bullet {
          transition: all 0.3s ease;
        }
        
        .testimonial-swiper .swiper-pagination-bullet:hover {
          opacity: 0.8 !important;
        }
      `}</style>
    </div>
  );
}