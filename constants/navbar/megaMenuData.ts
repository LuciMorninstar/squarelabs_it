type MegaMenuCategory = "What we do" | "Who we are";
interface MegaMenuItem{
    title:string;
    description:string;
    href:string;
}

interface MegaMenuSection{
    id:string;
    label:string;
    items:MegaMenuItem[];
}
type MegaMenuData = Record<MegaMenuCategory,MegaMenuSection[]>;

export const megaMenuData : MegaMenuData = {
  "What we do": [
    {
      id: "digital-products",
      label: "Digital Products",
      items: [
        {
          title: "UI/UX Design",
          description: "Design UI/UX interfaces for effortless user interaction.",
          href: "/services/ui-ux-design",
        },
        {
          title: "Web Development",
          description: "Specialized custom website development services.",
          href: "/services/web-development",
        },
        {
          title: "Mobile Applications",
          description: "Building custom apps for seamless user experience.",
          href: "/services/mobile-apps",
        },
      ],
    },
    {
      id: "growth-solutions",
      label: "Growth Solutions",
      items: [
        {
          title: "Digital Marketing",
          description: "Designing digital path that echos with audience.",
          href: "/services/digital-marketing",
        },
        {
          title: "SEO Optimization",
          description: "Enhancing search engine ranking with effective SEO.",
          href: "/services/seo-optimization",
        },
        {
          title: "Brand Strategy",
          description: "Bringing ideas to life.",
          href: "/service/brand-strategy",
        },
      ],
    },
    {
      id: "technology",
      label: "Technology",
      items: [
        {
          title: "Domain & Hosting",
          description: "Secure, reliable hosting solutions and management.",
          href: "/services/domain-and-hosting",
        },
        {
          title: "Cloud Solutions",
          description: "Cloud database management services.",
          href: "/services/cloud-solutions",
        },
        {
          title: "Maintenance Support",
          description: "24/7 maintenance support and services.",
          href: "/services/maintenance-support",
        },
      ],
    },
  ],

  "Who we are": [
    {
      id: "about-us",
      label: "About Us",
      items: [
        {
          title: "Our Story",
          description: "How we started and where we're headed.",
          href: "/about/our-story",
        },
        {
          title: "Mission & Vision",
          description: "The purpose and direction that drives everything we do.",
          href: "/about/mission",
        },
        {
          title: "Our Values",
          description: "The principles we hold ourselves accountable to.",
          href: "/about/values",
        },
      ],
    },
    {
      id: "our-people",
      label: "Our People",
      items: [
        {
          title: "Meet the Team",
          description: "The people behind the work and the vision.",
          href: "/about/team",
        },
        {
          title: "Life at SquareLabs",
          description: "Culture, environment, and what it feels like to work here.",
          href: "/about/life",
        },
        {
          title: "Careers",
          description: "Bringing ideas to visual life — join us.",
          href: "/careers",
        },
      ],
    },
    {
      id: "company",
      label: "Company",
      items: [
        {
          title: "Testimonials",
          description: "What our clients say about working with us.",
          href: "/about/testimonials",
        },
        {
          title: "Partners",
          description: "The trusted partners we collaborate with.",
          href: "/about/partners",
        },
        {
          title: "Press & Media",
          description: "Coverage, announcements, and media resources.",
          href: "/about/press",
        },
      ],
    },
  ],
};