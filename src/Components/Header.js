import React from 'react';
import logo from '../images/Asset 16@4x.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Company Logo" style={{ width: '250px', height: 'auto' }} />
      <h1>Welcome to the Homepage</h1>
    </header>
  );
}

export default Header;
