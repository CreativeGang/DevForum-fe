import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../common/layout/SpinnerGraphic';
import { getProfileById } from '../../actions/profile';
import NavBar from '../../common/layout/Navbar';
import ProfileBanner from './components/ProfileBanner';
import ProfileAbout from './components/ProfileAbout';
import ProfileExp from './components/ProfileExp';
import ProfileEdu from './components/ProfileEdu';
import ProfileGithub from './components/ProfileGithub';

import {
  ProfileLink,
  PageWrapper,
  ProfileWrapper,
  ProfileContainer,
  ExpWrapper,
  ExpTitle,
  ExpContainer,
  ExpMsg,
  EduWrapper,
  EduTitle,
  EduContainer,
  EduMsg,
} from './Elements';
const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <PageWrapper>
      <NavBar />
      <ProfileWrapper>
        {profile === null || loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <ProfileLink to="/profiles">Go Back to Profiles</ProfileLink>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <ProfileLink to="/edit_profile">Edit Profile</ProfileLink>
              )}
            <ProfileContainer>
              <ProfileBanner profile={profile} />
              <ProfileAbout profile={profile} />
              <ExpWrapper>
                <ExpTitle>Experience</ExpTitle>
                {profile.experience.length > 0 ? (
                  <ExpContainer>
                    {profile.experience.map((experience) => (
                      <ProfileExp
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                  </ExpContainer>
                ) : (
                  <ExpMsg>No Experience Credientials</ExpMsg>
                )}
              </ExpWrapper>
              <EduWrapper>
                <EduTitle>Education</EduTitle>
                {profile.education.length > 0 ? (
                  <EduContainer>
                    {profile.education.map((education) => (
                      <ProfileEdu key={education._id} education={education} />
                    ))}
                  </EduContainer>
                ) : (
                  <EduMsg>No Education Credientials</EduMsg>
                )}
              </EduWrapper>
              {profile.githubusername && (
                <ProfileGithub username={profile.githubusername} />
              )}
            </ProfileContainer>
          </Fragment>
        )}
      </ProfileWrapper>
    </PageWrapper>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
