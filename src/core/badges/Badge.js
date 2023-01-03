import React from 'react';

const Badge = ({ text }) => {
  return (
    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium leading-4 border border-[#F59E0B] text-[#B65811] bg-yellow-50 rounded-full h-6">
      {text}
    </span>
  );
};

export default Badge;
