import React, { Fragment, useState } from 'react';
import SideBar from '../SideBar';
import './transition.css';
import { useClickOutside } from '../../../Hooks/detectClickOutside';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import { PropTypes } from 'prop-types';
import {
  NavWrapper,
  Nav,
  NavLink,
  LogoWrapper,
  Logo,
  LinkCollectionButton,
  DownArrow,
  NavMenu,
  NavButton,
  SwitchableButton,
  MenuIcon,
  LinkMenuWrapper,
  LinkMenuContainer,
  LinkItem,
  LinkName,
} from './NavBarElements';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isLinkMuneOpened, setLinkMuneOpened] = useState(false);
  const [isSideBarOpened, setSideBarOpened] = useState(false);
  const toggleSideBar = () => {
    setSideBarOpened((previsOpen) => !previsOpen);
  };
  const handleDropDown = () => {
    setLinkMuneOpened((previsLinkMuneOpened) => !isLinkMuneOpened);
  };
  let domNode = useClickOutside(() => setLinkMuneOpened(false));

  const authLinks = (
    <NavMenu>
      <NavButton to="/dashboard">Dashboard</NavButton>
      <NavButton to="/users_page">Developers</NavButton>
      <NavButton to="/profiles">Profiles</NavButton>
      <NavButton onClick={logout} to="/">
        Logout
      </NavButton>
    </NavMenu>
  );

  const guestLinks = (
    <NavMenu>
      <NavButton to="/users_page">Developers</NavButton>
      <NavButton to="/profiles">Profiles</NavButton>
      <NavButton to="/register">Register</NavButton>
      <NavButton to="/login">Log in</NavButton>
    </NavMenu>
  );

  return (
    <NavWrapper>
      <Nav>
        <NavLink to="/" ref={domNode}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <LinkCollectionButton onClick={handleDropDown}>
            DevForum
            <CSSTransition
              in={isLinkMuneOpened}
              timeout={300}
              classNames="rotate"
            >
              <DownArrow />
            </CSSTransition>
            <CSSTransition
              in={isLinkMuneOpened}
              timeout={10}
              classNames="dropdown"
              unmountOnExit
            >
              <LinkMenuWrapper>
                <LinkMenuContainer>
                  <LinkItem>
                    <LinkName to={'/'}>Home Page</LinkName>
                  </LinkItem>
                  <LinkItem>
                    <LinkName to={'/'}>Create Post</LinkName>
                  </LinkItem>
                </LinkMenuContainer>
              </LinkMenuWrapper>
            </CSSTransition>
          </LinkCollectionButton>
        </NavLink>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
        <SwitchableButton onClick={toggleSideBar}>
          <MenuIcon />
        </SwitchableButton>
      </Nav>
      <SideBar toggle={toggleSideBar} isSideBarOpened={isSideBarOpened} />
    </NavWrapper>
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
