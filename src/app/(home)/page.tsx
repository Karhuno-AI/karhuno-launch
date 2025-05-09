import Link from "next/link"
import { Linkedin } from "lucide-react"
import Hero from "@/components/home/Hero";
import NavBar from "@/components/home/NavBar"
import AnimatedSearchBar from "@/components/home/AnimatedSearchBar"
import WhoItsFor from "@/components/home/WhoItsFor"
import TwoWaysToTrack from "@/components/home/TwoWaysToTrack"
import RealWorldUseCases from "@/components/home/RealWorldUseCases"
import ConsolidatedCTA from "@/components/home/ConsolidatedCTA"
import MultiPlatformIcons from "@/components/home/MultiPlatformIcons"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Animated Search Bar Section */}
      <AnimatedSearchBar />

      {/* Who It's For Section - Added ID in component */}
      <WhoItsFor />

      {/* Two Ways To Track Section */}
      <section id="track-signals">
        <TwoWaysToTrack />
      </section>

      {/* Multi-Platform Icons Section */}
      <MultiPlatformIcons />

      {/* Real World Use Cases */}
      <section id="use-cases">
        <RealWorldUseCases />
      </section>

      {/* Consolidated CTA Before Footer */}
      <section id="early-access" className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#a947e7]/10 to-[#792abf]/10">
        <div className="max-w-4xl mx-auto">
          <ConsolidatedCTA />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold font-roboto">Karhuno AI</h2>
              <p className="text-gray-400 mt-2 font-montserrat">Finding signals that matter.</p>
            </div>

            <div className="flex space-x-8">
              <div>
                <h3 className="text-lg font-bold mb-4 font-roboto">Product</h3>
                <ul className="space-y-2 font-montserrat">
                  <li>
                    <Link href="/linkedin-radar" className="text-gray-400 hover:text-mint">
                      Our Platform
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-mint">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 font-roboto">Company</h3>
                <ul className="space-y-2 font-montserrat">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-mint">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-mint">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-mint">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0 font-montserrat">
                © {new Date().getFullYear()} Karhuno AI. All rights reserved.
              </p>

              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
