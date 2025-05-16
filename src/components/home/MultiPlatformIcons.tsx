"use client";
import React from "react";
import Image from "next/image";
const MultiPlatformIcons: React.FC = () => {
  return (
    <section className="py-16 relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-200/80 before:via-pink-200/60 before:to-transparent before:animate-gradient-shift before:opacity-75 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
          Monitor all relevant sources in one place
        </h2>

        <div>
          <div className="w-full h-full relative min-h-[300px] flex items-center justify-center">
            <Image
              src="/images/72d47789-dbb3-4ec9-ae9c-604060fe6ff0.png"
              alt="Platform icons including LinkedIn, Crunchbase, Reddit and more"
              className="w-full max-w-3xl object-cover mx-auto"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiPlatformIcons;
