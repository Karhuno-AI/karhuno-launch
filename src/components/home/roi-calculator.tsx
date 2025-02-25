"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ROICalculator() {
  const [hours, setHours] = useState(20)
  const [salary, setSalary] = useState(20)
  const [revenue, setRevenue] = useState(10)

  const timeWithKarhuno = 0.5
  const possibleEconomy = Math.round(salary * (hours - timeWithKarhuno))
  const possibleNewRevenue = Math.round((hours / 40) * revenue * 1000) // Convert to dollars

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate potential ROI</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how much time and money you can save, and how much additional revenue you can generate
            </p>
          </motion.div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-center">
              How Many Hours does your team spend trying to find companies to reach out to per week?
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    # of Hours Spent on Finding Companies per Week
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="text-center text-xl font-bold mt-1">{hours} Hours</div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Gross salary with taxes, $ per Hour</label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="text-center text-xl font-bold mt-1">${salary}</div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Average sales volume per 1 sales manager per month, $K
                  </label>
                  <Input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="bg-gray-700 border-gray-600 text-white text-center text-lg"
                    min="0"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-700/30 p-4 rounded-xl">
                  <div className="text-gray-300 text-sm mb-1">Time spent with Karhuno</div>
                  <div className="text-3xl font-bold text-purple-400">{timeWithKarhuno} hours</div>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-xl">
                  <div className="text-gray-300 text-sm mb-1">Possible economy</div>
                  <div className="text-3xl font-bold text-green-400">${possibleEconomy}</div>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-xl">
                  <div className="text-gray-300 text-sm mb-1">Possible new revenue</div>
                  <div className="text-3xl font-bold text-green-400">${possibleNewRevenue}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-colors duration-300">
                Get leads for free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

