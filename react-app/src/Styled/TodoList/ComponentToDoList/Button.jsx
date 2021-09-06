import styled from "styled-components";

export const TextButton = styled.button`
    display: inline-block;
    border: ${props => props.theme.borderButton};
    padding: 2px 5px;
    background: ${props => props.theme.bgColor};
    color: #fff;
    & {
        i {
            font-size: 12px;
            padding-right: 5px;
        }
    }
`;

export const TableButton = styled.button`
    display: inline-block;
    border: ${props => props.theme.borderButton};
    padding: 2px 5px;
    align-items: center;
    background: ${props => props.theme.bgColor};
    color: #fff;
    & {
        i {
            font-size: 12px;
            padding-right: 5px;
        }
    }
`