import { FooterContainer, FooterLink, FooterLinksContainer } from '@/styles/footer.styles';
import React from 'react';

const Footer = () => {
  return (
    <FooterContainer>
      <img src="/assets/logo.png" />
      <FooterLinksContainer container>
        <FooterLink item xs={4}>
          Our Platform
        </FooterLink>
        <FooterLink item xs={4}>
          Our Links
        </FooterLink>
        <FooterLink item xs={4}>
          Our Socials
        </FooterLink>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
