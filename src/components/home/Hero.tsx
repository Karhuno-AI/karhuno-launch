"use client";
import React, { useState } from "react";
import {
  Globe,
  MessageSquare,
  Search,
  Filter,
  Users,
  Contact,
  Mail,
  Tag,
  Linkedin,
  SlidersHorizontal,
  Radar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const handleCardFlip = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  const handleMouseEnter = (index: number) => {
    // Only flip on hover for desktop
    if (window.innerWidth >= 768) {
      setFlippedCard(index);
    }
  };

  const handleMouseLeave = () => {
    // Only reset on hover for desktop
    if (window.innerWidth >= 768) {
      setFlippedCard(null);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full text-black min-h-[85vh] md:min-h-screen mt-16 md:mt-20 flex relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-100 opacity-60"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-0 relative z-10 flex justify-center items-center py-8 md:py-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            {/* Hero Content Left Side */}
            <div className="w-full md:w-1/2 text-left">
              {/* Early Adopter Label - NEW */}
              <div className="mb-4">
                <span className="text-sm font-semibold bg-[#E5D8FF]/60 text-primary px-4 py-1.5 rounded-full inline-flex items-center">
                  🚀 For early adopters
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="text-black">Stop Searching</span>, <br />
                <span className="bg-gradient-to-r from-[#792abf] to-[#522faa] text-transparent bg-clip-text">Start Selling</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl mb-6 text-black/80">
                From live signals to perfect-fit leads — with filtering
                flexibility you won&apos;t find anywhere else.
              </p>

              {/* Updated button with icon */}
              <Button
                className="px-6 sm:px-8 py-4 sm:py-7 transition-all text-base sm:text-lg font-bold flex items-center gap-2 shadow-md"
                variant="accent"
                size="xl"
                onClick={() => scrollToSection("early-access")}
              >
                <Mail size={18} />
                Claim Your Free Access
              </Button>

              <p className="mt-4 text-sm text-black/80 ">
                First 100 users get free access.
              </p>
            </div>

            {/* Hero Illustration Right Side - KEEPING AS IS for desktop but optimized for mobile */}
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
              <div className="relative w-full max-w-[320px] md:w-[32rem] md:h-[32rem] sm:max-w-[400px] md:max-w-none aspect-square md:aspect-auto">
                <Image
                  src="/images/image1.png"
                  alt="Karhuno Radar"
                  className="w-full h-full object-contain"
                  fill
                  priority
                />
              </div>
            </div>
          </div>

          {/* FOMO Block removed as requested earlier */}
        </div>
      </section>

      {/* How It Works Section - Keep everything below the same */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">
              How Karhuno AI works
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Track real buying signals — from LinkedIn or across the web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 - Set Your Topics - Keeping as is as requested */}
            <div
              className="perspective-1000 h-80 cursor-pointer"
              onClick={() => handleCardFlip(0)}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`rounded-xl shadow-lg h-full transition-all duration-500 transform-style-preserve-3d relative ${flippedCard === 0 ? "rotate-y-180" : ""}`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 bg-[#99edcd] rounded-xl p-6 sm:p-8 backface-hidden flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-6 relative">
                    <Search size={28} className="text-[#49937d] absolute" />
                    <Tag
                      size={20}
                      className="text-[#49937d] absolute bottom-2 right-2"
                    />
                    <div className="absolute -bottom-3 -right-3">
                      <Globe size={16} className="text-[#49937d]" />
                    </div>
                    <div className="absolute -bottom-3 -left-3">
                      <MessageSquare size={16} className="text-[#49937d]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1a1a1a] text-center ">
                    Step 1 – Add Your Topics
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/70 text-center ">
                    Define what triggers you want to track
                  </p>
                  <div className="mt-4 text-xs text-[#1a1a1a]/60 ">
                    {flippedCard === 0 ? "Tap to return" : "Tap for details"}
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-white rounded-xl p-6 sm:p-8 backface-hidden rotate-y-180 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-[#1a1a1a]">
                      Add Your Topics
                    </h4>
                    <p className="text-sm text-[#1a1a1a]/80 mb-6 ">
                      Tell us what you&apos;re interested in — like &quot;Hiring
                      SDRs&quot;, &quot;Series A Funding&quot;, or &quot;CRM
                      migration&quot;. We track both LinkedIn posts and web
                      signals matching your input.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1 bg-white border border-[#49937d] rounded-full text-xs text-[#333] ">
                      &quot;hiring SDRs&quot;
                    </div>
                    <div className="px-3 py-1 bg-white border border-[#49937d] rounded-full text-xs text-[#333] ">
                      &quot;Series A&quot;
                    </div>
                    <div className="px-3 py-1 bg-white border border-[#49937d] rounded-full text-xs text-[#333] ">
                      &quot;CRM migration&quot;
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <span className="text-xs text-[#49937d] cursor-pointer hover:underline ">
                      Tap to flip back
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Filter & Focus - Fixing duplication and improving responsiveness */}
            <div
              className="perspective-1000 h-80 cursor-pointer"
              onClick={() => handleCardFlip(1)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`rounded-xl shadow-lg h-full transition-all duration-500 transform-style-preserve-3d relative ${flippedCard === 1 ? "rotate-y-180" : ""}`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 bg-[#d8c4f4] rounded-xl p-6 sm:p-8 backface-hidden flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-6 relative">
                    <Filter size={28} className="text-[#792abf] absolute" />
                    <SlidersHorizontal
                      size={16}
                      className="text-[#792abf] absolute -bottom-2 -right-2"
                    />
                    <Users
                      size={16}
                      className="text-[#792abf] absolute -bottom-2 -left-2"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1a1a1a] text-center">
                    Step 2 – Filter & Focus
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/70 text-center">
                    Find exactly who you&apos;re looking for
                  </p>
                  <div className="mt-4 text-xs text-[#1a1a1a]/60">
                    {flippedCard === 1 ? "Tap to return" : "Tap for details"}
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-white rounded-xl p-6 sm:p-8 backface-hidden rotate-y-180 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-[#1a1a1a]">
                      Filter & Focus
                    </h4>
                    <p className="text-sm text-[#222]/80 mb-6">
                      Apply enterprise-grade filters to surface the leads that
                      truly matter. From job titles to funding stage, hiring
                      trends, tech stack, industry focus, and even behavioral
                      signals — Karhuno builds a lead list that fits your ICP
                      with surgical precision.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1 bg-white border border-[#792abf] rounded-full text-xs text-[#222] ">
                      Tech stack: HubSpot
                    </div>
                    <div className="px-3 py-1 bg-white border border-[#792abf] rounded-full text-xs text-[#222] ">
                      Industry: Fintech
                    </div>
                    <div className="px-3 py-1 bg-white border border-[#792abf] rounded-full text-xs text-[#222] ">
                      Funding: Series A
                    </div>
                    <div className="px-3 py-1 bg-white border border-[#792abf] rounded-full text-xs text-[#222] ">
                      Behavior: Active Hiring
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <span className="text-xs text-[#792abf] cursor-pointer hover:underline ">
                      Tap to flip back
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Get Actionable Leads */}
            <div
              className="perspective-1000 h-80 cursor-pointer"
              onClick={() => handleCardFlip(2)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`rounded-xl shadow-lg h-full transition-all duration-500 transform-style-preserve-3d relative ${flippedCard === 2 ? "rotate-y-180" : ""}`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 bg-[#f5f5f5] rounded-xl p-6 sm:p-8 backface-hidden flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-200/80 flex items-center justify-center mb-6 relative">
                    <Contact size={28} className="text-[#a947e7] absolute" />
                    <Radar
                      size={16}
                      className="text-[#a947e7] absolute -bottom-2 -right-2"
                    />
                    <Mail
                      size={16}
                      className="text-[#a947e7] absolute -bottom-2 -left-2"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1a1a1a] text-center">
                    Step 3 – Get Actionable Leads
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/70 text-center ">
                    Ready to contact with full context
                  </p>
                  <div className="mt-4 text-xs text-[#1a1a1a]/60 ">
                    {flippedCard === 2 ? "Tap to return" : "Tap for details"}
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-white rounded-xl p-6 backface-hidden rotate-y-180 flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-[#1a1a1a] ">
                      Get Actionable Leads
                    </h4>
                    <p className="text-sm text-[#1a1a1a]/80 mb-4 ">
                      Receive a curated list of outreach-ready contacts — with
                      full context and verified details — or request deeper
                      research for strategic insights tailored to your sales
                      team.
                    </p>
                  </div>

                  <div className="space-y-3 mt-2">
                    {/* Lead example 1 with better formatting */}
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-medium ">Jane Doe</span>
                        <span className="text-gray-400 mx-0.5">–</span>
                        <span className="text-[#a947e7]">
                          &quot;Looking for consultants&quot;
                        </span>
                        <span className="text-gray-400 mx-0.5">–</span>
                        <span>CMO</span>
                        <span className="ml-auto flex items-center gap-1">
                          <Linkedin size={12} className="text-[#a947e7]" />
                          <Mail size={12} className="text-[#a947e7]" />
                        </span>
                      </div>
                    </div>

                    {/* Lead example 2 with better formatting */}
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-medium ">Alex Rivera</span>
                        <span className="text-gray-400 mx-0.5">–</span>
                        <span className="text-[#a947e7]">
                          &quot;CRM migration&quot;
                        </span>
                        <span className="text-gray-400 mx-0.5">–</span>
                        <span>VP Sales</span>
                        <span className="ml-auto flex items-center gap-1">
                          <Globe size={12} className="text-[#a947e7]" />
                          <Mail size={12} className="text-[#a947e7]" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-5">
                    <span className="text-xs text-[#a947e7] cursor-pointer hover:underline ">
                      Tap to flip back
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
