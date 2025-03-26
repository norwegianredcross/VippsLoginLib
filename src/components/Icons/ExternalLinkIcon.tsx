import React from 'react';

interface ExternalLinkIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = ({ 
  className = 'external-link-icon',
  width = 16, 
  height = 16 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M11.9988 8.66644V12.6652C11.9988 13.0187 11.8584 13.3577 11.6084 13.6077C11.3585 13.8577 11.0194 13.9981 10.6659 13.9981H3.33487C2.98136 13.9981 2.64233 13.8577 2.39236 13.6077C2.14239 13.3577 2.00195 13.0187 2.00195 12.6652V5.33414C2.00195 4.98063 2.14239 4.64159 2.39236 4.39162C2.64233 4.14165 2.98136 4.00122 3.33487 4.00122H7.33363"
        stroke="currentColor"
        strokeWidth="1.2796"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2.00171H13.9988V6.00046"
        stroke="currentColor"
        strokeWidth="1.2796"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66797 9.33276L13.999 2.00171"
        stroke="currentColor"
        strokeWidth="1.2796"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ExternalLinkIcon;
