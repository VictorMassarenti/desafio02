import styled from 'styled-components'

export const Button = styled.button`
box-sizing: border-box;
width: 368px;
height: 46px;
padding: 12px 8px;
gap: 4px;
border-radius: 6px;
border: none;
justify-content: center;
align-items: center;
cursor: pointer;

transition: background-color 0.5s;

font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 14px;
line-height: 160%;
text-transform: uppercase;

font-stretch: 100;
color: ${(props) => props.theme.white};
background-color: ${(props) => props.theme.yellow};

    &:hover {
        background-color: ${(props) => props.theme['yellow-dark']};
    }
`