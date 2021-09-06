import styled from "styled-components";

export const tdName = styled.td`
    width: 80%;
`;

export const tdAction = styled.td`
    width: 20%;
`;

export const trTable = styled.tr`
    color: ${props => props.theme.color};
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.bgColor};
`;
