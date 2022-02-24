import React from 'react';
import {
  FooterWrapper,
  LinkContainer,
  FooterMenu,
  FooterContent,
  FooterMenuItem,
  FooterLink,
  FooterSocial,
  FooterSocialItem,
} from './RegisterLoginFooterElements';

import { BsFacebook, BsTwitter,BsGoogle } from 'react-icons/bs';

const RegisterLoginFooter = () => {
  return (
    <FooterWrapper>
      <LinkContainer>
        <FooterContent>
          <FooterMenu>
            <FooterMenuItem>
              <FooterLink to="/">Teams</FooterLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterLink to="/">Privacy</FooterLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterLink to="/">Send Feedback</FooterLink>
            </FooterMenuItem>
          </FooterMenu>
          <FooterSocial>
            <FooterSocialItem>
              <FooterLink to="/">
                <BsFacebook />
              </FooterLink>
            </FooterSocialItem>
            <FooterSocialItem>
              <FooterLink to="/">
                <BsTwitter />
              </FooterLink>
            </FooterSocialItem>
            <FooterSocialItem>
              <FooterLink to="/">
                <BsGoogle />
              </FooterLink>
            </FooterSocialItem>
          </FooterSocial>
        </FooterContent>
      </LinkContainer>
    </FooterWrapper>
  );
};

export default RegisterLoginFooter;
