import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import close from "../assets/x.svg"

export const Sidebar = ({ setSidebar }: {
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    useEffect(() => {
        const background = document.querySelector("#background");
        const sidebar = document.querySelector("#sidebar");

        function openAnimation() {
            background?.animate([
                { opacity: "0%", backdropFilter: "blur(0px)" },
                { opacity: "100%", backdropFilter: "blur(10px)" }
            ], {
                duration: 400,
                easing: "ease-in-out",
                fill: "forwards"
            })

            if (window.matchMedia("(max-width: 768px)").matches) {
                sidebar?.animate([
                    { width: "0%", height: "0%" },
                    { width: "70%", height: "100%" }
                ], {
                    duration: 400,
                    easing: "ease-in-out",
                    fill: "forwards"
                })
            } else {
                sidebar?.animate([
                    { width: "0%", height: "0%" },
                    { width: "30%", height: "100%" }
                ], {
                    duration: 400,
                    easing: "ease-in-out",
                    fill: "forwards"
                })
            }
        }

        openAnimation();
    }, [])

    const closeSidebar = () => {
        const background = document.querySelector("#background");
        const sidebar = document.querySelector("#sidebar");

        background?.animate([
            { opacity: "100%", backdropFilter: "blur(10px)" },
            { opacity: "0%", backdropFilter: "blur(0px)" }
        ], {
            duration: 800,
            easing: "ease-in-out",
            fill: "forwards"
        })

        if (window.matchMedia("(max-width: 768px)").matches) {
            sidebar?.animate([
                { width: "70%", height: "100%" },
                { width: "0%", height: "0%" }
            ], {
                duration: 800,
                easing: "ease-in-out",
                fill: "forwards"
            })
        } else {
            sidebar?.animate([
                { width: "30%", height: "100%" },
                { width: "0%", height: "0%" }
            ], {
                duration: 800,
                easing: "ease-in-out",
                fill: "forwards"
            })
        }

        setTimeout(() => {
            setSidebar(false);
        }, 800)
    }

    return (
        <div className="absolute mx-auto min-h-screen bg-[rgba(0,0,0,0.25)] flex z-10 h-full w-full" id="background">
            <div className="w-4/5 md:w-2/5 min-h-screen h-full bg-[#0e0e10]" id="sidebar">
                <button onClick={() => setSidebar(false)} className="absolute p-4">
                    <Image src={close} className="" alt="close" width={32} />
                </button>

                <div className="flex flex-col px-4 justify-center h-full text-lg md:text-2xl">
                    <Link href={"/"} className="text-[#cecece] mb-4 font-semibold text">Início</Link>
                    <Link href={"/educacional"} className="text-[#cecece] mb-4 font-semibold text">Aprenda</Link>
                    <Link href={"/q&a"} className="text-[#cecece] mb-4 font-semibold text">Q&A</Link>
                    <Link href={"/contact"} className="text-[#cecece] mb-4 font-semibold text">Entre em contato</Link>
                    <Link href={"/sponsor-form"} className="text-[#cecece] mb-4 font-semibold text">Seja um patrocinador</Link>
                    <Link href={"https://inteliblockchain.co"} className="text-[#737373] text-xl font-semibold text">Voltar para https://inteliblockchain.co</Link>
                </div>
            </div>

            <div onClick={closeSidebar} className="w-1/5 min-h-screen h-full"></div>
        </div>
    )
}