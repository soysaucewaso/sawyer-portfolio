
import React from 'react';
import type { Experience } from '../types';
import { Card } from './Card';
import { LinkIcon } from './icons/LinkIcon';
import { LocationIcon } from './icons/LocationIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Card>
      <header>
        <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-white">{experience.role}</h3>
             <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300 whitespace-nowrap">
                {experience.company}
                <LinkIcon className="w-4 h-4 ml-1.5"/>
            </a>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 mt-2 font-mono">
           <div className="flex items-center">
                <LocationIcon className="w-3.5 h-3.5 mr-1.5" />
                {experience.location}
            </div>
            <div className="flex items-center">
                <CalendarIcon className="w-3.5 h-3.5 mr-1.5" />
                {experience.period}
            </div>
        </div>
      </header>
      <ul className="mt-4 space-y-2 text-gray-300">
        {experience.description.map((item, index) => (
          <li key={index} className="flex items-start">
            <ChevronRightIcon className="w-4 h-4 text-cyan-400/80 mt-1 mr-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
