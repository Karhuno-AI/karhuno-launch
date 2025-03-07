"use client";

import { useEffect } from "react";
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
    <div className="relative w-full">
      <motion.div
        className="flex-1 relative h-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.5 }}
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
        </motion.div>
      </motion.div>
    </div>
  );
}
