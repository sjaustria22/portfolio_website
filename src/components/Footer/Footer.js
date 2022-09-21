import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:0906-675-4326">0906-675-4326</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sjaustria22@gmail.com">sjaustria22@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Address</LinkTitle>
          <LinkItem href="address:Malolos, Bulacan">Malolos City, Bulacan, PH</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© 2022 All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
