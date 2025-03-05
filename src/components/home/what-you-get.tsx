"use client";
import type React from "react";

import { motion } from "framer-motion";
import { Database, Camera } from "lucide-react";

import { ProcessRow } from "../process-row";


export default function WhatYouGet() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 md:p-10 font-montserrat">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover opacity-5"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl relative z-10"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Karhuno AI at a glance
        </motion.h2>

        <div className="space-y-24">
          <ProcessRow
            leftText="Build a comprehensive database of complex profiles using our artificial intelligence"
            rightText="Get the prospects base ideally matched with the ICP."
            icon={<Camera className="w-full h-full" strokeWidth={1} />}
            accentColor="from-blue-500 to-cyan-400"
            rightAccentColor="blue"
            bgGradient="from-blue-500/20 to-cyan-500/5"
            steps={[
              {
                text: "Submit your Ideal Customer Profile (ICP) in plain language",
              },
              {
                text: "Use limitless filters to refine your ICP",
              },
            ]}
          />

          <ProcessRow
            leftText="Quickly replenish your sales pipeline with new clients based on sales signals"
            rightText="Get enriched leads with contact details into your inbox, refreshed and updated in real-time"
            icon={<Database className="w-full h-full" strokeWidth={1} />}
            accentColor="from-violet-500 to-fuchsia-400"
            rightAccentColor="purple"
            bgGradient="from-violet-500/20 to-fuchsia-500/5"
            steps={[
              {
                text: "Submit your Ideal Customer Profile (ICP) in plain language",
              },
              {
                text: "Define the sales signals",
              },
            ]}
          />
        </div>
      </motion.div>
    </div>
  );
}
