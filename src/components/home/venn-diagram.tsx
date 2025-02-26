"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function VennDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const lineVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "14rem" },
  };

  return (
    // TODO: CHECK THE REPOSNSIBLE WAY OF THE WEBSITE
    <div ref={ref} className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-medium text-center mb-12">
        Who will benefit of your solution most
      </h2>

      <div className="relative h-[500px]">
        {/* B2B Circle */}
        <motion.div
          className="absolute top-0 left-[15%] w-64 h-64 rounded-full bg-primary/30 border border-purple-500 flex items-center justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={circleVariants}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-xl font-medium">B2B</span>
        </motion.div>

        {/* Global sales Circle */}
        <motion.div
          className="absolute top-0 right-[20%] w-64 h-64 rounded-full bg-primary/30 border border-purple-500  flex items-center justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={circleVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="text-xl font-medium">
            Global
            <br />
            sales
          </span>
        </motion.div>

        {/* Average check Circle */}
        <motion.div
          className="absolute top-32 right-[35%] -translate-x-1/2 w-64 h-64 rounded-full bg-primary/30 border border-purple-500  flex items-center justify-center text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={circleVariants}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <span className="text-xl font-medium">
            $2-50K
            <br />
            average check
          </span>
        </motion.div>

        {/* Center line and text */}
        <div className="absolute top-[35%] left-[52%] -translate-y-1/2">
          <div className="relative flex items-center">
            <motion.div
              className="h-[1px] bg-black origin-left"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
              transition={{ duration: 0.6, delay: 1.2 }}
            />
            <motion.div
              className="ml-4"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <p className="whitespace-nowrap text-lg">
                The segment where
                <br />
                we are doing the
                <br />
                magic ✨
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
