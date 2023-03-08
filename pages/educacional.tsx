import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/Layout"
import EducacionalCard from "@/components/EducacionalCard";

const Educacional = () => {
    // level -> indica a dificuldade do conteúdo
    // 1 -> básico
    // 2 -> intermediário
    // 3 -> avançado
    return (
        <>
            <Layout>
                <div className="flex flex-col items-center justify-center bg2 md:bg-black bg-center bg-cover pt-32 pb-24 h-auto w-full mx-auto">
                    <h1 className="font-bold text-5xl mb-4">Prepare-se</h1>
                    <p className="font-semibold text-md">Não sabe o que é blockchain?</p>
                    <p className="font-semibold text-md">Nunca programou em Solidity?</p>
                    <p className="font-semibold text-md">Bora estudar!</p>
                </div>
                <div className="flex flex-col items-center justify-center md:bg-black bg-center h-auto w-full mx-auto">
                    <h1 className="font-semibold text-2xl mb-2">Quero aprender sobre blockchain</h1>

                    <EducacionalCard
                    title={"Conceitos básicos em blockchain"}
                    text={"Entenda o funcionamento e os principios técnologicos que possibilitam a maior blockchain do mundo, a Bitcoin."}
                    type={"Texto"}
                    level={1}></EducacionalCard>

                    <EducacionalCard
                    title={"testando!"}
                    text={"loremfewrfwqerfwerfwerfwfre erfr  wf we  werf f werf we "}
                    type={"Vídeo"}
                    level={2}></EducacionalCard>

                    <EducacionalCard
                    title={"OPAOPA"}
                    text={"Lorem ipsum dot sit lore amem"}
                    type={"Texto"}
                    level={3}></EducacionalCard>
            </div>
            </Layout>
        </>
    )
}

export default Educacional;