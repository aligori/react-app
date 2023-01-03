import React from 'react';
import PrimaryButton from '../core/buttons/PrimaryButton';

const NavItem = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-gray-500 hover:text-gray-700 cursor-pointer mx-4 text-sm font-medium">
      {title}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-between border-b shadow-md py-5 px-20">
      <div className="flex flex-1 items-center">
        <div className="font-semibold text-xl mr-5">
          <span className="text-blue">ONE</span>
          <span className="text-dark-blue">LINE</span>
        </div>
        <div className="flex items-center">
          <NavItem title="Solutions" />
          <NavItem title="Pricing" />
          <NavItem title="Contact Us" />
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-gray-500 mx-4 text-sm font-medium mx-5">Sign in</button>
        <PrimaryButton label="Register for free" />
      </div>
    </div>
  );
};

export default Navbar;
