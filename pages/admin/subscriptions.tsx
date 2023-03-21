import { Layout } from '@/components/Layout'
import React from 'react'

import { Container, PageContainer } from '@/styles/pages/admin/subscriptions'
import { useForm } from 'react-hook-form'
import axios from '../../axios'
import { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import ActionsTd from '@/components/actionsTd'
import TableComponent from '@/components/table'
import Modal from '@/components/styledModal'
import SubscriptionModal from '@/components/subscriptionModal'
import RequireAuthentication from '@/HOC/requireAuthentication'

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

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null)

    const closeModal = () => {
        setSelectedSubscription(null)
        setShowModal(false)
    }

    const [subscriptions, setSubscriptions] = useState<Subscription[]>([])

    useEffect(() => {
        // console.log(selectedSubscription)
    }, [selectedSubscription])

    const { register, handleSubmit } = useForm()

    useEffect(() => {
        axios.get('/Sub/allPreSubs').then((data: any) => {
            console.log(data)
        })
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
        []
    )

    const data = React.useMemo(() => [...subscriptions], [subscriptions])
    return (
        <Layout>
            <PageContainer>
                <Container>
                    <h1>Inscrições</h1>

                    <TableComponent columns={columns} data={data} />
                </Container>
                {selectedSubscription && (
                    <SubscriptionModal
                        subscription={selectedSubscription}
                        showModal={showModal}
                        closeModal={closeModal}
                    />
                )}
            </PageContainer>
        </Layout>
    )
}

export default RequireAuthentication (Home)
