
import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-[#0f2d52]/50 border border-cyan-400/20 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#123562]/60">
      {children}
    </div>
  );
};
