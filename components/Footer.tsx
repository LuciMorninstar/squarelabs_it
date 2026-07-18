"use client"

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import WidthWrapper from "./WidthWrapper";
import { footerLinks, socialLinks } from "../constants/footer/footerLinks";


const Footer = () => {
   const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
   const elements = footerRef.current?.querySelectorAll<HTMLElement>("[data-animate]");

   const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);



  return (
    <WidthWrapper>
      <div
        ref={footerRef}
        className="py-16 px-6 lg:px-16 w-full bg-footer-background-color  flex flex-col gap-8 lg:gap-24"
      >
        {/* top part */}
        <div className="flex flex-col-reverse xl:flex-row gap-4 lg:flex-row lg:justify-between items-center">
          <p data-animate className="text-text-secondary-color text-sm lg:text-lg leading-8 max-sm:text-center">
            Empowering businesses through innovative technology solutions. SquareLabs{" "}
            <br className="hidden lg:block" /> delivers cutting-edge software development, digital
            marketing, and cloud <br className="hidden lg:block" /> solutions that drive business
            growth and digital transformation
          </p>
          <div data-animate className="relative size-20 lg:size-48 overflow-hidden">
            <Image
              src="/images/footer/squarelabslogo.png"
              alt="squarelabs-logo"
              fill
            sizes="(max-width: 1024px) 80px, 192px"
              className=" object-cover object-center"
            />
          </div>
        </div>

        {/* mid part */}
        <div className="w-full flex flex-col gap-7 max-lg:gap-6 xl:flex-row">
          <div className="w-full xl:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 sm:gap-5 lg:grid-cols-4 xl:grid-cols-4">
            {footerLinks.map((link) => (
              <div data-animate key={link.title} className="flex flex-col gap-2 xl:gap-10">
                <span className="text-2xl xl:text-3xl text-default-color font-sora">
                  {link.title}
                </span>
                <ul>
                  {link.links.map((l) => (
                    <li
                      key={l.url}
                      className="text-base lg:text-xl xl:text-xl text-text-secondary-color font-outfit hover:text-text-primary-color transition-all duration-200 ease-in-out leading-10"
                    >
                      <Link href={l.url}>{l.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div data-animate className="w-full xl:w-2/5 flex flex-col max-xl:items-center xl:items-end gap-3 xl:gap-5">
            <span className="text-2xl xl:text-3xl text-default-color font-sora">
              Follow Our Social
            </span>
            <div className="flex flex-row gap-6 xl:gap-12">
              {socialLinks.map(({ name, icon, href }) => (
                <Link key={name} href={href}>
                  <Image src={icon} alt={name} width={32} height={32} className="size-6 xl:size-8 " />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* bottom part */}
        <div data-animate className="flex flex-col gap-6 items-center justify-center lg:flex-row lg:justify-between">
          <p className="text-text-secondary-color text-base lg:text-lg">
            &copy; {new Date().getFullYear()} SquareLabs. All rights reserved.
          </p>
          <div className="flex flex-row gap-12">
            <Link
              className="text-text-secondary-color text-base lg:text-lg hover:text-text-primary-color transition-all duration-200 ease-in-out"
              href="/privacy-policy"
            >
              Privacy Policies
            </Link>
            <Link
              className="text-text-secondary-color text-base lg:text-lg hover:text-text-primary-color transition-all duration-200 ease-in-out"
              href="/terms-and-conditions"
            >
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default Footer;