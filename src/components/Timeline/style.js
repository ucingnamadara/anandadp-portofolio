import styled from "styled-components";

export const WorkDiv = styled.div`
    display: flex;
    flex-direction: grid;
    gap: 3rem;
`

export const WorkLeftContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`

export const WorkRightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const WorkCompany = styled.p`
    font-size: 32px;
    font-weight: 500;
`;

export const WorkPosition = styled.p`
    font-size: 24px;
    color: #495057;
`;

export const WorkDescription = styled.text`
    font-size: 24px;
    font-weight: 400;
`;

export const WorkTimeline = styled.p`
    font-size: 22px;
    color: #495057;
`;