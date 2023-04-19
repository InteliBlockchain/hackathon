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
    className: string
}

const ConfirmModal: React.FC<Props> = ({
    title,
    show,
    closeModal,
    confirmHandler,
    obs,
    loading,
    className
}) => {
    let modalContent = (
        <>
            {obs && (
                <Paragraph>
                    <strong>Observação:</strong> {obs}
                </Paragraph>
            )}

            <ButtonContainer>
                <Button inline light onClick={closeModal}>
                    Cancelar
                </Button>
                <Button inline onClick={confirmHandler}>Confirmar</Button>
            </ButtonContainer>
        </>
    )
    if (loading) {
        modalContent = <Loader />
    }

    return (
        <Modal className={className} title={title} show={show} closeModal={closeModal}>
            {modalContent}
        </Modal>
    )
}

export default ConfirmModal
