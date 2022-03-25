import React from 'react';
import PropTypes from 'prop-types';
import {
  BannerWrapper,
  BannerImg,
  Name,
  Position,
  Location,
  SocialGroup,
  BannerSpan,
  WebsiteLink,
  TwitterI,
  YoutubeI,
  LinkedinI,
  InstagramI,
  FacebookI
} from './Elements';

const ProfileBanner = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, photo },
  },
}) => {
  return (
    <BannerWrapper>
      <BannerImg src={photo} />
      <Name>{name}</Name>
      <Position>
        {status} {company && <BannerSpan>at {company}</BannerSpan>}
      </Position>
      <Location>{location && <BannerSpan>{location}</BannerSpan>}</Location>
      {website && (
          <WebsiteLink
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          ></WebsiteLink>
        )}
      <SocialGroup>
        {social && social.twitter && (
          <WebsiteLink
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          ><TwitterI/></WebsiteLink>
        )}
        {social && social.facebook && (
          <WebsiteLink
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          ><FacebookI/></WebsiteLink>
        )}
        {social && social.linkedin && (
          <WebsiteLink
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          ><LinkedinI/></WebsiteLink>
        )}
        {social && social.youtube && (
          <WebsiteLink
            href={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
          ><YoutubeI/></WebsiteLink>
        )}
        {social && social.instagram && (
          <WebsiteLink
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          ><InstagramI/></WebsiteLink>
        )}
      </SocialGroup>
    </BannerWrapper>
  );
};

ProfileBanner.propTypes = {

};

export default ProfileBanner;
