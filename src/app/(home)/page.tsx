"use client";
// REACT
import { useState, useEffect } from "react";
import { CheckCircle2, Menu } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// UI
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

// COMPONENTS

import VennDiagram from "@/components/home/venn-diagram";
import WhatYouGet from "@/components/home/what-you-get";
import CaseStudies from "@/components/home/case-studies";
import ContactCarousel from "@/components/home/contact-carousel";
import ComparisonTable from "@/components/home/comparison-table";
import Pricing from "@/components/home/pricing";
import ROICalculator from "@/components/home/roi-calculator";
import FAQ from "@/components/home/faq";
import Footer from "@/components/home/footer";
import SaleSignal from "@/components/home/sale-signal";
import Feature from "@/components/home/feature";

const placeholderTexts = [
  "European energy companies working with startups",
  "Companies announcing warehouse launch plans",
  "Companies developing internal entrepreneurship",
];

export default function Home() {
  const [isICPDialogOpen, setIsICPDialogOpen] = useState(false);
  const [buttonAction, setButtonAction] = useState<() => void>(() => {});
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [details, setDetails] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [isThirdDialogOpen, setIsThirdDialogOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [tempICP, setTempICP] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [icp, setIcp] = useState("");
  const [isThankYouDialogOpen, setIsThankYouDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const vh = window.innerHeight;
      document
        .querySelectorAll('[id$="-pattern"]')
        .forEach((pattern, index) => {
          const offset = index * vh;
          const distance = Math.abs(scrolled - offset);
          const opacity = Math.max(0, 1 - distance / vh);
          (pattern as HTMLElement).style.opacity = String(opacity * 0.15);
        });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animatePlaceholder = () => {
      const currentText = placeholderTexts[placeholderIndex];

      if (!isDeleting) {
        if (placeholder.length < currentText.length) {
          setPlaceholder(currentText.slice(0, placeholder.length + 1));
          timeout = setTimeout(animatePlaceholder, 12.5);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (placeholder.length === 0) {
          setIsDeleting(false);
          setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
        } else {
          setPlaceholder(placeholder.slice(0, -1));
          timeout = setTimeout(animatePlaceholder, 2);
        }
      }
    };

    timeout = setTimeout(animatePlaceholder, 20.5);
    return () => clearTimeout(timeout);
  }, [placeholder, placeholderIndex, isDeleting]);



  const handleButtonClick = (action: () => void) => {
    if (action === handleFind) {
      action();
    } else {
      setButtonAction(() => action);
      setIsICPDialogOpen(true);
    }
  };

  const handleICPSubmit = () => {
    setIcp(tempICP);
    setIsICPDialogOpen(false);
    buttonAction();
  };

  const handleFind = () => {
    if (icp.trim()) {
      setIsFirstDialogOpen(true);
    }
  };

  const handleSubmit = () => {
    setIsThirdDialogOpen(false);
    setIsThankYouDialogOpen(true);
  };

  return (
    <div>
      {/* TODO: MOVE TO HEADER COMPONENT */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-100">
        {/* Transparent Header */}
        <header className="absolute top-0 left-0 right-0 z-[48] backdrop-blur-sm bg-white/30">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
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

              {/* Navigation Menu */}
              <nav className="hidden md:flex items-center gap-8">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  What we do
                </a>
                <a
                  href="#case-studies"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Case studies
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Pricing
                </a>
              </nav>

              <div className="relative md:flex items-center hidden">
                <Button
                  onClick={() =>
                    handleButtonClick(() => setIsFirstDialogOpen(true))
                  }
                  variant="accent"
                  className="px-8 py-3"
                >
                  Free Trial
                </Button>
              </div>
              <div className="md:hidden">
                <Button
                  variant="accent"
                  size="sm"
                  className="rounded-xl"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu size={24} />
                </Button>
              </div>
            </div>
          </div>
        </header>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="absolute z-20 top-16 left-0 right-0 bg-white p-4 shadow-md flex flex-col gap-4 md:hidden">
            <a
              href="#features"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              What we do
            </a>
            <a
              href="#case-studies"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Case studies
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
          </nav>
        )}

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-[-30px] bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/67ba18b037bb033987acf44b_hero-gradient-zg3Lsi42q4ylbWfIvlKRkwHf3LNfpi.png')] bg-cover bg-center filter blur-[30px] scale-105 opacity-40 animate-spin-slow"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-100 opacity-60"></div>
        <div className="container mx-auto px-4 py-8 relative z-10 pt-20">
          {/* Hero Content */}
          <main className="max-w-5xl mx-auto text-center space-y-8 mb-32 mt-[13vh]">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Stop searching,{" "}
              <span className="bg-gradient-to-r from-[#792abf] to-[#522faa] text-transparent bg-clip-text">
                Start selling
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600">
              Signal-based prospecting engine for hard-to-find B2B leads
            </p>

            <div className="relative flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mt-12 items-center">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder={placeholder}
                  className="w-full h-12 rounded-xl bg-white/80 border-gray-200 text-gray-900 placeholder:text-gray-500"
                  value={icp}
                  onChange={(e) => setIcp(e.target.value)}
                />
              </div>
              <Button
                variant="accent"
                className="px-8 py-3"
                onClick={handleFind}
              >
                Find
              </Button>
            </div>
          </main>
        </div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              Social Signals
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              Precise ICP Filtering
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              B2B prospecting
            </div>
          </div>
        </div>
      </section>

      {/* Accelerate lead generation with boundless filters */}
      <Feature />

      {/* Supercharge your conversions with sales signals */}
      <SaleSignal />

      {/* Get leads with full contact info */}
      <section className="py-20 relative before:absolute before:inset-0  before:bg-gradient-to-br before:from-purple-100/80 before:via-pink-100/60 before:to-indigo-100/80 before:animate-gradient-shift before:opacity-75 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Get leads with{" "}
              <span className="bg-gradient-to-r from-[#792abf] to-[#522faa] text-transparent bg-clip-text">
                full contact info
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver enriched leads directly to your sales team, complete
              with decision-maker contact details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  className="p-6 rounded-xl bg-white/80 hover:bg-white/95 hover:shadow-xl transition-all duration-300 ease-in-out group relative overflow-hidden shadow-md hover:shadow-indigo-100/50 border border-gray-100 hover:border-indigo-200"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="relative z-10">
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Direct buyer connection
                        </h3>
                        <p className="text-gray-600">
                          Connect directly with buyers using verified contact
                          details only. Keep your domain safe with pre-verified
                          emails.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="p-6 rounded-xl bg-white/80 hover:bg-white/95 hover:shadow-xl transition-all duration-300 ease-in-out group relative overflow-hidden shadow-md hover:shadow-indigo-100/50 border border-gray-100 hover:border-indigo-200"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="relative z-10">
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Instant contact access
                        </h3>
                        <p className="text-gray-600">
                          Get contacts instantly - no more manual search. Save
                          time and increase efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div>
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() =>
                    handleButtonClick(() => setIsFirstDialogOpen(true))
                  }
                >
                  Start free trial
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200/60 to-purple-200/60 blur-3xl rounded-3xl" />
                <div className="relative">
                  <ContactCarousel direction="ltr" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable />

      <VennDiagram />

      <CaseStudies id="case-studies" />

      <WhatYouGet />

      <Pricing id="pricing" />

      <ROICalculator />

      <FAQ className="bg-gradient-to-b from-white via-purple-50/50 to-white" />

      {/* Dialogs */}
      {/* First Dialog */}
      <Dialog open={isFirstDialogOpen} onOpenChange={setIsFirstDialogOpen}>
        <DialogContent className="dialogContentStyle">
          <DialogHeader>
            <DialogTitle className="dialogTitleStyle">
              Do you want to add some details?
            </DialogTitle>
            <DialogDescription className="dialogDescriptionStyle">
              Your ICP: <span className="font-semibold">{icp}</span>
              <br />
              Should we know something else?
            </DialogDescription>
          </DialogHeader>
          <Textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Enter additional details here..."
            className="inputStyle"
          />
          <DialogFooter className="flex justify-center mt-4">
            <Button
              variant="accent"
              className="w-full"
              onClick={() => {
                setIsFirstDialogOpen(false);
                setIsSecondDialogOpen(true);
              }}
            >
              Next
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Second Dialog */}
      <Dialog open={isSecondDialogOpen} onOpenChange={setIsSecondDialogOpen}>
        <DialogContent className="dialogContentStyle">
          <DialogHeader>
            <DialogTitle className="dialogTitleStyle">
              Your product and company
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-4"
              >
                We should know the name of your company to understand the
                product better
              </label>
              <Input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name"
                className="inputStyle"
              />
            </div>
          </div>
          <DialogFooter className="flex justify-center mt-4">
            <Button
              variant="accent"
              className="w-full"
              onClick={() => {
                setIsSecondDialogOpen(false);
                setIsThirdDialogOpen(true);
              }}
            >
              Next
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Third Dialog */}
      <Dialog open={isThirdDialogOpen} onOpenChange={setIsThirdDialogOpen}>
        <DialogContent className="dialogContentStyle">
          <DialogHeader>
            <DialogTitle className="dialogTitleStyle">
              Where can we send the result?
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your name:
              </label>
              <Input
                id="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your name"
                className="inputStyle"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your work email:
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="inputStyle"
              />
            </div>
          </div>
          <DialogFooter className="flex justify-center mt-4">
            <Button variant="accent" className="w-full" onClick={handleSubmit}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Thank You Dialog */}
      <Dialog
        open={isThankYouDialogOpen}
        onOpenChange={setIsThankYouDialogOpen}
      >
        <DialogContent className="dialogContentStyle">
          <DialogHeader>
            <DialogTitle className="dialogTitleStyle">Thank You!</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-lg">
              Karhuno has already started finding your ideal leads. You&apos;ll
              have them in 3 business days* by email.
            </p>
            <p className="text-sm text-gray-600">
              *as we carefully collect, analyze, filter, and enrich the data to
              ensure accuracy and quality. This timeline guarantees that you
              receive only valid, verified leads, optimized for your business
              needs.
            </p>
          </div>
          <DialogFooter className="flex justify-center mt-4">
            <Button
              variant="accent"
              onClick={() => setIsThankYouDialogOpen(false)}
            >
              Good!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isICPDialogOpen} onOpenChange={setIsICPDialogOpen}>
        <DialogContent className="dialogContentStyle">
          <DialogHeader>
            <DialogTitle className="dialogTitleStyle">
              Please share what companies are you looking for?
            </DialogTitle>
          </DialogHeader>
          <Textarea
            value={tempICP}
            onChange={(e) => setTempICP(e.target.value)}
            placeholder="Enter your Ideal Customer Profile here..."
            className="inputStyle"
          />
          <DialogFooter className="flex justify-center mt-4">
            <Button
              variant="accent"
              className="w-full"
              onClick={handleICPSubmit}
            >
              Next
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        @keyframes gradient-shift {
          0% {
            transform: scale(1.1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(1deg); 
          }
          100% {
            transform: scale(1.1) rotate(0deg);
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 15s ease-in-out infinite;
        }

        /* Add smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Add transition for section backgrounds */
        section {
          transition: background-color 0.5s ease-in-out;
        }

        /* Add blur effect on scroll */
        .blur-on-scroll {
          transition: filter 0.3s ease-in-out;
        }
        
        .blur-on-scroll.active {
          filter: blur(5px);
        }

        @keyframes gradient-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.98);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .glass-effect {
          backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes slide-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-slide-up {
          animation: slide-up 10s linear infinite;
        }

        @keyframes highlight {
          0%, 100% {
            background: rgba(255, 255, 255, 0.8);
            border-color: rgba(79, 70, 229, 0.3);
            box-shadow: 0 0 20px rgba(79, 70, 229, 0.2);
          }

        .highlight-news {
          animation: highlight 2s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-flow 15s ease infinite;
        }

        /* Add smooth transition between sections */
        section {
          position: relative;
          transform: translateZ(0);
        }

        /* Add parallax effect */
        @media (min-width: 768px) {
          section > div {
            transform: translateZ(0);
            will-change: transform;
          }
        }

        /* Optimize performance */
        section > div {
          backface-visibility: hidden;
          perspective: 1000px;
        }

        @keyframes flash-news {
          0%, 100% {
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 0 10px rgba(79, 70, 229, 0.2);
          }
          50% {
            background: rgba(79, 70, 229, 0.2);
            box-shadow: 0 0 20px rgba(79, 70, 229, 0.6);
          }
        }

        .animate-flash-news {
          animation: flash-news 2s ease-in-out infinite;
        }
      `}</style>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

        @keyframes slide-up-faster {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-75%);
          }
        }

        .animate-slide-up-faster {
          animation: slide-up-faster 20s linear infinite;
        }

        @keyframes flash-news-bright {
          0%,
          100% {
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 0 10px rgba(79, 70, 229, 0.2);
          }
          50% {
            background: rgba(79, 70, 229, 0.4);
            box-shadow: 0 0 30px rgba(79, 70, 229, 0.8);
          }
        }

        .animate-flash-news-bright {
          animation: flash-news-bright 2s ease-in-out infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-typing {
          animation: typing 3s steps(40, end);
          overflow: hidden;
          white-space: nowrap;
        }
      `}</style>

      {/* Footer */}
      <Footer />
    </div>
  );
}
