import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={navbarStyle}>
      <Link style={navbarFontStyle} to="/about">
        About
      </Link>
      <Link style={navbarFontStyle} to="/works">
        Works
      </Link>
      <Link style={navbarFontStyle} to="/contact">
        Contact
      </Link>
    </div>
  );
}

const navbarStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: '20rem',
  padding: '0 1rem',
};

const navbarFontStyle = {
  fontWeight: '500',
  color: '#6C757D',
  textDecoration: 'none',
  fontSize: 32,
};

export default Navbar;
