"use client"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function VennDiagram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [showIntersection, setShowIntersection] = useState(false)

  useEffect(() => {
    if (isInView) {
      // Delay the intersection animation
      const timer = setTimeout(() => {
        setShowIntersection(true)
      }, 2000) // Wait for circles to move into place
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const circleVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i === 0 ? -400 : i === 1 ? 400 : 0,
      y: i === 2 ? 400 : 0,
    }),
    visible: {
      opacity: 0.7,
      x: 0,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return null
}

