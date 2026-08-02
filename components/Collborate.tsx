"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import WidthWrapper from "./WidthWrapper";


const Collaborate = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>("[data-animate]");
    if (!elements) return;

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
      { threshold: 0.3 }
    );

    elements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <WidthWrapper>
      <div
        ref={sectionRef}
        className="relative w-full py-8 lg:py-26 flex flex-col gap-5 items-center justify-center text-center overflow-hidden bg-gradient-background"
      >
        {/* absolute bg */}
        {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Image src={collabBg} alt="bg" fill className="object-center object-cover" />
        </div> */}

        {/* content */}
        <div className="relative flex flex-col items-center gap-2 lg:gap-4">
          <h1 data-animate className="text-default-color">
            Let&apos;s <span className="top-bottom-gradient">Collaborate</span> & Create
          </h1>
          <h1 data-animate className="max-sm:-translate-y-2 text-default-color">
            Something Amazing
          </h1>
          <p data-animate className="text-text-secondary-color text-base lg:text-lg mt-2">
            We design and develop scalable digital experiences that help startups and businesses
            <br /> transform ideas into products users love.
          </p>
          <Link
            data-animate
            href="/start-a-project"
            className="group flex flex-row gap-4 items-center justify-center rounded-4xl bg-primary-color px-6 py-4 w-max mt-4"
          >
            <span className="text-default-color text-base lg:text-xl font-outfit font-light">
              Start a Project
            </span>
            <IoArrowForward className="text-default-color text-3xl font-light group-hover:translate-x-3 duration-200 transition-all ease-in-out" />
          </Link>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default Collaborate;