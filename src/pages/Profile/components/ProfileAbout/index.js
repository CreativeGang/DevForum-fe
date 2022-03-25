import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  AboutWrapper,
  AboutTitle,
  Bio,
  SepLine,
  SkillTitle,
  SkillsContainer,
  Skill,
  SkillIcon
} from './Elements';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <AboutWrapper>
      {bio && (
        <Fragment>
          <AboutTitle>{name.trim().split(' ')[0]}s Bio </AboutTitle>
          <Bio>
            {bio}
          </Bio>
          <SepLine />
        </Fragment>
      )}
      <SkillTitle>Skill Set</SkillTitle>
      <SkillsContainer>
        {skills.map((skill, index)=> (
          <Skill key={index}>
              <SkillIcon/>{skill}
          </Skill>
        ))}
      </SkillsContainer>
    </AboutWrapper>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
