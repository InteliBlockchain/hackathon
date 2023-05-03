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

export interface Subscription {
    document: string
    fullName: string
}

export interface PresenceCheck {
    id: number
    date: Date
    type: checkType
    hacker: Subscription
}

const Presences = () => {
    const [presences, setPresences] = useState<PresenceCheck[]>([]);

    const router = useRouter(); 

    const getPresences = async () => {
        try {
            const token = localStorage.getItem('adminToken')
            // const { data } = await axios.get('/Sub/checkPresences', { headers: { Authorization: `Bearer ${token}` } })

            const data : PresenceCheck[] = [
                {
                    id: 1,
                    date: new Date(),
                    type: 'in' as checkType,
                    hacker: {
                        fullName: 'Rafa',
                        document: 'adsasd'
                    }
                },
                {
                    id: 2,
                    date: new Date(),
                    type: 'out' as checkType,
                    hacker: {
                        fullName: 'Lyo',
                        document: '132901230'
                    }
                }
            ]

            setPresences(data);
        } catch (err) {
            router.replace('/admin/auth')
        }
    }


    const columns = React.useMemo(
        () => [
            {
                Header: ' ',
                columns: [
                    {
                        Header: 'Nome completo',
                        accessor: 'hacker.fullName',
                    },
                    {
                        Header: 'Documento',
                        accessor: 'hacker.document',
                    },
                    {
                        Header: 'data',
                        accessor: 'date',
                    },
                    {
                        Header: 'Tipo',
                        accessor: 'type',
                        Cell: (props: any) => {
                            return props.row.values.type == 'in' ? <span style={{ color: 'green', fontSize: 16, fontWeight: 500 }}>Entrada</span> : <span style={{ color: 'red', fontSize: 16, fontWeight: 500 }}>Saída</span>
                        }
                    },
                ],
            },
        ],
        [presences]
    )

    const data = React.useMemo(() => [...presences], [presences])

    return (
        <AdminLayout>
            <Container>
                <div className='flex flex-row w-full items-center justify-between'>
                    <h1>Presenças</h1>
                    <p className='text-2xl'>{presences.length}</p>
                </div>
                <BiRefresh onClick={getPresences} />
                <TableComponent columns={columns} data={data} />
            </Container>
        </AdminLayout>
    )
}

export default Presences
