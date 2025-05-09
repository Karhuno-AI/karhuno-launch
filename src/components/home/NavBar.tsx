"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Compass } from 'lucide-react';

const NavBar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 w-full py-4 px-6 flex justify-between items-center bg-white z-50 shadow-sm">
      <div className="flex items-center">
        <Compass size={24} className="text-primary mr-2" />
        <h1 className="text-2xl font-bold font-roboto">Karhuno AI</h1>
      </div>
      
      <div className="hidden md:flex space-x-8 justify-center">
        <button 
          onClick={() => scrollToSection('how-it-works')} 
          className="text-gray-600 hover:text-violet-600 transition-colors font-medium"
        >
          How It Works
        </button>
        <button 
          onClick={() => scrollToSection('who-its-for')} 
          className="text-gray-600 hover:text-violet-600 transition-colors font-medium"
        >
          Who It&apos;s For
        </button>
        <button 
          onClick={() => scrollToSection('track-signals')} 
          className="text-gray-600 hover:text-violet-600 transition-colors font-medium"
        >
          Track Signals
        </button>
        <button 
          onClick={() => scrollToSection('use-cases')} 
          className="text-gray-600 hover:text-violet-600 transition-colors font-medium"
        >
          Use Cases
        </button>
      </div>
      
      <Button 
        onClick={() => scrollToSection('early-access')}
        className="bg-[#9b87f5] hover:bg-[#8a74f4] text-white font-medium"
      >
        Get Free Access
      </Button>
    </nav>
  );
};

export default NavBar;