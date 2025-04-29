import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface GlassySliderProps {
  value: number;
  setValue: (value: number) => void;
  additionalContacts: boolean;
  customAI: boolean;
}

const GlassySlider = ({ value, setValue }: GlassySliderProps) => {
  const max = 150;
  const [showArrow, setShowArrow] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) {
      setShowArrow(false);
    }
  }, [isDragging]);

  const getPopoverColor = (val: number) => {
    if (val <= 10) return "from-[#522faa40] to-[#5e3abc40]";
    if (val <= 50) return "from-[#7b46ff40] to-[#8658ff40]";
    return "from-[#bda3ff40] to-[#cbb8ff40]";
  };

  const getSegmentHeights = (currentValue: number) => ({
    seg1: currentValue <= 10 ? "h-4" : "h-4",
    seg2: currentValue <= 10 ? "h-2" : currentValue <= 50 ? "h-4" : "h-4",
    seg3: currentValue <= 50 ? "h-2" : "h-4",
  });

  const getTooltipContent = () => {
    if (value <= 10) {
      return (
        <>
          &bull; Startup raised funding <br />
          &bull; Launched a new product/marketing campaign <br />
          &bull; Opened a new office
        </>
      );
    }
    if (value <= 50) {
      return (
        <>
          &bull; Job openings for strategic roles (e.g., Compliance Officer, AI Lead) <br />
          &bull; VC/PE firms expanding investment <br />
          &bull; ESG or carbon-related initiatives
        </>
      );
    }
    return (
      <>
        &bull; New commercial construction projects <br />
        &bull; Participation in accelerators or trade shows
      </>
    );
  };

  const getPopoverText = () => {
    if (value <= 10) return "Niche ICP with hidden signals. Finding leads is tough — it demands precision.";
    if (value <= 50) return "Signals are quite specific but accessible.";
    return "Signals are easy to spot, high signal density.";
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative font-montserrat">
      
      {/* Price Points */}
      <div className="relative flex justify-between mb-10">
        {[
          { label: "$1.8 / lead", position: "2%", active: value <= 10 },
          { label: "$1.1 / lead", position: "25%", active: value > 10 && value <= 50 },
          { label: "$0.8 / lead", position: "65%", active: value > 50 },
        ].map((item, idx) => (
          <div key={idx} className="absolute" style={{ left: item.position }}>
            <span className={cn("font-semibold text-xs md:text-lg transition-colors", item.active ? "text-[#522faa]" : "text-gray-400")}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Slider Track & Segments */}
      <div className="relative mb-12">
        <div className="absolute w-full flex items-center overflow-hidden rounded-full">
          {[
            { width: "6%", colors: "from-[#522faa] to-[#5e3abc]", height: getSegmentHeights(value).seg1 },
            { width: "26%", colors: "from-[#7b46ff] to-[#8658ff]", height: getSegmentHeights(value).seg2 },
            { width: "68%", colors: "from-[#bda3ff] to-[#cbb8ff]", height: getSegmentHeights(value).seg3 },
          ].map((seg, idx) => (
            <div
              key={idx}
              className={cn("bg-gradient-to-r transition-all duration-300", seg.colors, seg.height)}
              style={{ width: seg.width, opacity: 0.9 }}
            />
          ))}
        </div>

        {/* Transparent Input Slider */}
        <input
          type="range"
          min="1"
          max={max}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          onMouseDown={() => setIsDragging(true)}
          className="w-full appearance-none bg-transparent cursor-pointer z-10 opacity-0"
          style={{ height: "2rem" }}
        />

        {/* Thumb */}
        <div
          className="absolute pointer-events-none w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-lg flex items-center justify-center text-purple-800 font-bold text-xl"
          style={{
            left: `${(value / max) * 100}%`,
            top: "20%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {value}
        </div>

        {/* Leads/Week Marks */}
        <div className="relative mt-6">
          {[
            { left: "6.5%", value: "10" },
            { left: "32.5%", value: "50" },
          ].map((mark, idx) => (
            <div key={idx} className="absolute text-center transform -translate-x-1/2 -top-[35px]" style={{ left: mark.left }}>
              <p className="font-semibold text-gray-600">{mark.value}</p>
              <p className="text-xs text-gray-400">leads/week</p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow Pulse Animation */}
      {showArrow && (
        <button
          type="button"
          className="absolute right-0 top-1/2 z-50 transform -translate-y-1/2 translate-x-full opacity-0 d-none"
        >
          <ArrowRight className="w-14 h-14 text-[#1EAEDB] bg-blue-100/30 rounded-full p-2 backdrop-blur-sm animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        </button>
      )}

      {/* Popover Below */}
      <div className="relative mt-12">
        {/* Pointer (Triangle) */}
        <div className="absolute left-0 right-0 h-6 overflow-hidden" style={{ bottom: "100%" }}>
          <div
            className="absolute bottom-0 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[24px] border-l-transparent border-r-transparent"
            style={{
              left: `${(value / max) * 100}%`,
              transform: "translateX(-50%)",
              borderBottomColor:
                value <= 10 ? "#522faa40" : value <= 50 ? "#7b46ff40" : "#bda3ff40",
            }}
          />
        </div>

        {/* Popover Content */}
        <div
          className={cn(
            "backdrop-blur-sm rounded-lg shadow-lg px-6 py-4 relative bg-opacity-25 flex items-center justify-center min-h-[56px]",
            "bg-gradient-to-r",
            getPopoverColor(value)
          )}
        >
          <p className="text-[15px] font-medium text-gray-600">
            {getPopoverText()}{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="underline cursor-pointer">
                  Examples -&gt;
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">{getTooltipContent()}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlassySlider;
