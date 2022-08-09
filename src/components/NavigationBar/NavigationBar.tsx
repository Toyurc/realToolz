import React from 'react';
import { Nav, NavLink } from './NavigationBar.styled';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavLink href="#">Logo</NavLink>
      <NavLink href="#">User Profile</NavLink>
    </Nav>
  );
};

export default Navbar;
