"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm bg-white/60 dark:bg-black/30 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logoWtext.png"
              alt="Karhuno"
              width={180}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 justify-center">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-black hover:text-violet-600 transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("who-its-for")}
              className="text-black hover:text-violet-600 transition-colors"
            >
              Who it&apos;s for
            </button>
            <button
              onClick={() => scrollToSection("track-signals")}
              className="text-black hover:text-violet-600 transition-colors"
            >
              Track signals
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="text-black hover:text-violet-600 transition-colors"
            >
              Use cases
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => scrollToSection("early-access")}
              variant="accent"
              className="px-4 sm:px-6 md:px-8 py-2 md:py-3 text-sm md:text-base hidden sm:inline-flex"
            >
              Get Free Access
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md fixed top-[52px] left-0 right-0 z-40">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left py-2 text-black hover:text-violet-600 transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("who-its-for")}
              className="block w-full text-left py-2 text-black hover:text-violet-600 transition-colors"
            >
              Who it&apos;s for
            </button>
            <button
              onClick={() => scrollToSection("track-signals")}
              className="block w-full text-left py-2 text-black hover:text-violet-600 transition-colors"
            >
              Track signals
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="block w-full text-left py-2 text-black hover:text-violet-600 transition-colors"
            >
              Use cases
            </button>
            <Button
              onClick={() => scrollToSection("early-access")}
              variant="accent"
              className="w-full py-2 mt-2"
            >
              Get Free Access
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
