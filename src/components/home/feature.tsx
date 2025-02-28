import TypewriterDemo from "@/components/home/typewriter-demo";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Feature() {
  const { scrollYProgress } = useScroll();
  const featuresRef = useRef(null);
  return (
    <section
      id="features"
      className="py-24  relative  before:absolute before:inset-0  before:bg-gradient-to-br before:from-purple-100/80 before:via-pink-100/60 before:to-indigo-100/80  before:animate-gradient-shift before:opacity-75  overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-100/80 via-pink-100/60 to-indigo-100/80 dark:from-purple-900/80 dark:via-pink-900/60 dark:to-indigo-900/80"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.75]),
            scale: useTransform(scrollYProgress, [0, 0.3], [1.1, 1]),
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white">
            Accelerate lead generation with{" "}
            <span className="bg-gradient-to-r from-[#792abf] to-[#522faa] text-transparent bg-clip-text">
              boundless filters
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
            We discover precisely matched prospects that fit any ideal customer
            profile
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative bg-transparent rounded-2xl flex justify-center overflow-hidden">
            <div className="w-full max-w-md p-8 rounded-2xl select-none backdrop-blur-sm bg-white/50 dark:bg-black/50">
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <TypewriterDemo />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-10 bg-white/50 dark:bg-black/50 rounded-md px-3 text-gray-400 backdrop-blur-sm overflow-hidden">
                    <div className="animate-typing whitespace-nowrap">
                      Excluding:
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-10 bg-white/50 dark:bg-black/50 rounded-md px-3 text-gray-400 backdrop-blur-sm overflow-hidden">
                    <div className="animate-typing whitespace-nowrap">
                      Other conditions:
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/30 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <motion.div
            ref={featuresRef}
            className="space-y-8 overflow-hidden md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
              hidden: {},
            }}
          >
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4l16 16" />
                    <path d="M6.5 4h11a2 2 0 012 2v3a2 2 0 01-.59 1.41L13 16.32V19l-4 2v-4.68l-4.91-4.91A2 2 0 013.5 10V6a2 2 0 012-2z" />
                  </svg>
                ),
                title: "Leads beyond basic filters",
                description:
                  "Just describe your ideal customer in plain language.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Real-time data updates",
                description:
                  "No more double-checking or outdated information. Data updates in real-time during export.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white/80 dark:bg-black/80 dark:hover:bg-black/95 hover:bg-white/95 hover:shadow-xl transition-all duration-300 ease-in-out group relative overflow-hidden shadow-md hover:shadow-indigo-100/50 border dark:border-gray-900 border-gray-100 hover:border-indigo-200 dark:hover:border-indigo-900"
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                  hidden: { opacity: 0, x: "100%" },
                }}
              >
                <div className="flex gap-4 items-start">
                  <div className="mt-1 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.button
              className="text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-2"
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
                hidden: { opacity: 0, x: "100%" },
              }}
            ></motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
