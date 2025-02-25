"use client"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function VennDiagram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showIntersection, setShowIntersection] = useState(false);

  useEffect(() => {
    
    if (isInView) {
      // Delay the intersection animation
      const timer = setTimeout(() => {
        setShowIntersection(true)
      }, 2000) // Wait for circles to move into place
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return null
}

