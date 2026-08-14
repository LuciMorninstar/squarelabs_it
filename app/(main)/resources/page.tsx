"use client";

import { useState } from "react";
import CategoryTabs, { type Tab } from "@/components/CategoryTabs";
import ResourcesGrid from "@/components/ResourcesGrid";
import DigitalInsights from "@/components/DigitalInsights";
import ResourcesHero from "@/components/ResourcesHero";


export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<Tab>("All");

  return (
    <>
     <ResourcesHero/>
      <div className="mx-5">
        <CategoryTabs
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <ResourcesGrid selectedCategory={selectedCategory} />
      <DigitalInsights />
    </>
  );
}