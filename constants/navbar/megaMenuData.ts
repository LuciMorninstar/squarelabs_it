// constants/navbar/megaMenuData.ts

export interface MegaMenuLink {
  title: string;
  href: string;
  description: string;
}

export interface MegaMenuCategory {
  id: string;
  label: string;
  items: MegaMenuLink[];
}

export interface MegaMenuFeatured {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}

export interface MegaMenuSection {
  categories: MegaMenuCategory[];
  featured: MegaMenuFeatured;
}

export const megaMenuData: Record<string, MegaMenuSection> = {
  services: {
    categories: [
      // --- from "What We Do" ---
      {
        id: "digital-products",
        label: "Digital Products",
        items: [
          {
            title: "UI/UX Design",
            description: "Design UI/UX interfaces for effortless user interaction.",
            href: "/what-we-do#ui-ux-design",
          },
          {
            title: "Web Development",
            description: "Specialized custom website development services.",
            href: "/what-we-do#web-development",
          },
          {
            title: "Mobile Applications",
            description: "Building custom apps for seamless user experience.",
            href: "/what-we-do#mobile-apps",
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
            href: "/what-we-do#digital-marketing",
          },
          {
            title: "SEO Optimization",
            description: "Enhancing search engine ranking with effective SEO.",
            href: "/what-we-do#seo-optimization",
          },
          {
            title: "Brand Strategy",
            description: "Bringing ideas to life.",
            href: "/what-we-do#brand-strategy",
          },
        ],
      },
    
      // --- from "Who We Are" ---
      {
        id: "about-us",
        label: "About Us",
        items: [
          {
            title: "Our Story",
            description: "How we started and where we're headed.",
            href: "/who-we-are#our-story",
          },
          {
            title: "Mission & Vision",
            description: "The purpose and direction that drives everything we do.",
            href: "/who-we-are#mission",
          },
          {
            title: "Our Values",
            description: "The principles we hold ourselves accountable to.",
            href: "/who-we-are#values",
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
            href: "/who-we-are#team",
          },
          {
            title: "Life at SquareLabs",
            description: "Culture, environment, and what it feels like to work here.",
            href: "/who-we-are#life",
          },
          {
            title: "Careers",
            description: "Bringing ideas to visual life — join us.",
            href: "/who-we-are#careers",
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
            href: "/who-we-are#testimonials",
          },
          {
            title: "Partners",
            description: "The trusted partners we collaborate with.",
            href: "/who-we-are#partners",
          },
          {
            title: "Press & Media",
            description: "Coverage, announcements, and media resources.",
            href: "/who-we-are#press",
          },
        ],
      },
    ],
    // Resources lives here instead of taking its own nav slot
    featured: {
      title: "Explore our Resources",
      description: "Blog posts, case studies, and guides to help you plan your next project.",
      href: "/resources",
      ctaLabel: "Browse resources",
    },
  },
};