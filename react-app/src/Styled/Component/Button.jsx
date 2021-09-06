import styled from 'styled-components';

export const Button = styled.button`
    color:#fff;
    background-color:${props => props.primary ? "blue" : "red"};
    padding: 5px 20px;
    border:none;
    border-radius:4px;
    transition:all .4s;
    &:hover {
        background-color:red;
    }
`;

export const SmallButton = styled(Button)`
    background-color:#000;
`;

export const DemoButton = styled(Button)`
    background-color:${props => props.backgound || "purple"};
`;