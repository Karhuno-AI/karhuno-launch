"use client";

interface StepContentProps {
  text: string;
}

export function StepContent({ text }: StepContentProps) {
  return <p className="text-white text-center mb-8 h-4">{text}</p>;
}
