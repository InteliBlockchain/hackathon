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

    const [questions, setQuestions] = useState([
        {
            id: 1, question: "Qual o valor do ingresso?", answer: "Teste de questão 1"
        },
        {
            id: 2, question: "Quais são os requisitos para participar?", answer: "Teste de questão 1"
        },
        {
            id: 3, question: "Como funcionam as categorias?", answer: "Teste de questão 1"
        },
        {
            id: 4, question: "Posso passar a noite no local do evento?", answer: "Teste de questão 1"
        },
        {
            id: 5, question: "Posso participar sozinho?", answer: "Teste de questão 1"
        },
        {
            id: 6, question: "Quantas pessoas por equipe?", answer: "Teste de questão 1"
        },
        {
            id: 7, question: "Como faço para cadastrar meu time?", answer: "Teste de questão 1"
        },
        {
            id: 8, question: "Não sou um programador. Posso participar?", answer: "Teste de questão 1"
        },
        {
            id: 9, question: "Não sei oque é blockchain. Posso participar?" , answer: "Teste de questão 1"
        },
        {
            id: 10, question: "Não tenho computador. Oque faço?", answer: "Teste de questão 1"
        },
    ])

    return (
            <>
            <Layout>
                <div className="flex flex-col items-center justify-center bg2 md:bg-black bg-center bg-cover pt-32 pb-24 h-auto w-full mx-auto">
                    <div className="md:h-32 lg:h-40">
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-7xl mb-4">Q&A</h1>
                            <p className="font-semibold text-xl">Perguntas e Respostas</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-min-full -mt-8 mb-16">
                    <div className="w-11/12 md:4/5">
                        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-4 flex-col justify-center md:items-center min-w-full items-center self-center">
                            {questions.map((question, { index}) => (
                                    <QeAInput {...question} key={index} />
                            ))}
                    </div>
                </div>
            </div>
            
			</Layout>
		</>
	)
}

export default QeA;