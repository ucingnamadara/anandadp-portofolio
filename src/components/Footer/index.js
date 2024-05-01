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
        <MediaSocialButton href={'https://www.linkedin.com/in/anandadp/'}>
          <Linkedin />
        </MediaSocialButton>
        <MediaSocialButton href={'https://twitter.com/anandana_'}>
          <TwitterX />
        </MediaSocialButton>
        <MediaSocialButton href={'https://www.instagram.com/anandadp_/'}>
          <Instagram />
        </MediaSocialButton>
        <MediaSocialButton href={'https://github.com/ucingnamadara'}>
          <Github />
        </MediaSocialButton>
      </MediaSocialSection>
      <Copyright>
        ©2024 Built with{' '}
        <CustomLinkWithColor href="https://react.dev/" color="#F23F49">
          React
        </CustomLinkWithColor>
      </Copyright>
    </Container>
  );
}

export default Footer;
