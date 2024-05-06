import { styled } from 'styled-components';
import { breakpoints } from '../../constants/device';

export const Container = styled.div`
  background: #f8f9fa;
  padding-top: 11.625rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 89px 0;
`;

export const Text = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  color: #212529;
  padding-bottom: 1px;
`;

export const TextBold = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  color: #212529;
  padding-bottom: 1px;
  font-family: Heyam, serif;
`;

export const WorkContainer = styled.div`
  background-color: rgb(233, 236, 239, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
    padding: 3rem;
  }
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
    padding: 5rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    padding: 7rem;
  }
`;
export const WorkDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkTitle = styled.p`
  font-color: #212529;
  font-weight: 500;
  font-family: Heyam, serif;
  @media (min-width: ${breakpoints.mobile}) {
    
    font-size: 42px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    
    font-size: 48px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    
    font-size: 54px;
  }
`;

export const WorkBody = styled.p`
  font-color: #212529;
  font-weight: 400;
  @media (min-width: ${breakpoints.mobile}) {
    
    font-size: 24px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    
    
    font-size: 28px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    
    
    font-size: 32px;
  }
`;

export const WorkYear = styled.p`
  font-color: #212529;
  font-size: 24px;
  font-weight: 400;
`;

export const WorkTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin: 23px 0 23px 0;
`;

export const WorkTag = styled.p`
  background-color: #212529;
  color: #f8f9fa;
  font-weight: 300;
  font-size: 16px;
  padding: 4px 10px 4px 10px;
  border-radius: 15px;
`;

export const WorkImage = styled.img`
  @media (min-width: ${breakpoints.mobile}) {
    width: 250px;
    margin-bottom: 10px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 350px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 800px;
  }
`;
