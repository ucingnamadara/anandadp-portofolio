import styled from 'styled-components';
import { breakpoints } from '../../constants/device';

export const WorkDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
  font-family: 'Encode Sans', sans-serif;
  @media (min-width: ${breakpoints.mobile}) { 
    flex-direction: column;
    gap: 1rem;
  }
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    gap: 2rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const WorkLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.mobile}) { 
    width: auto;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 30%;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 30%;
  }
`;

export const WorkRightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (min-width: ${breakpoints.mobile}) { 
    width: auto;
  }
  @media (min-width: ${breakpoints.tablet}) {
    
    width: 70%;
  }
  @media (min-width: ${breakpoints.desktop}) {
    
    width: 70%;
  }
`;

export const WorkCompany = styled.p`
  font-weight: 500;
  @media (min-width: ${breakpoints.mobile}) { 
    font-size: 24px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 32px;
  }
`;

export const WorkPosition = styled.p`
  color: #495057;
  @media (min-width: ${breakpoints.mobile}) { 
    font-size: 18px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 24px;
  }
`;

export const WorkDescription = styled.text`
  font-weight: 400;
  @media (min-width: ${breakpoints.mobile}) { 
    font-size: 18px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 24px;
  }
`;

export const WorkTimeline = styled.p`
  color: #495057;
  @media (min-width: ${breakpoints.mobile}) { 
    font-size: 16px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 22px;
  }
`;
