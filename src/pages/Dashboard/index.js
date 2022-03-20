import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
// import Spinner from '../../common/layout/SpinnerGraphic'
import Spinner from '../../common/layout/SpinnerGraphic';
import {
  DashboardHeader,
  DashboardGreeting,
  GreetingContent,
  Name,
  WelcomeWord,
} from './DashboardElements';
import CreateProfileForm from './components/CreateProfileForm';
import NavBar from '../../common/layout/Navbar';
import { Link } from 'react-router-dom';
import DashboardAction from './components/DashboardAction';
const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Fragment>
      <NavBar />
      <Spinner />
    </Fragment>
  ) : (
    <Fragment>
      <NavBar />
      <DashboardHeader>
        <DashboardGreeting>
          <GreetingContent>
            <Name>Welcome {user && user.name}</Name>
          </GreetingContent>
        </DashboardGreeting>
      </DashboardHeader>
      <WelcomeWord>Welcome {user && user.name}</WelcomeWord>

      <Link to='/upload'>Upload your Profile Photo</Link>

      {profile !== null ? (
        <Fragment>
          <DashboardAction />
        </Fragment>
      ) : (
        <CreateProfileForm />
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
