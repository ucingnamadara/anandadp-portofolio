import styled from "styled-components";

export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10rem 0px 0px 0px;
`;
export const Title = styled.p`
    font-family: Heyam, serif;
    font-size: 96px;
    padding: 0 7rem;
`;

export const CopyText = styled.a`
    text-decoration: underline;
    &:hover {
        text-decoration: none;
        color: #f8f9fa;
        background-color: #212529;
        cursor:pointer;
    }
`
export const NormalText = styled.p`
    font-weight: 400;
    font-size: 36px;
    padding: 0 7rem;
`
