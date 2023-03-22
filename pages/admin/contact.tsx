import React from 'react'

import { Container } from '@/styles/pages/admin/contact'
import axios from '../../axios'
import { useEffect, useState } from 'react'
import TableComponent from '@/components/table'
import { useAdmin } from '@/contexts/admin'
import { useRouter } from 'next/router'
import { BiRefresh } from 'react-icons/bi'
import { AdminLayout } from '@/components/adminLayout'

export interface Contact {
    id: string
    email: string
    name: string
    message: string
}

const Contact = () => {
    const { token } = useAdmin()
    const router = useRouter()

    const [contacts, setContacts] = useState<Contact[]>([])

    const getContacts = async () => {
        try {
            const { data } = await axios.get('/Contact/getAllContacts', { headers: { Authorization: `Bearer ${token}` } })
            setContacts(data)
        } catch (err) {
            router.replace('/admin/auth')
        }
    }

    useEffect(() => {
        getContacts()
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: ' ',
                columns: [
                    {
                        Header: 'Nome',
                        accessor: 'name',
                    },
                    {
                        Header: 'Email',
                        accessor: 'email',
                    },
                    {
                        Header: 'Mensagem',
                        accessor: 'message',
                    },
                ],
            },
        ],
        [contacts]
    )

    const data = React.useMemo(() => [...contacts], [contacts])
    return (
        <AdminLayout>
            <Container>
                <h1>Contatos</h1>
                <BiRefresh onClick={getContacts} />
                <TableComponent columns={columns} data={data} />
            </Container>
        </AdminLayout>
    )
}

export default Contact
