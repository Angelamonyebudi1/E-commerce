// src/components/Layout.js

import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
