"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, PhoneIcon, MailIcon } from "lucide-react";
import Image from "next/image";

interface ContactCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
}

export default function ContactCard({
  name,
  role,
  company,
  image,
}: ContactCardProps) {
  return (
    <motion.div
      className="relative w-full h-full max-w-sm min-h-80 p-6 bg-white/90 backdrop-blur-lg rounded-xl border border-purple-400/30 hover:border-purple-500/50 transition-all duration-300 shadow-lg flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/50 flex-shrink-0">
          <Image
            width={50}
            height={50}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
          <p className="text-sm text-indigo-600 mb-2">{role}</p>
          <p className="text-sm text-purple-700">{company}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <Button
          size="sm"
          variant="outline"
          className="flex items-center gap-2 text-indigo-700 border-indigo-400 hover:bg-indigo-100"
        >
          <LinkedinIcon className="w-4 h-4" />
          LinkedIn
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex items-center gap-2 text-indigo-700 border-indigo-400 hover:bg-indigo-100"
        >
          <PhoneIcon className="w-4 h-4" />
          Phone
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex items-center gap-2 text-indigo-700 border-indigo-400 hover:bg-indigo-100"
        >
          <MailIcon className="w-4 h-4" />
          Email
        </Button>
      </div>

      <Button variant="accent" className="absolute bottom-4 w-4/5" size="lg">
        Contact
      </Button>
    </motion.div>
  );
}
