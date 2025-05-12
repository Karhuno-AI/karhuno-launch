"use client";
import React from "react";
import {
  Pencil,
  Search,
  Brain,
  Target,
  Lock,
  Clock,
  Shield,
  FileText,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const TwoWaysToTrack: React.FC = () => {
  return (
    <section className="py-16 relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-purple-200/80 before:via-pink-200/60 before:to-indigo-200/80 before:animate-gradient-shift before:opacity-75 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            Two Ways to Track the{" "}
            <span className="bg-gradient-to-r from-[#792abf] to-[#522faa] text-transparent bg-clip-text">
              {" "}
              Right Signals{" "}
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to catch the right leads — from the moment they
            show intent.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* Card 1 - Web Signals - Full Width Horizontal */}
          <Card className="rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.05)] bg-[#FCE2E4] border-0">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-left">
                      Track what companies do — not just what they say.
                    </h3>

                    <p className="text-base mb-6 font-montserrat text-left">
                      Karhuno scans news, job boards, PR sites, tenders, and
                      databases to find early buying signals — before they go
                      mainstream.
                    </p>

                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start">
                        <span className="mr-3 mt-0.5">
                          <Pencil size={18} className="text-[#49937d]" />
                        </span>
                        <span className="font-montserrat font-medium">
                          Simplicity — Just write your ICP in plain English.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 mt-0.5">
                          <Search size={18} className="text-[#49937d]" />
                        </span>
                        <span className="font-montserrat font-medium">
                          Deep Search — We scan thousands of sources to detect
                          relevant articles, tenders, PRs and more — matched
                          with company info.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 mt-0.5">
                          <Brain size={18} className="text-[#49937d]" />
                        </span>
                        <span className="font-montserrat font-medium">
                          Extra Research — We can go deeper to extract
                          actionable insights and enrich your leads.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 mt-0.5">
                          <FileText size={18} className="text-[#49937d]" />
                        </span>
                        <span className="font-montserrat font-medium">
                          Every signal comes with the proof behind it: the
                          article, post, or source that triggered it — so you
                          know why the lead matters.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Image - Updated with new uploaded image */}
                <div className="w-full h-full relative min-h-[300px] rounded-lg overflow-hidden bg-white/50 border border-[#49937d]/20 flex items-center justify-center">
                  <Image
                    src="/images/b4468311-843f-4ef9-af4a-dd7a1b66b4b6.png"
                    alt="Search interface for finding European SaaS startups"
                    className="w-full h-full object-contain"
                    fill
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 - LinkedIn Signals - Full Width Horizontal */}
          <Card className="rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.05)] bg-[#E5DEFF] border-0">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-left">
                      Find companies that posted… before your competitors even
                      saw it.
                    </h3>

                    <p className="text-base mb-6 font-montserrat text-left">
                      We monitor LinkedIn in real time to detect live posts from
                      key decision-makers. Then we apply advanced filters and
                      send you verified contacts with context.
                    </p>

                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start">
                        <span className="mr-3 mt-0.5">
                          <Target size={18} className="text-[#792abf]" />
                        </span>
                        <span className="font-montserrat font-medium">
                          Unlimited filtering precision — Filter by position,
                          post content, or any company attribute (even those not
                          listed on LinkedIn). We fact-check data in real time.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 mt-0.5">
                          <Shield size={18} className="text-[#792abf]" />
                        </span>
                        <span className="font-montserrat font-medium">
                          Receive outreach-ready profiles with verified emails
                          and post context
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 mt-0.5">
                          <Clock size={18} className="text-[#792abf]" />
                        </span>
                        <span className="font-montserrat font-medium">
                          Signals updated every 24h — fresh, accurate, and
                          actionable
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 mt-0.5">
                          <Lock size={18} className="text-[#792abf]" />
                        </span>
                        <span className="font-montserrat font-medium">
                          No login to LinkedIn required — access data without
                          authentication barriers
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Image with new uploaded image */}
                <div className="w-full h-full relative min-h-[300px] rounded-xl overflow-hidden bg-white/50 border border-[#792abf]/20 flex items-center justify-center">
                  <Image
                    src="/images/76b25f17-5a75-4e21-8b18-3bd6d17dc865.png"
                    alt="LinkedIn search interface showing filter options for finding relevant posts"
                    className="w-full h-full object-contain p-2"
                    fill
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TwoWaysToTrack;
