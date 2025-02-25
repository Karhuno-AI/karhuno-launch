"use client"

import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function WhatYouGet() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const arrowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.3])
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const arrowBlur = useTransform(scrollYProgress, [0, 1], [0, 20])
  const arrowX = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])
  const leftBlockColor = useTransform(scrollYProgress, [0, 1], ["rgba(128, 90, 213, 0.2)", "rgba(255, 255, 255, 1)"])
  const rightBlockColor = useTransform(scrollYProgress, [0, 1], ["rgba(255, 255, 255, 1)", "rgba(128, 90, 213, 0.2)"])

  const leftBlockX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const rightBlockX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  return null
}

