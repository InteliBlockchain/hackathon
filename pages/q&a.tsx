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
            id: 1, question: "Qual é o valor do ingresso?", answer: "O evento é gratuito. É necessária apenas a apresentação de um documento válido correspondente ao informado no formulário de inscrição."
        },
        {
            id: 2, question: "Quais são os requisitos para participar?", answer: "Para participar é necessário se inscrever na nossa página e comparecer presencialmente nos dias do evento. Nenhum conhecimento prévio é necessário e elaboramos uma coleção sensacional de conteúdos para auxiliar no seu aprendizado! Qualquer informação adicional pode ser encontrada em nosso regulamento!"
        },
        {
            id: 3, question: "Como funcionam as categorias?", answer: "Cada empresa patrocinadora traz uma categoria e estabele requisitos para os projetos competirem. Os hackers são livres para escolher em qual(is) categoria(s) desejam participar. Não há limite de categorias que um grupo pode participar."
        },
        {
            id: 4, question: "Quais são os prêmios?", answer: "Cada categoria terá premiações independentes, as quais serão determinadas e oferecidas pela empresa patrocinadora da categoria. Os detalhes sobre os prêmios, incluindo valor e formas de pagamento, serão divulgados previamente."
        },
        {
            id: 5, question: "Como os projetos serão avaliados?", answer: "As empresas que disponibilizarem as categorias serão responsáveis pela avaliação dos projetos submetidos em suas respectivas categorias."
        },
        {
            id: 6, question: "Quais são os critérios de avaliação?", answer: "Cada empresa estabelecerá critérios específicos de avaliação, que serão divulgados juntamente com os detalhes das categorias. Esses critérios podem incluir inovação, aplicabilidade, escalabilidade, qualidade do código, entre outros."
        },
        {
            id: 7, question: "Qual é o prazo de pagamento dos prêmios?", answer: "As empresas patrocinadoras das categorias decidirão o tempo de pagamento dos prêmios aos vencedores. Essa informação será comunicada aos participantes durante a divulgação dos detalhes da categoria."
        },
        {
            id: 8, question: "Posso passar a noite no local do evento?", answer: "Não. O campus estará totalmente disponível para a livre circulação de todos os participantes nos seguintes dias e horários: Sexta —> De 17h até 22h; Sábado —> De 8h até 22h; Domingo —> De 8h até 17h; Lembramos também que é sempre obrigatório a apresentação de um documento válido para entrar no campus!"
        },
        {
            id: 9, question: "Posso participar sozinho?", answer: "Não. A quantidade mínima de participantes de um grupo para competir é 2 (duas) pessoas. Caso você ainda não tenha um grupo, não se preocupe, planejamos uma dinâmica no primeiro dia do evento para você encontrar um time!"
        },
        {
            id: 10, question: "São quantas pessoas por equipe?", answer: "Cada equipe poderá ter de 2 a 6 membros. Lembramos que é obrigatório a presença de todos os membros em pelo menos um dia no evento para sua equipe ser elegível à competir por uma categoria."
        },
        {
            id: 11, question: "Como faço para cadastrar meu time?", answer: "A inscrição é individual e ao fim do evento de abertura será comunicado como cada time deverá proceder com o cadastramento."
        },
        {
            id: 12, question: "Não sou programador. Posso participar?", answer: "Sim. Valorizamos a diversidade de habilidades e conhecimentos em nosso hackathon. Reconhecemos que a criação de soluções impactantes e inovadoras envolve muito mais do que apenas habilidades de programação. Independentemente da sua formação ou experiência, você é mais que bem-vindo para participar e contribuir com seu conhecimento e habilidades únicas."
        },
        {
            id: 13, question: "Não sei o que é blockchain. Posso participar? ", answer: "Sim. Para ajudá-lo a se familiarizar com o assunto, estamos preparando uma coleção incrível de materiais educativos que abordam conceitos básicos e avançados de blockchain. Esses recursos estarão disponíveis para todos os participantes e irão auxiliá-lo na compreensão das tecnologias e aplicações relacionadas ao blockchain. Ao participar do hackathon, você terá a chance de aprender com especialistas, fazer perguntas e trabalhar em equipe para desenvolver soluções inovadoras utilizando blockchain. Portanto, mesmo que você esteja começando do zero, este evento é uma oportunidade perfeita para mergulhar no mundo do blockchain e se envolver com a comunidade."
        },
    ])

    return (
        <>
            <Layout>
                <div className="flex flex-col items-center justify-center md:bg-black bg-center bg-cover pt-32 pb-16 h-auto w-full mx-auto">
                    <div className="md:h-32 lg:h-40">
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-7xl mb-4">Q&A</h1>
                            <p className="font-medium text-xl">Perguntas e Respostas</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-black w-min-full pb-16">
                    <div className="w-4/5 md:w-6/12">
                        <div className="flex gap-4 flex-col justify-center md:items-center min-w-full items-center self-center">
                            {questions.map((question, index) => (
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