import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Container component for the page layout using Red Cross Design System tokens
 */
const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`page-container ${className}`}
      style={{ backgroundColor: 'var(--ds-color-primary-background-tinted)' }}
    >
      {children}
    </div>
  );
};

export default PageContainer;
