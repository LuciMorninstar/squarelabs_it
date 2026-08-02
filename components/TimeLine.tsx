"use client";

import { useRef, useEffect } from "react";
import SecondWidthWrapper from "./SecondWidthWrapper";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import { timeline } from "../constants/whoWeArePage/whoWeAreData";

const TimeLine = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(
      "[data-animate]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
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
    <SecondWidthWrapper>
      <div
        ref={sectionRef}
        className="min-h-screen lg:h-screen py-16 lg:py-24 w-full flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-16 xl:gap-60 "
      >
        {/* left side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-4 lg:p-0">
          <h1 data-animate className="text-text-quarternary-color">
            From Ideas To{" "}
            <span className="top-bottom-gradient">Digital Reality</span>
          </h1>
          <p
            data-animate
            className="text-text-secondary-color text-base md:text-lg lg:text-xl text-justify"
          >
            Square Labs started with a vision to help businesses use
            technology to solve real problems. What began as a small
            collective of engineering enthusiasts has grown into a premier
            digital hub that bridges the gap between complex code and
            user-centric experiences.
          </p>
          {/* note section */}
          <div className="bg-seventh-color border-l-6 border-primary-color px-6 py-5">
            <p className="text-text-secondary-color">
              &quot;Our mission isn&apos;t just to write code; it&apos;s to architect the
              infrastructure of future business successes.&quot;
            </p>
          </div>
          <Link
            data-animate
            href="/story"
            className="group w-max mt-2 lg:mt-6 flex flex-row gap-4 items-center justify-center rounded-4xl bg-primary-color px-6 py-4"
          >
            <span className="text-default-color text-base lg:text-xl font-outfit font-light">
              Read Our Story
            </span>
            <IoArrowForward className="group-hover:translate-x-3 transition-all duration-200 ease-in-out text-default-color text-3xl font-light" />
          </Link>
        </div>
        {/* right side — each card observed individually */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8  ">
          {timeline.map((t) => (
            <div
              data-animate
              key={t.id}
              className="relative flex flex-col gap-2 border-l-5 border-primary-color pl-8 lg:pl-14 "
            >
              {/* absolute circle starts */}
              <div className="aboslute w-5 h-5 top "></div>
              <div className="absolute -left-4 -top-7 size-6 bg-primary-color rounded-full overflow-hidden "></div>
              {/* absolute circle ends */}
              <h2 className="text-text-quarternary-color">{t.date}</h2>
              <h2 className="text-primary-color">{t.title}</h2>
              <p className="text-text-secondary-color">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SecondWidthWrapper>
  );
};

export default TimeLine;