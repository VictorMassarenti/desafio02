import styled from 'styled-components'

export const CartValueContainer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

padding: 8px;
gap: 4px;

width: 38px;
height: 38px;

background-color: ${(props) => props.theme['yellow-light']};
border-radius: 6px;
color: ${(props) => props.theme['yellow-dark']};

    div {
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;
        padding: 0px;

        position: absolute;
        width: 20px;
        height: 20px;
        margin-top: -35px;
        margin-right: -35px;

        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme['yellow-dark']};
        border-radius: 1000px;

        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 12px;
        text-align: center;
    }
`