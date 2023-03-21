import { Subscription } from '@/pages/admin/subscriptions'
import React from 'react'
import Modal from '../styledModal'
import { Container } from './style'

interface Props {
    showModal: boolean
    closeModal(): void
    subscription: Subscription
}

const SubscriptionModal: React.FC<Props> = ({ showModal, closeModal, subscription }) => {
    return (
        <Modal title="Inscrito" show={showModal} closeModal={closeModal}>
            <Container>
                <div>
                    <label>Id</label>
                    <p>{subscription.id}</p>
                </div>
                <div>
                    <label>Nome completo</label>
                    <p>{subscription.fullName}</p>
                </div>
                <div>
                    <label>Email</label>
                    <p>{subscription.email}</p>
                </div>
                <div>
                    <label>Contato</label>
                    <p>{subscription.contact}</p>
                </div>
                <div>
                    <label>Instituição</label>
                    <p>{subscription.institution}</p>
                </div>
                <div>
                    <label>Tipo de documento</label>
                    <p>{subscription.documentType}</p>
                </div>
                <div>
                    <label>Documento</label>
                    <p>{subscription.document}</p>
                </div>
                <div>
                    <label>Nível</label>
                    <p>{subscription.level}</p>
                </div>
                <div>
                    <label>Motivo de participação</label>
                    <p>{subscription.why}</p>
                </div>
                {subscription.habilities && (
                    <div>
                        <label>Habilidades</label>
                        <p>{subscription.habilities}</p>
                    </div>
                )}
                {subscription.history && (
                    <div>
                        <label>História</label>
                        <p>{subscription.history}</p>
                    </div>
                )}
                <div>
                    <label>Gênero</label>
                    <p>{subscription.gender}</p>
                </div>
                <div>
                    <label>Cidade/Estado</label>
                    <p>{subscription.local}</p>
                </div>
                <div>
                    <label>Possui grupo</label>
                    <p>{subscription.group ? "Sim" : "Não"}</p>
                </div>
                <div>
                    <label>Discord</label>
                    <p>{subscription.discord}</p>
                </div>
                {subscription.linkedin && (
                    <div>
                        <label>Linkedin</label>
                        <p>{subscription.linkedin}</p>
                    </div>
                )}
                {subscription.github && (
                    <div>
                        <label>Github</label>
                        <p>{subscription.github}</p>
                    </div>
                )}
                {subscription.specialNeeds && (
                    <div>
                        <label>Necessidade especial</label>
                        <p>{subscription.specialNeeds}</p>
                    </div>
                )}
            </Container>
        </Modal>
    )
}

export default SubscriptionModal
