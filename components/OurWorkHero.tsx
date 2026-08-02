"use client";

import { IoArrowForward } from "react-icons/io5";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import WidthWrapper from "@/components/WidthWrapper";

const OurWorkHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // entrance animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
      )
        .fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0, filter: "blur(10px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          buttonsRef.current?.children ?? [],
          { y: 25, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.35",
        )
        .fromTo(
          imageRef.current,
          { y: 60, opacity: 0, scale: 0.94 },
          { y: 0, opacity: 1, scale: 1, duration: 1 },
          "-=0.9",
        );
    }, heroRef);

    return () => ctx.revert();
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

  return (
    <WidthWrapper>
      <div
        ref={heroRef}
        className="hero-section relative w-full overflow-hidden flex flex-col lg:flex-row  py-10 lg:py-0 inset-0 bg-gradient-background"
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
          <h1 ref={headingRef} className="text-default-color">
            Our <span className="text-[#8CC63F]">Work</span>
          </h1>

          <p
            ref={descriptionRef}
            className="text-text-eight-color text-sm max-lg:text-center lg:text-base xl:text-lg w-full "
          >
            Building digital experiences that solve real business problems. From
            websites to mobile apps, we design and develop solutions that create
            measurable impact.
          </p>

          <div ref={buttonsRef} className="flex">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 bg-[#0F9D45] hover:bg-[#0c7f38] transition-colors duration-200 text-white rounded-full px-6 py-4 text-sm lg:text-base font-outfit font-medium"
            >
              View All Case Studies
              <IoArrowForward className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
        {/* /left content */}

        {/* right content — single composited mockup image */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-none lg:w-[90%] aspect-[4/3]">
            <Image
              ref={imageRef}
              src="/images/ourWorkPage/ourWorkbgImage.png"
              alt="SquareLabs project mockups"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 520px, 420px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        {/* /right content */}
      </div>
    </WidthWrapper>
  );
};

export default OurWorkHero;
