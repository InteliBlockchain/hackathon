import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/Layout"

import logo from "@/assets/logo.svg"
import challenge from "@/assets/Challenge 2023.svg"
import seta from "../assets/Seta.png"

import { QeAInput } from "@/components/Q&AInput";

const QeA = () => {
	const router = useRouter();

	return (
        <>
			<Layout>
            <div className="flex flex-col items-center justify-center bg2 md:bg-black bg-center bg-cover pt-32 pb-24 h-auto w-full mx-auto">
				<div className="md:h-32 lg:h-40">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-5xl mb-4">Q&A</h1>
                        <p className="font-semibold">Perguntas e Respostas</p>
                    </div>
				</div>
			</div>
            <div className="flex justify-center w-min-full -mt-8 mb-16">
                <div className="w-11/12">
                    <div className="flex md:flex-row flex-col gap-6 md:gap-0 justify-center md:items-center min-w-full">
                        <div className="w-full md:w-2/4 flex flex-col gap-6 items-center">
                            <QeAInput name="Qual o valor do ingresso?" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." debug={1}/>
                            <QeAInput name="Quais são os requisitos para participar?" description="Teste de questão 1" debug={2}/>
                            <QeAInput name="Como funcionam as categorias?" description="Teste de questão 1" debug={3}/>
                            <QeAInput name="Posso passar a noite no local do evento?" description="Teste de questão 1" debug={4}/>
                            <QeAInput name="Posso participar sozinho?" description="Teste de questão 1" debug={5}/>
                        </div>
                        <div className="w-full md:w-2/4 flex flex-col gap-6 items-center">
                            <QeAInput name="Quantas pessoas por equipe?" description="Teste de questão 1" debug={6}/>
                            <QeAInput name="Como faço para cadastrar meu time?" description="Teste de questão 2" debug={7}/>
                            <QeAInput name="Não sou um programador. Posso participar?" description="Teste de questão 2" debug={8}/>
                            <QeAInput name="Não sei oque é blockchain. Posso participar?" description="Teste de questão 2" debug={9}/>
                            <QeAInput name="Não tenho computador. Oque faço?" description="Teste de questão 2" debug={10}/>
                        </div>
                    </div>
                </div>
            </div>
            
			</Layout>
		</>
	)
}

export default QeA;