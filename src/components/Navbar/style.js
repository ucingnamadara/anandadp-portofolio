import styled from 'styled-components';

const {breakpoints} = require("../../constants/device")

export const Container = styled.div`
  z-index: 1000000;
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: #212529;
  color: #e9ecef;
`;

export const NavbarDiv = styled.div`
  display: flex;
  align-items: center;
  height: 80px;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 0 2rem;
    justify-content: space-between;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 3.5rem;
    justify-content: space-between;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 0 7rem;
    justify-content: space-between;
  }
`;

export const NavbarLogoImg = styled.img`
  @media (min-width: ${breakpoints.mobile}) {
    width: 36px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 42px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 56px;
  }
`;

export const NavbarMenuSection = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    gap: 26px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    gap: 58px;
  }
`;

export const NavbarLogo = styled.a`
  font-weight: 300;
  color: #e9ecef;
  text-decoration: none;
  align-items: center;
  display: flex;
  font-family: Heyam, serif;
  gap: 0.5rem;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 28px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 42px;
    &:hover img{
      width: 53px;
      border: 3px solid #e9ecef;
    }
  }

`;

export const NavbarMenu = styled.a`
  color: #e9ecef;
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  font-size: 24px;
  font-weight: 500;
  padding: 2px 5px;
  border-radius: 8px;
  &:hover{
    color: #212529;
    background-color:  #e9ecef;
    text-decoration: none;
  }
`;

export const SidebarDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: #212529;
  color: #fff;
  padding: 20px;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  display: flex;
  flex-direction:column;
  gap: 1rem;
`

export const SidebarLogo = styled.a`
  font-size: 32px;
  font-weight: 500;
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`