"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import WidthWrapper from "./WidthWrapper"

interface Partner {
  name: string
  logo: string
}

const partners: Partner[] = [
  { name: "Rajdoot", logo: "/images/home/rajdoot.png" },
  { name: "Aakhyan", logo: "/images/home/aakhyan.png" },
  { name: "Sparkle Entertainment", logo: "/images/home/explorenepal.png" },
  { name: "Suchana", logo: "/images/home/suchanalogo.png" },
  { name: "Uttar Ganga", logo: "/images/home/uttarganga.png" },
  { name: "Yarsha Khabar", logo: "/images/home/yarshakhabar.png" },
  { name: "Explore Nepal", logo: "/images/home/explorenepal.png" },
  { name: "V Series", logo: "/images/home/vseries.png" },
]

const Partners = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    // If IO isn't supported, just show it immediately
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node) // animate once, then stop watching
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <WidthWrapper>
      <div
        ref={sectionRef}
        className={`w-full overflow-hidden py-8 lg:py-8 xl:py-10 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div
          className="card-container w-max"
          style={{
            animationPlayState: isVisible ? "running" : "paused",
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={`w-max h-20 lg:w-max lg:h-24 xl:h-28 transition-all ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDuration: "600ms",
                transitionDelay: isVisible
                  ? `${(index % partners.length) * 60}ms`
                  : "0ms",
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={112}
                className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 h-full w-auto object-contain transition-all duration-200 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </WidthWrapper>
  )
}

export default Partners