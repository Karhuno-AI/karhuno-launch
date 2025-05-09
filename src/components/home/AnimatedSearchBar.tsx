"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

// Define the search queries to cycle through
const searchQueries = [
  "Companies opening a new office in Germany",
  "Startups recently raised Series A funding",
  "Heads of Sales asking about CRM migration",
  "CTOs posting about hiring backend developers"
];

const AnimatedSearchBar: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [queryIndex, setQueryIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const currentTextRef = useRef('');
  const currentIndexRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Animation speed settings
  const typingSpeed = 80;  // Time between typing characters (ms)
  const eraseSpeed = 30;   // Time between erasing characters (ms)
  const pauseBeforeErasing = 1800; // How long to pause before erasing (ms)
  const pauseBeforeTyping = 800;   // How long to pause before typing the next query (ms)

  useEffect(() => {
    // Clean up any existing timer
    if (timerRef.current) clearTimeout(timerRef.current);

    const animateText = () => {
      // If we're typing
      if (isTyping) {
        const currentQuery = searchQueries[queryIndex];
        
        if (currentIndexRef.current < currentQuery.length) {
          // Add the next character
          currentTextRef.current = currentQuery.substring(0, currentIndexRef.current + 1);
          setDisplayText(currentTextRef.current);
          currentIndexRef.current++;
          
          timerRef.current = setTimeout(animateText, typingSpeed);
        } else {
          // Finished typing, pause before erasing
          setIsTyping(false);
          timerRef.current = setTimeout(animateText, pauseBeforeErasing);
        }
      } 
      // If we're erasing
      else {
        if (currentIndexRef.current > 0) {
          // Remove the last character
          currentIndexRef.current--;
          currentTextRef.current = currentTextRef.current.substring(0, currentIndexRef.current);
          setDisplayText(currentTextRef.current);
          
          timerRef.current = setTimeout(animateText, eraseSpeed);
        } else {
          // Finished erasing, move to next query and start typing again
          setIsTyping(true);
          setQueryIndex((prevIndex) => (prevIndex + 1) % searchQueries.length);
          timerRef.current = setTimeout(animateText, pauseBeforeTyping);
        }
      }
    };

    // Start animation
    timerRef.current = setTimeout(animateText, 500);

    // Clean up on unmount
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [queryIndex, isTyping]);

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-[#a947e7] to-[#792abf] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-roboto">
          See what Karhuno can find for you
        </h2>
        
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="flex items-center bg-white bg-opacity-95 rounded-xl px-6 py-4 shadow-lg">
            <Search className="text-gray-400 mr-4" size={24} />
            <div className="flex-1 text-left">
              <p className="text-lg text-gray-800 h-8 flex items-center">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-[#9b87f5] ml-0.5 animate-pulse"></span>
              </p>
            </div>
            <button className="p-2 bg-[#9b87f5] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
              <Search className="text-white" size={20} />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {searchQueries.map((_, idx) => (
              <span 
                key={idx}
                className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === queryIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSearchBar;