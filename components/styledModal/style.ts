import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Modal = styled(motion.div)`
    position: fixed;
    top: 50%;
    left: 50%;
    opacity: 1;
    /* transform: translate(-50%, -50%); */
    min-width: 40%;

    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    background-color: white;
    border-radius: 3px;
    z-index: 150;
    max-height: 80vh;
    overflow-y: auto;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h5 {
        font-size: 26px;
        font-weight: 300;
        color: #333;
    }

    svg {
        width: 30px;
        height: 30px;
        fill: #666;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }
`

export const ModalBody = styled.div`
    padding-top: 30px;
    color: black;
`
