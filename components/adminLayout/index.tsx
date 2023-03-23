import React, { ReactNode, useEffect, useState } from 'react'
import Head from 'next/head'
import 'react-toastify/dist/ReactToastify.css'
import { Content, PageContainer } from './style'
import AdminNavbar from '../adminNavbar'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'

type Props = {
    children?: ReactNode
    title?: string
    modal?: boolean
}

export const AdminLayout = ({ children, title, modal }: Props) => {
    const router = useRouter()

    useEffect(() => {
        const adminToken = localStorage.getItem('adminToken')
        if (!adminToken) {
            router.replace('/admin/auth')
        }
    }, [])

    return (
        <>
            <Head>
                <title>{title ? `${title} - Hackathon InteliBlockchain` : 'Hackathon InteliBlockchain'}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                />

                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <PageContainer>
                <AdminNavbar />
                <Content>{children}</Content>
            </PageContainer>
        </>
    )
}
