import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavButton,
  SwitchableButton,
  MenuIcon,
} from './NavBarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>DevForum</NavLink>
        <NavMenu>
          <NavButton to='/'>Developers</NavButton>
          <NavButton to='/posts'>Posts</NavButton>
          <NavButton to='/register'>Register</NavButton>
          <NavButton to='/login'>Log in</NavButton>
        </NavMenu>
        <SwitchableButton>
          <MenuIcon />
        </SwitchableButton>
      </Nav>
    </>
  );
};

export default Navbar;
