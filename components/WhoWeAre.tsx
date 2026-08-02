"use client";

import { IoRocketOutline } from "react-icons/io5";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import WidthWrapper from "../components/WidthWrapper";
import Link from "next/link";
import Image from "next/image";

const WhoWeAreHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const ourCapabilitiesRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // Background
      tl.fromTo(
        backgroundRef.current,
        {
          scale: 1.15,
          y: 40,
          opacity: 0,
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1.8,
        },
      )
        .fromTo(
          ourCapabilitiesRef.current,
          {
            y: 80,
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.6,
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            scale: 1,
          },
          "-=1.4",
        )

        // Heading line 1
        .fromTo(
          heading1Ref.current,
          {
            y: 80,
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.6,
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            scale: 1,
          },
          "-=1.4",
        )

        // Heading line 2
        .fromTo(
          heading2Ref.current,
          {
            y: 80,
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.6,
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            scale: 1,
          },
          "-=0.8",
        )

        // Description
        .fromTo(
          descriptionRef.current,
          {
            y: 30,
            opacity: 0,
            filter: "blur(10px)",
          },
          {
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: 0.8,
          },
          "-=0.1",
        )

        // Buttons
        .fromTo(
          buttonsRef.current ? buttonsRef.current.children : [],
          {
            y: 25,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.35",
        );

      // Continuous floating background
      gsap.to(backgroundRef.current, {
        // y: -15,
        duration: 6,
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <WidthWrapper>
      <div
        ref={heroRef}
        className="hero-section relative w-full overflow-hidden flex items-center justify-center"
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-[#06150D]/45 z-10"></div>
        {/* bg image — absolute */}
        <div className="absolute inset-0 w-full h-full bg-[#06150D]/50">
          <Image
            ref={backgroundRef}
            src="/images/whoWeArePage/whoWeAreHeroBg.jpg"
            alt="heroBackground"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </div>

        {/* content */}
        <div className="max-sm:mt-16 relative z-10 w-full flex flex-col gap-4 lg:gap-12 items-center justify-center text-center px-4">
          {/* heading */}
          <div className="flex flex-col gap-1 lg:gap-4 text-center">
            <h1 ref={heading1Ref} className="text-default-color">
              Who We{" "}
              <span className="top-bottom-gradient text-transparent bg-clip-text font-sora">
                Are
              </span>
            </h1>
          </div>

          {/* description */}
          <p
            ref={descriptionRef}
            className="text-text-eight-color text-sm lg:text-base xl:text-lg"
          >
            SquareLabs is a technology partner helping business transform ideas
            <br className="hidden lg:block" /> into powerful digital products
            through design, development, and
            <br className="hidden lg:block" /> innovation.
          </p>

          {/* cta buttons */}
          <div
            ref={buttonsRef}
            className="w-full  flex flex-row max-sm:gap-2 items-center sm:flex-row gap-2 sm:gap-6 lg:gap-6 xl:gap-8  justify-center px-3"
          >
            <Link href="/start-a-project" className="group button-style">
              <span className="text-default-color text-base lg:text-xl font-outfit font-light">
                Start a Project
              </span>
              <IoRocketOutline className="text-default-color text-2xl sm:text-3xl font-light group-hover:translate-x-2 group-hover:-translate-y-2 duration-200 transition-all ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default WhoWeAreHero;
