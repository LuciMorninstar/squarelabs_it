"use client";
import { useEffect, useRef } from "react";
import { ourMissionAndVisionData } from "../constants/whatWeDoPage/whatWeDoPageData";

const OurMissionAndVision = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(
      "[data-animate]",
    );

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

    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" bg-background-color  w-full px-5 py-4 lg:px-16 lg:py-20 mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2  lg:flex-row  py-12">
        {ourMissionAndVisionData.map((item, i) => (
          <div
            key={item.id}
            data-animate
            className={`${
              i === 0 && "max-lg:border-b-3 lg:border-r-3 border-primary-color"
            } fade-up flex flex-col items-center gap-8 xl:gap-14 px-6 py-5`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <h2 data-animate className="text-text-quarternary-color">
              {item?.title.split(" ")[0]}{" "}
              <span className="text-primary-color">
                {item?.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className="text-text-secondary-color text-base md:text-lg lg:text-xl ">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMissionAndVision;