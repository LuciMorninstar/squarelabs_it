"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import { articles } from "../constants/resourcesPage/resourceData";
import type { Tab } from "./CategoryTabs";

gsap.registerPlugin(ScrollTrigger);

interface ResourcesGridProps {
  selectedCategory: Tab;
}

type CategoryLimits = Partial<Record<Exclude<Tab, "All">, number>>;

const categoryLimits: CategoryLimits = {
  "Case Study": 2,
  "Technology & Trends": 3,
  Branding: 2,
  Marketing: 3,
  "Content Creation": 2,
  Tools: 2,
};

export default function ResourcesGrid({ selectedCategory }: ResourcesGridProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".resource-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reset",
            },
          }
        );
      });

      gsap.fromTo(
        ".load-btn",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".load-btn",
            start: "top 90%",
            toggleActions: "play none none reset",
          },
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  const filteredArticles =
    selectedCategory === "All"
      ? articles.slice(0, 6)
      : articles
          .filter((article) => article.category === selectedCategory)
          .slice(0, categoryLimits[selectedCategory as Exclude<Tab, "All">] || 6);

  return (
    <section ref={sectionRef} className="py-16 mx-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="resource-card rounded-2xl overflow-hidden border-none shadow-sm flex flex-col transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-5"
          >
            <div className="relative w-full h-60">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-sm text-text-secondary-color">{article.date}</p>
              <h3 className="text-2xl text-text-quarternary-color font-bold mt-3">
                {article.title}
              </h3>
              <p className="text-text-secondary-color mt-3 flex-1">
                {article.description}
              </p>
              <button className="group flex items-center gap-2 text-primary-color mt-6">
                Read Article
                <FaArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-600">
            No articles found.
          </h2>
        </div>
      )}

      <div className="flex justify-center mt-16">
        <button className="load-btn bg-primary-color hover:bg-green-600 text-white px-8 py-5 rounded-full transition">
          Load More Article
        </button>
      </div>
    </section>
  );
}