import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  AsideWrapper,
  CloseWrapper,
  CloseSign,
  OptionWrapper,
  OptionItem,
} from './SideBarElement';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import { ColorInfo } from './ColorInfo';

const SideBar = ({
  auth: { loading, isAuthenticated },
  logout,
  toggle,
  isSideBarOpened,
}) => {
  const authLinks = (
    <OptionWrapper>
      <OptionItem to="/dashboard" dotColor={ColorInfo[0]}>
        Dashboard
      </OptionItem>
      <OptionItem to="/users_page" dotColor={ColorInfo[1]}>
        Developers
      </OptionItem>
      <OptionItem to="/profiles" dotColor={ColorInfo[2]}>
        Profiles
      </OptionItem>
      <OptionItem onClick={logout} to="/" dotColor={ColorInfo[3]}>
        Logout
      </OptionItem>
    </OptionWrapper>
  );

  const guestLinks = (
    <OptionWrapper>
      <OptionItem to="/register" dotColor={ColorInfo[0]}>
        Register
      </OptionItem>
      <OptionItem to="/login" dotColor={ColorInfo[3]}>
        Log in
      </OptionItem>
      <OptionItem to="/profiles" dotColor={ColorInfo[2]}>
        Profiles
      </OptionItem>
      <OptionItem to="/users_page" dotColor={ColorInfo[1]}>
        Developers
      </OptionItem>
    </OptionWrapper>
  );

  return (
    <AsideWrapper isSideBarOpened={isSideBarOpened}>
      <CloseWrapper onClick={toggle}>
        <CloseSign />
      </CloseWrapper>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </AsideWrapper>
  );
};

SideBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  isSideBarOpened: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(SideBar);
