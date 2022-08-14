import React from 'react';
import { ReactComponent as ContainerLogo } from 'assets/icons/container-blue.svg';
import { Nav, NavLink } from './NavigationBar.styled';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavLink href="#">
        <ContainerLogo />
      </NavLink>
      <NavLink href="#">User Profile</NavLink>
    </Nav>
  );
};

export default Navbar;
