import React from 'react'

import { Container } from '@/styles/pages/admin/subscriptions'
import axios from '../../axios'
import { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { BsFillTrashFill } from 'react-icons/bs'
import ActionsTd from '@/components/actionsTd'
import TableComponent from '@/components/table'
import SubscriptionModal from '@/components/subscriptionModal'
import { useRouter } from 'next/router'
import { BiRefresh } from 'react-icons/bi'
import { AdminLayout } from '@/components/adminLayout'
import ConfirmModal from '@/components/confirmModal'
import { toast } from 'react-toastify'
import Loader from "../../components/loader";

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
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const [modalLoading, setModalLoading] = useState(false)
    const [loading, setLoading] = useState(false);

    const router = useRouter()

    const closeModal = () => {
        setSelectedSubscription(null)
        setShowModal(false)
    }

    const [subscriptions, setSubscriptions] = useState<Subscription[]>([])

    const getSubscriptions = async () => {
        setLoading(true)
        try {
            const token = localStorage.getItem('adminToken')
            const { data } = await axios.get('/Sub/allPreSubs', { headers: { Authorization: `Bearer ${token}` } })
            setSubscriptions(
                // sorts from not approved to approved
                data.sort((a: Subscription, b: Subscription) => {
                    if (a.approved == true && b.approved == false) {
                        return 1
                    } else if (a.approved == false && b.approved == true) {
                        return -1
                    } else {
                        return 0
                    }
                })
            )
        } catch (err) {
            router.replace('/admin/auth')
        }
        setLoading(false)
    }

    useEffect(() => {
        getSubscriptions()
    }, [])

    const confirmDeleteHandler = async () => {
        setModalLoading(true)
        try {
            const token = localStorage.getItem('adminToken')
            const { data } = await axios.delete('/sub/deletePreSub/' + deleteId, { headers: { Authorization: `Bearer ${token}` } })
            await getSubscriptions()
            toast.success(data)
        } catch (err) {
            toast.error('Erro ao deletar usuário!')
        }

        closeDeleteModal()
        setModalLoading(false)
    }

    const closeDeleteModal = () => {
        setDeleteId(null)
        setShowDeleteModal(false)
    }

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
                        Header: "Já veio ao evento?",
                        accessor: "presence",
                        Cell: (props: any) => (
                            <span>{props.value ? 'Sim' : 'Não'}</span>
                        )
                    },
                    {
                        Header: "Aprovado",
                        accessor: "approved",
                        Cell: (props: any) => {
                            return props.row.values.approved ? <span style={{ color: 'green', fontSize: 16, fontWeight: 500 }}>Sim</span> : <span style={{ color: 'red', fontSize: 16, fontWeight: 500 }}>Não</span>
                        }
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
                                {
                                    handler: () => {
                                        setDeleteId(props.row.values.id)
                                        setShowDeleteModal(true)
                                    },
                                    icon: BsFillTrashFill,
                                    color: 'red',
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
                <div className='flex flex-row w-full items-center justify-between'>
                    <h1>Inscrições</h1>
                    <p className='text-2xl'>{subscriptions.length}</p>
                </div>
                <BiRefresh onClick={getSubscriptions} />
                {loading ? (
                    <Loader />
                ) : (
                    <TableComponent columns={columns} data={data} />
                )}
            </Container>
            {selectedSubscription && (
                <SubscriptionModal subscription={selectedSubscription} showModal={showModal} closeModal={closeModal} />
            )}

            <ConfirmModal
                title="Tem certeza que deseja deletar o usuário?"
                show={showDeleteModal}
                closeModal={closeDeleteModal}
                confirmHandler={confirmDeleteHandler}
                loading={modalLoading}
            />
        </AdminLayout>
    )
}

export default Subscriptions
