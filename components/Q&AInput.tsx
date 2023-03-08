import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import close from "../assets/x.svg"

import seta from "../assets/Seta.png"

export const QeAInput = ({ name, description }: {
    name: string;
    description: string;
}) => {

    const [ isOpen, setIsOpen ] = React.useState(false);

    const open = () => {
        const box = document.getElementById("box");

        //Animate box height when opening
        if(!isOpen) {
            box?.animate([
                { height: "3.5rem" },
                { height: "12rem" }
            ], {
                duration: 800,
                easing: "ease-in-out",
                fill: "forwards"
            })
        } else {
            box?.animate([
                { height: "12rem" },
                { height: "3.5rem" }
            ], {
                duration: 800,
                easing: "ease-in-out",
                fill: "forwards"
            })
        }

        if (!isOpen) {
            setTimeout(() => {
                setIsOpen(!isOpen);
            }, 200);
        } else {
            setIsOpen(!isOpen);
        }
    }


    

    if(isOpen) {
        return (
            <div id="box" className="w-full md:w-10/12 h-48 rounded-lg bg-[#2C2C2C]">
                <div className="flex flex-col h-full ml-4 mr-4 mt-4">
                    <div className="flex flex-row w-full justify-between align-center">
                        <label className="font-normal text-sm md:text-xl">{name}</label>
                        <button className="bg-transparent h-5" onClick={open}><Image src = {seta} width={20} height={20}></Image></button>
                    </div>
                    <div className="mt-6">
                        <label className="font-extrathin text-md">{description}</label>    
                    </div>            
                </div>
            </div>
        )
    } else {
        return (
            <div id="box" className="w-full md:w-10/12 h-14 rounded-lg bg-[#2C2C2C]">
                <div className="flex justify-between h-full items-center ml-4 mr-4">
                    <label className="font-normal text-xl">{name}</label>
                    <button className="bg-transparent" onClick={open}><Image src = {seta} width={20} height={20}></Image></button>                                
                </div>
            </div>
        )
    }
}