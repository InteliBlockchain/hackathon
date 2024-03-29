import React from 'react'

import Modal from '../styledModal'
import Loader from '../loader'
import { Button } from '../button'

import { ButtonContainer, Paragraph } from './style'

interface Props {
    title: string
    show: boolean
    closeModal(): void
    confirmHandler(): void
    loading: boolean
    obs?: string
    error?: string
}

const ConfirmModal: React.FC<Props> = ({
    title,
    show,
    closeModal,
    confirmHandler,
    obs,
    loading,
}) => {
    let modalContent = (
        <>
            {obs && (
                <Paragraph>
                    <strong>Observação:</strong> {obs}
                </Paragraph>
            )}

            <ButtonContainer>
                <Button noMargin inline light onClick={closeModal}>
                    Cancelar
                </Button>
                <Button noMargin inline onClick={confirmHandler}>Confirmar</Button>
            </ButtonContainer>
        </>
    )
    if (loading) {
        modalContent = <Loader />
    }

    return (
        <Modal title={title} show={show} closeModal={closeModal}>
            {modalContent}
        </Modal>
    )
}

export default ConfirmModal
