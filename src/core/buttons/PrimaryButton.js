import React from 'react';

const PrimaryButton = ({ label, onClick, icon, disabled, ...props }) => {
  return (
    <div {...props}>
      <button
        data-testid="primary-button"
        className="text-xs flex items-center justify-center font-medium transition ease-in-out duration-400 bg-blue hover:bg-blue-700
          text-white rounded-md py-2 px-4 flex-1 h-9 disabled:bg-gray disabled:cursor-not-allowed"
        onClick={onClick}
        disabled={disabled}>
        {icon}
        {label}
      </button>
    </div>
  );
};

export default PrimaryButton;
