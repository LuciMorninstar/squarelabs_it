
// ------------ Industries Worked With ---------

interface Industry {
  id: number;
  title: string;
  icon: string;
}

export const IndustriesWorkedWith: Industry[] = [
  { id: 1, title: "Finance", icon: "/svg/ourWorkPage/finance.svg" },
  { id: 2, title: "Technology", icon:"/svg/ourWorkPage/technology.svg" },
  { id: 3, title: "Healthcare", icon: "/svg/ourWorkPage/healthcare.svg" },
  { id: 4, title: "Hospitality", icon:"/svg/ourWorkPage/Hospitality.svg" },
  { id: 5, title: "Retail", icon: "/svg/ourworkPage/retail.svg" },
  { id: 6, title: "Startups", icon: "/svg/ourWorkPage/startup.svg" },
  { id: 7, title: "Enterprise", icon:"/svg/ourWorkpage/enterprise.svg" },
  { id: 8, title: "Education", icon:"/svg/ourWorkPage/education.svg" },
];

// ------- Explore Our Work ----------

export interface FilterCategory {
  id: string;
  label: string;
}

export const FILTER_CATEGORIES: FilterCategory[] = [
  { id: "all", label: "All" },
  { id: "websites", label: "Websites" },
  { id: "mobile-apps", label: "Mobile Apps" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "branding", label: "Branding" },
  { id: "digital-solutions", label: "Digital Solutions" },
];

export interface Tag {
  label: string;
  variant: "primary" | "outline";
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: Tag[];
  categories: string[];
  caseStudyUrl: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "global-neobank",
    title: "Global NeoBank Ecosystem",
    description:
      "Designing a seamless cross-platform banking experience for digital nomads with instant currency exchange, virtual cards, and social payments.",
    image:"/images/ourWorkPage/neobank.png",
    tags: [
      { label: "FINTECH", variant: "primary" },
      { label: "UI/UX", variant: "outline" },
    ],
    categories: ["websites", "ui-ux"],
    caseStudyUrl: "/work/global-neobank",
  },
  {
    id: "ev-charging-network",
    title: "EV Charging Network",
    description:
      "An IoT-powered platform enabling electric vehicle owners to locate, reserve, and pay for charging stations across Europe.",
    image:"/images/ourWorkPage/neobank.png",
    tags: [
      { label: "AUTOMOTIVE", variant: "primary" },
      { label: "DIGITAL SOLUTION", variant: "outline" },
    ],
    categories: ["mobile-apps", "digital-solutions"],
    caseStudyUrl: "/work/ev-charging-network",
  },
  {
    id: "luxora-fashion",
    title: "Luxora Fashion Marketplace",
    description:
      "A premium eCommerce platform with AI-powered product recommendations, personalized shopping experiences, and streamlined checkout.",
    image: "/images/ourWorkPage/fashion.png",
    tags: [
      { label: "ECOMMERCE", variant: "primary" },
      { label: "WEBSITE", variant: "outline" },
    ],
    categories: ["websites", "branding"],
    caseStudyUrl: "/work/luxora-fashion",
  },
  {
    id: "medlink-health",
    title: "MedLink Healthcare Portal",
    description:
      "A patient-centric healthcare portal supporting appointment booking, medical records, telemedicine, and secure messaging.",
    image: "/images/ourWorkPage/hospital.png",
    tags: [
      { label: "HEALTHCARE", variant: "primary" },
      { label: "UI/UX", variant: "outline" },
    ],
    categories: ["websites", "ui-ux"],
    caseStudyUrl: "/work/medlink-health",
  },
  {
    id: "foodexpress",
    title: "FoodExpress Delivery App",
    description:
      "A modern food delivery application featuring live order tracking, digital payments, loyalty rewards, and driver management.",
    image: "/images/ourWorkPage/food.png",
    tags: [
      { label: "FOOD", variant: "primary" },
      { label: "MOBILE", variant: "outline" },
    ],
    categories: ["mobile-apps", "ui-ux"],
    caseStudyUrl: "/work/foodexpress",
  },
  {
    id: "nova-brand",
    title: "NovaTech Brand Identity",
    description:
      "Complete branding system including logo design, typography, visual language, marketing assets, and brand guidelines.",
    image:"/images/ourWorkPage/neobank.png",
    tags: [
      { label: "BRANDING", variant: "primary" },
      { label: "DESIGN", variant: "outline" },
    ],
    categories: ["branding"],
    caseStudyUrl: "/work/nova-brand",
  },
  {
    id: "smartfactory",
    title: "Smart Factory Dashboard",
    description:
      "A real-time industrial monitoring platform visualizing machine performance, predictive maintenance, and production analytics.",
    image: "/images/ourWorkPage/food.png",
    tags: [
      { label: "INDUSTRY 4.0", variant: "primary" },
      { label: "DIGITAL", variant: "outline" },
    ],
    categories: ["digital-solutions", "ui-ux"],
    caseStudyUrl: "/work/smartfactory",
  },
  {
    id: "travelmate",
    title: "TravelMate Booking Platform",
    description:
      "An end-to-end travel platform for booking flights, hotels, activities, and personalized itineraries with AI trip planning.",
    image: "/images/ourWorkPage/booking.png",
    tags: [
      { label: "TRAVEL", variant: "primary" },
      { label: "WEB APP", variant: "outline" },
    ],
    categories: ["websites", "mobile-apps"],
    caseStudyUrl: "/work/travelmate",
  },
  {
    id: "learnhub",
    title: "LearnHub eLearning Platform",
    description:
      "A scalable LMS supporting live classes, interactive quizzes, certificates, student analytics, and instructor dashboards.",
    image: "/images/ourWorkPage/food.png",
    tags: [
      { label: "EDTECH", variant: "primary" },
      { label: "DIGITAL", variant: "outline" },
    ],
    categories: ["websites", "digital-solutions"],
    caseStudyUrl: "/work/learnhub",
  },
  {
    id: "paywave",
    title: "PayWave Mobile Wallet",
    description:
      "A secure digital wallet enabling instant transfers, QR payments, expense tracking, and multi-currency transactions.",
    image: "/images/ourWorkPage/fashion.png",
    tags: [
      { label: "FINTECH", variant: "primary" },
      { label: "MOBILE", variant: "outline" },
    ],
    categories: ["mobile-apps", "ui-ux", "digital-solutions"],
    caseStudyUrl: "/work/paywave",
  },
];