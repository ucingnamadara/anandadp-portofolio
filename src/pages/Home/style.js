import { styled } from 'styled-components';
import { breakpoints } from '../../constants/device';

export const Container = styled.div`
  padding-top: 12.625rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  just-content: center;
  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 5rem;
  }
  @media (min-width: ${breakpoints.tablet}) {
    
    margin-bottom: 6.625rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    
    margin-bottom: 9.625rem;
  }
`;

export const HeaderPhotoProfile = styled.img`
  border-radius: 5%;
  margin-bottom: 1rem;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.25);
  @media (min-width: ${breakpoints.mobile}) {

    width: 150px;
    height: 150px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    
    width: 250px;
    height: 250px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    
    width: 350px;
    height: 350px;
  }

`;

export const HeaderFullName = styled.p`
  font-weight: 700;
  color: #212529;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 26px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 38px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 64px;
  }
`;

export const HeaderNickName = styled.p`
  font-weight: 400;
  color: #212529;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 32px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(233, 236, 239, 0.5);
`;

export const DescriptionHeadlineText = styled.text`
  font-weight: 500;
  font-size: 54px;
  color: #212529;
  padding-bottom: 0.5rem;
  @media (min-width: ${breakpoints.mobile}) {
    margin-top: 5rem;
    font-size: 24px;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 6rem;
    font-size: 42px;
    padding-left: 5rem;
    padding-right: 5rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin-top: 7rem;
    font-size: 54px;
    padding-left: 7rem;
    padding-right: 7rem;
  }
`;

export const DescriptionBodyText = styled.text`
  font-weight: 400;
  font-size: 36px;
  color: #212529;
  margin-top: 0.5rem;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 28px;
    padding-left: 5rem;
    padding-right: 5rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 36px;
    padding-left: 7rem;
    padding-right: 7rem;
  }
`;

export const FlagIcon = styled.img`

  @media (min-width: ${breakpoints.mobile}) {
    width: 20px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 25px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 30px;
  }
`;

export const CustomLinkWithColor = styled.a`
  text-decoration: none;
  color: ${(props) => props.color};
`;

export const DescriptionDownloadSection = styled.div`
  display: flex;
  @media (min-width: ${breakpoints.mobile}) {
    margin: 3rem 3rem 3rem 3rem;
  }
  @media (min-width: ${breakpoints.tablet}) {
    margin: 3rem 5rem 5rem 5rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin: 4rem 7rem 7rem 7rem;
  }
`;
export const DescriptionDownloadButton = styled.a`
  background: rgb(233, 236, 239, 0.5);
  color: #212529;
  text-align: center;
  font-size: 19px;
  padding: 1rem 1rem 1rem 1rem;
  border: 2px solid #212529;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background-color: #212529;
    color: rgb(233, 236, 239);
  }

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 19px;
  }
  
`;
