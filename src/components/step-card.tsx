"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface StepCardProps {
  stepNumber: number;
  stepColor: string;
  isInView: boolean;
  onComplete: () => void;
  children: React.ReactNode;
}

export function StepCard({
  stepNumber,
  stepColor,
  isInView,
  onComplete,
  children,
}: StepCardProps) {
  const controls = useAnimation();
  const lineControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      const sequence = async () => {
        await controls.start({
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        });

        await lineControls.start({
          scaleX: 1,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
          },
        });

        // Wait a bit before triggering the next step
        setTimeout(() => {
          onComplete();
        }, 300);
      };

      sequence();
    }
  }, [isInView, controls, lineControls, onComplete]);

  return (
    <motion.div
      className="flex-1 relative h-full flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="flex flex-col items-center text-center px-2"
        initial={{ y: 30, opacity: 0 }}
        animate={controls}
      >
        <h3 className={`${stepColor} font-semibold text-sm mb-4`}>
          Step {stepNumber}
        </h3>

        {children}

        {/* Bottom line with animation */}
        <div className="relative w-full h-6">
          <motion.div
            className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r overflow-hidden rounded-full"
            style={{ backgroundImage: `linear-gradient(to right, white, primary)`, originX: 0 }}
            initial={{ scaleX: 0 }}
            animate={lineControls}
          >
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "linear",
                }}
              />
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
