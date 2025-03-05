import { motion, useScroll, useTransform } from "framer-motion";

export default function SaleSignal() {
  const { scrollYProgress } = useScroll();
  return (
    <section className="py-20 relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-100/80 before:via-pink-100/60 before:to-indigo-100/80 before:animate-gradient-shift before:opacity-75 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-indigo-100/80 via-purple-100/60 to-pink-100/80"
          style={{
            opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 0.75]),
            scale: useTransform(scrollYProgress, [0.3, 0.6], [1.1, 1]),
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Supercharge your conversions with{" "}
            <span className="bg-gradient-to-r from-[#792abf] to-[#522faa] text-transparent bg-clip-text">
              sales signals
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI scans thousands of online sources, detecting nuanced business
            signals indicating purchase readiness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-4 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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
                    className="w-5 h-5 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Reach clients at the perfect moment.",
                description:
                  "We analyze thousands of news articles across the web, social media and specialized databases to deliver only what truly matters.",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: "Empower your sales team with actionable insights.",
                description:
                  "Get the proofs and sources for perfect sales hooks.",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                ),
                title: "Unlock new markets.",
                description: "Track key customer actions across any language.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white/80 hover:bg-white/95 hover:shadow-xl transition-all duration-300 ease-in-out group relative overflow-hidden shadow-md hover:shadow-indigo-100/50 border border-gray-100 hover:border-indigo-200"
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                  hidden: { opacity: 0, x: "-100%" },
                }}
              >
                <div className="flex gap-4 items-start">
                  <div className="mt-1 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated News Thread Visualization */}
          <div className="hidden md:block relative aspect-[4/3] bg-gradient-to-br from-white/40 to-white/10 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] backdrop-blur-sm">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>
            <div className="absolute inset-0 overflow-hidden blur-[2px]">
              <div className="animate-slide-up-faster h-[400%]">
                {[...Array(80)].map((_, i) => (
                  <div
                    key={i}
                    className={`p-3 m-3 bg-white/90 transition-all duration-500
                              ${i % 5 === 0 ? "animate-flash-news-bright" : ""}
                              border border-indigo-200 shadow-[0_0_10px_rgba(79,70,229,0.2)]`}
                  >
                    <div className="h-2 w-2/3 bg-gradient-to-r from-indigo-300 to-purple-300 rounded mb-1" />
                    <div className="h-2 w-1/2 bg-gradient-to-r from-pink-300 to-indigo-200 rounded" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-transparent to-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
