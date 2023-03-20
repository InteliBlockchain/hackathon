import { Subscription } from '@/pages/admin/subscriptions'
import React from 'react'
import Modal from '../styledModal'

interface Props {
    showModal: boolean
    closeModal(): void
    subscription: Subscription
}

const SubscriptionModal: React.FC<Props> = ({ showModal, closeModal, subscription }) => {
    console.log(subscription)
    return (
        <Modal title="Inscrito" show={showModal} closeModal={closeModal}>
            <>
                <div>
                    <label>Id</label>
                    <p>{subscription.id}</p>
                </div>
                <div>
                    <label>Nome completo</label>
                    <p>{subscription.fullName}</p>
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
                    <label>Documento</label>
                    <p>{subscription.document}</p>
                </div>
                <div>
                    <label>Motivo de participação</label>
                    <p>{subscription.whyParticipate}</p>
                </div>
                <div>
                    <label>Habilidades</label>
                    <p>{subscription.skills}</p>
                </div>
                <div>
                    <label>História</label>
                    <p>{subscription.history}</p>
                </div>
                <div>
                    <label>Discord</label>
                    <p>{subscription.discord}</p>
                </div>
                {subscription.instagram && <div>
                    <label>Instagram</label>
                    <p>{subscription.instagram}</p>
                </div>}
                {subscription.linkedin && <div>
                    <label>Linkedin</label>
                    <p>{subscription.linkedin}</p>
                </div>}
                {subscription.twitter && <div>
                    <label>Twitter</label>
                    <p>{subscription.twitter}</p>
                </div>}
                {subscription.github && <div>
                    <label>Github</label>
                    <p>{subscription.github}</p>
                </div>}
                {subscription.specialNeed && <div>
                    <label>Necessidade especial</label>
                    <p>{subscription.specialNeed}</p>
                </div>}
            </>
        </Modal>
    )
}

export default SubscriptionModal
