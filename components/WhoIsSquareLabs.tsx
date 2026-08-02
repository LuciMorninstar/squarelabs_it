"use client";

import { useState, useRef, useEffect } from "react";
import WidthWrapper from "./WidthWrapper";
import Image from "next/image";

import { whyUsCards } from "../constants/whoWeArePage/whyUs";
import { IoChevronDown } from "react-icons/io5";

const WhoIsSquareLabs = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-animate]");

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
      el.style.transform = "translateY(40px)";
      el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <WidthWrapper>
      <div
        ref={sectionRef}
        className="relative w-full mt-8 overflow-hidden px-5 py-12 lg:px-16 lg:py-24  flex flex-col gap-10 2xl:gap-20 bg-gradient-background"
      >
        {/* absolute image */}
        {/* <div className="absolute inset-0 overflow-hidden lg:rounded-4xl rounded-none">
          <img
            className="w-full h-full object-cover object-center"
            src={whyUsBg}
            alt="whyusBg"
          />
        </div> */}

        {/* top */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 flex-col lg:justify-between lg:items-center">
          <h1 data-animate className="text-default-color flex flex-row gap-3">
            Who Is{" "}
            <span className="top-bottom-gradient font-sora">SquareLabs ?</span>
          </h1>
          <p
            data-animate
            className="text-text-secondary-color text-lg text-center leading-8"
          >
            We are a digital company specializing in UI/UX design, web
            development, mobile <br className="hidden lg:block" />
            apps, branding, and digital growth solutions. Our approach combines{" "}
            <br className="hidden lg:block" />
            mathematical precision with creative freedom.
          </p>
        </div>

        {/* bottom */}
        <div className="relative z-10">
          {/* accordion — shown below 2xl */}
          <div className="flex flex-col divide-y divide-white/10 2xl:hidden">
            {(whyUsCards || []).map((card) => (
              <div data-animate key={card.id}>
                <button
                  onClick={() => toggle(card.id)}
                  className="w-full flex flex-row items-center justify-between gap-4 py-4 text-left"
                >
                  <div className="flex flex-row items-center gap-4">
                    <div className="relative size-10 shrink-0 overflow-hidden">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        fill
                        sizes="40px"
                        className="object-cover object-center"
                      />
                    </div>
                    <span className="text-default-color text-base font-medium">
                      {card.title}
                    </span>
                  </div>
                  <IoChevronDown
                    className={`text-default-color text-xl shrink-0 transition-transform duration-300 ease-in-out ${
                      openId === card.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openId === card.id
                      ? "max-h-40 opacity-100 pb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-text-sixth-color text-sm leading-7 pl-14">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* grid — shown only on 2xl+ */}
          <div className="hidden 2xl:grid 2xl:grid-cols-5 gap-4">
            {whyUsCards.map((card) => (
              <div
                data-animate
                key={card.id}
                className="flex flex-col justify-between min-h-100 px-4 py-4 rounded-4xl glassmorphism-effect"
              >
                <div className="relative size-24 overflow-hidden">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    sizes="96px"
                    className="object-center object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-default-color text-xl">
                    {card.title}
                  </span>
                  <p className="text-text-sixth-color text-lg line-clamp-3 leading-8">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default WhoIsSquareLabs;
