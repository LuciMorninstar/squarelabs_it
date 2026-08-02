"use client";
import SecondWidthWrapper from "./SecondWidthWrapper";
import { useRef, useEffect } from "react";
import { meetTheTeam } from "../constants/whoWeArePage/whoWeAreData";
import MeetTheTeamCard from "@/components/MeetTheTeamCard";
import MeetTheTeamSwiper from "@/components/MeetTheTeamSwiper";

const MeetTheTeam = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll<HTMLElement>(
      "[data-animate]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = "1";
            target.style.transform = "translateY(0) scale(1)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px) scale(0.96)";
      el.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-default-color">
      <SecondWidthWrapper>
        <div
          ref={sectionRef}
          className="w-full pt-5 xl:pt-20 flex flex-col gap-8 lg:gap-12 xl:gap-16"
        >
          {/* top section */}
          <div className="w-full flex flex-col gap-5 items-center">
            <h1 data-animate className="text-text-quarternary-color text-center">
              Meet The <span className="top-bottom-gradient">Team</span>
            </h1>
            <span
              data-animate
              className="text-lg lg:text-xl text-center text-text-sixth-color font-sora"
            >
              The brilliant minds behind the screens, turning complex requiremenets into{" "}
              <br className="hidden lg:block" /> elegant solutions.
            </span>
          </div>
          {/* /top section */}
          {/* mobile: swiper (< sm) */}
          <div data-animate className="sm:hidden">
            <MeetTheTeamSwiper team={meetTheTeam} />
          </div>
          {/* sm and up: grid */}
          <div className="hidden sm:grid grid-cols-2 xl:grid-cols-3 gap-5">
            {meetTheTeam.map((team) => (
              <div
                key={team.id}
                data-animate
                className="team-card-hover rounded-xl"
              >
                <MeetTheTeamCard team={team} />
              </div>
            ))}
          </div>
        </div>
      </SecondWidthWrapper>
    </div>
  );
};

export default MeetTheTeam;