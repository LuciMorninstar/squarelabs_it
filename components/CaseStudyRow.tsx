"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

interface Tag {
  label: string;
  variant?: "primary" | string;
}

interface CaseStudy {
  image: string;
  tags: Tag[];
  title: string;
  description: string;
  caseStudyUrl: string;
}

interface CaseStudyRowProps {
  study: CaseStudy;
  reverse?: boolean;
}

/**
 * Lightweight IntersectionObserver hook.
 * Fires once when the element enters the viewport, then disconnects.
 */
const useInView = <T extends HTMLElement>(threshold = 0.2) => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

const CaseStudyRow = ({ study, reverse }: CaseStudyRowProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>(0.15);

  // Shared easing curve for that premium, deliberate motion feel
  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div
      ref={ref}
      className={`w-full px-4 lg:px-6 flex flex-col  items-center justify-center md:flex-row  ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-6 md:gap-12 lg:gap-16 xl:gap-20`}
    >
      {/* left side  - image */}
      <div className="w-full lg:w-1/2  ">
        <div
          className="relative h-60 sm:h-80 lg:h-100 w-full rounded-4xl overflow-hidden"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView
              ? "scale(1) translateX(0)"
              : `scale(1.06) translateX(${reverse ? "24px" : "-24px"})`,
            transition: `opacity 1000ms ${ease}, transform 1100ms ${ease}`,
          }}
        >
          <Image
            src={study?.image}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
            style={{
              transform: isInView ? "scale(1)" : "scale(1.15)",
              transition: `transform 1400ms ${ease}`,
            }}
            alt="case_study_image"
          />
          {/* subtle reveal sheen sweeping across the image on entry */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.35) 45%, transparent 60%)",
              transform: isInView ? "translateX(150%)" : "translateX(-150%)",
              transition: `transform 1200ms ${ease} 150ms`,
            }}
          />
        </div>
      </div>
      {/* /left side */}
      {/* right side - content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-start gap-4 lg:gap-6">
        {/* for tags */}
        <div className={`flex flex-row gap-2 lg:gap-4  `}>
          {study?.tags?.map((tag, i) => (
            <span
              key={i}
              className={` px-3 py-2 lg:px-5 lg:py-3 rounded-4xl border lg:border-[2px] border-gray-400 font-outfit ${
                tag.variant === "primary"
                  ? "border-primary-color text-primary-color"
                  : "text-text-sixth-color border-text-sixth-color"
              }`}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(14px)",
                transition: `opacity 700ms ${ease}, transform 700ms ${ease}`,
                transitionDelay: isInView ? `${200 + i * 90}ms` : "0ms",
              }}
            >
              {tag?.label}
            </span>
          ))}
        </div>
        {/* /for tags */}
        {/* heading and desc */}
        <h3
          className="text-text-quarternary-color font-semibold font-sora"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(28px)",
            transition: `opacity 900ms ${ease}, transform 900ms ${ease}`,
            transitionDelay: isInView ? "320ms" : "0ms",
          }}
        >
          {study?.title?.split(" ").slice(0, 2).join(" ")}
          <br className="hidden lg:block" />{" "}
          {study?.title?.split(" ").slice(2).join(" ")}
        </h3>
        <p
          className="text-text-secondary-color text-sm  lg:text-base xl:text-lg font-outfit line-clamp-4"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(22px)",
            transition: `opacity 900ms ${ease}, transform 900ms ${ease}`,
            transitionDelay: isInView ? "440ms" : "0ms",
          }}
        >
          {study?.description}
        </p>
        {/* /heading and desc */}
        {/* button */}
        <Link
          href={study?.caseStudyUrl}
          className="group relative inline-flex items-center gap-2  font-outfit  text-base lg:text-xl  text-primary-color "
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(18px)",
            transition: `opacity 800ms ${ease}, transform 800ms ${ease}`,
            transitionDelay: isInView ? "580ms" : "0ms",
          }}
        >
          <span>View Case Study</span>
          <IoArrowForward className="text-xl sm:text-2xl group-hover:translate-x-2 duration-200 transition-transform ease-in-out" />
        </Link>
        {/* /button */}
      </div>
      {/* /right side */}
    </div>
  );
};

export default CaseStudyRow;