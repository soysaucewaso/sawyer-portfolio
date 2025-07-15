import React from 'react';

export const CertificateIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title>certification</title>
    {/* Rounded rectangle badge */}
    <rect x="6" y="8" width="14" height="14" rx="2" ry="2" />
    {/* Checkmark inside */}
    <path d="M9.25 14.25l3 4 4.5-7.5" />
  </svg>
);
