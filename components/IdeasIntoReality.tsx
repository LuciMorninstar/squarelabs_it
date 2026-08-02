"use client";

import { useEffect, useRef } from "react";
import { ourApproaches } from "@/constants/whatWeDoPage/ourApproach";

const IdeasIntoReality = () => {
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
            entry.target.classList.add("animate-in");
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
      className=" bg-default-color  w-full px-5 py-16 lg:px-16 lg:py-32 mx-auto"
    >
      {/* wrapper */}
      <div className="flex flex-col gap-12 xl:gap-20 items-center justify-center">
        {/* top section */}
        <h1 data-animate className="fade-up">
          How We Turn{" "}
          <span className="top-bottom-gradient text-transparent bg-clip-text">
            Ideas Into Reality
          </span>
        </h1>
        {/* /top section ends */}
        {/* bottom section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 xl:gap-12">
          {ourApproaches.map((approach, i: number) => (
            <div
              key={approach.id}
              data-animate
              className="fade-up flex flex-col gap-3 xl:gap-3"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h1 className="text-primary-color border-b-1 border-text-secondary-color  py-2">
                0{approach.id}
              </h1>
              <h2 className="pt-4 font-sora text-text-quarternary-color py-2">
                {approach.title}
              </h2>
              <p className="text-text-tertiary-color text-base lg:text-lg font-outfit leading-8">
                {approach.desc}
              </p>
            </div>
          ))}
        </div>
        {/* /bottom section ends */}
      </div>
    </section>
  );
};

export default IdeasIntoReality;