"use client";

import { useEffect, useRef } from "react";

export default function DigitalInsights() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(
      "[data-animate]"
    );

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-12",
              "scale-95"
            );
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "scale-100"
            );
          } else {
            // Animate every time it enters the viewport
            entry.target.classList.remove(
              "opacity-100",
              "translate-y-0",
              "scale-100"
            );
            entry.target.classList.add(
              "opacity-0",
              "translate-y-12",
              "scale-95"
            );
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4">
      <div className="mx-2">
        <div
          data-animate
          className="
            relative overflow-hidden rounded-3xl border border-gray-700
            bg-gradient-to-r from-[#0F1512] via-[#141A17] to-[#0F1512]
            py-16 px-6 md:px-12
            opacity-0 translate-y-12 scale-95
            transition-all duration-1000 ease-out
          "
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2
              data-animate
              className="
                text-3xl md:text-5xl font-bold text-default-color leading-tight
                opacity-0 translate-y-10
                transition-all duration-1000 delay-200 ease-out
              "
            >
              Stay <span className="top-bottom-gradient">Updated</span> With Digital
              <br />
              Insights
            </h2>
            <p
              data-animate
              className="
                mt-6 text-text-secondary-color text-sm md:text-base leading-7
                opacity-0 translate-y-8
                transition-all duration-1000 delay-400 ease-out
              "
            >
              Get the latest technology trends and design thinking articles
              delivered straight to your inbox monthly.
            </p>
            <button
              data-animate
              className="
                mt-8 bg-primary-color hover:bg-lime-600
                text-default-color font-medium
                px-8 py-4 rounded-full
                transition-all duration-1000 delay-600 ease-out
                opacity-0 translate-y-8 hover:scale-105
              "
            >
              Join Our Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}