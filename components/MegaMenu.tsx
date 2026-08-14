"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import type { MegaMenuSection } from "../constants/navbar/megaMenuData";

interface MegaMenuProps {
  visible: boolean;
  section: MegaMenuSection;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const MegaMenu = ({ visible, section, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!visible) return;
    const handleScroll = () => onClose?.();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, onClose]);

  const { categories, featured } = section;
  if (!categories || categories.length === 0) return null;

  const activeCategory = categories[activeIndex] ?? categories[0];

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={[
        "fixed left-4 right-4 z-[9999]",
        "bg-default-color rounded-3xl border border-[#ebebeb]",
        "shadow-[0_32px_80px_rgba(0,0,0,0.14)]",
        "transition-all duration-300 ease-out origin-top",
        visible
          ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
          : "opacity-0 -translate-y-3 scale-y-95 pointer-events-none",
      ].join(" ")}
      style={{ top: "88px" }}
    >
      <div className="flex p-8 gap-10 min-h-[240px]">
        {/* LEFT — category switcher */}
        <div className="flex flex-col justify-center gap-1 w-[260px] shrink-0 border-r border-[#e5e5e5] pr-6 max-h-[420px] overflow-y-auto">
          {categories.map((category, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={category.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  transform: isActive ? "translateY(-4px)" : "translateY(0)",
                  transition: "transform 300ms ease, color 300ms ease",
                }}
                className={[
                  "w-full text-left font-semibold text-xl font-outfit px-4 py-4 rounded-xl",
                  "border-none bg-transparent cursor-pointer",
                  isActive
                    ? "text-primary-color"
                    : "text-[#1a1a1a] hover:text-primary-color",
                ].join(" ")}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* MIDDLE — items for the active category */}
        <div className="flex-1 flex flex-row items-start gap-4">
          {activeCategory.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col gap-2 p-5 rounded-2xl no-underline hover:bg-[#f5f5f5] transition-colors duration-200 flex-1"
            >
              <span className="flex items-center gap-1.5 font-semibold text-xl text-primary-color font-outfit">
                {item.title}
                <IoArrowForward className="text-2xl transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </span>
              <p className="m-0 text-base text-text-secondary-color leading-relaxed font-outfit">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {/* RIGHT — featured card (Resources) */}
        <Link
          href={featured.href}
          className="group hidden xl:flex flex-col justify-between gap-6 w-[260px] shrink-0 p-6 rounded-2xl bg-linear-to-br from-primary-color to-secondary-color no-underline"
        >
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-xl text-white font-outfit">
              {featured.title}
            </span>
            <p className="m-0 text-sm text-white/80 leading-relaxed font-outfit">
              {featured.description}
            </p>
          </div>
          <span className="flex items-center gap-1.5 font-semibold text-base text-white font-outfit">
            {featured.ctaLabel}
            <IoArrowForward className="text-xl transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MegaMenu;