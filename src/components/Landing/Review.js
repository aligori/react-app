import React from 'react';

const Review = ({ reviewer, text, logo }) => {
  const { image, name, position } = reviewer;

  return (
    <div className="flex-1 flex-col px-10 lg:px-40 py-20 border-b lg:border-b-0 lg:border-l border-gray-900 border-opacity-20 text-sm">
      <img src={logo} alt="" className="mb-3 h-9" />
      <div>{text}</div>
      <div className="flex items-center mt-4">
        <img src={image} alt="" className="rounded-full h-14 w-14 mr-3" />
        <div className="flex flex-col">
          <span>{name}</span>
          <span className="opacity-50">{position}</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
