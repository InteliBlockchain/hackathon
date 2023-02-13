import React, { ReactNode } from "react"
import Head from "next/head"

import { Montserrat } from '@next/font/google';
const montserrat = Montserrat({
    subsets: ["latin"]
});

type Props = {
    children?: ReactNode;
    title?: string;
};

export const Layout = ({ children, title }: Props) => {
    return (
        <>
            <Head>
                <title>{title ? `${title} - Hackathon InteliBlockchain` : "Hackathon InteliBlockchain"}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            </Head>

            <div className={`min-h-screen h-full ${montserrat.className} text-white`}>
                {children}
            </div>
        </>
    )
}