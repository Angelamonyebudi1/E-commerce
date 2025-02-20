// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Add custom styles for the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* <h1>My Store</h1> */}
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
