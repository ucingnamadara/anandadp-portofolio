import { useRef } from 'react';
import {
  Container,
  MediaSocialHeadline,
  Copyright,
  MediaSocialSection,
  MediaSocialButton,
  CustomLinkWithColor,
} from './style';
import {
  Instagram,
  TwitterX,
  Linkedin,
  Github,
  Telegram,
} from 'react-bootstrap-icons';

function Footer() {
  return (
    <Container>
      <MediaSocialHeadline>
        Connect with me on social media!
      </MediaSocialHeadline>
      <MediaSocialSection>
        <MediaSocialButton
          href={'https://www.linkedin.com/in/anandadp/'}
          target="_blank"
          title="LinkedIn"
        >
          <Linkedin />
        </MediaSocialButton>
        <MediaSocialButton
          href={'https://twitter.com/anandana_'}
          target="_blank"
          title="Twitter"
        >
          <TwitterX />
        </MediaSocialButton>
        <MediaSocialButton
          href={'https://www.instagram.com/anandadp_/'}
          target="_blank"
          title="Instagram"
        >
          <Instagram />
        </MediaSocialButton>
        <MediaSocialButton
          href={'https://github.com/ucingnamadara'}
          target="_blank"
          title="GitHub"
        >
          <Github />
        </MediaSocialButton>
        <MediaSocialButton href={'https://t.me/anandadp03'} target="_blank" title="Telegram">
          <Telegram />
        </MediaSocialButton>
      </MediaSocialSection>
      <Copyright>
        Built with{' '}
        <CustomLinkWithColor
          href="https://react.dev/"
          color="#F23F49"
          target="_blank"
        >
          React
        </CustomLinkWithColor>{' '}
        ©2024
      </Copyright>
    </Container>
  );
}

export default Footer;
