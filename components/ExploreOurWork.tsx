"use client";

import { useState, useRef, useEffect } from "react";
import { IoFilterOutline } from "react-icons/io5";
import {
  FILTER_CATEGORIES,
  CASE_STUDIES,
  type FilterCategory,
  type CaseStudy,
} from "../constants/ourWorkPage/ourWorkPageData";
import WidthWrapper from "./WidthWrapper";
import CaseStudyRow from "./CaseStudyRow";

const ExploreOurWork = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [visibleRows, setVisibleRows] = useState<Set<string>>(() => new Set());
  const rowRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const filteredStudies: CaseStudy[] =
    activeFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study: CaseStudy) =>
          study.categories.includes(activeFilter),
        );

  const activeLabel = FILTER_CATEGORIES.find(
    (c: FilterCategory) => c.id === activeFilter,
  )?.label;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-animate");
            if (!id) return;
            setVisibleRows((prev) => {
              if (prev.has(id)) return prev;
              const next = new Set(prev);
              next.add(id);
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    rowRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredStudies]);

  return (
    <WidthWrapper>
      <div className="max-lg:py-10 flex flex-col gap-8 lg:gap-10">
        {/* for nav - desktop (lg and up) */}
        <div className="hidden lg:flex flex-row justify-between px-6 lg:px-10 xl:px-12 py-2 lg:py-4 xl:py-5 bg-footer-background-color mt-5 lg:mx-2 lg:rounded-xl lg:sticky lg:top-6 z-20">
          <h3 className="text-default-color font-semibold">Explore Our Work</h3>
          <div className="flex flex-row gap-4 items-center justify-center">
            {FILTER_CATEGORIES.map((category: FilterCategory) => (
              <button
                key={category?.id}
                onClick={() => setActiveFilter(category?.id)}
                className={`cursor-pointer text-sm lg:text-base xl:text-lg transition-colors duration-300 ease-in-out ${
                  activeFilter === category?.id
                    ? "text-primary-color"
                    : "text-default-color hover:text-primary-color"
                }`}
              >
                {category?.label}
              </button>
            ))}
          </div>
        </div>

        {/* for nav - mobile/tablet (below lg) */}
        <div className="flex lg:hidden flex-col gap-8 items-center">
          <h1 className="text-text-quarternary-color">
            Explore Our <span className="top-bottom-gradient">Work</span>
          </h1>

          <div ref={dropdownRef} className="relative w-full max-w-60">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center justify-between w-full gap-6 cursor-pointer top-bottom-gradient px-5 py-3 rounded-2xl shadow-sm"
            >
              <span className="text-text-secondary-color text-sm sm:text-base font-semibold">
                {activeLabel}
              </span>
              <IoFilterOutline className="w-5 h-5 text-text-quarternary-color shrink-0" />
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-2xl overflow-hidden z-10 shadow-lg">
                {FILTER_CATEGORIES.map((category: FilterCategory) => (
                  <button
                    key={category?.id}
                    onClick={() => {
                      setActiveFilter(category?.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 text-sm transition-colors hover:bg-gray-50 ${
                      activeFilter === category?.id
                        ? "top-bottom-gradient font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {category?.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* /for nav */}

        {/* case studies */}
        <div className="flex flex-col gap-10 py-8 px-4 lg:px-8">
          {filteredStudies.map((study, i) => (
            <div
              key={study?.id}
              data-animate={study?.id}
              ref={(el) => {
                if (el) rowRefs.current.set(study?.id, el);
                else rowRefs.current.delete(study?.id);
              }}
              className={`transition-all duration-700 ease-out ${
                visibleRows.has(study?.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <CaseStudyRow study={study} reverse={i % 2 !== 0} />
            </div>
          ))}
        </div>
      </div>
    </WidthWrapper>
  );
};

export default ExploreOurWork;