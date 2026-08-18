"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import SecondWidthWrapper from "./SecondWidthWrapper";
import type { WhatWeDoCategory } from "../constants/whatWeDoPage/whatWeDoPageData";

interface WhatWeDoCardsProps {
  item: WhatWeDoCategory;
  bgColor: string;
}

const WhatWeDoCards = ({ item, bgColor }: WhatWeDoCardsProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id={String(item.id)}
      style={{ backgroundColor: bgColor }}
      className={`${bgColor} min-h-screen xl:h-screen pt-12 scroll-mt-12 lg:scroll-mt-22`}
    >
      <SecondWidthWrapper>
        <div className="flex flex-col gap-12 xl:gap-16">
          {/* top section */}
    
          <div className="flex flex-row gap-5">
            <span
              className={`text-8xl font-bold font-sora text-primary-color transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              0{item.id}
            </span>

            <div className="flex flex-col gap-2">
              <h2
                className={`text-black transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
              >
                {item.title.split(" ")[0]}{" "}
                <span className="top-bottom-gradient text-transparent bg-clip-text">
                  {item.title.split(" ").slice(1).join(" ")}
                </span>
              </h2>

              <p
                className={`text-text-secondary-color transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              >
                {item.desc.split(",")[0]},{" "}
                <br className="hidden lg:block leading-9" />{" "}
                {item.desc.split(",").slice(1).join(",")}
              </p>
            </div>
          </div>
          {/* /top section */}
      

          {/* bottom section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 xl:gap-5 ">
            {item.cards.map((card, index) => (
              <div
                key={card.id}
                style={{
                  animationDelay: isVisible
                    ? `${0.45 + index * 0.12}s`
                    : undefined,
                }}
                className={`group bg-text-quarternary-color px-4 py-4 xl:px-5 xl:py-5 flex flex-col gap-5 rounded-4xl
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10
                  ${isVisible ? "animate-[cardIn_0.7s_cubic-bezier(0.22,1,0.36,1)_forwards]" : "opacity-0"}
                `}
              >
                {/* icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-2xl relative transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3">
                  {card.icon && (
                    <Image
                      src={card.icon}
                      alt={`${card.title} icon`}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                {/* /icon */}

                <h3 className="font-semibold font-sora">{card.title}</h3>

                {card.lists && (
                  <ul className="flex flex-col gap-2 xl:gap-3">
                    {card.lists.map((list, i) => (
                      <li
                        key={i}
                        style={{
                          animationDelay: isVisible
                            ? `${0.6 + index * 0.12 + i * 0.06}s`
                            : undefined,
                        }}
                        className={`text-base flex flex-row items-center gap-2 ${
                          isVisible
                            ? "animate-[fadeUp_0.5s_ease-out_forwards]"
                            : "opacity-0"
                        }`}
                      >
                        <IoMdCheckmark className="text-text-primary-color text-xl" />
                        <span className="text-text-sixth-color text-base xl:text-base">
                          {list}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {card.desc && (
                  <p className="text-text-sixth-color text-base xl:text-base">
                    {card.desc}
                  </p>
                )}

                {/* image with reveal + hover parallax zoom */}
                <div className="w-full h-48 relative rounded-2xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={`object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110
                      ${isVisible ? "animate-[imageReveal_0.9s_ease-out_forwards]" : "opacity-0"}
                    `}
                    style={{
                      animationDelay: isVisible
                        ? `${0.55 + index * 0.12}s`
                        : undefined,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* /bottom section */}
        </div>
      </SecondWidthWrapper>
    </div>
  );
};

export default WhatWeDoCards;
