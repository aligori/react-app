import React from 'react';

const RadioButton = ({ label, checked, onClick }) => {
  return (
    <div
      className="flex items-center text-gray-700 font-medium text-xs leading-5 mx-3 cursor-pointer group"
      onClick={onClick}>
      <div
        className={`border-white border-3 ring-4 ${
          checked
            ? 'bg-purple-700 ring-purple-100'
            : 'bg-gray-200 ring-gray-200 group-hover:ring-purple-100 group-hover:bg-purple-700'
        } rounded-full mr-2 p-1`}
      />
      {label}
    </div>
  );
};

export default RadioButton;
