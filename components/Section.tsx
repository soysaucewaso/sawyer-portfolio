
import React from 'react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section>
      <div className="flex items-center mb-6">
        <span className="text-cyan-400">{icon}</span>
        <h2 className="text-2xl font-bold text-white ml-3 tracking-wide">{title}</h2>
      </div>
      <div className="border-l-2 border-cyan-400/30 pl-6">
        {children}
      </div>
    </section>
  );
};
