// @ts-nocheck
"use client";
// REACT
import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Menu } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

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

// COMPONENTS
import { Textarea } from "@/components/ui/textarea";
import VennDiagram from "@/components/home/venn-diagram";
import WhatYouGet from "@/components/home/what-you-get";
import CaseStudies from "@/components/home/case-studies";
import ContactCarousel from "@/components/home/contact-carousel";
import ComparisonTable from "@/components/home/comparison-table";
import FAQ from "@/components/home/faq";
import Footer from "@/components/home/footer";
import SaleSignal from "@/components/home/sale-signal";
import Feature from "@/components/home/feature";
import { type SendEmailParams } from "../api/mail/route";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const placeholderTexts = [
  "European energy companies working with startups",
  "Companies announcing warehouse launch plans",
  "Companies developing internal entrepreneurship",
];

export default function Home() {
  // const { setTheme } = useTheme();
  const [isICPDialogOpen, setIsICPDialogOpen] = useState(false);
  const [buttonAction, setButtonAction] = useState<() => void>(() => {});
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [isThirdDialogOpen, setIsThirdDialogOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [icp, setIcp] = useState("");
  const [isThankYouDialogOpen, setIsThankYouDialogOpen] = useState(false);
  const [hours, setHours] = useState(20);
  const [salary, setSalary] = useState(20);
  const [revenue, setRevenue] = useState(10);
  const tawkMessengerRef = useRef(null);

  const timeWithKarhuno = 0.5;
  const possibleEconomy = Math.round(salary * (hours - timeWithKarhuno) * 4);
  const possibleNewRevenue = Math.round((hours / 40) * revenue * 1000); // Convert to dollars

  const [formData, setFormData] = useState<SendEmailParams>({
    to: "",
    ICP: "",
    moreDetails: "",
    company: "",
    name: "",
  });

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



  // const onTawkLoad = () => {
  //   if (tawkMessengerRef.current.isChatOngoing()) {
  //     tawkMessengerRef.current.hideWidget(); // Hide chat on load
  //   }
  // };

  const onLoad = () => {
    if (tawkMessengerRef.current.onBeforeLoaded()) {
        tawkMessengerRef.current.hideWidget();
    }
    if (tawkMessengerRef.current.onLoaded()) {
      tawkMessengerRef.current.showWidget();
  }
};

  const openChat = () => {
    tawkMessengerRef.current.showWidget();
  };
  const handleButtonClick = (action: () => void) => {
    if (action === handleFind) {
      action();
    } else {
      setButtonAction(() => action);
      setIsICPDialogOpen(true);
    }
  };

  const handleICPSubmit = () => {
    setIsICPDialogOpen(false);
    buttonAction();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFind = () => {
    if (icp.trim()) {
      setIsFirstDialogOpen(true);
      formData.ICP = icp;
      setFormData({ ...formData, ICP: icp });
    }
  };

  const handleSubmit = async () => {
    setIsThirdDialogOpen(false);
    setIsThankYouDialogOpen(true);
    try {
      const userEmailData: SendEmailParams = {
        to: formData.to, // Admin email is auto-set in the API
        ICP: formData.ICP,
        moreDetails: formData.moreDetails,
        company: formData.company,
        name: formData.name,
      };
      const result = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userEmailData),
      }).then((res) => res.json());
      if (result.success) {
        console.log("Emails sent successfully!");
        // Reset form or handle success
      } else {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error sending emails:", error);
    } finally {
      setFormData({
        to: "",
        ICP: "",
        moreDetails: "",
        company: "",
        name: "",
      });
    }
  };

  return (
    <div>
      <div className="w-full h-full relative ">
        <button
          className="bottom-5 right-6 fixed flex justify-center items-center rounded-full z-50 border-none w-[60px] h-[60px] leading-[3.75rem] bg-primary focus-visible:outline-none cursor-pointer"
          onClick={openChat}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            height="32px"
            width="32px"
            role="img"
            aria-labelledby="openIconTitle openIconDesc"
            className="tawk-min-chat-icon"
            fill="#fff"
          >
            <title id="openIconTitle">Opens Chat</title>
            <desc id="openIconDesc">This icon Opens the chat window.</desc>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
            ></path>
          </svg>
        </button>
      </div>
      {/* TODO: MOVE TO HEADER COMPONENT */}
      <header className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-100 dark:from-purple-900 dark:via-purple-950 dark:to-purple-900">
        {/* Transparent Header */}
        <div className="absolute top-0 left-0 right-0 z-[48] backdrop-blur-sm bg-white/30 dark:bg-black/30">
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
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-[-30px] bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/67ba18b037bb033987acf44b_hero-gradient-zg3Lsi42q4ylbWfIvlKRkwHf3LNfpi.png')] bg-cover bg-center filter blur-[30px] scale-105 opacity-40 animate-spin-slow"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-100 opacity-60"></div>
        <div className="container mx-auto px-4 py-8 relative z-10 pt-20">
          {/* Hero Content */}
          <div className="max-w-5xl mx-auto text-center space-y-8 mb-32 mt-[13vh]">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Stop Searching,{" "}
              <span className="bg-gradient-to-r from-[#792abf] to-[#522faa] text-transparent bg-clip-text">
                Start Selling
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleFind();
                    }
                  }}
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
          </div>
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
      </header>

      <WhatYouGet />

      <Feature />

      {/* Supercharge your conversions with sales signals */}
      <SaleSignal />

      {/* Get leads with full contact info */}
      <section className="py-20 relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-purple-200/80 before:via-pink-200/60 before:to-white before:animate-gradient-shift before:opacity-75 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
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

      <TawkMessengerReact
        propertyId="67cb23b4d19cb2190dbd2fbb"
        widgetId="1iloo6u5l"
        onLoad={onLoad} 
        ref={tawkMessengerRef}
      />

      <ComparisonTable />

      <VennDiagram />

      <CaseStudies id="case-studies" />

      <section
        id="pricing"
        className="py-12 bg-gradient-to-tr from-purple-50 via-indigo-100 to-pink-50 min-h-screen flex items-center relative z-10"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Pricing</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto justify-items-center">
            {/* Explorer Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 max-w-96 rounded-2xl border-2 border-purple-300 bg-white/80 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 flex flex-col"
            >
              <div className="flex flex-col flex-grow">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-2">
                    Build your sales funnel
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center">
                      <h4 className="text-lg">
                        Get the curated list of companies, perfectly aligned
                        with your ICP
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <span
                                className="inline-block text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                style={{
                                  fontSize: "70%",
                                  verticalAlign: "super",
                                }}
                              >
                                ⓘ
                              </span>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white/90 backdrop-blur-sm shadow-lg p-2 tooltip-content">
                              <p>Ideal Customer Profile -</p>
                              <p>a perfect customer who&apos;s</p>
                              <p>most likely to love your product</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-end">
                  <div className="space-y-1 text-center mb-4">
                    <div className="text-3xl font-bold">$0.59 - $0.89</div>
                    <div className="text-sm text-gray-600">per one lead</div>
                  </div>

                  <Button
                    variant="accent"
                    size="xl"
                    onClick={() =>
                      handleButtonClick(() => setIsFirstDialogOpen(true))
                    }
                  >
                    Try For Free
                  </Button>

                  <div className="text-center text-sm text-gray-600 mt-4">
                    Volume-based discounts apply
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Signal Tracker Plan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 max-w-96 rounded-2xl border-2 border-purple-300 bg-white/80 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 flex flex-col"
            >
              <div className="flex flex-col flex-grow">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-2">
                    Power your funnel with fresh leads
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center">
                      <h4 className="text-lg">
                        Stay ahead with real-time sales signals and fresh leads
                        added weekly, so you always reach the most engaged
                        buyers.
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-end">
                  <div className="space-y-1 text-center mb-4">
                    <div className="text-3xl font-bold">$1.50 - $1.94</div>
                    <div className="text-sm text-gray-600">per one lead</div>
                  </div>

                  <Button
                    variant="accent"
                    size="xl"
                    onClick={() =>
                      handleButtonClick(() => setIsFirstDialogOpen(true))
                    }
                  >
                    Try For Free
                  </Button>

                  <div className="text-center text-sm text-gray-600 mt-4">
                    Volume-based discounts apply
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-6 space-y-1">
            <p className="font-medium text-sm">
              100% money-back guarantee if you&apos;re not satisfied with the
              results.
            </p>
            <p className="text-sm text-gray-600">Minimum package is $50.</p>
          </div>
        </div>
      </section>
      {/* <AnimatedComponent /> */}

      <section className="min-h-screen py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="flex-grow flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Calculate potential ROI
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                See how much time and money you can save, and how much
                additional revenue you can generate
              </p>
            </motion.div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-center">
                How many hours does your team spend trying to find companies to
                reach out to per week?
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Number of hours spent per week on finding companies
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="40"
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="text-center text-xl font-bold mt-1">
                      {hours} Hours
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Gross salary with taxes, $ per hour
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="text-center text-xl font-bold mt-1">
                      ${salary}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Average sales volume per 1 sales manager per month, $K
                    </label>
                    <Input
                      type="number"
                      value={revenue}
                      onChange={(e) => setRevenue(Number(e.target.value))}
                      className="bg-gray-700 border-gray-600 text-white text-center text-lg"
                      min="0"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-700/30 p-4 rounded-xl">
                    <div className="text-gray-300 text-sm mb-1">
                      How many hours per week does your team spend trying to
                      find companies to reach out to?
                    </div>
                    <div className="text-3xl font-bold text-purple-400">
                      {timeWithKarhuno} hours
                    </div>
                  </div>
                  <div className="bg-gray-700/30 p-4 rounded-xl">
                    <div className="text-gray-300 text-sm mb-1">
                      Possible economy, $ per month{" "}
                    </div>
                    <div className="text-3xl font-bold text-green-400">
                      ${possibleEconomy}
                    </div>
                  </div>
                  <div className="bg-gray-700/30 p-4 rounded-xl">
                    <div className="text-gray-300 text-sm mb-1">
                      Possible new revenue, $ per month
                    </div>
                    <div className="text-3xl font-bold text-green-400">
                      ${possibleNewRevenue}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  variant="accent"
                  onClick={() =>
                    handleButtonClick(() => setIsFirstDialogOpen(true))
                  }
                >
                  Get leads for free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ className="bg-gradient-to-b from-white via-purple-50/50 to-white" />

      {/* Dialogs */}
      <Dialog open={isFirstDialogOpen} onOpenChange={setIsFirstDialogOpen}>
        <DialogContent className="dialogContentStyle">
          <DialogHeader>
            <DialogTitle className="dialogTitleStyle mb-5">
              Do you want to add some details?
            </DialogTitle>
            <DialogDescription className="dialogDescriptionStyle">
              Your ICP: <span className="font-semibold">{formData.ICP}</span>
              <br />
              Should we know something else? <br />
              Should we exclude any companies?
            </DialogDescription>
          </DialogHeader>
          <Textarea
            name="moreDetails"
            value={formData.moreDetails}
            onChange={handleChange}
            placeholder="Enter additional details here..."
            className="inputStyle"
            required
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsFirstDialogOpen(false);
                setIsSecondDialogOpen(true);
              }
            }}
          />
          <DialogFooter className="flex justify-center mt-4">
            <Button
              variant="accent"
              className="w-full"
              onClick={() => {
                setIsFirstDialogOpen(false);
                setIsSecondDialogOpen(true);
              }}
              disabled={!formData.moreDetails}
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
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className="inputStyle"
                required
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsSecondDialogOpen(false);
                    setIsThirdDialogOpen(true);
                  }
                }}
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
              disabled={!formData.company}
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="inputStyle"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email:
              </label>
              <Input
                id="to"
                name="to"
                type="email"
                value={formData.to}
                onChange={handleChange}
                placeholder="Your Email"
                className="inputStyle"
                required
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />
            </div>
          </div>
          <DialogFooter className="flex justify-center mt-4">
            <Button
              variant="accent"
              className="w-full"
              type="submit"
              onClick={handleSubmit}
              disabled={!formData.name && !formData.to}
            >
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
              have them in 5 business days* by email.
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
      {/*  */}
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
              have them in 5 business days* by email.
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
            name="ICP"
            value={formData.ICP}
            onChange={handleChange}
            placeholder="Enter your Ideal Customer Profile here..."
            className="inputStyle"
            required
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleICPSubmit();
              }
            }}
          />
          <DialogFooter className="flex justify-center mt-4">
            <Button
              variant="accent"
              className="w-full"
              onClick={handleICPSubmit}
              disabled={!formData.ICP}
            >
              Next
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        .z-index-100 {
          z-index: 100;
        }
        .tooltip-content {
          z-index: 9999 !important;
        }
      `}</style>
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
