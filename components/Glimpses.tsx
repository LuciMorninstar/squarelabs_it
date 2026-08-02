"use client";

import { useRef, useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import GlimpseGallery from "@/components/GlimpseGallery";

const Glimpses = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(
      "[data-animate]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen lg:h-screen w-full px-5 py-4 lg:px-16 lg:py-5 mx-auto flex flex-row justify-center items-center ">
      <div
        ref={sectionRef}
        className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 "
      >
        {/* left side */}
        <div className="w-full  flex flex-col justify-center  gap-2 lg:gap-4 lg:p-0">
          <h1 data-animate className="text-text-quarternary-color ">
            Catch the glimpses of <br />{" "}
            <span className="top-bottom-gradient">Life At SquareLabs</span>
          </h1>
          <p
            data-animate
            className="text-text-secondary-color text-base md:text-lg lg:text-lg "
          >
            At SquareLabs, work is more than just work - it&apos;s a thrilling
            adventure filled with laughter, camaraderie, and endless support.
            Step into our world and witness the perfect blend of work and fun.
          </p>
          <div className="flex flex-row gap-4 sm:gap-6 lg:gap-8 items-center">
            <Link
              href="/learn-more"
              className="group relative inline-flex items-center gap-2 rounded-4xl px-6 py-4 font-outfit  text-base lg:text-xl overflow-hidden text-primary-color "
            >
              <span>Learn More</span>
              <IoArrowForward className="text-xl sm:text-2xl group-hover:translate-x-2 duration-200 transition-transform ease-in-out" />
            </Link>
            <Link
              href="/career"
              className="group relative inline-flex items-center gap-2 rounded-4xl px-6 py-4 font-outfit  text-base lg:text-xl overflow-hidden text-primary-color "
            >
              <span>Career</span>
              <IoArrowForward className="text-xl sm:text-2xl group-hover:translate-x-2 duration-200 transition-transform ease-in-out" />
            </Link>
          </div>
        </div>
        {/* right side — each card observed individually */}
        <GlimpseGallery />
      </div>
    </section>
  );
};

export default Glimpses;