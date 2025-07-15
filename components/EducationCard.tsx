
import React from 'react';
import type { Education } from '../types';
import { Card } from './Card';
import { LocationIcon } from './icons/LocationIcon';
import { CalendarIcon } from './icons/CalendarIcon';

interface EducationCardProps {
  education: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <Card>
      <h3 className="font-bold text-white">{education.institution}</h3>
      <p className="text-gray-300">{education.degree}</p>
      <p className="text-cyan-400 font-mono text-sm">{education.gpa}</p>
      <div className="mt-4 flex flex-col space-y-2 text-sm text-gray-400 font-mono">
          <div className="flex items-center">
              <LocationIcon className="w-3.5 h-3.5 mr-1.5" />
              {education.location}
          </div>
          <div className="flex items-center">
              <CalendarIcon className="w-3.5 h-3.5 mr-1.5" />
              {education.period}
          </div>
      </div>
    </Card>
  );
};
