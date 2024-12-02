import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="sidebar-div">
      <Link to="/"><button className="headerBtn first"> Home 🏠 </button></Link>
      <Link to="/read"><button className="headerBtn"> Explore Challenges 🔍  </button></Link>
      <Link to="/new"><button className="headerBtn"> Submit Challenge 🏆 </button></Link>
    </nav>
  );
};

export default Navbar;