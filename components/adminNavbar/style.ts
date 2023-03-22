import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: rgba(0,0,0,.6);
    z-index: 1;
    padding-left: 20px;
    color: white;

    display: flex;
    align-items: center;
    grid-gap: 40px;
    font-size: 20px;

    a {
        cursor: pointer;

    }
`
