import { useRef } from 'react';
import {
  Container,
  MediaSocialHeadline,
  Copyright,
  MediaSocialSection,
  MediaSocialButton,
  CustomLinkWithColor,
} from './style';
import { Instagram, TwitterX, Linkedin, Github } from 'react-bootstrap-icons';

function Footer() {
  return (
    <Container>
      <MediaSocialHeadline>
        Connect with me on social media!
      </MediaSocialHeadline>
      <MediaSocialSection>
        <MediaSocialButton href={'https://www.linkedin.com/in/anandadp/'} target="_blank">
          <Linkedin />
        </MediaSocialButton>
        <MediaSocialButton href={'https://twitter.com/anandana_'} target="_blank">
          <TwitterX />
        </MediaSocialButton>
        <MediaSocialButton href={'https://www.instagram.com/anandadp_/'} target="_blank">
          <Instagram />
        </MediaSocialButton>
        <MediaSocialButton href={'https://github.com/ucingnamadara'} target="_blank">
          <Github />
        </MediaSocialButton>
      </MediaSocialSection>
      <Copyright>
        Built with{' '}
        <CustomLinkWithColor href="https://react.dev/" color="#F23F49" target="_blank">
          React
        </CustomLinkWithColor>
        {' '}©2024
      </Copyright>
    </Container>
  );
}

export default Footer;
