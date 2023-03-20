import styled from 'styled-components'

export const GlobalFilter = styled.span`
    font-size: 16px;
    font-weight: 700;
    width: 40%;
    display: flex;
    align-items: center;

    span {
        margin-right: 12px;
    }

    input {
        border: 1px solid #999;
    }
`
export const InputContainer = styled.div`
  margin: 0 auto;
    width: 100%;
    
    label {
        margin-bottom: 6px;
        font-size: 14px;
        font-weight: 400;
        display: block;
    }

    input {
        padding: 10px 12px;
        display: block;
        width: 100%;
        outline: none;
        border: 1px solid #f0eeee;
        font-size: 16px;
        border-radius: 3px;
    }

    span {
        font-size: 12px;
        color: red;
        margin-top: 4px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed #999;
        border-radius: 10px;
        padding: 10px 0;
        cursor: pointer;

        svg {
            width: 40px;
            height: 40px;

        }
    }
`;
