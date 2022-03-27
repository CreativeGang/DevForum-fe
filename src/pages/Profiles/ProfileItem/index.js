import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  ProfileItemContainer,
  ProfilePhoto,
  ProfileInfo,
  PofileName,
  PofileStatus,
  ProfileSpan,
  ProfileLocation,
  ProfileLink,
  SkillsContainer,
  SkillTick,
  Skill,
} from './Elements';

const ProfileItem = ({
  profile: {
    user: { _id, name, photo },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <ProfileItemContainer>
      <ProfilePhoto src={photo} alt="" />
      <ProfileInfo>
        <PofileName>{name}</PofileName>
        <PofileStatus>
          {status} {company && <ProfileSpan> at {company}</ProfileSpan>}
        </PofileStatus>
        <ProfileLocation>
          {location && <ProfileSpan> {location}</ProfileSpan>}
        </ProfileLocation>
        <ProfileLink to={`/profile/${_id}`}>View Profile</ProfileLink>
      </ProfileInfo>
      <SkillsContainer>
        {skills.slice(0, 4).map((skill, index) => (
          <Skill key={index}>
            <SkillTick />
            {skill}
          </Skill>
        ))}
      </SkillsContainer>
    </ProfileItemContainer>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
