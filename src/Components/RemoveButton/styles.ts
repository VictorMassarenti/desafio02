import styled from 'styled-components'

export const RemoveButtonContainer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 8px;
gap: 4px;

width: 91px;
height: 32px;

color: ${(props) => props.theme.purple};
background-color: ${(props) => props.theme['base-button']};
border-radius: 6px;
flex: none;
cursor: pointer;

transition: background-color 0.5s;
    &:hover {
        background-color: ${(props) => props.theme['base-hover']};
    }
    p {
        color: ${(props) => props.theme['base-text']};
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
        text-transform: uppercase;
    }
`