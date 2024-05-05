import React, { useState } from 'react';
import {
  Container,
  NavbarLogoImg,
  NavbarLogo,
  NavbarMenuSection,
  NavbarMenu,
  NavbarDiv,
  SidebarDiv,
  SidebarLogo,
} from './style';
import { List } from 'react-bootstrap-icons';

const logoImg = require('../../assets/logo.png');

function NavigateMenu (props) {
  return(
    <>
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
    </>
  );
}

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <NavbarDiv>
        <NavbarLogo href="/">
          <NavbarLogoImg src={logoImg} />= Nandaaa
        </NavbarLogo>
        <NavbarMenuSection>
          {NavigateMenu(props)}
        </NavbarMenuSection>
        <SidebarLogo onClick={toggle}><List/></SidebarLogo>
      </NavbarDiv>
      
      <SidebarDiv isOpen={isOpen} toggle={toggle}>
        {NavigateMenu(props)}
      </SidebarDiv>
      
    </Container>
  );
}
export default Navbar;
