import styled from "styled-components";
import { breakpoints } from "../../constants/device";

export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10rem 0px 0px 0px;
`;
export const Title = styled.p`
    font-family: Heyam, serif;
    @media (min-width: ${breakpoints.mobile}) {
        font-size: 42px;
        padding: 0 3rem;
    }
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 64px;
        padding: 0 5rem;
    }
    @media (min-width: ${breakpoints.desktop}) {
        font-size: 100px;
        padding: 0 7rem;
    }
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
    @media (min-width: ${breakpoints.mobile}) {
        font-size: 18px;
        
        padding: 0 3rem;
    }
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 24px;
        
        padding: 0 5rem;
    }
    @media (min-width: ${breakpoints.desktop}) {
        font-size: 36px;
        
        padding: 0 7rem;
    }
`
