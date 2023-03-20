import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import close from "../assets/x.svg"

import seta from "../assets/arrow-right2.svg"

export const QeAInput = ({ id, question, answer }: {
    id: number;
    question: string;
    answer: string;
}) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const open = () => {
        const box = document.getElementById("box" + id);
        const arrow = document.getElementById("seta" + id);

        //Animate box height when opening
        if (!isOpen) {
            box?.animate([
                { height: "fit-content" },
                { height: "0" }
            ], {
                duration: 400,
                easing: "ease-in-out",
                fill: "forwards"
            })

            arrow?.animate([
                { transform: "rotate(0deg)" },
                { transform: "rotate(90deg)" }
            ], {
                duration: 400,
                easing: "ease-in-out",
                fill: "forwards"
            })
        } else {
            box?.animate([
                { height: "0" },
                { height: "fit-content" }
            ], {
                duration: 400,
                easing: "ease-in-out",
                fill: "forwards"
            })

            arrow?.animate([
                { transform: "rotate(90deg)" },
                { transform: "rotate(0deg)" }
            ], {
                duration: 400,
                easing: "ease-in-out",
                fill: "forwards"
            })
        }

            setIsOpen(!isOpen);
    }

    return (
        <div onClick={open} className="w-full md:w-f text-xl h-auto p-4 rounded-lg bg-[#2C2C2C]">
            <div className="flex flex-col h-full">
                <div className="flex flex-row w-full justify-between align-center">
                    <label className="font-medium text-xl h-auto">{question}</label>
                    <button className="bg-transparent">
                        <Image alt={"seta"} id={`seta${id}`} src={seta} width={14} height={14}></Image>
                    </button>
                </div>
                {isOpen ? (
                    <div id={`box${id}`} className="mt-4">
                        <p className="text-base opacity-80 font-extrathin">{answer}</p>
                    </div>
                ) : null}
            </div>
        </div>
    )
}