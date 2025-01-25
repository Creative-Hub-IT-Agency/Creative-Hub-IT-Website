import React from 'react';

interface limeButtonProps {
  text: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const limeButton: React.FC<limeButtonProps> = ({
  text,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`uppercase tracking-widest font-semibold  px-8 py-4 bg-[#8FDC24] hover:bg-deep-lime hover:bg-opacity-90 text-base  text-text rounded-full shadow-lg border-white ${className}`}
    >
      {text}
    </button>
  );
};

export default limeButton;
