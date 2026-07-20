export interface WhatWeDoCard {
  id: number
  title: string
  items: string[]
}

export const whatWeDo: WhatWeDoCard[] = [
  {
    id: 1,
    title: "Design",
    items: ["UI/UX Design", "Product Design", "Branding", "Graphic Design"],
  },
  {
    id: 2,
    title: "Build",
    items: [
      "Web Development",
      "Mobile Applications",
      "E-commerce Platforms",
      "Custom Software",
    ],
  },
  {
    id: 3,
    title: "Scale",
    items: [
      "Cloud Solutions",
      "Domain & Hosting",
      "API Integration",
      "Maintenance & Support",
    ],
  },
  {
    id: 4,
    title: "Grow",
    items: [
      "Digital Marketing",
      "SEO Optimization",
      "Content Strategy",
      "Analytics",
    ],
  },
]