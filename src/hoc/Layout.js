import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
