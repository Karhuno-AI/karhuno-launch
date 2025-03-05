"use client"
import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Database, Camera, CheckCircle, ArrowRight } from "lucide-react"

export default function KarhunoAIClean() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 md:p-10 font-montserrat">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover opacity-5"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl relative z-10"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Karhuno AI at a glance
        </motion.h1>

        <div className="space-y-24">
          <ProcessRow
            index={0}
            leftText="Build a comprehensive database of complex profiles using our artificial intelligence."
            rightText="Get the prospects base ideally matched with the ICP."
            icon={<Camera className="w-full h-full" strokeWidth={1} />}
            accentColor="from-blue-500 to-cyan-400"
            rightAccentColor="blue"
            bgGradient="from-blue-500/20 to-cyan-500/5"
          />

          <ProcessRow
            index={1}
            leftText="Quickly replenish your sales pipeline with new clients based on sales signals."
            rightText="Get enriched leads with contact details into your inbox, refreshed and updated in real-time."
            icon={<Database className="w-full h-full" strokeWidth={1} />}
            accentColor="from-violet-500 to-fuchsia-400"
            rightAccentColor="purple"
            bgGradient="from-violet-500/20 to-fuchsia-500/5"
          />
        </div>
      </motion.div>
    </div>
  )
}

interface ProcessRowProps {
  leftText: string
  rightText: string
  icon: React.ReactNode
  index: number
  accentColor: string
  rightAccentColor: "blue" | "purple"
  bgGradient: string
}

function ProcessRow({ leftText, rightText, icon, accentColor, rightAccentColor, bgGradient }: ProcessRowProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [step1Complete, setStep1Complete] = useState(false)
  const [step2Complete, setStep2Complete] = useState(false)

  // Define colors based on the rightAccentColor
  const accentBgColor = rightAccentColor === "blue" ? "bg-blue-500" : "bg-purple-500"
  const accentBorderColor = rightAccentColor === "blue" ? "border-blue-400" : "border-purple-400"
  const textColor = rightAccentColor === "blue" ? "text-blue-100" : "text-purple-100"
  const stepTextColor = rightAccentColor === "blue" ? "text-blue-300" : "text-purple-300"

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      {/* Left text with large semi-transparent icon */}
      <motion.div
        className="md:col-span-3 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`relative rounded-xl overflow-hidden h-full min-h-[160px] flex items-center`}>
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient}`}></div>

          {/* Large semi-transparent icon covering the entire background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <foreignObject width="100%" height="100%" x="0" y="0">
                <div className="w-full h-full flex items-center justify-center">{icon}</div>
              </foreignObject>
            </svg>
          </div>

          {/* Text overlay */}
          <div className="relative z-10 p-5">
            <p className={`font-medium text-lg ${textColor}`}>{leftText}</p>
          </div>
        </div>
      </motion.div>

      {/* Flow steps - now just centered text with bottom line */}
      <div className="md:col-span-6 flex flex-col md:flex-row gap-6">
        <SimpleStepCard
          text="Submit your Ideal Customer Profile (ICP) in plain language"
          accentColor={accentColor}
          stepColor={stepTextColor}
          index={1}
          isInView={isInView}
          onComplete={() => setStep1Complete(true)}
        />
        <SimpleStepCard
          text="Submit your Ideal Customer Profile (ICP) in plain language"
          accentColor={accentColor}
          stepColor={stepTextColor}
          index={2}
          isInView={step1Complete}
          onComplete={() => setStep2Complete(true)}
        />
      </div>

      {/* Right text - with accent */}
      <motion.div
        className="md:col-span-3"
        initial={{ opacity: 0 }}
        animate={step2Complete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`bg-slate-800/80 backdrop-blur-sm rounded-xl border ${accentBorderColor} shadow-lg overflow-hidden`}
          initial={{ y: 20, opacity: 0 }}
          animate={step2Complete ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`${accentBgColor} px-4 py-2 flex items-center justify-between`}>
            <h3 className="font-semibold text-white flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Outcome</span>
            </h3>
            <ArrowRight className="w-4 h-4 text-white/70" />
          </div>

          <div className="p-4">
            <p className="text-slate-200 font-medium">{rightText}</p>
          </div>

          <motion.div
            className={`h-1 w-full bg-gradient-to-r ${accentColor} relative overflow-hidden`}
            initial={{ scaleX: 0 }}
            animate={step2Complete ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ originX: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "linear",
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

interface SimpleStepCardProps {
  text: string
  accentColor: string
  stepColor: string
  index: number
  isInView: boolean
  onComplete: () => void
}

function SimpleStepCard({ text, accentColor, stepColor, index, isInView, onComplete }: SimpleStepCardProps) {
  const controls = useAnimation()
  const lineControls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

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
        })

        await lineControls.start({
          scaleX: 1,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
          },
        })

        // Wait a bit before triggering the next step
        setTimeout(() => {
          onComplete()
        }, 300)
      }

      sequence()
    }
  }, [isInView, controls, lineControls, onComplete])

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
        <h3 className={`${stepColor} font-semibold text-sm mb-4`}>Step {index}</h3>

        <p className="text-white text-center mb-8">{text}</p>

        {/* Bottom line with animation */}
        <div className="relative w-full h-6">
          <motion.div
            className={`absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r ${accentColor} overflow-hidden rounded-full`}
            initial={{ scaleX: 0 }}
            animate={lineControls}
            style={{ originX: 0 }}
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
  )
}

