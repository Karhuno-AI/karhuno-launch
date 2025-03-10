"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ContactCard from "./contact-card"

const CONTACTS = [
  {
    name: "Marco giovani",
    role: "Head of Growth",
    company: "TechVision Inc.",
    image: "/image.jpeg",
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Sales",
    company: "CloudScale Solutions",
    image: "/micheal.jpeg",
  },
  {
    name: "Emma Thompson",
    role: "Chief Revenue Officer",
    company: "DataFlow Systems",
    image: "/emma.jpeg",
  },
  {
    name: "Alex Johnson",
    role: "Sales Director",
    company: "InnoTech Enterprises",
    image: "/alex.jpeg",
  },
  {
    name: "Olivia Lee",
    role: "Business Development Manager",
    company: "FutureSoft Inc.",
    image: "/olivia.jpeg",
  },
]

interface ContactCarouselProps {
  direction?: "ltr" | "rtl"
}

export default function ContactCarousel({ direction = "ltr" }: ContactCarouselProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cards, setCards] = useState(CONTACTS)

  return (
    <div className="relative w-full h-full flex items-center overflow-hidden py-4 before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-white/50 before:via-transparent before:to-white/50 before:pointer-events-none">
      <div className="flex">
        <motion.div
          className="flex gap-4"
          animate={{
            x: direction === "ltr" ? ["-50%", "0%"] : ["0%", "-50%"],
          }}
          transition={{
            x: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        >
          {[...cards, ...cards].map((contact, index) => (
            <div key={index} className="flex-shrink-0 w-72">
              <div className="h-full">
                <ContactCard {...contact} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

