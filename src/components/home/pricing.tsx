"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

declare global {
  interface Window {
    handleButtonClick?: (callback: () => void) => void;
  }
}

interface PricingProps {
  id?: string;
}

export function Pricing({ id }: PricingProps) {
  return (
    <section
      id={id}
      className="py-12 bg-gradient-to-tr from-purple-50 via-indigo-100 to-pink-50 min-h-screen flex items-center relative z-10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Explorer Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl border-2 border-purple-300 bg-white/80 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 flex flex-col"
          >
            <div className="flex flex-col flex-grow">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2">Explorer</h3>
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <h4 className="text-lg">
                      Find the best match for your ICP
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
                  <p className="text-base text-gray-600">
                    Your ICP -{">"}
                    <Link
                      href="#"
                      className="underline decoration-2 decoration-purple-400 font-medium pl-2"
                    >
                      our leads
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex-grow flex flex-col justify-end">
                <div className="space-y-1 text-center mb-4">
                  <div className="text-3xl font-bold">$0.67</div>
                  <div className="text-sm text-gray-600">per one company</div>
                </div>

                <Button
                  variant="accent"
                  size="xl"
                  onClick={() =>
                    window.handleButtonClick &&
                    window.handleButtonClick(() =>
                      console.log("Explorer Plan Free Trial")
                    )
                  }
                >
                  Free Trial
                </Button>

                <div className="text-center text-sm text-gray-600 mt-4">
                  or get the{" "}
                  <Link
                    href="#"
                    className="underline decoration-2 decoration-purple-400 font-medium"
                  >
                    sample
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Signal Tracker Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl border-2 border-purple-300 bg-white/80 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 flex flex-col"
          >
            <div className="flex flex-col flex-grow">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2">Signal tracker</h3>
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <h4 className="text-lg">
                      Find the best match for your ICP
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
                      </TooltipProvider>{" "}
                      based on fresh sales signals
                    </h4>
                  </div>
                  <p className="text-base text-gray-600 text-center">
                    Your ICP -{">"}
                    <Link
                      href="#"
                      className="underline decoration-2 decoration-purple-400 font-medium pl-2"
                    >
                      our leads
                    </Link>{" "}
                    weekly
                  </p>
                </div>
              </div>

              <div className="flex-grow flex flex-col justify-end">
                <div className="space-y-1 text-center mb-4">
                  <div className="text-3xl font-bold">$1.94</div>
                  <div className="text-sm text-gray-600">per one company</div>
                </div>

                <Button
                  variant="accent"
                  size="xl"
                  onClick={() =>
                    window.handleButtonClick &&
                    window.handleButtonClick(() =>
                      console.log("Signal Tracker Plan Free Trial")
                    )
                  }
                >
                  Free Trial
                </Button>

                <div className="text-center text-sm text-gray-600 mt-4">
                  or get the{" "}
                  <Link
                    href="#"
                    className="underline decoration-2 decoration-purple-400 font-medium"
                  >
                    sample
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl border-2 border-indigo-400 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 backdrop-blur-sm hover:border-indigo-500 transition-all duration-300 flex flex-col shadow-lg transform hover:scale-105"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-primary text-white px-4 py-1 rounded-full text-xs lg:text-sm font-semibold shadow-md">
              Most Popular
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2 text-indigo-700">Pro</h3>
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <h4 className="text-lg text-indigo-900">
                      Find the best match for your ICP
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <span
                              className="inline-block text-indigo-400 hover:text-indigo-600 transition-colors duration-200"
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
                      </TooltipProvider>{" "}
                      based on fresh sales signals
                    </h4>
                  </div>
                  <p className="text-base text-indigo-700">
                    Your ICP -{">"}
                    <Link
                      href="#"
                      className="underline pl-2 decoration-2 decoration-indigo-400 font-medium"
                    >
                      our leads
                    </Link>{" "}
                    weekly
                  </p>
                </div>
              </div>

              <div className="flex-grow flex flex-col justify-end">
                <div className="space-y-1 text-center mb-4">
                  <div className="text-4xl font-bold text-indigo-700">$80</div>
                  <div className="text-sm text-indigo-600">
                    per week for all existing results
                  </div>
                </div>

                <Button
                  className="w-full py-4 text-base bg-gradient-to-r from-indigo-600 to-primary hover:from-indigo-700 hover:to-primary text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    window.handleButtonClick &&
                    window.handleButtonClick(() =>
                      console.log("Pro Plan Start Free Trial")
                    )
                  }
                >
                  Free Trial
                </Button>

                <div className="text-center text-sm text-indigo-600 mt-4">
                  or get the{" "}
                  <Link
                    href="#"
                    className="underline decoration-2 decoration-indigo-400 font-medium"
                  >
                    sample
                  </Link>
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
          <p className="text-sm text-gray-600">Minimal package is $50.</p>
        </div>
      </div>
      <style jsx global>{`
        .z-index-100 {
          z-index: 100;
        }
        .tooltip-content {
          z-index: 9999 !important;
        }
      `}</style>
    </section>
  );
}
