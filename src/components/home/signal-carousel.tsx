"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Linkedin, DollarSign, EarthIcon, FileSpreadsheet } from "lucide-react";

export default function SignalCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const signals = [
    {
      icon: <Linkedin className="size-6 text-[#0A66C2]" />,
      text: "A new company launched Ad Campaign",
    },
    {
      icon: <Linkedin className="size-6 text-[#0A66C2]" />,
      text: "A post on a certain topic among your network or outside of it",
    },
    {
      icon: (
        <Image src="/kickstarter.svg" alt="hiring" width={46} height={46} />
      ),
      text: "pledged 100% on Kickstarter",
    },
    {
      icon: <DollarSign className="size-6 text-[#0A66C2]" />,
      text: "A company attracted investment",
    },
    {
      icon: <EarthIcon className="size-6 text-[#0A66C2]" />,
      text: "A company announced the purchase of green credits",
    },
    {
      icon: <EarthIcon className="size-6 text-[#0A66C2]" />,
      text: "A company announced plans to open a warehouse",
    },
    {
      icon: <Image src="/hiring.svg" alt="hiring" width={52} height={52} />,
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
    <section className="py-24 relative before:-z-10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-purple-200/80 before:via-pink-200/60 before:to-purple-200/80 before:animate-gradient-shift before:opacity-75 overflow-hidden">
      <div className="container mx-auto flex h-full flex-col overflow-hidden">
        {/* Heading */}
        <div className="w-full pt-16 pb-8 px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Some examples of{" "}
              <span className="bg-gradient-to-r from-[#792abf] to-[#522faa] text-transparent bg-clip-text">
                signals we can track
              </span>
            </h2>
          </div>
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
                  <div className="p-4 bg-[#f5f5ff] rounded-full flex items-center justify-center w-14 h-14">
                    <div className="w-7 h-7 flex items-center justify-center">
                      {signal.icon}
                    </div>
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
    </section>
  );
}
