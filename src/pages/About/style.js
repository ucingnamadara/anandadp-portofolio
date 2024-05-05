import styled from 'styled-components';
import { breakpoints } from '../../constants/device';

export const Container = styled.div`
    padding-top: 10rem;
`;

export const AboutTitle = styled.p`
  font-weight: 400;
  font-family: Heyam, serif;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 54px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 72px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 100px;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

export const HeaderPicture = styled.img`
  @media (min-width: ${breakpoints.mobile}) {
    width: 300px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 600px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 1300px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.mobile}) {
    padding: 0 5rem;
  }
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 6rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding: 0 7rem;
  }
`;

export const TextBold = styled.p`
  font-weight: 500;
  padding-top: 2rem;
  @media (min-width: ${breakpoints.mobile}) { 
    font-size: 24px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 42px;
  }
`;

export const TextNormal = styled.p`
  padding-top: 2rem;
  @media (min-width: ${breakpoints.mobile}) { 
    font-size: 20px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 28px;
  }
`;

export const ListOl = styled.ul`
    margin-top: 2rem;
`

export const ListLi = styled.li`
    font-family: 'Encode Sans', sans-serif;
    margin-top: 5px
    @media (min-width: ${breakpoints.mobile}) { 
      font-size: 20px;
    }
    @media (min-width: ${breakpoints.tablet}) {
      font-size: 24px;
    }
    @media (min-width: ${breakpoints.desktop}) {
      font-size: 28px;
    }
`

export const ListB = styled.p`
    font-weight: 600;
`