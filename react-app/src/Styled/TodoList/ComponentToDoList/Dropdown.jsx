import styled from "styled-components";


export const DropDown = styled.select`
    width: 100%;
    padding: 5px 10px;
    border: 1px solid blue;
    &:focus {
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }
`;