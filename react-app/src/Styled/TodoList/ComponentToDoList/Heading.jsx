import styled from "styled-components";


export const Heading1 = styled.h1`
    font-size: 40px;
    color: ${props => props.theme.color};
    font-weight: normal;
    margin-bottom: 30px;
`;

export const Heading2 = styled.h2`
    margin: 15px 0;
    color: ${props => props.theme.color};
    font-size: 20px;
    font-weight: 500;
`;