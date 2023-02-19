import React from "react";
import Link from "next/link";
import Image from "next/image";

import close from "../assets/x.svg"

export const Sidebar = ({ setSidebar }: {
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="absolute mx-auto min-h-screen h-full bg-[rgba(0,0,0,0.25)] flex z-10 transition-all duration-500 ease-in-out h-full w-full">
            <div className="w-4/5 min-h-screen h-full bg-[#0e0e10]">
                <button onClick={() => setSidebar(false)} className="absolute p-4">
                    <Image src={close} className="" alt="close" width={32} />
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