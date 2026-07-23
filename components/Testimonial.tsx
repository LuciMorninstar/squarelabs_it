'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import TestimonialCard from "./TestimonialCard"
import { Autoplay } from 'swiper/modules';
import { testimonials } from "../constants/homepage/testimonial";
import gsap from 'gsap';



const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const swiperBlockRef = useRef<HTMLDivElement>(null);

  // --- section entrance (observer) ---
  useEffect(() => {
    const elements = [heading1Ref.current, heading2Ref.current, swiperBlockRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // --- per slide GSAP animation (same style as HeroSection) ---
  const animateSlide = (swiper: SwiperClass) => {
    const currentSlide = swiper.slides[swiper.activeIndex];
    if (!currentSlide) return;

    const quote = currentSlide.querySelector('.gsapQuote');
    const name = currentSlide.querySelector('.gsapName');
    const position = currentSlide.querySelector('.gsapPosition');
    const image = currentSlide.querySelector('.gsapImage');

    gsap.killTweensOf([quote, name, position, image]);

    const tl = gsap.timeline();
    tl.fromTo(image, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 });
    tl.fromTo(quote, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }, '-=1');
    tl.fromTo(name, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.8');
    tl.fromTo(position, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.7');
  };

  return (
    <section
      ref={sectionRef}
      className="bg-default-color flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 pt-12 xl:pt-16 xl:h-screen"
    >
      {/* heading */}
      <div className="flex flex-col gap-1 lg:gap-4 pl-8 lg:pl-16">
        <h1 ref={heading1Ref} className="text-text-quarternary-color font-sora font-semibold">
          What <span className="top-bottom-gradient">Our Clients Say</span>
        </h1>
        <h1 ref={heading2Ref} className="max-sm:hidden text-text-quarternary-color font-sora font-semibold">
          About Working With Us
        </h1>
      </div>

      {/* swiper block */}
      <div ref={swiperBlockRef} className="relative w-full px-14 pb-16 overflow-hidden">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-2 top-[45%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-text-primary-color hover:bg-primary-color cursor-pointer text-white flex items-center justify-center shadow-md transition-colors"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-2 top-[45%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-text-primary-color hover:bg-primary-color cursor-pointer text-white flex items-center justify-center shadow-md transition-colors"
        >
          <FaArrowRight />
        </button>

        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={12}
          loop={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            animateSlide(swiper); // fire on every slide change
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setActiveIndex(swiper.realIndex);
            animateSlide(swiper); // fire on first load too
          }}
          modules={[Autoplay]}
          speed={1800}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4000, disableOnInteraction: true, waitForTransition: false }}
          className="testimonial-swiper"
        >
          {(testimonials || []).map((item: Testimonial, index: number) => (
            <SwiperSlide key={item.id} className="testimonial-slide">
              <TestimonialCard item={item} isActive={index === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-2 mt-7">
          {testimonials.map((_: Testimonial, index: number) => (
            <div
              key={index}
              className={`h-3 rounded-full bg-green-500 transition-all duration-300
                ${index === activeIndex ? 'w-7 opacity-100' : 'w-3 opacity-35'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;