import React from 'react'

import { Container } from '@/styles/pages/admin/contact'
import axios from '../../axios'
import { useEffect, useState } from 'react'
import TableComponent from '@/components/table'
import { useRouter } from 'next/router'
import { BiRefresh } from 'react-icons/bi'
import { AdminLayout } from '@/components/adminLayout'

export interface Company {
    id: string
    companyName: string
    email: string
}

const Companies = () => {
    const router = useRouter()

    const [companies, setCompanies] = useState<Company[]>([])

    const getCompanies = async () => {
        try {
            const token = localStorage.getItem('adminToken')
            const { data } = await axios.get('/Contact/getAllPartners', {
                headers: { Authorization: `Bearer ${token}` },
            })
            setCompanies(data)
        } catch (err) {
            router.replace('/admin/auth')
        }
    }

    useEffect(() => {
        getCompanies()
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: ' ',
                columns: [
                    {
                        Header: 'Nome',
                        accessor: 'companyName',
                    },
                    {
                        Header: 'Email',
                        accessor: 'email',
                    },
                ],
            },
        ],
        [companies]
    )

    const data = React.useMemo(() => [...companies], [companies])
    return (
        <AdminLayout>
            <Container>
                <h1>Parceiros</h1>
                <BiRefresh onClick={getCompanies} />
                <TableComponent columns={columns} data={data} />
            </Container>
        </AdminLayout>
    )
}

export default Companies
