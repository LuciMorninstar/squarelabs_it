"use client";

import { useRef, useEffect } from "react";
import SecondWidthWrapper from "./SecondWidthWrapper";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import { timeline } from "../constants/whoWeArePage/whoWeAreData";


const EASE = "cubic-bezier(0.22,1,0.36,1)";

const TimeLine = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els =
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-animate]");
    if (!els?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-inview", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <SecondWidthWrapper>
      <div
        ref={sectionRef}
        className="min-h-screen lg:h-screen py-16 lg:py-24 w-full flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-16 xl:gap-60"
      >
        {/* left side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-4 lg:p-0">
          <h1
            data-animate
            className="text-text-quarternary-color opacity-0 translate-y-10 scale-95 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 data-[inview=true]:scale-100 transition-[opacity,transform] duration-[900ms]"
            style={{ transitionTimingFunction: EASE }}
          >
            From Ideas To{" "}
            <span className="top-bottom-gradient">Digital Reality</span>
          </h1>

          <p
            data-animate
            className="text-text-secondary-color text-base md:text-lg lg:text-xl text-justify opacity-0 translate-y-6 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 transition-[opacity,transform] duration-700"
            style={{ transitionTimingFunction: EASE, transitionDelay: "120ms" }}
          >
            Square Labs started with a vision to help businesses use
            technology to solve real problems. What began as a small
            collective of engineering enthusiasts has grown into a premier
            digital hub that bridges the gap between complex code and
            user-centric experiences.
          </p>

          {/* note section */}
          <div
            data-animate
            className="relative overflow-hidden bg-seventh-color px-6 py-5 opacity-0 translate-y-6 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 transition-[opacity,transform] duration-700"
            style={{ transitionTimingFunction: EASE, transitionDelay: "220ms" }}
          >
            {/* left accent line draws in just after the box arrives */}
            <span
              data-animate
              className="absolute left-0 top-0 h-full w-[6px] bg-primary-color origin-top scale-y-0 data-[inview=true]:scale-y-100 transition-transform duration-700"
              style={{ transitionTimingFunction: EASE, transitionDelay: "320ms" }}
              aria-hidden
            />
            <p className="text-text-secondary-color">
              &quot;Our mission isn&apos;t just to write code; it&apos;s to architect
              the infrastructure of future business successes.&quot;
            </p>
          </div>

          <Link
            data-animate
            href="/story"
            className="group w-max mt-2 lg:mt-6 flex flex-row gap-4 items-center justify-center rounded-4xl bg-primary-color px-6 py-4 opacity-0 translate-y-6 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 transition-[opacity,transform] duration-700"
            style={{ transitionTimingFunction: EASE, transitionDelay: "360ms" }}
          >
            <span className="text-default-color text-base lg:text-xl font-outfit font-light">
              Read Our Story
            </span>
            <IoArrowForward className="group-hover:translate-x-3 transition-all duration-200 ease-in-out text-default-color text-3xl font-light" />
          </Link>
        </div>

        {/* right side — each entry writes itself in: line draws, dot pops, text rises */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {timeline.map((t, i) => {
            const base = i * 130;
            return (
              <div
                data-animate
                key={t.id}
                className="group relative flex flex-col gap-2 pl-8 lg:pl-14 opacity-0 translate-y-8 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 transition-[opacity,transform] duration-700"
                style={{ transitionTimingFunction: EASE, transitionDelay: `${base}ms` }}
              >
                {/* faint track, always visible, sits behind the drawn line */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-color/15"
                  aria-hidden
                />
                {/* connecting line — draws top to bottom */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-color origin-top scale-y-0 group-data-[inview=true]:scale-y-100 transition-transform duration-[800ms]"
                  style={{ transitionTimingFunction: EASE, transitionDelay: `${base + 60}ms` }}
                  aria-hidden
                />
                {/* marker dot — pops in with a very mild overshoot once the line has mostly drawn */}
                <span
                  className="absolute -left-[7px] -top-7 size-5 rounded-full bg-primary-color ring-4 ring-default-color scale-0 group-data-[inview=true]:scale-100 transition-transform duration-500"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.34,1.4,0.64,1)",
                    transitionDelay: `${base + 280}ms`,
                  }}
                  aria-hidden
                />

                <h2 className="text-text-quarternary-color">{t.date}</h2>
                <h2 className="text-primary-color">{t.title}</h2>
                <p className="text-text-secondary-color">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SecondWidthWrapper>
  );
};

export default TimeLine;