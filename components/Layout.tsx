import React, { ReactNode, useState } from "react"
import Head from "next/head"
import Link from "next/link";

import { Montserrat } from '@next/font/google';
import Image from "next/image";
const montserrat = Montserrat({
    subsets: ["latin"]
});

import menu from "@/assets/menu.svg"
import close from "@/assets/x.svg"

type Props = {
    children?: ReactNode;
    title?: string;
};

export const Layout = ({ children, title }: Props) => {
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => {
        setSidebar(!sidebar)
        console.log(sidebar)
    }

    return (
        <>
            <Head>
                <title>{title ? `${title} - Hackathon InteliBlockchain` : "Hackathon InteliBlockchain"}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            </Head>

            <div className={`min-h-screen h-full ${montserrat.className} text-white flex flex-col md:items-center`}>
                <button onClick={toggleSidebar} className="absolute p-4 w-full md:w-2/5">
                    <Image src={menu} className="" alt="menu" width={32} />
                </button>

                {sidebar ? <Sidebar setSidebar={setSidebar} /> : null}
                {children}
            </div>
        </>
    )
}

const Sidebar = ({ setSidebar }: {
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="absolute w-full min-h-screen h-full bg-[rgba(0,0,0,0.25)] flex">
            <div className="bg-black w-4/5 min-h-screen h-full">
                <button onClick={() => setSidebar(false)} className="absolute p-4 w-full md:w-2/5">
                    <Image src={close} className="" alt="menu" width={32} />
                </button>

                <div className="flex flex-col px-4 justify-center h-full">
                    <Link href={"/"} className="text-[#cecece] text-2xl mb-4 font-semibold">Início</Link>
                    <Link href={"/q&a"} className="text-[#cecece] text-2xl mb-4 font-semibold">Q&A</Link>
                    <Link href={"/contato"} className="text-[#cecece] text-2xl mb-4 font-semibold">Entre em contato</Link>
                    <Link href={"/patrocine"} className="text-[#cecece] text-2xl mb-4 font-semibold">Seja um patrocinador</Link>
                    <Link href={"https://inteliblockchain.co"} className="text-[#737373] text-xl font-semibold">Voltar para https://inteliblockchain.co</Link>
                </div>
            </div>

            <div onClick={() => setSidebar(false)} className="w-1/5 min-h-screen h-full"></div>
        </div>
    )
}