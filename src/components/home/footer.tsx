'use client';
import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Details */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-purple-300">
              Contact Details
            </h4>
            <p className="text-sm sm:text-base text-gray-300">+358 465381366</p>
            <p className="text-sm sm:text-base text-gray-300">team@karhuno.com</p>
            <p className="text-sm sm:text-base text-gray-300">
              Daring Spirit Oy <br /> Hiihtomäentie 14, 00810 <br /> Helsinki,
              Finland
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-purple-300">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors"
                >
                  How it works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("who-its-for")}
                  className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Who it&apos;s for
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("track-signals")}
                  className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Track signals
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("use-cases")}
                  className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Use cases
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-purple-300 mt-4 sm:mt-0">
              Follow Us
            </h4>
            <Link
              href="https://www.linkedin.com/company/karhuno/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm sm:text-base text-gray-200 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} className="sm:w-[24px] sm:h-[24px]" />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="mt-4 pt-6 sm:pt-8 border-t border-gray-700 text-center text-xs sm:text-sm text-gray-200 md:mt-8">
          © {new Date().getFullYear()} Karhuno. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
