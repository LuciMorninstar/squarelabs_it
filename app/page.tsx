import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Partners from "@/components/Partners";
import WhatWeDo from "@/components/WhatWeDo";
import OurInsights from "@/components/OurInsights";
import WhyUs from "@/components/WhyUs";
import TrustSection from "@/components/TrustSection";

export default function Home() {

  return (
    <>
    <HeroSection/>
    <Partners/>
    <WhatWeDo/>
    <OurInsights/>
    <WhyUs/>
    <TrustSection/>


    </>
  );
}
