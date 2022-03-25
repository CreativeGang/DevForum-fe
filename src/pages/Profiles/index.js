import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import NavBar from '../../common/layout/Navbar';
import {
  PageWrapper,
  ProfileWrapper,
  ProfilesTitle,
  ProfilesHeader,
  LeadIcon,
  
  ProfilesLead,
  ProfilesContent,
  WariningMsg
} from './Elements';
import Spinner from '../../common/layout/SpinnerGraphic';
import ProfileItem from './ProfileItem';
import profile from '../../reducers/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <PageWrapper>
      <NavBar />
      <Fragment>{loading ? <Spinner /> : <ProfileWrapper>
        <ProfilesHeader>
        <ProfilesTitle>
            Deveopers
          </ProfilesTitle> 
          <ProfilesLead>
            <LeadIcon/>Browse and connect with developers
          </ProfilesLead>
        </ProfilesHeader>
         
          <ProfilesContent>
            {
              profiles.length > 0 ? (
                profiles.map(profile => (
                  <ProfileItem key ={profile._id} profile={profile}/>
                ))
              ) : <WariningMsg>ddd</WariningMsg>
            }  
            
          </ProfilesContent>
        </ProfileWrapper>}      
        </Fragment>
    </PageWrapper>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getProfiles })(Profiles);
