"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Linkedin, DollarSign, EarthIcon, FileSpreadsheet } from "lucide-react";

export default function SignalCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const signals = [
    {
      icon: <Linkedin className="size-7 text-[#0A66C2]" />,
      text: "A new company launched Ad Campaign",
    },
    {
      icon: <Linkedin className="size-7 text-[#0A66C2]" />,
      text: "A post on a certain topic among your network or outside of it",
    },
    {
      icon: (
        <Image
          src="/Kickstarter_logo.svg"
          alt="hiring"
          width={40}
          height={40}
          className="size-10 object-contain filter brightness-0 invert-[20%] sepia saturate-200 hue-rotate-[180deg]"
        />
      ),
      text: "The product pledged >100%.",
    },
    {
      icon: <DollarSign className="size-7 text-[#0A66C2]" />,
      text: "A company attracted investment",
    },
    {
      icon: <EarthIcon className="size-7 text-[#0A66C2]" />,
      text: "A company announced the purchase of green credits",
    },
    {
      icon: <EarthIcon className="size-7 text-[#0A66C2]" />,
      text: "A company announced plans to open a warehouse",
    },
    {
      icon: (
        <Image
          src="/hiring.png"
          alt="hiring"
          width={40}
          height={40}
          className="size-8 object-contain filter brightness-0 invert-[20%] sepia saturate-200 hue-rotate-[180deg]"
        />
      ),
      text: "A company is hiring a biochemist",
    },
    {
      icon: <FileSpreadsheet className="size-7 text-[#0A66C2]" />,
      text: "Competitor's client list",
    },
  ];

  const repeated = [...signals, ...signals, ...signals];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.08;

    const scroll = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isHovered) {
        container.scrollLeft += delta * speed;

        if (container.scrollLeft >= container.scrollWidth / 3) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div className="h-screen w-full overflow-hidden relative bg-gradient-to-tr from-purple-50 via-indigo-100 to-pink-50">
      <div className="container mx-auto flex h-full flex-col overflow-hidden">
        {/* Heading */}
        <div className="w-full pt-16 pb-8 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800">
            Some examples of{" "}
            <span className="text-[#8a4fff]">signals we can track</span>
          </h1>
        </div>

        {/* Scrolling container */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-8 w-full overflow-x-scroll no-scrollbar transform-gpu p-4"
          >
            {repeated.map((signal, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 transform-gpu"
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="p-4 bg-[#f5f5ff] rounded-full flex items-center justify-center">
                    {signal.icon}
                  </div>
                  <p className="text-base font-medium text-gray-700">
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
