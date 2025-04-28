import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
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
  const [showArrow, setShowArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) {
      setShowArrow(false);
    }
  }, [isDragging]);

  const handleArrowClick = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const getSegmentColor = (val: number) => {
    if (val <= 10) return 'from-[#522faa] to-[#5e3abc]';
    if (val <= 50) return 'from-[#7b46ff] to-[#8658ff]';
    return 'from-[#bda3ff] to-[#cbb8ff]';
  };

  const getPopoverColor = (val: number) => {
    if (val <= 10) return 'from-[#522faa40] to-[#5e3abc40]';
    if (val <= 50) return 'from-[#7b46ff40] to-[#8658ff40]';
    return 'from-[#bda3ff40] to-[#cbb8ff40]';
  };

  const getSegmentHeights = (currentValue: number) => {
    if (currentValue <= 10) {
      return { seg1: 'h-8', seg2: 'h-4', seg3: 'h-4' };
    } else if (currentValue <= 50) {
      return { seg1: 'h-8', seg2: 'h-8', seg3: 'h-4' };
    } else {
      return { seg1: 'h-8', seg2: 'h-8', seg3: 'h-8' };
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative font-montserrat">
      <div className="flex justify-between mb-8 text-lg relative">
        <div className="absolute left-[2%] text-center">
          <span className={cn(
            "font-semibold text-2xl transition-colors",
            value <= 10 ? "text-[#522faa]" : "text-gray-400"
          )}>$1.8 / lead</span>
        </div>
        <div className="absolute left-[25%] text-center">
          <span className={cn(
            "font-semibold text-2xl transition-colors",
            value > 10 && value <= 50 ? "text-[#522faa]" : "text-gray-400"
          )}>$1.1 / lead</span>
        </div>
        <div className="absolute left-[65%] text-center">
          <span className={cn(
            "font-semibold text-2xl transition-colors",
            value > 50 ? "text-[#522faa]" : "text-gray-400"
          )}>$0.8 / lead</span>
        </div>
      </div>

      <div className="relative mb-12">
        <div className="absolute w-full rounded-full overflow-hidden flex items-center">
          <div className={cn(`bg-gradient-to-r ${getSegmentColor(value)} transition-all duration-300`, getSegmentHeights(value).seg1)} 
               style={{ width: '6.67%', opacity: 0.9 }} />
          <div className={cn(`bg-gradient-to-r ${getSegmentColor(value)} transition-all duration-300`, getSegmentHeights(value).seg2)} 
               style={{ width: '26.67%', opacity: 0.9 }} />
          <div className={cn(`bg-gradient-to-r ${getSegmentColor(value)} transition-all duration-300`, getSegmentHeights(value).seg3)} 
               style={{ width: '66.66%', opacity: 0.9 }} />
        </div>

        {/* Slider */}
        <input
          type="range"
          min="1"
          max={max}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          onMouseDown={() => setIsDragging(true)}
          className="w-full appearance-none bg-transparent cursor-pointer relative z-10 opacity-0"
          style={{ height: '2rem' }}
        />

        {/* Custom Thumb */}
        <div 
          className="absolute pointer-events-none w-12 h-12 rounded-full backdrop-blur-sm bg-white/70 shadow-lg flex items-center justify-center text-purple-800 font-bold text-xl"
          style={{
            left: `${(value / max) * 100}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {value}
        </div>

      </div>

      {/* Arrow Button */}
      {showArrow && (
        <button
          type="button"
          onClick={handleArrowClick}
          className="absolute right-0 top-1/2 z-50 transform -translate-y-1/2 translate-x-full"
        >
          <ArrowRight className="w-14 h-14 text-[#1EAEDB] bg-blue-100/30 rounded-full p-2 backdrop-blur-sm animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        </button>
      )}

      <div className="relative mt-12">
        <div className="absolute left-0 right-0 h-6 overflow-hidden" style={{ bottom: '100%' }}>
          <div 
            className="absolute bottom-0 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[24px] border-l-transparent border-r-transparent"
            style={{ 
              left: `${(value / max) * 100}%`, 
              transform: 'translateX(-50%)',
              borderBottomColor: value <= 10 ? '#522faa40' : 
                               value <= 50 ? '#7b46ff40' : 
                               '#bda3ff40'
            }}
          />
        </div>
        
        <div 
          className={cn(
            "backdrop-blur-sm rounded-lg shadow-lg p-6 relative bg-gradient-to-r bg-opacity-25 flex items-center justify-center min-h-[56px] bg-gradient-to-r",
            getPopoverColor(value)
          )}
        >
          {value <= 10 && (
            <p className="text-[15px] font-medium text-gray-600">
              Niche ICP with hidden signals. Finding leads is tough — it demands precision.
            </p>
          )}
          {value > 10 && value <= 50 && (
            <p className="text-[15px] font-medium text-gray-600">
              Signals are quite specific but accessible.{' '}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="underline cursor-pointer">Examples -&gt;</TooltipTrigger>
                  <TooltipContent>
                    <p>EXAMPLE EXAMPLE</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </p>
          )}
          {value > 50 && (
            <p className="text-[15px] font-medium text-gray-600">
              Signals are easy to spot, high signal density.{' '}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="underline cursor-pointer">Examples -&gt;</TooltipTrigger>
                  <TooltipContent>
                    <p>EXAMPLE EXAMPLE</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlassySlider;
