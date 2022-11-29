import styled from "styled-components";

export const AddCartContainer = styled.div`
width: 38px;
height: 38px;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

padding: 8px;
gap: 8px;

background-color: ${(props) => props.theme['purple-dark']};
border-radius: 6px;

cursor: pointer;
transition: background-color 0.5s;
    &:hover {
        background-color: ${(props) => props.theme.purple};
    }
`