import styled from 'styled-components';
import { breakpoints } from '../../constants/device';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MediaSocialHeadline = styled.p`
  color: #495057;
  text-wrap: nowrap;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 16px;
    padding-top: 5rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
    padding-top: 6rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 26px;
    padding-top: 7rem;
  }
`;

export const Copyright = styled.p`
  color: #6c757d;
  padding-bottom: 2rem;
  text-wrap: nowrap;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    
    font-size: 18px;
  }
`;

export const MediaSocialSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const MediaSocialButton = styled.a`
  border-radius: 4px;
  color: #495057;
  &:hover {
    opacity: 0.8;
  }
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 24px;
    margin: 12px 15px 28px 15px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 30px;
    margin: 15px 25px 32px 25px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 36px;
    margin: 20px 30px 36px 30px;
  }
`;

export const CustomLinkWithColor = styled.a`
  text-decoration: none;
  color: ${(props) => props.color};
`;
