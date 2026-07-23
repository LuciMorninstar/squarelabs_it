"use client"

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SecondWidthWrapper from "./SecondWidthWrapper";
import { IoArrowForward, IoCheckmark } from "react-icons/io5";

import Counter from "./Counter";

interface WhatWeDoCard {
  title: string;
  count: number;
  icon: string;
  suffix: string;
}

const TrustSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(
      "[data-animate]"
    );

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
      { threshold: 0.2 }
    );

    elements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const points: string[] = [
    "Dedicated point of contact on every project",
    "Transparent timelines, no hidden scope creep",
    "Post-launch support that doesn't disappear after invoice",
  ];

  const whatWeDoCards: WhatWeDoCard[] = [
    { title: "Project Delivered", count: 100, icon: "/images/home/projectDelivered.png", suffix: "+" },
    { title: "Happy Clients", count: 50, icon:"/images/home/happyClients.png", suffix: "+" },
    { title: "Customer Satisfaction", count: 98, suffix: "%", icon: "/images/home/customerSatisfaction.png" },
    { title: "Years Experience", count: 5, icon: "/images/home/yearsExperience.png", suffix: "+" },
  ];

  return (
    <SecondWidthWrapper>
      <div
        ref={sectionRef}
        className="py-16 lg:py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-60"
      >
        {/* left side */}
        <div className="flex flex-col gap-2 lg:gap-4 lg:p-0">
          <h1 data-animate className="text-text-quarternary-color">
            Trusted By Businesses <br /> Driven By{" "}
            <span className="top-bottom-gradient">Digital Innovation</span>
          </h1>

          <p data-animate className="text-text-secondary-color text-base md:text-lg lg:text-xl text-justify">
            With years of experience delivering digital solutions, Square Labs
            helps businesses navigate the challenges of modern technology. Our
            team combines design thinking, development expertise, and strategic
            insights to create solutions that deliver measurable results.
          </p>

          <p data-animate className="text-text-secondary-color text-base md:text-lg lg:text-xl text-justify">
            We&apos;ve delivered 100+ projects across hospitality, education,
            e-commerce, and financial services. Before we open a design file or
            write a line of code, we ask: what does success actually look like
            for you?
          </p>

          <ul data-animate className="mt-1 flex flex-col gap-1">
            {points.map((point) => (
              <li
                key={point}
                className="flex flex-row items-center text-text-secondary-color text-base md:text-lg lg:text-xl"
              >
                <IoCheckmark className="text-xl" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-12">
          {whatWeDoCards.map((card) => (
            <div
              data-animate
              key={card.title}
              className="p-16 lg:p-10 flex flex-col gap-6 items-center justify-center text-center bg-background-color card-shadow rounded-3xl"
            >
              <div className="size-16 overflow-hidden relative">
                <Image
                  src={card.icon}
                  fill
                  sizes="64px"
                  className="object-cover object-center"
                  alt="card-icon"
                  
                />
              </div>
              <h1 className="text-primary-color">
                <Counter end={card.count} suffix={card.suffix} duration={2500} />
              </h1>
              <span className="text-base lg:text-lg text-text-secondary-color font-semibold">
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SecondWidthWrapper>
  );
};

export default TrustSection;