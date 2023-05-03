import React from 'react'

import { Container } from '@/styles/pages/admin/subscriptions'
import axios from '../../axios'
import { useEffect, useState } from 'react'
import { IoEnterSharp } from 'react-icons/all'
import { AiOutlineArrowRight } from 'react-icons/all'
import ActionsTd from '@/components/actionsTd'
import TableComponent from '@/components/table'
import SubscriptionModal from '@/components/subscriptionModal'
import { useRouter } from 'next/router'
import { BiRefresh } from 'react-icons/bi'
import { AdminLayout } from '@/components/adminLayout'
import ConfirmModal from '@/components/confirmModal'
import { toast } from 'react-toastify'

enum checkType {
    in = 'in',
    out = 'out'
}

export interface PresenceCheck {
    id: string
    type: checkType
    hacker_id: string
}


// TODO: página de listar presenças

const Subscriptions = () => {
    return (
        <AdminLayout>
            <Container>
                <div className='flex flex-row w-full items-center justify-between'>
                    <h1>Inscrições</h1>
                    <p className='text-2xl'>{subscriptions.length}</p>
                </div>
                <BiRefresh onClick={getSubscriptions} />
                <TableComponent columns={columns} data={data} />
            </Container>
            {selectedSubscription && (
                <SubscriptionModal subscription={selectedSubscription} showModal={showModal} closeModal={closeModal} />
            )}

            <ConfirmModal
                title="Tem certeza que deseja deletar o usuário?"
                show={showDeleteModal}
                closeModal={closeDeleteModal}
                confirmHandler={confirmDeleteHandler}
                loading={loading}
            />
        </AdminLayout>
    )
}

export default Subscriptions
