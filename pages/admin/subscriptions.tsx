import React from 'react'

import { Container } from '@/styles/pages/admin/subscriptions'
import axios from '../../axios'
import { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import ActionsTd from '@/components/actionsTd'
import TableComponent from '@/components/table'
import SubscriptionModal from '@/components/subscriptionModal'
import { useRouter } from 'next/router'
import { BiRefresh } from 'react-icons/bi'
import { AdminLayout } from '@/components/adminLayout'

export interface Subscription {
    id: string
    email: string
    acceptTerms: boolean
    contact: string
    discord: string
    github?: string
    linkedin?: string
    document: string
    documentType: string
    fullName: string
    level: string
    institution: string
    gender: string
    local: string
    group: boolean
    why: string
    specialNeeds?: string
    history?: string
    habilities?: string
    mailing: boolean
    approved: boolean
    createdAt: Date
    updatedAt: Date
}

const Subscriptions = () => {
    const [showModal, setShowModal] = useState(false)
    const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null)

    const router = useRouter()

    const closeModal = () => {
        setSelectedSubscription(null)
        setShowModal(false)
    }

    const [subscriptions, setSubscriptions] = useState<Subscription[]>([])

    const getSubscriptions = async () => {
        try {
            const token = localStorage.getItem('adminToken')
            const { data } = await axios.get('/Sub/allPreSubs', { headers: { Authorization: `Bearer ${token}` } })
            setSubscriptions(data)
        } catch (err) {
            router.replace('/admin/auth')
        }
    }

    useEffect(() => {
        getSubscriptions()
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: ' ',
                columns: [
                    {
                        Header: 'Nome completo',
                        accessor: 'fullName',
                    },
                    {
                        Header: 'Documento',
                        accessor: 'document',
                    },
                    {
                        Header: 'Instituição',
                        accessor: 'institution',
                    },
                    {
                        Header: 'Contato',
                        accessor: 'contact',
                    },
                    {
                        Header: 'Ações',
                        accessor: 'id',
                        Cell: (props: any) => {
                            const actions = [
                                {
                                    handler: () => {
                                        const subs = subscriptions.find(
                                            (subscription) => subscription.id == props.row.values.id
                                        )
                                        if (subs) {
                                            setSelectedSubscription(subs)
                                            setShowModal(true)
                                        }
                                    },
                                    icon: FaRegEye,
                                    color: '#02DE82',
                                },
                            ]

                            return <ActionsTd actions={actions} />
                        },
                    },
                ],
            },
        ],
        [subscriptions]
    )

    const data = React.useMemo(() => [...subscriptions], [subscriptions])
    return (
        <AdminLayout>
            <Container>
                <h1>Inscrições</h1>
                <BiRefresh onClick={getSubscriptions} />
                <TableComponent columns={columns} data={data} />
            </Container>
            {selectedSubscription && (
                <SubscriptionModal subscription={selectedSubscription} showModal={showModal} closeModal={closeModal} />
            )}
        </AdminLayout>
    )
}

export default Subscriptions
