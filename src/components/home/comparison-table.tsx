"use client";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureProps {
  name: string,
  apollo: boolean,
  clay: boolean,
  karhuno: boolean
}

const features: FeatureProps[] = [
  {
    name: "Lead search based on any criteria",
    apollo: false,
    clay: true,
    karhuno: true,
  },
  {
    name: "Sales signals with proofs",
    apollo: false,
    clay: false,
    karhuno: true,
  },
  {
    name: "Quick start - no data analysts needed",
    apollo: false,
    clay: false,
    karhuno: true,
  },
];

const Indicator = ({ positive }: { positive: boolean }) => {
  return positive ? (
    <Plus className="w-6 h-6 text-emerald-500" />
  ) : (
    <Minus className="w-6 h-6 text-red-400" />
  );
};

export function ComparisonTable() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-purple-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Feel the difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how Karhuno compares to other solutions in the market
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-purple-600 text-white rounded-tl-xl"></th>
                  {["Apollo", "Clay", "Karhuno"].map((platform) => (
                    <th
                      key={platform}
                      className="p-4 text-center bg-purple-600 text-white last:rounded-tr-xl font-medium text-lg"
                    >
                      {platform}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature: FeatureProps, index) => (
                  <tr
                    key={index}
                    className="border-b border-purple-100 last:border-none bg-white/80 hover:bg-purple-50/50 transition-colors"
                  >
                    <td className="p-4 text-left font-medium text-black dark:text-white">
                      {feature.name}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <Indicator positive={feature.apollo} />
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <Indicator positive={feature.clay} />
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <Indicator positive={feature.karhuno} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
