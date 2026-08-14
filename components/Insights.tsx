"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Insights() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(badgeRef.current, {
        opacity: 0,
        y: -20,
      });
      gsap.set([line1Ref.current, line2Ref.current], {
        opacity: 0,
        y: -100, // Start above
      });
      gsap.set(descRef.current, {
        opacity: 0,
        y: -20,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      })
        .to(
          line1Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.2"
        )
        .to(
          line2Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.75"
        )
        .to(
          descRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-16 pb-10 sm:pt-10 lg:pt-24 xl:pt-28 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-secondary-color bg-[#e1eed1] text-secondary-color text-sm sm:text-base"
        >
          <span className="w-2 h-2 rounded-full bg-secondary-color"></span>
          Resources
        </span>

        {/* Heading */}
        <h1 className="mt-6 font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl">
          <div className="overflow-hidden">
            <div ref={line1Ref}>Insights to Build Better</div>
          </div>
          <div className="overflow-hidden">
            <div ref={line2Ref} className="text-text-primary-color">
              Digital Products
            </div>
          </div>
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="mt-6 mx-auto max-w-2xl text-base sm:text-lg leading-7 text-text-secondary-color"
        >
          Explore technology insights, design strategies and development
          resources created by Square Labs to help businesses innovate and
          grow.
        </p>
      </div>
    </section>
  );
}