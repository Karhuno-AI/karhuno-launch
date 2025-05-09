"use client";
import React from "react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const useCases = [
  {
    title: "SaaS Founders",
    content:
      'You run a SaaS company and want to find decision-makers actively looking to switch CRMs. With Karhuno, you enter keywords like "migrating from Salesforce" or "CRM overhaul". We track both LinkedIn posts and blog articles mentioning these needs — and deliver the right profiles for outreach.',
  },
  {
    title: "Recruiters",
    content:
      "You're a recruiter trying to get ahead of the hiring curve. Karhuno tracks posts like \"we're hiring a growth lead\" and also scans public job boards and career pages — so you know who's hiring before the role is public.",
  },
  {
    title: "Sales Coaches & Consultants",
    content:
      'You want to help underperforming teams — but only when they\'re talking about it. With Karhuno, you track keywords like "sales team struggling" on LinkedIn, and find web mentions like "seeking sales optimization" in job descriptions or blogs.',
  },
  {
    title: "Marketing Agencies",
    content:
      'You want leads actively seeking help with paid ads, SEO or content. Karhuno detects phrases like "need help with LinkedIn ads" on social posts and "digital strategy revamp" in website updates or press releases.',
  },
  {
    title: "Business Intelligence Teams",
    content:
      'Your job is to monitor the market for shifts in competitor strategy. Karhuno detects events like "Company X opens office in Berlin" or "launches new AI product" from PR announcements and LinkedIn updates.',
  },
  {
    title: "B2B Growth Leaders",
    content:
      'You\'re trying to identify companies entering a high-growth phase. Karhuno catches signs like "added to Crunchbase", "Series A raised" or "joined a new accelerator" — so you reach out at the right moment.',
  },
  {
    title: "Public Sector Consultants",
    content:
      'You want to find SMEs collaborating with public programs. Karhuno detects keywords in tender documents, press releases and LinkedIn comments like "working with PNRR" or "partnered with EU Green Deal".',
  },
];

const RealWorldUseCases: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/50 to-white">
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <defs>
              <radialGradient
                id="faq-grad1"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stop-color="rgba(216, 180, 254, 0.3)"></stop>
                <stop offset="100%" stop-color="rgba(216, 180, 254, 0)"></stop>
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#faq-grad1)">
              <animate
                attributeName="opacity"
                values="0.3;0.5;0.3"
                dur="8s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </svg>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
          Real-World Use Cases
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {useCases.map((useCase, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[#e0e0e0] rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-3 hover:bg-[#f9f9f9] data-[state=open]:bg-[#f9f9f9] text-left font-roboto font-bold text-lg">
                <div className="flex items-center">
                  <div className="mr-3 text-violet">
                    <Plus className="h-5 w-5 transition-opacity text-primary duration-300 ease-in-out data-[state=closed]:opacity-100 data-[state=open]:opacity-0 data-[state=open]:hidden" />
                    <Minus className="h-5 w-5 transition-opacity text-primary duration-300 ease-in-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100 data-[state=closed]:hidden" />
                  </div>
                  <span>{useCase.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1 font-montserrat text-base">
                {useCase.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default RealWorldUseCases;
