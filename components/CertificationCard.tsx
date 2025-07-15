
import React, { ReactElement } from 'react';
import type { Certification } from '../types';
import { Card } from './Card';
import { CertificateIcon } from './icons/CertificateIcon';
import { CalendarIcon } from './icons/CalendarIcon';

interface CertificationCardProps {
  certification: Certification;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification }): ReactElement => {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-white">{certification.name}</h3>
        <div className="flex items-center text-sm text-gray-400 mt-2 font-mono">
          <CalendarIcon className="w-3.5 h-3.5 mr-1.5" />
          {certification.period}
        </div>
      </div>
    </Card>
  );
};
