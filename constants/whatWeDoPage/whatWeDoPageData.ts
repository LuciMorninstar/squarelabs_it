
export interface WhatWeDoCard {
  id: number;
  title: string;
  icon:string;
  image:string
  lists?: string[];
desc?: string;
}

export interface WhatWeDoCategory {
  id: number;
  title: string;
  desc: string;
  cards: WhatWeDoCard[];
}

export const whatWeDoPageData: WhatWeDoCategory[] = [
  {
    id: 1,
    title: "Digital Products",
    desc: "We design digital experiences that connect business goals with user needs, focusing on aesthetics, usability, and technical performance.",
    cards: [
      {
        id: 1,
        title: "UI/UX Design",
        icon: "/svg/whatWeDoPage/brand.svg",
        lists: [
          "User Research",
          "Wireframes & Prototypes",
          "High-fidelity Design",
          "Design Systems",
        ],
        image: "/images/whatWeDoPage/brand.png",
      },
      {
        id: 2,
        title: "Web Development",
        icon: "/svg/whatWeDoPage/webDevelopment.svg",
        lists: [
          "Frontend Engineering",
          "Backend Architecture",
          "CMS Integration",
          "E-commerce Engines",
        ],
        image:"/images/whatWeDoPage/web.png"
      },
      {
        id: 3,
        title: "Mobile Application",
        icon: "/svg/whatWeDoPage/mobileApplication.svg",
        lists: [
          "IOS Development",
          "Android Development",
          "Cross-Platform Solutions",
          "App Store Optimization",
        ],
        image: "/images/whatWeDoPage/mobile.png",
      },
    ],
  },
  {
    id: 2,
    title: "Growth Solutions",
    desc: "Helping businesses attract users, build memorable brands, and increase their digital visibility through data-driven strategies and creative storytelling.",
    cards: [
      {
        id: 1,
        title: "Digital Marketing",
        icon: "/svg/whatWeDoPage/DigitalMarketing.svg",
        desc: "Data-led campaigns that drive traffic, conversion, and sustainable user retention across all digital channels.",
        image: "/images/whatWeDoPage/digital.png",
      },
      {
        id: 2,
        title: "SEO Optimization",
        icon: "/svg/whatWeDoPage/seo.svg",
        desc: "Advanced search strategies to ensure your product ranks at the top where your future customers are looking.",
        image:"/images/whatWeDoPage/seo.png",
      },
      {
        id: 3,
        title: "Brand Strategy",
        icon: "/svg/whatWeDoPage/brand.svg",
        desc: "Defining your voice and visual identity to create a cohesive and powerful presence in the marketplace.",
        image: "/images/whatWeDoPage/brand.png",
      },
    ],
  },
  {
    id: 3,
    title: "Technology Stack",
    desc: "Reliable infrastructure that powers modern digital products. We use the latest technologies to ensure your project is scalable, secure, and lightning-fast.",
    cards: [
      {
        id: 1,
        title: "Cloud Solutions",
        icon: "/svg/whatWeDoPage/cloud.svg",
        desc: "AWS, Azure, and Google Cloud infrastructure setup and management for robust global performance.",
        image: "/images/whatWeDoPage/web.png",
      },
      {
        id: 2,
        title: "Domain & Hosting",
        icon:"/svg/whatWeDoPage/domain.svg",
        desc: "Managed high-speed hosting and domain security services to keep your platform online 24/7.",
        image:"/images/whatWeDoPage/brand.png" ,
      },
      {
        id: 3,
        title: "Maintenance",
        icon: "/svg/whatWeDoPage/maintenance.svg",
        desc: "Regular updates, security patches, and performance monitoring to keep your tech stack future-proof.",
        image: "/images/whatWeDoPage/mobile.png",
      },
    ],
  },
];

export interface MissionVisionItem {
  id: number;
  title: string;
  desc: string;
}

export const ourMissionAndVisionData: MissionVisionItem[] = [
  {
    id: 1,
    title: "Our Mission",
    desc: "Helping businesses transform ideas into impactful digital solutions that simplify lives, enhance experiences, and drive sustainable growth. We believe in technology as a catalyst for positive change.",
  },
  {
    id: 2,
    title: "Our Vision",
    desc: "To become a trusted global technology partner recognized for engineering excellence and human-centered design. We aim to set the standard for digital innovation in the mid-market space.",
  },
];