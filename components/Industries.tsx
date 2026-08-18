"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  IndustriesWorkedWith,
} from "../constants/ourWorkPage/ourWorkPageData";

// Tailwind delay utilities, cycled per card index for a light stagger.
// Kept as literal class names (not built from arbitrary numbers) so
// Tailwind's JIT scanner picks them up.
const STAGGER_DELAYS = ["delay-0", "delay-100", "delay-200", "delay-300"];

const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(
      "[data-animate]",
    );
    if (!elements?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" bg-background-color lg:min-h-screen  w-full px-5 py-16 lg:px-16 lg:py-32 mx-auto"
    >
      {/* wrapper */}
      <div className="flex flex-col gap-12 xl:gap-20 items-center justify-center ">
        {/* top section */}
        <h1
          data-animate
          className="text-center opacity-0 translate-y-6 transition-all duration-700 ease-out"
        >
          Industries We Have{" "}
          <span className="top-bottom-gradient text-transparent bg-clip-text">
            Worked With
          </span>
        </h1>
        {/* /top section ends */}

        {/* bottom section */}

        {/* for screen larger than lg size */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {IndustriesWorkedWith.map((industry, i) => (
            <div
              key={industry?.id}
              data-animate
              className={`lg:px-16 lg:py-14 xl:px-20 xl:py-16 flex flex-col justify-center items-center gap-6 bg-default-color rounded-2xl shadow-lg opacity-0 translate-y-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl ${
                STAGGER_DELAYS[i % STAGGER_DELAYS.length]
              }`}
            >
              {/* for icon */}
              <div className="relative w-8 h-8 md:w-8 md:h-8 xl:w-10 xl:h-10 rounded-2xl">
                {industry?.icon && (
                  <Image
                    src={industry.icon}
                    alt={`${industry.title} icon`}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                )}
              </div>
              <h4 className="text-text-quarternary-color font-normal uppercase">
                {industry?.title}
              </h4>
              {/* /for icon */}
            </div>
          ))}
        </div>
        {/* for screen larger than lg size */}

        {/* for screen smaller than lg size */}

        <div className="max-lg:block lg:hidden marquee-wrapper overflow-hidden">
          <div className="marquee-track flex items-center gap-6 sm:gap-8">
            {/* first set */}
            {IndustriesWorkedWith.map((industry) => (
              <div
                key={industry?.id}
                className="size-32 bg-default-color px-4 py-6 rounded-2xl flex flex-col justify-center items-center gap-4 shrink-0"
              >
                <div className="relative w-8 h-8 md:w-8 md:h-8 xl:w-10 xl:h-10">
                  {industry?.icon && (
                    <Image
                      src={industry.icon}
                      alt={`${industry.title} icon`}
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  )}
                </div>
                <h4 className="text-text-quarternary-color font-normal uppercase whitespace-nowrap">
                  {industry?.title}
                </h4>
              </div>
            ))}
            {/* duplicate set — required for seamless loop */}
            {IndustriesWorkedWith.map((industry) => (
              <div
                key={`dup-${industry?.id}`}
                className="size-32 bg-default-color px-4 py-6 rounded-2xl flex flex-col justify-center items-center gap-4 shrink-0"
                aria-hidden="true"
              >
                <div className="relative w-8 h-8 md:w-8 md:h-8 xl:w-10 xl:h-10">
                  {industry?.icon && (
                    <Image
                      src={industry.icon}
                      alt={`${industry.title} icon`}
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  )}
                </div>
                <h4 className="text-text-quarternary-color font-normal uppercase whitespace-nowrap">
                  {industry?.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* /for screen smaller than lg size */}

        {/* /bottom section ends */}
      </div>
    </section>
  );
};

export default Industries;