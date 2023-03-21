import styled from 'styled-components'

export const PageContainer = styled.div`
    position: relative;
    height: 100vh;
    /* background-image: url(../../../assets/admin-background.jpg);
    background-size: cover;
    background-repeat: no-repeat; */
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

    &> svg {
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: all .2s;
        float: right;

        &:hover {
            transform: scale(1.05);
        }
    }

    h1 {
        text-align: center;
        font-size: 36px;
        margin-bottom: 50px;
    }
`

