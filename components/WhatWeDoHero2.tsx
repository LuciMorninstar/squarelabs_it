"use client";

import { useEffect, useRef, useState } from "react";

interface WhatWeDoItem {
  id: number;
  title: string;
}

const WhatWeDoHero2 = () => {
  const whatWeDoItems: WhatWeDoItem[] = [
    { id: 1, title: "Digital Products" },
    { id: 2, title: "Growth Solutions" },
    { id: 3, title: "Technology" },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);

  // Entrance: shrink -> bounce -> settle, triggered once on scroll into view
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // one-shot entrance
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Active-item tracking: highlight nav item whose target section is in view
  useEffect(() => {
    const targets = whatWeDoItems
      .map((item) => document.getElementById(String(item.id)))
      .filter((el): el is HTMLElement => Boolean(el));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // one-shot entrance
      }
    },
    { threshold: 0, rootMargin: "0px 0px 200px 0px" }
  );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full px-2 pt-5 md:pt-5 lg:px-6 lg:py-3 mx-auto min-h-[300vh] -mb-[290vh]"
    >
      <div
       className={`sticky z-20 top-5 flex flex-row max-sm:justify-between bg-tertiary-color/95 px-4 py-5 lg:px-12 lg:py-6 rounded-3xl lg:rounded-3xl gap-2 lg:gap-8 backdrop-blur-sm shadow-lg shadow-black/5
  will-change-transform
  ${
    isVisible
      ? "animate-[slideUpFade_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]"
      : "opacity-0 translate-y-16"
  }`}
      >
        {whatWeDoItems.map((item, index) => {
          const isActive = activeId === item.id;
          return (
            <span
              key={item.id}
              onClick={() => handleScroll(String(item.id))}
              style={{ transitionDelay: isVisible ? `${index * 90}ms` : "0ms" }}
              className={`group relative flex lg:flex-row gap-2 lg:gap-3 items-center text-base lg:text-lg cursor-pointer select-none
                transition-all duration-500 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                ${isActive ? "scale-105 lg:scale-110" : "scale-100"}
              `}
            >
              <p
                className={`top-bottom-gradient text-transparent bg-clip-text font-semibold transition-transform duration-300
                  ${isActive ? "scale-110" : "group-hover:scale-110"}
                `}
              >
                0{item.id}
              </p>

              <p
                className={`relative text-default-color transition-colors duration-300
                  ${isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"}
                `}
              >
                <span className="lg:hidden">{item.title.split(" ")[0]}</span>
                <span className="hidden lg:inline">{item.title}</span>

                {/* animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] top-bottom-gradient rounded-full transition-all duration-300 ease-out
                    ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"}
                  `}
                />
              </p>
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeDoHero2;