"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Rocket } from "lucide-react";

const ConsolidatedCTA = () => {
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
      toast.success("Success! You've secured your spot among the first 100 users!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-gradient-to-r from-violet-500 to-[#792abf] text-white text-xs font-bold py-1 px-3 rounded-full mb-3 animate-pulse">
          LIMITED OFFER - ONLY SPOTS LEFT
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-violet-500 to-[#792abf] bg-clip-text text-transparent">
          Don&apos;t miss this opportunity!
        </h3>
      </div>
      
      <div className="flex gap-4 items-center justify-center mb-6">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-violet-500/30"></div>
        <span className="text-lg font-semibold text-gray-700">Limited time offer</span>
        <div className="h-px flex-grow bg-gradient-to-r from-violet-500/30 to-transparent"></div>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-teal-300 flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-teal-600">✓</span>
            </div>
            <p className="text-sm font-semibold">First 100 users get free access</p>
          </div>
          
          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-teal-300 flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-teal-600">✓</span>
            </div>
            <p className="text-sm font-semibold">1000 credits included</p>
          </div>
        </div>
      </div>
      
      {/* Email Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-4 md:space-y-0 md:flex gap-4">
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
          className="w-full md:w-auto bg-gradient-to-r from-[#a947e7] to-[#792abf] hover:from-[#a947e7]/90 hover:to-[#792abf]/90 shadow-lg text-white font-bold py-2 px-8"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : (
            <>
              <span>Claim Your Spot</span>
              <Rocket className="ml-1" />
            </>
          )}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 font-montserrat">
          Spots are filling up fast! Join now to secure your free access.
        </p>
      </div>
    </div>
  );
};

export default ConsolidatedCTA;