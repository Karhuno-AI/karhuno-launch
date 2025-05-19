"use client";
import React, { useEffect, useRef } from "react";
import {
  Headset,
  Radar,
  BarChart,
  Megaphone,
  Briefcase,
  Search,
  User,
  Clock,
  Search as MagnifyingGlass,
} from "lucide-react";
import EarlyAccessCTA from "@/components/home/EarlyAccessCTA";

const WhoItsFor: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const connectorsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the index of the card that's intersecting
          const index = cardsRef.current.findIndex(
            (card) => card === entry.target
          );
          if (index >= 0) {
            // Add visible class to the card and its connector
            entry.target.classList.add("opacity-100", "translate-x-0");
            connectorsRef.current[index]?.classList.add(
              "h-full",
              "opacity-100"
            );
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe all cards
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Card data
  const cards = [
    {
      title: "For SDRs & Sales Teams",
      description:
        "Stop sending cold emails to random lists. Reach out when companies show signs of buying — on LinkedIn or across the web.",
      bgColor: "bg-[#99edcd]",
      borderColor: "border-[#49937d]",
      side: "left",
      icons: (
        <>
          <Headset size={22} className="text-[#49937d]" />
          <Radar size={22} className="text-[#49937d] ml-1" />
        </>
      ),
    },
    {
      title: "For B2B Marketers",
      description:
        "Align campaigns with real market movement — like funding rounds or pain-point posts on LinkedIn.",
      bgColor: "bg-[#d8c4f4]",
      borderColor: "border-[#792abf]",
      side: "right",
      icons: (
        <>
          <BarChart size={22} className="text-[#792abf]" />
          <Megaphone size={22} className="text-[#792abf] ml-1" />
        </>
      ),
    },
    {
      title: "For Agencies",
      description:
        'Spot signals like "need help with SEO" or "scaling outbound" — and get to the client before your competitors do.',
      bgColor: "bg-[#f5f5f5]",
      borderColor: "border-[#a947e7]",
      side: "left",
      icons: (
        <>
          <Briefcase size={22} className="text-[#a947e7]" />
          <Search size={22} className="text-[#a947e7] ml-1" />
        </>
      ),
    },
    {
      title: "For Founders & Consultants",
      description:
        "No sales team? No problem. We'll show you when the timing is right — and who's ready.",
      bgColor: "bg-[#99edcd]",
      borderColor: "border-[#49937d]",
      side: "right",
      icons: (
        <>
          <User size={22} className="text-[#49937d]" />
          <Clock size={22} className="text-[#49937d] ml-1" />
        </>
      ),
    },
    {
      title: "For Recruiters",
      description:
        "See who's hiring or scaling — before job boards even know. Get early access to talent and decision-makers.",
      bgColor: "bg-[#d8c4f4]",
      borderColor: "border-[#792abf]",
      side: "left",
      icons: (
        <>
          <MagnifyingGlass size={22} className="text-[#792abf]" />
          <Briefcase size={22} className="text-[#792abf] ml-1" />
        </>
      ),
    },
  ];

  return (
    <section
      id="who-its-for"
      ref={sectionRef}
      className="py-10 sm:py-16 relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-200/80 before:via-pink-200/60 before:to-purple-200/80 before:animate-gradient-shift before:opacity-75 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Who It&apos;s for</h2>
        </div>

        {/* Vertical Timeline Line - even shorter to prevent overlap with CTA */}
        <div className="absolute left-1/2 top-20 bottom-[250px] sm:bottom-[400px] transform -translate-x-1/2 w-1 bg-[#a947e7] bg-opacity-80 z-10 hidden sm:block"></div>

        {/* Cards with connectors */}
        <div className="relative z-20">
          {cards.map((card, index) => (
            <div key={index} className="relative mb-6 sm:mb-10">
              {/* Card */}
              <div className="flex justify-center items-center">
                <div
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className={`w-full md:w-5/12 ${card.bgColor} rounded-xl shadow-lg p-4 sm:p-5 md:p-6 border-2 ${card.borderColor} 
                    transition-all duration-700 ease-out opacity-0 ${
                      card.side === "left"
                        ? "md:mr-auto md:-translate-x-8"
                        : "md:ml-auto md:translate-x-8"
                    }`}
                  style={{ transitionDelay: `${200 * index}ms` }}
                >
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="flex p-1.5 sm:p-2 bg-white bg-opacity-60 rounded-lg mr-2 sm:mr-3">
                      {card.icons}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#222]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Timeline Node */}
              <div
                className={`absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#a947e7] z-20 hidden sm:block`}
              ></div>
            </div>
          ))}
        </div>

        {/* Final CTA Block with updated background color */}
        <div className="text-center mt-8 sm:mt-16 max-w-2xl mx-auto px-4 relative z-20">
          <EarlyAccessCTA />
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
