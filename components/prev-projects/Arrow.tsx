import React from 'react';

interface ArrowProps {
  direction: 'left' | 'right';
  onClick: () => void; // Explicitly define the type of the onClick prop
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white rounded-md p-2 hover:bg-gray-200 transition-colors duration-200"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 text-gray-800 ${direction === 'left' ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </button>
);

export default Arrow;