import React from 'react';
import logo from '../images/Asset 16@4x.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Company Logo" className="logo"/>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Reservations</a></li>
          <li><a href="">Order Online</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
