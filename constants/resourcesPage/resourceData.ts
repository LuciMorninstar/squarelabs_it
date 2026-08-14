
import type { Tab } from "@/components/CategoryTabs";

export interface Article {
  id: number;
  category: Exclude<Tab, "All">;
  image: string;
  date: string;
  title: string;
  description: string;
}

export const articles: Article[] = [
  // ==========================
  // CASE STUDY
  // ==========================
  {
    id: 1,
    category: "Case Study",
    image: "/images/resourcesPage/BackOne.png",
    date: "12 Jun, 2026",
    title: "Why User Experience Matters More Than Ever",
    description:
      "In a saturated market, UX is no longer a luxury—it's the primary differentiator between successful digital products.",
  },
  {
    id: 2,
    category: "Case Study",
    image: "/images/resourcesPage/BackTwo.png",
    date: "10 Jun, 2026",
    title: "Improving Banking UX Through Research",
    description:
      "A deep dive into how research and usability testing transformed the customer journey for a digital banking platform.",
  },
  {
    id: 3,
    category: "Case Study",
    image:"/images/resoucesPage/BackThree.png",
    date: "8 Jun, 2026",
    title: "Designing Better Customer Journeys",
    description:
      "Discover how thoughtful user flows and design systems improve customer satisfaction and retention.",
  },

  // ==========================
  // TECHNOLOGY & TRENDS
  // ==========================
  {
    id: 4,
    category: "Technology & Trends",
    image:"/images/resourcesPage/BackFour.png",
    date: "6 Jun, 2026",
    title: "Building Scalable Web Applications",
    description:
      "Learn the architecture and technologies required to build web applications that scale to millions of users.",
  },
  {
    id: 5,
    category: "Technology & Trends",
    image: "/images/resourcesPage/BackFive.png",
    date: "4 Jun, 2026",
    title: "React Performance Best Practices",
    description:
      "Explore optimization techniques including lazy loading, memoization, and code splitting for React apps.",
  },
  {
    id: 6,
    category: "Technology & Trends",
    image:"/images/resourcesPage/BackSix.png",
    date: "2 Jun, 2026",
    title: "The Rise of Edge Computing",
    description:
      "Understand how edge computing is improving application performance and reducing latency worldwide.",
  },

  // ==========================
  // BRANDING
  // ==========================
  {
    id: 7,
    category: "Branding",
    image: "/images/resourcesPage/BackTwo.png",
    date: "30 May, 2026",
    title: "Creating Brands That Inspire Trust",
    description:
      "Strong branding builds customer confidence through consistency, storytelling, and memorable experiences.",
  },
  {
    id: 8,
    category: "Branding",
    image:"/images/resourcesPage/BackThree.png",
    date: "28 May, 2026",
    title: "Visual Identity That Stands Out",
    description:
      "Typography, color palettes, and imagery play a vital role in creating impactful visual identities.",
  },
  {
    id: 9,
    category: "Branding",
    image: "/images/resourcesPage/BackOne.png",
    date: "25 May, 2026",
    title: "Brand Strategy for Growing Businesses",
    description:
      "Learn how successful businesses position themselves through strategic branding and communication.",
  },

  // ==========================
  // MARKETING
  // ==========================
  {
    id: 10,
    category: "Marketing",
    image: "/images/resourcesPage/BackFour.png",
    date: "22 May, 2026",
    title: "Modern Digital Marketing Strategies",
    description:
      "Explore effective marketing techniques using SEO, social media, email campaigns, and paid advertising.",
  },
  {
    id: 11,
    category: "Marketing",
    image: "/images/resourcesPage/BackFive.png",
    date: "20 May, 2026",
    title: "Content Marketing That Converts",
    description:
      "Create valuable content that attracts audiences, builds trust, and increases customer conversions.",
  },
  {
    id: 12,
    category: "Marketing",
    image: "/images/resourcesPage/BackSix.png",
    date: "18 May, 2026",
    title: "Social Media Trends in 2026",
    description:
      "Discover how businesses leverage short-form videos, communities, and influencers for growth.",
  },

  // ==========================
  // CONTENT CREATION
  // ==========================
  {
    id: 13,
    category: "Content Creation",
    image: "/images/resourcesPage/BackSix.png",
    date: "15 May, 2026",
    title: "Creating High-Impact Digital Content",
    description:
      "Learn storytelling techniques that keep readers engaged and encourage sharing across platforms.",
  },
  {
    id: 14,
    category: "Content Creation",
    image: "/images/resourcesPage/BackTwo.png",
    date: "12 May, 2026",
    title: "Video Content That Engages",
    description:
      "Video continues to dominate digital platforms. Learn how to produce engaging visual stories.",
  },
  {
    id: 15,
    category: "Content Creation",
    image: "/images/resourcesPage/BackOne.png",
    date: "10 May, 2026",
    title: "Writing Blogs That Rank",
    description:
      "Write SEO-friendly blog posts that answer user intent while improving search engine visibility.",
  },

  // ==========================
  // TOOLS
  // ==========================
  {
    id: 16,
    category: "Tools",
    image: "/images/resourcesPage/BackFour.png",
    date: "8 May, 2026",
    title: "Top AI Tools for Developers",
    description:
      "Boost productivity using AI-powered coding assistants, testing tools, and automation platforms.",
  },
  {
    id: 17,
    category: "Tools",
    image: "/images/resourcesPage/BackFive.png",
    date: "5 May, 2026",
    title: "Essential Design Tools in 2026",
    description:
      "Discover the design, prototyping, and collaboration tools modern product teams rely on every day.",
  },
  {
    id: 18,
    category: "Tools",
    image: "/images/resourcesPage/BackSix.png",
    date: "2 May, 2026",
    title: "Productivity Apps Every Team Needs",
    description:
      "From project management to documentation, these tools help teams collaborate more efficiently.",
  },
];