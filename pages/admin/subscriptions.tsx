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

export interface Subscription {
    id: string
    fullName: string
    document: string
    institution: string
    contact: string
    github?: string
    linkedin?: string
    instagram?: string
    twitter?: string
    specialNeed?: string
    whyParticipate: string
    history: string
    skills: string
    discord: string
}

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null)

    const closeModal = () => {
        setSelectedSubscription(null)
        setShowModal(false)
    }

    const [subscriptions, setSubscriptions] = useState<Subscription[]>([
        {
            id: '#4901289',
            fullName: 'Lyorrei Shono',
            document: `MG-89.123.654`,
            institution: `BTG Pactual`,
            contact: '31 99374-5821',
            discord: "ADIO#4321",
            history: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat sapiente eius ipsa? In, beatae itaque? Rerum, animi?",
            skills: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat sapiente eius ipsa? In, beatae itaque? Rerum, animi?",
            whyParticipate: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat sapiente eius ipsa? In, beatae itaque? Rerum, animi?",
        },
        {
            id: '#4901289',
            fullName: 'Lyorrei Shono',
            document: `MG-89.123.654`,
            institution: `BTG Pactual`,
            contact: '31 99374-5821',
            discord: "ADIO#4321",
            history: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat sapiente eius ipsa? In, beatae itaque? Rerum, animi?",
            skills: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat sapiente eius ipsa? In, beatae itaque? Rerum, animi?",
            whyParticipate: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat sapiente eius ipsa? In, beatae itaque? Rerum, animi?",
        },
        {
            id: '#4901289',
            fullName: 'Lyorrei Shono',
            document: `MG-89.123.654`,
            institution: `BTG Pactual`,
            contact: '31 99374-5821',
            discord: "ADIO#4321",
            history: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat sapiente eius ipsa? In, beatae itaque? Rerum, animi?",
            skills: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat sapiente eius ipsa? In, beatae itaque? Rerum, animi?",
            whyParticipate: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est placeat sapiente eius ipsa? In, beatae itaque? Rerum, animi?",
        },
    ])

    useEffect(() => {}, [selectedSubscription])

    const { register, handleSubmit } = useForm()

    useEffect(() => {
        // axios.get('')
    })

    const columns = React.useMemo(
        () => [
            {
                Header: ' ',
                columns: [
                    {
                        Header: 'Id',
                        accessor: 'id',
                    },
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
                        accessor: '_id',
                        Cell: (props: any) => {
                            const actions = [
                                {
                                    handler: () => {
                                        console.log(props.row)
                                        setShowModal(true)
                                        setSelectedSubscription(props.row.values)
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
                {selectedSubscription && <SubscriptionModal subscription={selectedSubscription} showModal={showModal} closeModal={closeModal}/>}
            </PageContainer>
        </Layout>
    )
}

export default Home
