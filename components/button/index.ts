import styled, { css } from 'styled-components'

interface ButtonProps {
    marginTop?: boolean
    lessPadding?: boolean
    light?: boolean
    inline?: boolean
    red?: boolean
    noMargin?: boolean
}

export const Button = styled.button<ButtonProps>`
    border-radius: 10px;
    background-color: blue;
    color: white;
    font-size: 20px;
    padding: 12px 110px;
    border: none;
    margin: 0 auto;
    text-align: center;
    display: block;
    font-weight: 500;
    position: relative;
    transition: all 0.2s;
    align-items: center;
    grid-gap: 10px;
    cursor: pointer;

    ${props => props.lessPadding && `padding: 12px 50px;`}

    ${props => props.marginTop && `margin-top: 15px;`}

    ${props =>
        props.light &&
        css`
            background-color: #f0eeee !important;
            color: #333 !important;
        `}
    
        ${props =>
        props.inline &&
        css`
            display: inline-block;
            width: auto;
            padding: 12px 30px;
        `}

    ${props =>
        props.red &&
        css`
            background-color: red;
            color: white;
        `}

        ${props => props.noMargin && `margin: 0;`}

    &:hover {
        transform: scale(1.05);
    }

    &[disabled] {
        background-color: #ccc;
        color: white;
    }
`