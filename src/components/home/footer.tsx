import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Contact Details</h4>
            <p className="text-gray-300">+358 465381366</p>
            <p className="text-gray-300">team@karhuno.com</p>
            <p className="text-gray-300">Daring Spirit Oy Hiihtomäentie 14, 00810 Helsinki, Finland</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
                  What we do
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Follow Us</h4>
            <Link
              href="https://www.linkedin.com/company/karhuno/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-200 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="mt-4 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-200 md:mt-8">
          © {new Date().getFullYear()} Karhuno. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

