import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";

import EnterpriseSvg from "../assets/ourWorkPage/enterprise.svg";
import EducationSvg from "../assets/ourWorkPage/education.svg";
import FinanceSvg from "../assets/ourWorkPage/finance.svg";
import HealthCareSvg from "../assets/ourWorkPage/healthcare.svg";
import HospitalitySvg from "../assets/ourWorkPage/Hospitality.svg";
import RetailSvg from "../assets/ourWorkPage/retail.svg";
import StartUpSvg from "../assets/ourWorkPage/startup.svg";
import TechnologySvg from "../assets/ourWorkPage/technology.svg";

import food from "../assets/ourWorkPage/food.avif";
import hospital from "../assets/ourWorkPage/hospital.png";
import neobank from "../assets/ourWorkPage/neobank.png";
import food2 from "../assets/ourWorkPage/food.png";
import fashion from "../assets/ourWorkPage/fashion.png";
import booking from "../assets/ourWorkPage/booking.png";

// ------------ Industries Worked With ---------

interface Industry {
  id: number;
  title: string;
  icon: string;
}

export const IndustriesWorkedWith: Industry[] = [
  { id: 1, title: "Finance", icon: FinanceSvg },
  { id: 2, title: "Technology", icon: TechnologySvg },
  { id: 3, title: "Healthcare", icon: HealthCareSvg },
  { id: 4, title: "Hospitality", icon: HospitalitySvg },
  { id: 5, title: "Retail", icon: RetailSvg },
  { id: 6, title: "Startups", icon: StartUpSvg },
  { id: 7, title: "Enterprise", icon: EnterpriseSvg },
  { id: 8, title: "Education", icon: EducationSvg },
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
  image: StaticImageData;
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
    image: neobank,
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
    image: neobank,
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
    image: fashion,
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
    image: hospital,
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
    image: food,
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
    image: neobank,
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
    image: food,
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
    image: booking,
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
    image: food2,
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
    image: fashion,
    tags: [
      { label: "FINTECH", variant: "primary" },
      { label: "MOBILE", variant: "outline" },
    ],
    categories: ["mobile-apps", "ui-ux", "digital-solutions"],
    caseStudyUrl: "/work/paywave",
  },
];