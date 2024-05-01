import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  just-content: center;
  margin-top: 9.625rem;
  margin-bottom: 9.625rem;
`;

export const HeaderPhotoProfile = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 5%;
  margin-bottom: 1rem;
`;

export const HeaderFullName = styled.p`
  font-weight: 700;
  font-size: 64px;
  color: #212529;
`;

export const HeaderNickName = styled.p`
  font-weight: 400;
  font-size: 32px;
  color: #212529;
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
  margin-top: 7rem;
  padding-bottom: 0.5rem;
  padding-left: 7rem;
  padding-right: 7rem;
`;

export const DescriptionBodyText = styled.text`
  font-weight: 400;
  font-size: 36px;
  color: #212529;
  margin-top: 0.5rem;
  padding-left: 7rem;
  padding-right: 7rem;
`;

export const CustomLinkWithColor = styled.a`
  text-decoration: none;
  color: ${(props) => props.color};
`;

export const DescriptionDownloadSection = styled.div`
  display: flex;
  margin: 4rem 7rem 7rem 7rem;
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
    opacity: 0.7;
  }
`;
