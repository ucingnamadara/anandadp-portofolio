import React from 'react';
import {
  Container,
  NavbarLogoImg,
  NavbarLogo,
  NavbarMenuSection,
  NavbarMenu,
} from './style';

const logoImg = require('../../assets/logo.png');

function Navbar(props) {
  return (
    <Container>
      <NavbarLogo href="/">
        <NavbarLogoImg src={logoImg} />
        = Nandaaa
      </NavbarLogo>
      <NavbarMenuSection>
      <NavbarMenu
          href="/works"
          active={props.page === 'works' ? true : false}
        >
          Works
        </NavbarMenu>
        <NavbarMenu
          href="/about"
          active={props.page === 'about' ? true : false}
        >
          About
        </NavbarMenu>
        <NavbarMenu
          href="/contact"
          active={props.page === 'contact' ? true : false}
        >
          Contact
        </NavbarMenu>
      </NavbarMenuSection>
    </Container>
  );
}
export default Navbar;
