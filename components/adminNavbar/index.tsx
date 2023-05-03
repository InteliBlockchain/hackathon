import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/logo.svg'
import { Container } from './style'

interface Props {}

const items = [
    {
        text: 'Inscrições',
        link: '/admin/subscriptions',
    },
    {
        text: 'Contato',
        link: '/admin/contact',
    },
    {
        text: 'Empresas',
        link: '/admin/companies',
    },
    {
        text: 'Marcar Presença',
        link: '/admin/subscriptionsPresences',
    },
]

const AdminNavbar: React.FC<Props> = (props) => {
    return (
        <Container>
            <Link href={"/"}><Image src={Logo} alt="Logo" /></Link>
            {items.map((item) => (
                <div>
                    <Link href={item.link}>{item.text}</Link>
                </div>
            ))}
        </Container>
    )
}

export default AdminNavbar
