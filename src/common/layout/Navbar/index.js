import React, { Fragment } from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavButton,
  SwitchableButton,
  MenuIcon,
} from './NavBarElements';

import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import { PropTypes } from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <NavMenu>
      <NavButton to='/'>Developers</NavButton>
      <NavButton onClick={logout} to='#!'>
        Logout
      </NavButton>
    </NavMenu>
  );

  const guestLinks = (
    <NavMenu>
      <NavButton to='/users_page'>Developers</NavButton>
      <NavButton to='/posts'>Posts</NavButton>
      <NavButton to='/register'>Register</NavButton>
      <NavButton to='/login'>Log in</NavButton>
    </NavMenu>
  );

  return (
    <>
      <Nav>
        <NavLink to='/'>DevForum</NavLink>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
        <SwitchableButton>
          <MenuIcon />
        </SwitchableButton>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
