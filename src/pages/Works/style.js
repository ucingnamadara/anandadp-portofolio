import { styled } from 'styled-components';

export const Container = styled.div`
  background: #f8f9fa;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 89px 0 89px 0;
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
  flex-direction: grid;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 7rem;
  gap: 1rem;
`;
export const WorkDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkTitle = styled.p`
  font-color: #212529;
  font-size: 54px;
  font-weight: 500;
  font-family: Heyam, serif;
`;

export const WorkBody = styled.p`
  font-color: #212529;
  font-size: 32px;
  font-weight: 400;
`;

export const WorkYear = styled.p`
  font-color: #212529;
  font-size: 24px;
  font-weight: 400;
`;

export const WorkTags = styled.div`
  display: flex;
  flex-direction: grid;
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
  width: 800px;
`;
