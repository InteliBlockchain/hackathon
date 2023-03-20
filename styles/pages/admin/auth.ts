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

    form {
        display: flex;
        grid-gap: 20px;

        input {
            padding: 12px 15px;
            outline: none;
            background: none;
            border: 1px solid white;
            border-radius: 3px;
        }

        button {
            outline: none;
            padding: 12px 30px;
            font-size: 16px;
            background-color: blue;
            border-radius: 3px;
        }
    }
`
