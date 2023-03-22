import styled from 'styled-components'

export const Container = styled.div`
    color: black;
    background-color: white;
    padding: 40px 100px;
    min-height: calc(100vh - 70px);

    & > svg {
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: all 0.2s;
        float: right;

        &:hover {
            transform: scale(1.05);
        }
    }

    h1 {
        text-align: center;
        font-size: 36px;
        margin-bottom: 20px;
    }
`
