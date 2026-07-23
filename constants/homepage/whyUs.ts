
export interface WhyUsCard {
  id: number;
  title: string;
  icon: string;
  desc: string;
}

export const whyUsCards: WhyUsCard[] = [
  {
    id: 1,
    title: "Product Thinking",
    icon: "/images/home/productThinking.png",
    desc: "We combine years of experience with cutting edge tech to deliver high performance software.",
  },
  {
    id: 2,
    title: "Engineering Excellence",
    icon:"/images/home/engineering.png",
    desc: "Every project is tailored to your need, ensuring flexibility and growth as your business expands.",
  },
  {
    id: 3,
    title: "Human-Centric Design",
    icon: "/images/home/humanCentric.png",
    desc: "We prioritize intuitive, clean, and modern UI/UX to enhance usability and enhancement",
  },
  {
    id: 4,
    title: "Long-Term Partnership",
    icon: "/images/home/LongTerm.png",
    desc: "From planning to post-launch maintenance, we guide you at every steps to ensure success.",
  },
  {
    id: 5,
    title: "Business Focused Results",
    icon: "/images/home/Business.png",
    desc: "With 100+ successful projects, we have a reputation for delivering quality, efficiency, and reliability.",
  },
];