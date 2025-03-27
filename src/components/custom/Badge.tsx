import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

/**
 * Custom Badge component that uses Red Cross Design System tokens
 */
const Badge: React.FC<BadgeProps> = ({ 
  children, 
  className = '', 
  'aria-label': ariaLabel 
}) => {
  return (
    <span
      className={`new-badge ${className}`}
      aria-label={ariaLabel}
      style={{ color: 'var(--ds-color-primary-text-subtle)' }}
    >
      {children}
    </span>
  );
};

export default Badge;
