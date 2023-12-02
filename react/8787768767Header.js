// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>The Movies</h1>
      </Link>
    </header>
  );
};

export default Header;
