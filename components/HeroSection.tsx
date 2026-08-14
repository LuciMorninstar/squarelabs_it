"use client";

import WidthWrapper from "../components/WidthWrapper";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";

import { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import MagicRings from "./MagicRings"

const GREEN_A = "rgb(15,157,69)";
const GREEN_B = "rgb(140,198,63)";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // ---------- GSAP load-in (text) ----------
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        eyebrowRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
      )
        .fromTo(
          heading1Ref.current,
          { y: 70, opacity: 0, filter: "blur(8px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
          "-=0.25",
        )
        .fromTo(
          heading2Ref.current,
          { y: 70, opacity: 0, filter: "blur(8px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
          "-=0.65",
        )
        .fromTo(
          descriptionRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.35",
        )
        .fromTo(
          buttonsRef.current ? buttonsRef.current.children : [],
          { y: 20, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.12,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // ---------- cursor-follow ambient spotlight ----------
  useEffect(() => {
    const el = heroRef.current;
    const spot = spotlightRef.current;
    if (!el || !spot) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      spot.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      spot.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <WidthWrapper>
      <div
        ref={heroRef}
        className="hero-section relative w-full  overflow-hidden flex items-center justify-center"
      >
        {/* base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, rgba(15,157,69,0.18) 0%, rgba(7,21,16,0) 55%), linear-gradient(180deg, #081B13 0%, #071510 60%, #050F0B 100%)",
          }}
        />
        {/* cursor-follow spotlight */}
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), rgba(140,198,63,0.13), transparent 70%)",
          }}
        />
        {/* blueprint grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(234,243,236,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(234,243,236,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(80% 60% at 50% 30%, black 40%, transparent 90%)",
          }}
        />
        {/* HUD corner brackets */}
        {[
          "top-3 left-3 border-t-2 border-l-2",
          "top-3 right-3 border-t-2 border-r-2",
          "bottom-3 left-3 border-b-2 border-l-2",
          "bottom-3 right-3 border-b-2 border-r-2",
        ].map((cls, idx) => (
          <div
            key={idx}
            className={`pointer-events-none absolute z-[2] w-5 h-5 lg:w-7 lg:h-7 border-[#8CC63F]/40 ${cls}`}
          />
        ))}
        {/* rotated edge tab */}
        <div className="pointer-events-none absolute z-[2] right-3 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden lg:block">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#8CC63F]/50 whitespace-nowrap">
            SQUARELABS / STACK_01
          </span>
        </div>

        {/* Magic Rings background — replaces the old cube lattice */}
        <div className="absolute inset-0 z-[1]">
          <MagicRings
            color="#39e148"
            colorTwo="#68f163"
            ringCount={6}
            speed={1}
            attenuation={10}
            lineThickness={2}
            baseRadius={0.35}
            radiusStep={0.1}
            scaleRate={0.1}
            opacity={1}
            blur={0}
            noiseAmount={0.1}
            rotation={0}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={false}
            mouseInfluence={0.2}
            hoverScale={1.2}
            parallax={0.05}
            clickBurst={false}
          />
        </div>

        {/* content */}
        <div className="max-sm:mt-16 relative z-10 w-full flex flex-col gap-4 lg:gap-7 items-center justify-center text-center px-4 pointer-events-none">
          <span
            ref={eyebrowRef}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[#8CC63F]/30 bg-[#0F9D45]/10 px-4 py-1.5 text-xs lg:text-sm font-outfit tracking-wide text-[#C8E8B9]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] animate-pulse" />
            SquareLabs — Product Engineering Studio
          </span>

          <div className="flex flex-col gap-1 lg:gap-3 text-center pointer-events-none">
            <h1
              ref={heading1Ref}
              className="font-sora text-[#EAF3EC] text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight"
            >
              Building{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(120deg, ${GREEN_B}, ${GREEN_A})`,
                }}
              >
                Digital Products
              </span>
            </h1>
            <h1
              ref={heading2Ref}
              className="font-sora text-[#EAF3EC] text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight"
            >
              That Move Businesses Forward.
            </h1>
          </div>

          <p
            ref={descriptionRef}
            className="pointer-events-auto max-w-xl text-[#9FB3A8] text-sm lg:text-base xl:text-lg font-outfit"
          >
            We design and develop scalable digital experience that helps startups and businesses
            <br className="hidden sm:block" /> transform ideas into products users love.
          </p>

          <div
            ref={buttonsRef}
            className="pointer-events-auto w-full flex flex-row max-sm:gap-2 items-center sm:flex-row gap-2 sm:gap-6 lg:gap-6 xl:gap-8 justify-center px-3 mt-2"
          >
            <Link href="/start-a-project" className="group button-style">
              <span className="text-default-color text-base lg:text-xl font-outfit font-light">
                Start a Project
              </span>
              <IoArrowForward className="text-xl text-default-color sm:text-2xl group-hover:translate-x-2 duration-200 transition-transform ease-in-out" />
            </Link>

            <Link
              href="/our-work"
              className="w-max flex flex-row gap-2 lg:gap-4 items-center justify-center rounded-4xl border-2 border-default-color px-3 py-4 sm:py-4 lg:px-6 lg:py-4 hover:border-text-primary-color transition-all duration-200 ease-in-out"
            >
              <span className="text-default-color text-base lg:text-xl font-outfit font-light">
                Our Work
              </span>
              <RiExternalLinkLine className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default HeroSection;