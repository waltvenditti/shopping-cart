import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <header>
      <h1>The Skooma Den</h1>
      <Link className="Home" to='/'>Home</Link>
      <Link to='/shop' >Shop</Link>
      <Link to='/cart'>Cart</Link>
    </header>
  );
};

export default NavBar;
