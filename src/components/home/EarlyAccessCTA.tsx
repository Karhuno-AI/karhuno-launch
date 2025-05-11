"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface EarlyAccessCTAProps {
  className?: string;
}

const EarlyAccessCTA: React.FC<EarlyAccessCTAProps> = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Success! You've claimed your free access to Karhuno AI.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 ${className}`}>
      <h3 className="text-2xl md:text-[28px] font-bold mb-3 text-center font-roboto">
        Don&apos;t miss this limited offer!
      </h3>
      
      <p className="text-base md:text-lg mb-6 text-center font-montserrat">
        Be among the first to get free access to Karhuno AI — a new way to find leads using real signals from the web and LinkedIn.
      </p>
      
      {/* Email Form */}
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0 md:flex gap-4">
        <Input
          type="email"
          placeholder="Your email address"
          className="flex-grow shadow-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
        
        <Button
          type="submit"
          className="w-full md:w-auto bg-gradient-to-r from-[#a947e7] to-[#792abf] hover:from-[#a947e7]/90 hover:to-[#792abf]/90 shadow-lg text-white font-bold py-2 px-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Claim Your Free Access"}
        </Button>
      </form>
      
      <p className="text-xs text-gray-600 mt-4 text-center font-montserrat">
        No credit card required. You&apos;ll be first to test it when we launch.
      </p>
    </div>
  );
};

export default EarlyAccessCTA;