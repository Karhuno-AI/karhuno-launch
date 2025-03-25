"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Linkedin, DollarSign, EarthIcon, FileSpreadsheet } from "lucide-react";

export default function SignalCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const signals = [
    {
      icon: <Linkedin className="h-10 w-10 text-[#0A66C2]" />,
      text: "A new company launched Ad Campaign",
    },
    {
      icon: <Linkedin className="h-10 w-10 text-[#0A66C2]" />,
      text: "A post on a certain topic among your network or outside of it",
    },
    {
      icon: <Linkedin className="h-10 w-10 text-[#0A66C2]" />,
      text: "The product pledged >100%.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#a095f5]" />,
      text: "A company attracted investment",
    },
    {
      icon: <EarthIcon className="h-10 w-10 text-[#a095f5]" />,
      text: "A company announced the purchase of green credits",
    },
    {
      icon: <EarthIcon className="h-10 w-10 text-[#a095f5]" />,
      text: "A company announced plans to open a warehouse",
    },
    {
      icon: (
        <Image
          src="/hiring.png"
          alt="hiring"
          width={42}
          height={42}
          className="h-10 w-10 filter brightness-0 invert-[20%] opacity-100"
        />
      ),
      text: "A company is hiring a biochemist",
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-[#a095f5]" />,
      text: "Competitor's client list",
    },
  ];

  const repeated = [...signals, ...signals, ...signals]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
  
    let animationFrameId: number
    let lastTime = performance.now()
    const speed = 0.08 
  
    const scroll = (time: number) => {
      const delta = time - lastTime
      lastTime = time
  
      container.scrollLeft += delta * speed
  
      if (container.scrollLeft >= container.scrollWidth / 3) {
        container.scrollLeft = 0
      }
  
      animationFrameId = requestAnimationFrame(scroll)
    }
  
    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])
  

  return (
    <div className="h-screen w-full overflow-hidden relative before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-purple-200/60 before:via-pink-200/60 before:to-purple-200/60">
      <div className="container mx-auto flex h-full flex-col overflow-hidden">
        {/* Heading */}
        <div className="w-full pt-16 pb-8 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800">
            Some examples of signals we can{" "}
            <span className="text-[#8a4fff]">track</span>
          </h1>
        </div>

        {/* Scrolling container */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-8 w-full overflow-x-scroll no-scrollbar transform-gpu p-4"
          >
            {repeated.map((signal, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 transform-gpu"
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="p-4 bg-[#f5f5ff] rounded-full">
                    {signal.icon}
                  </div>
                  <p className="text-lg font-medium text-gray-700">
                    {signal.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
