"use client";

interface StepContentProps {
  text: string;
  color: string;
  num: number;
}
import { motion } from "framer-motion";
export function StepContent({ text,color,num }: StepContentProps) {
  return (
    <div>
      <p className="text-white text-center mb-8 h-4">{text}</p>
      <StepWithLine
        color={color}
        content=""
        animationDelay={num}
      />
    </div>
  );
}



function StepWithLine({
  color,
  animationDelay,
}: {
  color: string;
  content: string;
  animationDelay: number;
}) {
  return (
    <div className="relative w-full">
      {/* Animated underline */}
      <motion.div
        className="h-0.5 absolute -bottom-4 left-0"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{
          width: "100%",
          transition: {
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 5,
            delay: animationDelay,
          },
        }}
      />
    </div>
  );
}