import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import close from "../assets/x.svg"

import seta from "../assets/arrow-left2.svg"

export const QeAInput = ({ name, description, debug }: {
    name: string;
    description: string;
    debug: any;
}) => {

    debug = debug.toString();

    const [ isOpen, setIsOpen ] = React.useState(false);

    const open = () => {
        const box = document.getElementById(`box${debug}`);

        //Animate box height when opening
        if(!isOpen) {
            box?.animate([
                { height: "3.5rem" },
                { height: "12rem" }
            ], {
                duration: 300,
                easing: "ease-in-out",
                fill: "forwards"
            })
        } else {
            box?.animate([
                { height: "12rem" },
                { height: "3.5rem" }
            ], {
                duration: 300,
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
            <div id={`box${debug}`} onClick={open} className="cursor-pointer w-full md:w-10/12 shadow-lg rounded-lg bg-[#2C2C2C]">
                <div className="flex flex-col h-full p-2">
                    <div className="flex flex-row w-full justify-between align-center">
                        <label className="cursor-pointer font-medium text-lg md:text-xl">{name}</label>
                        <button className="bg-transparent text-sm h-5 pr-2 pt-4" onClick={open}><Image className="rotate-90" alt={"seta"} src={seta} width={20} height={20}></Image></button>
                    </div>
                    <div className="mt-6">
                        <label className=" text-md">{description}</label>    
                    </div>            
                </div>
            </div>
        )
    } else {
        return (
            <div id={`box${debug}`}  onClick={open} className="h-14 shadow-lg cursor-pointer w-full md:w-10/12 rounded-lg bg-[#2C2C2C]">
                <div className="flex justify-between h-full items-center ml-2 mr-4">
                    <label className="cursor-pointer font-medium text-lg ">{name}</label>
                    <button className="bg-transparent"><Image className="-rotate-90 mb-2" alt={"seta"} src={seta} width={20} height={20}></Image></button>                                
                </div>
            </div>
        )
    }
}