import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import AdminProvider from '@/contexts/admin'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AdminProvider>
            <Component {...pageProps} />
            <Analytics />
        </AdminProvider>
    )
}
