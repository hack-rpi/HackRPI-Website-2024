import React from 'react';

interface ArrowProps {
  direction: 'left' | 'right';
  onClick: () => void; // Explicitly define the type of the onClick prop
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition-colors duration-200"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-24 w-24 text-gray-800 ${direction === 'left' ? 'rotate-180' : ''}`} // Increase size to h-24 w-24
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3} // Increase strokeWidth to 3
        d="M14 6l6 6m0 0l-6 6m6-6H3" // Modify the d attribute to make the arrow points longer
      />
    </svg>
  </button>
);

export default Arrow;