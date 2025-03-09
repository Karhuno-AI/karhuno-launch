"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    id: "logtech",
    label: "LogTech",
    product: "Energy-Efficient Lighting for Warehouses",
    signalSearch: [
      "Announcements of plans or the launch of cold storage warehouses.",
    ],
    image:
      "/images/Logtech.webp",
  },
  {
    id: "hrtech",
    label: "HRTech",
    product: "HR Gamification Platform",
    signalSearch: [
      "Companies publicly emphasizing a focus on corporate entrepreneurship",
      "Teams that have implemented SCRUM",
    ],
    image:
      "/images/HRTech.webp",
  },
  {
    id: "legaltech",
    label: "LegalTech",
    product: "IP platform",
    signalSearch: [
      "Projects that have successfully completed crowdfunding campaigns",
    ],
    image:
      "/images/LegalTech.webp",
  },
  {
    id: "greentech",
    label: "GreenTech",
    product: "Energy management software",
    signalSearch: [
      "Companies that have invested in energy-efficient technologies",
    ],
    image:
      "/images/GreenTech.webp",
  },
  {
    id: "fintech",
    label: "FinTech",
    product: "Money transfer service",
    signalSearch: ["Currently active fintech companies in UAE"],
    image:
      "/images/Fintech.webp",
  },
  {
    id: "martech",
    label: "MarTech",
    product: "Marketing services",
    signalSearch: [
      "HoReCa companies from Brazil with rapidly growing Instagram accounts",
    ],
    image:
      "/images/MarTech.webp",
  },
];

interface CaseStudiesProps {
  id?: string;
}

export default function CaseStudies({id}: CaseStudiesProps) {
  const [activeTab, setActiveTab] = useState("logtech");
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isVisible && isAutoPlaying) {
      timer = setInterval(() => {
        setActiveTab((prevTab) => {
          const currentIndex = caseStudies.findIndex(
            (study) => study.id === prevTab
          );
          const nextIndex = (currentIndex + 1) % caseStudies.length;
          return caseStudies[nextIndex].id;
        });
      }, 4000);
    }

    return () => clearInterval(timer);
  }, [isVisible, isAutoPlaying]);

  return (
    <section
      id={id}
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              id="Gradient1"
              cx="50%"
              cy="50%"
              fx="0.441602%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="34s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              ></animate>
              <stop offset="0%" stopColor="rgba(255, 0, 255, 1)"></stop>
              <stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop>
            </radialGradient>
            <radialGradient
              id="Gradient2"
              cx="50%"
              cy="50%"
              fx="2.68147%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="23.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              ></animate>
              <stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop>
              <stop offset="100%" stopColor="rgba(255, 255, 0, 0)"></stop>
            </radialGradient>
            <radialGradient
              id="Gradient3"
              cx="50%"
              cy="50%"
              fx="0.836536%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="21.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              ></animate>
              <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
              <stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop>
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
            <animate
              attributeName="x"
              dur="20s"
              values="25%;0%;25%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="21s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="17s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
            <animate
              attributeName="x"
              dur="23s"
              values="0%;-25%;0%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="24s"
              values="25%;-25%;25%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="18s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
            <animate
              attributeName="x"
              dur="25s"
              values="-25%;0%;-25%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              dur="26s"
              values="0%;-25%;0%"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 50 50"
              to="0 50 50"
              dur="19s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl  text-center mb-8 md:mb-12 text-white">
          Case studies
        </h2>

        <div className="w-full">
          <div className="relative flex overflow-x-scroll scrollbar-hide mb-4 md:mb-8">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
            </div>
            <div className="bg-gray-800 relative flex justify-between rounded-full p-1 mx-auto w-auto lg:w-full">
              {caseStudies.map((study) => (
                <button
                  key={study.id}
                  onClick={() => {
                    setActiveTab(study.id);
                    setIsAutoPlaying(false);
                  }}
                  className={`
                    rounded-full px-4 py-2 text-sm font-medium transition-all flex-grow
                    ${
                      activeTab === study.id
                        ? "bg-indigo-600 text-white"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {study.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {caseStudies.map(
              (study) =>
                study.id === activeTab && (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-8 items-center bg-gray-800 rounded-3xl p-8 shadow-lg"
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Product
                        </h3>
                        <p className="text-gray-300">{study.product}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Signal Search
                        </h3>
                        <ul className="space-y-2">
                          {study.signalSearch.map((signal, index) => (
                            <li
                              key={index}
                              className="text-gray-300 flex items-start gap-2"
                            >
                              <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0" />
                              {signal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        quality={75}
                        src={study.image}
                        alt={`${study.label} case study`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
