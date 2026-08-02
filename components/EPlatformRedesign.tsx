"use client";

import { useRef, useEffect, useLayoutEffect } from "react";
import WidthWrapper from "@/components/WidthWrapper";

interface Card {
  id: number;
  title: string;
  value: number;
  desc: string;
}

const EPlatformRedesign = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // scroll-reveal animation (data-animate + IntersectionObserver, matches rest of site)
  useEffect(() => {
    const els = heroRef.current?.querySelectorAll<HTMLElement>("[data-animate]");
    if (!els?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // cursor-follow spotlight
  useLayoutEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  const cards: Card[] = [
    {
      id: 1,
      title: "User Engagement",
      value: 45,
      desc: "Active session per user",
    },
    {
      id: 2,
      title: "Conversion Rate",
      value: 30,
      desc: "Mobile checkout sucess",
    },
    { id: 3, title: "Core Web Vitals", value: 2, desc: "Faster Experience" },
  ];

  return (
    <WidthWrapper>
      <div
        ref={heroRef}
        className="relative w-full max-lg:min-h-screen lg:h-[calc(100vh-40px)] overflow-hidden flex flex-col-reverse gap-8 items-center justify-center lg:flex-row  py-10 lg:py-0 inset-0 bg-gradient-background"
      >
        {/* cursor-follow spotlight */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), rgba(140,198,63,0.13), transparent 70%)",
          }}
        />

        {/* left content */}
        <div className="relative z-10  h-full w-full lg:w-1/2 flex flex-col max-lg:items-center  gap-4 lg:gap-8 justify-center px-6 lg:px-12 text-left order-2 lg:order-1 ">
          <div className="flex flex-col gap-3">
            <h4 className="top-bottom-gradient font-semibold uppercase">
              Spotlight Project
            </h4>
            <h1 data-animate className="text-default-color reveal-up">
              E-commerce Platform <span className="">Redesign</span>
            </h1>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="top-bottom-gradient font-semibold uppercase">
              The Problem
            </h4>
            <p
              data-animate
              className="text-text-eight-color text-sm  lg:text-base xl:text-lg w-full reveal-up"
            >
              Building digital experiences that solve real business problems.
              From websites to mobile apps, we design and develop solutions that
              create measurable impact.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="top-bottom-gradient font-semibold uppercase">
              The Solutions
            </h4>
            <p
              data-animate
              className="text-text-eight-color text-sm  lg:text-base xl:text-lg w-full reveal-up"
            >
              Building digital experiences that solve real business problems.
              From websites to mobile apps, we design and develop solutions that
              create measurable impact.
            </p>
          </div>
        </div>
        {/* /left content */}

        {/* right content */}
        <div
          data-animate
          className="relative max-lg:px-6  w-full lg:w-1/2 flex flex-col items-center  order-1 lg:order-2  gap-4 lg:gap-6 reveal-up"
        >
          {/* top cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {cards.slice(0, 2).map((card) => (
              <div
                key={card?.id}
                className=" glassmorphism-effect flex flex-col text-center gap-6 px-4 py-4 lg:px-6 lg:py-8 rounded-2xl"
              >
                <span className="text-text-secondary-color text-sm  lg:text-base xl:text-lg w-full">
                  {card?.title}
                </span>

                <div className="flex flex-col gap-4">
                  <h1 className="top-bottom-gradient">+{card?.value}%</h1>
                  <span className="text-text-secondary-color text-sm  lg:text-base xl:text-lg w-full">
                    {card?.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* /top cards */}

          {/* bottom card */}
          <div className="w-full">
            {cards.slice(2).map((card) => (
              <div
                key={card?.id}
                className="bg-primary-color sm:w-[70%] md:w-[55%] lg:w-[90%] xl:w-[72%] mx-auto rounded-2xl flex flex-col items-center  justify-center gap-6 py-4 lg:py-6"
              >
                <span className="text-text-eight-color text-sm  lg:text-base xl:text-lg w-full text-center">
                  {card?.title}
                </span>

                <div className="flex flex-col gap-4 items-center">
                  <h1 className="text-default-color">{card?.value}X</h1>
                  <span className="text-text-eight-color text-sm  lg:text-base xl:text-lg w-full">
                    {card?.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* /bottom card */}
        </div>
        {/* /right content */}
      </div>
    </WidthWrapper>
  );
};

export default EPlatformRedesign;