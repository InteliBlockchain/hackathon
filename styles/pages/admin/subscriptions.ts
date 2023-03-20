import styled from 'styled-components'

export const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
`

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 80vw;
    color : black;

    background-color: white;
    padding: 60px;
    border-radius: 10px;

    h1 {
        text-align: center;
        font-size: 36px;
        margin-bottom: 50px;
    }
`

