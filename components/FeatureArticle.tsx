"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";


export default function FeaturedArticle() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const imageRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();

  useLayoutEffect(() => {
    // Initial states
    gsap.set(imageRef.current, {
      opacity: 0,
      x: -60,
      scale: 1.03,
    });

    gsap.set(badgeRef.current, {
      opacity: 0,
      x: 30,
    });

    // Whole heading animates together
    gsap.set(titleRef.current, {
      opacity: 0,
      y: 25,
    });

    gsap.set(descRef.current, {
      opacity: 0,
      x: 30,
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      x: 30,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const tl = gsap.timeline({
          defaults: {
            ease: "power2.out",
          },
        });

        tl.to(imageRef.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
        })

          .to(
            badgeRef.current,
            {
              opacity: 1,
              x: 0,
              duration: 0.45,
            },
            "-=0.45"
          )

          // Smooth heading animation
          .to(
            titleRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.15"
          )

          .to(
            descRef.current,
            {
              opacity: 1,
              x: 0,
              duration: 0.45,
            },
            "-=0.45"
          )

          .to(
            buttonRef.current,
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
            },
            "-=0.35"
          );

        observer.unobserve(entry.target);
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="border-none shadow-2xl p-4 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 mx-4 my-8 lg:m-20">

        {/* Image */}
        <div
          ref={imageRef}
          className="relative overflow-hidden rounded-2xl w-full h-64 lg:h-full"
        >
          <Image
            src="/images/resourcesPage/container.png"
            alt="Featured Article"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="py-6 px-4 lg:py-12 lg:pr-12 lg:pl-14 flex flex-col justify-center">

          <span
            ref={badgeRef}
            className="border border-primary-color rounded-full px-4 py-3 text-primary-color text-sm w-fit "
          >
            FEATURED ARTICLE
          </span>

          <h2
            ref={titleRef}
            className="text-2xl lg:text-4xl font-bold mt-5 leading-tight text-text-quarternary-color"
          > 
            How AI is transforming
            <br />
            Modern Digital Products
          </h2>

          <p
            ref={descRef}
            className="text-gray-500 mt-5 leading-7 text-text-secondary-color"
          >
            Discover how artificial intelligence is moving from a buzzword
            to a foundational architectural layer that drives personalization, efficiency, and user delight in modern software ecosystems.
          </p>

          <button
            ref={buttonRef}
            onClick={() => router.push("/NotFoundPage")}
            className="group flex items-center gap-2 text-primary-color mt-8 w-fit "
          >
            <span className = "border-b border-b-primary-color">Read Article</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>

        </div>
      </div>
    </section>
  );
}