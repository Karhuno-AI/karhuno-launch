"use client";
import React from "react";
import { Clock, Infinity } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const WhyKarhunoWorksBetter: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 font-roboto">
            Why Karhuno Works Better
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-montserrat">
            Proof. Efficiency. And no LinkedIn risk.
          </p>
        </div>

        {/* Grid Layout - 3 Rows */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Row 1: 2 quadrati e 1 rettangolo */}
          <div className="col-span-6 md:col-span-3 aspect-square bg-[#fef3c7] rounded-xl p-5 flex flex-col justify-start">
            <h3 className="text-4xl font-bold font-roboto text-gray-900 mb-2">55%</h3>
            <p className="text-base text-gray-700 font-montserrat">reply rate on warm leads</p>
          </div>
          
          <div className="col-span-6 md:col-span-3 aspect-square bg-[#d8c4f4] rounded-xl p-5 flex flex-col justify-start">
            <h3 className="text-4xl font-bold font-roboto text-gray-900 mb-2">40%</h3>
            <p className="text-base text-gray-700 font-montserrat">LinkedIn connect rate</p>
          </div>
          
          <div className="col-span-12 md:col-span-6 bg-[#d3e4fd] rounded-xl p-6 flex flex-col justify-between">
            <p className="text-lg font-medium font-montserrat leading-relaxed">
              &quot;I no longer waste time filtering — Karhuno delivers what matters.&quot;
            </p>
            <div className="mt-4 flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarFallback className="bg-violet text-white">
                  AR
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-gray-900 font-roboto">
                  Anna Rizzo
                </p>
                <p className="text-sm text-gray-600 font-montserrat">
                  Head of Business Development
                </p>
              </div>
            </div>
          </div>
          
          {/* Row 2: 1 rettangolo e 2 quadrati */}
          <div className="col-span-12 md:col-span-6 bg-[#f5f5f5] rounded-xl p-6 flex flex-col justify-between">
            <p className="text-lg font-medium font-montserrat leading-relaxed">
              &quot;Increasing my productivity by at least 5x, Karhuno is the &apos;go-to&apos; tool for teams looking to scale their customer book rapidly.&quot;
            </p>
            <div className="mt-4 flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarFallback className="bg-violet text-white">
                  AC
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-gray-900 font-roboto">
                  Alexander Cresswell
                </p>
                <p className="text-sm text-gray-600 font-montserrat">
                  Commercial AE
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-span-6 md:col-span-3 aspect-square bg-[#e5deff] rounded-xl p-5 flex flex-col justify-start">
            <div className="flex items-center mb-2">
              <Infinity size={24} className="text-violet mr-2" />
              <h3 className="text-4xl font-bold font-roboto text-gray-900">∞</h3>
            </div>
            <p className="text-base text-gray-700 font-montserrat">
              advanced lead filters
            </p>
          </div>
          
          <div className="col-span-6 md:col-span-3 aspect-square bg-[#99edcd] rounded-xl p-5 flex flex-col justify-start">
            <h3 className="text-3xl font-bold font-roboto text-gray-900 mb-2">No login</h3>
            <p className="text-base text-gray-700 font-montserrat">
              required for LinkedIn
            </p>
          </div>
          
          {/* Row 3: 2 quadrati e 1 rettangolo */}
          <div className="col-span-6 md:col-span-3 aspect-square bg-[#fde1d3] rounded-xl p-5 flex flex-col justify-start">
            <h3 className="text-4xl font-bold font-roboto text-gray-900 mb-2">9×</h3>
            <p className="text-base text-gray-700 font-montserrat">ROI</p>
          </div>
          
          <div className="col-span-6 md:col-span-3 aspect-square bg-[#fef3c7] rounded-xl p-5 flex flex-col justify-start">
            <div className="flex items-center mb-2">
              <Clock size={24} className="text-violet mr-2" />
              <h3 className="text-4xl font-bold font-roboto text-gray-900">10h</h3>
            </div>
            <p className="text-base text-gray-700 font-montserrat">
              saved weekly per rep
            </p>
          </div>
          
          <div className="col-span-12 md:col-span-6 bg-[#f5f5f5] rounded-xl p-6 flex flex-col justify-between">
            <p className="text-lg font-medium font-montserrat leading-relaxed">
              &quot;Finally, a lead tool that doesn&apos;t ask for my LinkedIn credentials.&quot;
            </p>
            <div className="mt-4 flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarFallback className="bg-violet text-white">
                  LH
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-gray-900 font-roboto">
                  Luis Hernandez
                </p>
                <p className="text-sm text-gray-600 font-montserrat">
                  Outbound Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKarhunoWorksBetter;