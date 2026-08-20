"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  // Portals need a real DOM node to render into, which only exists on the
  // client — this flips true after first mount so we never try to portal
  // during SSR.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleScroll = () => onClose?.();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, onClose]);

  const { categories, featured } = section;
  if (!categories || categories.length === 0) return null;
  if (!mounted) return null;

  const activeCategory = categories[activeIndex] ?? categories[0];

  const menu = (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={[
        "fixed left-6 right-6 z-[9999]",
        "bg-white rounded-[28px] border border-[#E7E8EC]",
        "shadow-[0_40px_90px_-20px_rgba(20,23,31,0.22)]",
        "transition-all duration-300 ease-out origin-top",
        visible
          ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
          : "opacity-0 -translate-y-3 scale-y-95 pointer-events-none",
      ].join(" ")}
      style={{ top: "88px" }}
    >
      <div className="flex min-h-[260px]">
        {/* LEFT — category switcher */}
        <div className="flex flex-col gap-0.5 w-[250px] shrink-0 py-6 pl-7 pr-5 border-r border-[#EEEFF2] max-h-[440px] overflow-y-auto">
          {categories.map((category, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={category.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={[
                  "w-full text-left font-outfit font-semibold text-[20px] tracking-tight rounded-xl",
                  "border-none bg-transparent cursor-pointer px-4",
                  "transition-all duration-200 ease-out",
                  isActive
                    ? "pt-5 pb-2.5 text-[#22C55E]"
                    : "pt-3 pb-3 text-[#1A1A1A] hover:text-[#22C55E]",
                ].join(" ")}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* MIDDLE — items for the active category */}
        <div className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 content-center p-8">
          {activeCategory.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={[
                "group relative flex flex-col gap-2.5 p-6 rounded-2xl no-underline overflow-hidden min-h-[128px]",
                "bg-[#FAFAFB] border border-[#EEEFF2]",
                "hover:bg-white hover:border-[#86EFAC] hover:shadow-[0_16px_36px_-12px_rgba(34,197,94,0.45)]",
                "transition-all duration-200",
              ].join(" ")}
            >
              <span
                className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-[#22C55E] to-[#4ADE80] transition-all duration-300 group-hover:w-full"
                aria-hidden
              />
              <span className="flex items-center justify-between gap-2 font-outfit">
                <span className="font-semibold text-[17.5px] tracking-tight text-[#16A34A] group-hover:text-[#15803D]">
                  {item.title}
                </span>
                <IoArrowForward className="text-lg text-[#22C55E] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 shrink-0" />
              </span>
              <p className="m-0 text-[14px] text-[#6B7080] leading-relaxed font-outfit">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {/* RIGHT — featured card (Resources) */}
        <div className="hidden xl:flex w-[260px] shrink-0 p-4">
          <Link
            href={featured.href}
            className="group relative flex flex-col justify-between gap-6 w-full p-6 rounded-2xl no-underline overflow-hidden bg-gradient-to-br from-[#0D1712] via-[#101B15] to-[#0A2818]"
          >
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
              aria-hidden
            />
            <div
              className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#22C55E] opacity-50 blur-3xl transition-opacity duration-300 group-hover:opacity-70"
              aria-hidden
            />
            <div
              className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-[#4ADE80] opacity-25 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col gap-2">
              <span className="font-mono text-[11px] tracking-widest text-[#86EFAC]">
                FEATURED
              </span>
              <span className="font-semibold text-xl text-white font-outfit tracking-tight">
                {featured.title}
              </span>
              <p className="m-0 text-sm text-white/65 leading-relaxed font-outfit">
                {featured.description}
              </p>
            </div>
            <span className="relative flex items-center gap-1.5 font-semibold text-sm text-[#4ADE80] font-outfit">
              {featured.ctaLabel}
              <IoArrowForward className="text-lg transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );

  return createPortal(menu, document.body);
};

export default MegaMenu;