"use client";
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  ctaText: string;
  ctaAction: () => void;
  variant: 'mint' | 'violet';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  ctaText, 
  ctaAction, 
  variant 
}) => {
  return (
    <div className="w-full bg-white rounded-xl p-8 shadow-card h-full flex flex-col">
      <div className="mb-6">
        {variant === 'mint' ? (
          <div className="w-16 h-16 rounded-full bg-mint bg-opacity-20 flex items-center justify-center">
            <Icon size={32} className="text-teal" />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-violet bg-opacity-20 flex items-center justify-center">
            <Icon size={32} className="text-violet" />
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-bold mb-4 font-roboto">{title}</h3>
      
      <p className="text-gray-700 mb-8 flex-grow font-montserrat">
        {description}
      </p>
      
      {variant === 'mint' ? (
        <button 
          onClick={ctaAction}
          className="px-5 py-3 border-2 border-mint text-teal font-medium rounded-lg hover:bg-mint hover:bg-opacity-20 transition-all font-roboto"
        >
          {ctaText}
        </button>
      ) : (
        <button 
          onClick={ctaAction}
          className="px-5 py-3 bg-violet text-white font-medium rounded-lg hover:bg-opacity-90 transition-all font-roboto"
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};

export default FeatureCard;