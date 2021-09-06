import styled from "styled-components";

const Input = styled.input`
    width: 100%;
`;

const Label = styled.label`
    color: ${props => props.theme.color};
    font-size: 15px;
`;

const DivText = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const TextField = ({ label, ...props }) => {
    return (
        <DivText>
            <Label>{label}</Label>
            <Input {...props}></Input>
        </DivText>
    )
}


