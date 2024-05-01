import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MediaSocialHeadline = styled.p`
  color: #495057;
  font-size: 24px;
  padding-top: 7rem;
`;

export const Copyright = styled.p`
  color: #6c757d;
  font-size: 18px;
  padding-bottom: 2rem;
`;

export const MediaSocialSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const MediaSocialButton = styled.a`
  margin: 10px 25px 36px 25px;
  border-radius: 4px;
  color: #495057;
  font-size: 36px;
  &:hover {
    opacity: 0.8;
  }
`;

export const CustomLinkWithColor = styled.a`
  text-decoration: none;
  color: ${(props) => props.color};
`;
