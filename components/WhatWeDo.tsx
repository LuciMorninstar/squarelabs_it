"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import SecondWidthWrapper from "./SecondWidthWrapper"
import { whatWeDo } from "@/constants/homepage/whatWeDoData"
import { RiExternalLinkLine } from "react-icons/ri";

interface WhatWeDoCard {
  id: number
  title: string
  items?: string[]
}

const WhatWeDo = () => {
  const [hoveredCardId, setHoveredCardId] = useState<number>(1)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>("[data-animate]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.opacity = "1"
            target.style.transform = "translateY(0)"
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements?.forEach((el, i) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <SecondWidthWrapper>
      <div ref={sectionRef} className="w-full xl:h-screen pt-5 xl:pt-20">

        {/* top section */}
        <div className="w-full flex flex-col gap-5 items-center">
          <h1 data-animate className="text-text-quarternary-color text-center">
            What We <span className="top-bottom-gradient">Do</span>
          </h1>
          <span data-animate className="text-lg lg:text-xl text-center text-text-sixth-color font-sora">
            From ideas to digital products, we design, build, and grow <br />
            experiences that create impact.
          </span>
          <Link
            data-animate
            href="/start-a-project"
            className="flex flex-row gap-4 items-center justify-center rounded-4xl bg-primary-color px-6 py-4 w-max"
          >
            <span className="text-default-color text-base lg:text-xl font-outfit font-light">
              Learn More
            </span>
             <RiExternalLinkLine className="w-6 h-6 text-white" />
          </Link>
        </div>

        {/* bottom section — one block, observed as one unit */}
        <div data-animate className="mt-12 lg:mt-16 border-2 border-primary-color">

          {/* MOBILE/MD — vertical stack */}
          <div className="flex lg:hidden flex-col w-full">
            {(whatWeDo as WhatWeDoCard[]).map((card) => {
              const isActive = hoveredCardId === card.id
              return (
                <div
                  key={card.id}
                  onClick={() => setHoveredCardId(card.id)}
                  className={`relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
                    border-b-2 border-primary-color last:border-b-0
                    ${isActive ? "min-h-64 bg-quarternary-color" : "min-h-20"}
                  `}
                >
                  <span className="absolute top-4 left-6 text-text-quarternary-color text-5xl font-semibold">
                    {card.id}
                  </span>
                  <div className={`absolute bottom-4 right-6 transition-all duration-300
                    ${isActive ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"}`}
                  >
                    <h2 className="top-bottom-gradient">{card.title}</h2>
                  </div>
                  <div className={`absolute top-4 left-0 right-0 flex justify-center transition-all duration-300 delay-100
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
                  >
                    <div className="flex flex-row items-end gap-2">
                      <span className="text-default-color font-sora font-semibold text-5xl">{card.id}.</span>
                      <h2 className="text-default-color font-semibold">{card.title}</h2>
                    </div>
                  </div>
                  <div className={`absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3 transition-all duration-300 delay-100
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
                  >
                    {card.items?.map((item) => (
                      <h4 key={item} className="text-text-secondary-color font-outfit font-semibold">{item}</h4>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* DESKTOP — horizontal */}
          <div className="hidden lg:flex flex-row w-full min-h-80 md:min-h-100 lg:min-h-120">
            {(whatWeDo as WhatWeDoCard[]).map((card) => {
              const isHovered = hoveredCardId === card.id
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredCardId(card.id)}
                  onMouseLeave={() => setHoveredCardId(1)}
                  className={`relative overflow-hidden transition-all duration-500 ease-in-out
                    after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[2px] after:bg-gradient-to-b after:from-primary-color after:to-secondary-color
                    last:after:hidden
                    ${isHovered ? "w-[40%] bg-quarternary-color" : "w-[20%]"}
                  `}
                >
                  <span className="absolute top-8 left-6 text-text-quarternary-color text-7xl font-semibold">
                    {card.id}
                  </span>
                  <div className={`absolute bottom-8 left-6 transition-all duration-300
                    ${isHovered ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100 translate-y-0"}`}
                  >
                    <h1 className="top-bottom-gradient">{card.title}</h1>
                  </div>
                  <div className={`absolute bottom-16 left-0 right-0 flex flex-col items-center gap-6
                    transition-all duration-300 delay-100
                    ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      {card.items?.map((item) => (
                        <h4 key={item} className="text-text-secondary-color font-outfit font-semibold">{item}</h4>
                      ))}
                    </div>
                  </div>
                  <div className={`absolute top-14 left-0 right-0 flex justify-center transition-all duration-300 delay-100
                    ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
                  >
                    <div className="flex flex-row items-end gap-3">
                      <span className="text-default-color font-sora font-semibold text-6xl">{card.id}.</span>
                      <h1 className="text-default-color font-semi">{card.title}</h1>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </SecondWidthWrapper>
  )
}

export default WhatWeDo