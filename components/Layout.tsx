import React, { ReactNode, useState } from "react"
import Head from "next/head"
import Link from "next/link";

import { Montserrat } from '@next/font/google';
import Image from "next/image";
const montserrat = Montserrat({
    subsets: ["latin"]
});

import menu from "@/assets/menu.svg"

import { Sidebar } from '@/components/Sidebar'

type Props = {
    children?: ReactNode;
    title?: string;
};

export const Layout = ({ children, title }: Props) => {
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => {
        setSidebar(!sidebar)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <Head>
                <title>{title ? `${title} - Hackathon InteliBlockchain` : "Hackathon InteliBlockchain"}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            </Head>

            <div className={`${montserrat.className} text-white flex flex-col z-100 ${sidebar ? "max-h-screen overflow-hidden" : "min-h-screen h-full"}`}>
                <div className="fixed z-10 p-4 w-full">
                    <button onClick={toggleSidebar}>
                        <Image src={menu} alt="menu" width={32} />
                    </button>
                </div>

                {sidebar ? <Sidebar setSidebar={setSidebar} /> : null}
                <div className="mx-auto w-full">
                    {children}
                </div>
            </div>
        </>
    )
}

