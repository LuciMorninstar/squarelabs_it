"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { IoArrowForward } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import MegaMenu from "./MegaMenu";
import { megaMenuData } from "../constants/navbar/megaMenuData";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

interface NavItem {
  title: string;
  link: string;
  dropdown: boolean;
  key: string | null; // matches a key in megaMenuData, or null if no dropdown
  desktopOnly?: boolean; // set to false to hide from desktop nav (still shows on mobile)
}

// Exactly 4 top-level items on desktop — Services merges "What We Do" + "Who We Are".
// Resources is mobile-only (desktopOnly: false) and also lives inside the Services
// mega menu as a featured card on desktop.
const navItems: NavItem[] = [
  { title: "Home", link: "/", dropdown: false, key: null },
  { title: "About", link: "/what-we-do", dropdown: true, key: "services" },
  { title: "Our Work", link: "/our-work", dropdown: false, key: null },
  { title: "Resources", link: "/resources", dropdown: false, key: null, desktopOnly: false },
  { title: "Contact Us", link: "/contact-us", dropdown: false, key: null },
];

// Predefined Tailwind delay utilities for the mobile menu stagger.
// Kept as literal class names (not built from a template string) so
// Tailwind's JIT scanner can actually find them at build time.
const MOBILE_STAGGER_DELAYS = [
  "delay-100",
  "delay-150",
  "delay-200",
  "delay-250",
  "delay-300",
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  // Scroll-aware navbar: transparent over the hero, subtle blurred
  // surface once the page has scrolled past it.
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleMouseEnter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  // Home is only active on the exact root; other links are active on exact
  // match or any nested route beneath them (e.g. /our-work/some-project).
  const isActive = (link: string) => {
    if (link === "/") return pathname === "/";
    return pathname === link || pathname.startsWith(link + "/");
  };

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar-reveal top-0 left-0 z-50 w-full flex flex-row justify-between items-center px-6 lg:px-12 xl:px-16 xl:pt-3 lg:py-2 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-black/40 backdrop-blur-md shadow-lg"
          : "bg-transparent shadow-sm"
      }`}
      style={{ position: "absolute" }}
    >
      {/* Left side */}
      <div className="flex flex-row gap-8 items-center justify-center">
        {/* Logo */}
        <Link
          href="/"
          className="nav-logo w-16 h-16 overflow-hidden transition-transform duration-300 ease-out hover:scale-105"
        >
          <Image
            width={100}
            height={100}
            src="/images/footer/squarelabslogo.png"
            alt="squarelabs-logo"
            className="w-full h-full object-fit object-center"
          />
        </Link>

        {/* Nav items - for less than lg screens */}
        <div className="nav-links hidden lg:flex flex-row gap-10">
          {navItems
            .filter((item) => item.desktopOnly !== false)
            .map((item) =>
              item.dropdown && item.key ? (
                <div
                  key={item.title}
                  style={{ position: "relative" }}
                  onMouseEnter={() => handleMouseEnter(item.key as string)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => router.push(item.link)}
                >
                  <div className="group flex flex-row gap-3 items-center cursor-pointer">
                    <span
                      className={`relative font-outfit lg:text-lg transition-all duration-200 ease-in-out after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 after:ease-out ${
                        isActive(item.link)
                          ? "text-green-500 after:w-full"
                          : "text-gray-300 group-hover:text-primary-color after:w-0 group-hover:after:w-full"
                      }`}
                    >
                      {item.title}
                    </span>
                    <MdKeyboardArrowDown
                      className={`
                        w-8 h-8 transition-all duration-300 ease-in-out
                        ${
                          openMenu === item.key
                            ? "rotate-180 text-primary-color"
                            : isActive(item.link)
                            ? "text-green-500"
                            : "text-gray-300 group-hover:text-primary-color"
                        }
                      `}
                    />
                  </div>

                  {megaMenuData[item.key] && (
                    <MegaMenu
                      visible={openMenu === item.key}
                      section={megaMenuData[item.key]}
                      onClose={() => setOpenMenu(null)}
                      onMouseEnter={() => handleMouseEnter(item.key as string)}
                      onMouseLeave={handleMouseLeave}
                    />
                  )}
                </div>
              ) : (
                <Link href={item.link} key={item.title} style={{ position: "relative" }}>
                  <div className="group flex flex-row gap-3 items-center cursor-pointer">
                    <span
                      className={`relative font-outfit lg:text-lg transition-all duration-200 ease-in-out after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 after:ease-out ${
                        isActive(item.link)
                          ? "text-green-500 after:w-full"
                          : "text-gray-300 group-hover:text-primary-color after:w-0 group-hover:after:w-full"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                </Link>
              )
            )}
        </div>
      </div>

      {/* Right side CTA */}
      <Link
        href="/start-a-project"
        className="nav-cta group relative overflow-hidden max-lg:hidden flex flex-row gap-2 items-center justify-center rounded-4xl bg-linear-to-r from-primary-color to-secondary-color lg:px-6 lg:py-4 px-4 py-3 self-center transition-all duration-300 ease-in"
      >
        <span className="relative z-10 text-default-color text-sm lg:text-base font-outfit">
          Start a Project
        </span>
        <IoArrowForward className="relative z-10 text-default-color text-3xl font-light transition-transform duration-300 ease-out group-hover:translate-x-1" />
        {/* subtle shine sweep on hover */}
        <span
          className="pointer-events-none absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out"
          style={{
            background:
              "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.35) 45%, transparent 60%)",
          }}
        />
      </Link>

      {/* Hamburger */}
      <div
        onClick={() => setMobileNavOpen(true)}
        className="lg:hidden p-1 rounded-xl cursor-pointer transition-transform duration-300 ease-out hover:scale-110 active:scale-95"
      >
        <FiMenu className="text-3xl text-default-color" />
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setMobileNavOpen(false)}
        className={`fixed inset-0 z-10 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
          mobileNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 z-20 h-screen w-[70%] max-w-sm bg-linear-to-b from-primary-color to-secondary-color shadow-2xl flex flex-col gap-2 px-8 pt-8 transform transition-transform duration-500 ease-in-out ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setMobileNavOpen(false)}
          className="self-end p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <AiOutlineClose className="text-2xl text-white" />
        </div>

        <div className="flex flex-col gap-2 mt-10">
          {navItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              onClick={() => setMobileNavOpen(false)}
              className={`group flex flex-row items-center justify-between py-4 border-b border-white/15 transition-all duration-500 ease-out ${
                mobileNavOpen
                  ? `opacity-100 translate-x-0 ${
                      MOBILE_STAGGER_DELAYS[index % MOBILE_STAGGER_DELAYS.length]
                    }`
                  : "opacity-0 translate-x-6 delay-0"
              }`}
            >
              <span
                className={`font-outfit text-xl tracking-wide transition-all duration-300 ease-in-out group-hover:translate-x-2 ${
                  isActive(item.link)
                    ? "text-green-500"
                    : "text-white group-hover:text-white/90"
                }`}
              >
                {item.title}
              </span>
              <IoArrowForward
                className={`text-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out ${
                  isActive(item.link) ? "text-green-500" : "text-white"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;