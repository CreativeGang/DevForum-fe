import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiTwitter } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineFacebook } from 'react-icons/ai';
import ProfileBanner4 from '../../../../static/images/baseimg.png'

export const BannerWrapper = styled.div`
  grid-area: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #52b8ca;
  color: #fff;
background: url(${ProfileBanner4}) center top no-repeat;
background-size: 100% 100%;
background-repeat: no-repeat;

`;

export const BannerImg = styled.img`
  width: 250px;
  border-radius: 50%;
  margin: 1rem 0;
`;

export const Name = styled.h2`
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 1.2;
  margin-bottom: 1rem;
 
`;
export const Position = styled.p`
  font-size: clamp(1.5rem, 3vw, 3rem);
  margin-bottom: 1rem;
 
`;

export const Location = styled.p`
color: #fff;`;

export const SocialGroup = styled.div`
  margin: 1rem 0;
`;

export const BannerSpan = styled.span``;
export const TwitterI = styled(FiTwitter)`
  color: #fff;
  &:hover {
    color:#f3a33a;
  }
`;
export const YoutubeI = styled(FiYoutube)`
  color: #fff;
  &:hover {
    color:#f3a33a;

  }
`;
export const LinkedinI = styled(AiOutlineLinkedin)`
  color: #fff;
  &:hover {
    color:#f3a33a;

  }
`;
export const InstagramI = styled(FiInstagram)`
  color: #fff;
  &:hover {
    color:#f3a33a;

  }
`;
export const FacebookI = styled(AiOutlineFacebook)`
  color: #fff;
  &:hover {
    color:#f3a33a;

  }
`;

export const WebsiteLink = styled.a`
  color: #fff;
  margin: 0 0.3rem;
  text-decoration: none;
  font-size: 2em;
`;
