import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem;
  height: 80px;
  background-color: #212529;
`;

export const NavbarLogoImg = styled.img`
  width: 36px;
  margin-right: 0.5rem;
`;

export const NavbarMenuSection = styled.div`
  display: flex;
  gap: 58px;
`;

export const NavbarLogo = styled.a`
  font-weight: 500;
  color: #e9ecef;
  text-decoration: none;
  font-size: 32px;
  align-items: center;
  display: flex;
`;

export const NavbarMenu = styled.a`
  color: #adb5bd;
  text-decoration: none;
  font-size: 24px;
  font-weight: ${(props) => (props.active ? '700' : '400')};
`;
