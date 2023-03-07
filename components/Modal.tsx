import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import close from "../assets/x.svg"

export const Modal = ({ setModal }: {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    useEffect(() => {
        const background = document.querySelector("#background");
        const sidebar = document.querySelector("#sidebar");

        function openAnimation() {
            background?.animate([
                { opacity: "0%", backdropFilter: "blur(0px)" },
                { opacity: "100%", backdropFilter: "blur(10px)" }
            ], {
                duration: 500,
                easing: "ease-in-out",
                fill: "forwards"
            })

//            if (window.matchMedia("(max-width: 768px)").matches) {
//                sidebar?.animate([
//                    { width: "0%", height: "0%" },
//                    { width: "75%", height: "100%" }
//                ], {
//                    duration: 1500,
//                    easing: "ease-in-out",
//                    fill: "forwards"
//                })
//            } else {
//                sidebar?.animate([
//                    { width: "0%", height: "0%" },
//                    { width: "30%", height: "100%" }
//                ], {
//                    duration: 800,
//                    easing: "ease-in-out",
//                    fill: "forwards"
//                })
//            }
        }

        openAnimation();
    }, [])

    const closeModal = () => {
        const background = document.querySelector("#background");
        const sidebar = document.querySelector("#sidebar");

        background?.animate([
            { opacity: "100%", backdropFilter: "blur(10px)" },
            { opacity: "0%", backdropFilter: "blur(0px)" }
        ], {
            duration: 500,
            easing: "ease-in-out",
            fill: "forwards"
        })

        if (window.matchMedia("(max-width: 768px)").matches) {
            sidebar?.animate([
                { width: "70%", height: "100%" },
                { width: "0%", height: "0%" }
            ], {
                duration: 500,
                easing: "ease-in-out",
                fill: "forwards"
            })
        } else {
            sidebar?.animate([
                { width: "30%", height: "100%" },
                { width: "0%", height: "0%" }
            ], {
                duration: 500,
                easing: "ease-in-out",
                fill: "forwards"
            })
        }

        setTimeout(() => {
            setModal(false)
        }, 800)
    }

    return (
        <div className="absolute mx-auto bg-[rgba(0,0,0,0.25)] flex z-10 h-full w-full" id="background">
            <div className="w-4/5 md:w-1/2 lg:w-1/4 h-fit my-auto mx-auto flex flex-col bg-[#2e2e2e] py-8 rounded-xl" id="sidebar">
                <div className="flex items-center justify-center mb-4 px-4">
                    <button className="absolute left-20 md:hidden" onClick={closeModal}>
                        <Image src={close} width={32} alt={"close"} />
                    </button>

                    <button className="md:flex hidden" onClick={closeModal}>
                        <Image src={close} width={32} alt={"close"} />
                    </button>

                    <p className="text-xl font-medium md:mx-auto">
                        Quase lá...
                    </p>
                </div>

                <div className="w-full mt-4 flex flex-col justify-center items-center px-4">
                    <div className="w-full">
                        <p className="text-lg font-medium">E-mail</p>
                        <input className="bg-[rgba(0,0,0,0.25)] w-full px-4 py-2 rounded-lg text-lg" placeholder={"seu@email.com"} />
                    </div>

                    <p className="my-4 text-md text-[#7D7D7D] text-center">Você receberá um email com um link para completar sua inscrição. O link é valido por uma hora.</p>

                    <button className="font-semibold text-lg bg-[#4863F7] rounded-lg my-2 px-8 w-3/5 py-4 text-[#f1f1f1] shadow-lg" onClick={() => alert("Indisponível! O que está tentando fazer?")}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    )
}