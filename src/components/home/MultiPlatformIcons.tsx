"use client";
import React from 'react';
import Image from 'next/image';
const MultiPlatformIcons: React.FC = () => {
  return (
    <section className="py-8 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4 font-roboto">
          Monitor All Relevant Sources in One Place
        </h2>
        
        <div>
          <div className='w-full h-full relative min-h-[300px] flex items-center justify-center'>
            <Image 
              src="/images/72d47789-dbb3-4ec9-ae9c-604060fe6ff0.png" 
              alt="Platform icons including LinkedIn, Crunchbase, Reddit and more" 
              className="w-full max-w-3xl object-cover mx-auto" 
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiPlatformIcons;