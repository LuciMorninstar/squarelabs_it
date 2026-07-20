"use client"

import Image from "next/image"
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
  return (
    <WidthWrapper>
      <div className="w-full overflow-hidden py-8 lg:py-8 xl:py-10">
        <div className="card-container w-max">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="relative w-32 h-20 lg:w-40 lg:h-24 xl:h-28"
            >
              <Image
                src={partner.logo}
                alt={partner.name}  
                fill
                sizes="(min-width: 1024px) 160px, 128px"
                className="object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </WidthWrapper>
  )
}

export default Partners