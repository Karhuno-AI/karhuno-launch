"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const NavBar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 backdrop-blur-sm bg-white/30 dark:bg-black/30 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logoWtext.png"
              alt="Karhuno"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
          <div className="hidden md:flex space-x-8 justify-center">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-black hover:text-violet-600 transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("who-its-for")}
              className="text-black hover:text-violet-600 transition-colors font-medium"
            >
              Who It&apos;s For
            </button>
            <button
              onClick={() => scrollToSection("track-signals")}
              className="text-black hover:text-violet-600 transition-colors font-medium"
            >
              Track Signals
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="text-black hover:text-violet-600 transition-colors font-medium"
            >
              Use Cases
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("early-access")}
            variant="accent"
            className="px-8 py-3"
          >
            Get Free Access
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
