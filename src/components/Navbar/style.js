import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: #212529;
`;

export const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 7rem;
`;

export const NavbarLogoImg = styled.img`
  width: 42px;
  margin-right: 0.5rem;
`;

export const NavbarMenuSection = styled.div`
  display: flex;
  gap: 58px;
`;

export const NavbarLogo = styled.a`
  font-weight: 300;
  color: #e9ecef;
  text-decoration: none;
  font-size: 42px;
  align-items: center;
  display: flex;
  font-family: Heyam, serif;
  &:hover img{
    width: 39px;
    border: 3px solid #e9ecef;
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
