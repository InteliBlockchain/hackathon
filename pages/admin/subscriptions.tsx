import { Layout } from '@/components/Layout'
import React from 'react'

import { Container, PageContainer } from '@/styles/pages/admin/subscriptions'
import { useForm } from 'react-hook-form'
import axios from '../../axios'
import { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import ActionsTd from '@/components/actionsTd'
import TableComponent from '@/components/table'

const Home = () => {
    const [subscriptions, setSubscriptions] = useState([
        {
            id: '#4901289',
            fullName: 'Lyorrei Shono',
            document: `MG-89.123.654`,
            institution: `BTG Pactual`,
            contact: '31 99374-5821',
        },
        {
            id: '#90682405',
            fullName: 'Lyorrei Shono',
            document: `MG-89.123.654`,
            institution: 'Insper',
            contact: '31 99374-5821',
        },
        {
            id: '#598252',
            fullName: 'Lyorrei Shono',
            document: `MG-89.123.654`,
            institution: 'ITA',
            contact: '31 99374-5821',
        },
    ])

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
                                    link: '/admin/subscription/' + props.value,
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
            </PageContainer>
        </Layout>
    )
}

export default Home
