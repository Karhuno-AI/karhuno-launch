"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Karhuno AI?",
    answer:
      "Karhuno AI is a platform that helps sales teams discover and identify complex Ideal Customer Profiles (ICPs) by analyzing open data, news signals, and trends. This enables efficient prospecting and faster deal closures.",
  },
  {
    question: "How does Karhuno AI collect data?",
    answer:
      "Our system analyzes thousands of open sources, including web articles, LinkedIn updates, and specialized databases. We focus on extracting actionable insights that align with your sales objectives.",
  },
  {
    question: "What kind of signals does Karhuno AI track?",
    answer:
      "Karhuno AI tracks signals such as market trends, customer updates, funding announcements, hiring patterns, geographic expansions, and other indicators that suggest sales opportunities.",
  },
  {
    question: "Who can benefit from Karhuno AI?",
    answer:
      "Our platform is ideal for B2B sales teams across industries like SaaS, GreenTech, FinTech, and MarTech. If your team needs actionable insights to streamline prospecting and expand market reach, Karhuno AI is for you.",
  },
  {
    question: "Is Karhuno AI suitable for small businesses?",
    answer:
      "Yes! Karhuno AI offers flexible plans tailored to businesses of all sizes. Whether you're a startup or a large enterprise, we can help optimize your sales processes.",
  },
  {
    question: "How can Karhuno AI help me stay ahead of competitors?",
    answer:
      "By delivering early insights from market signals, Karhuno AI helps you identify opportunities before your competitors do. This gives you the edge to engage prospects at the perfect moment.",
  },
  {
    question: "Does Karhuno AI support multiple languages?",
    answer:
      "Yes, our platform is designed to analyze news and updates across various languages, making it easier to track global market trends and customer actions.",
  },
  {
    question: "How can I get started with Karhuno AI?",
    answer:
      "Simply request a demo or contact our team via our website. We'll guide you through the onboarding process and help customize the platform to your needs.",
  },
  {
    question: "What pricing plans are available?",
    answer:
      "We offer a range of pricing plans to suit different business sizes and requirements. Visit our pricing page or contact us for a custom quote.",
  },
  {
    question: "What if I am not satisfied with the results?",
    answer:
      "Your satisfaction is our priority. If you are not satisfied with the results, we offer dedicated support to review and optimize your setup. Additionally, our plans include a satisfaction guarantee—contact us, and we'll work to resolve any issues or provide alternative solutions.",
  },
];

export function FAQ({ className }: { className?: string }) {
  return (
    <section className={cn("relative py-24 overflow-hidden", className)}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/50 to-white">
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <defs>
              <radialGradient
                id="faq-grad1"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="rgba(216, 180, 254, 0.3)" />
                <stop offset="100%" stopColor="rgba(216, 180, 254, 0)" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#faq-grad1)">
              <animate
                attributeName="opacity"
                values="0.3;0.5;0.3"
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Karhuno AI and how it can
            help your business grow
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-purple-700 transition-colors [&[data-state=open]>svg]:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <AccordionItem
                key={index + Math.ceil(faqs.length / 2)}
                value={`item-${index + Math.ceil(faqs.length / 2)}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-purple-700 transition-colors [&[data-state=open]>svg]:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
