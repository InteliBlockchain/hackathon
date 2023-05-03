import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/Card";
import { Carousel } from "react-responsive-carousel";
import { Sponsor } from "@/components/Sponsor";
import { Modal } from "@/components/Modal";
import { Cube } from "@/components/Cube";

import logo from "@/assets/logo.svg";
import challenge from "@/assets/Challenge 2023.svg";

import instagram from "@/assets/instagram.svg";
import linkedin from "@/assets/linkedin.svg";

import right from "@/assets/arrow-right.svg";
import arrowLeft from "@/assets/arrow-left2.svg";
import arrowRight from "@/assets/arrow-right2.svg";
import document from "@/assets/document.svg";
import calendar from "@/assets/calendar.svg";
import telegram from "@/assets/telegram.svg";

import inteli from "@/assets/sponsors/inteli.svg";
import eth_foundation from "@/assets/sponsors/eth_foundation.svg";
import blockchain_rio from "@/assets/sponsors/blockchain_rio.svg";
import ribus from "@/assets/sponsors/ribus.svg";
import mynt from "@/assets/sponsors/mynt.svg";
import cartesi from "@/assets/sponsors/cartesi.svg";
import alexiaVentures from "@/assets/sponsors/alexia-ventures.svg";
import sevenVisions from "@/assets/sponsors/7visions.svg";

import inteli1 from "@/assets/inteli.png";
import inteliblockchain from "@/assets/inteliblockchain.png";
import inteli2 from "@/assets/INTELI_COMUNICACAO_POSTS_CAMPANHA_VEST2022.2-3.jpg";
import inteli3 from "@/assets/VIDAINTELI-04.jpg";

import { useRouter } from "next/router";
import { Subscription } from "@/components/Subscription";
import { toast } from "react-toastify";
import useTimer from "@/utils/useTime";
import TimerBoxComp from "@/components/TimerBoxComp";

const Home = () => {
  const router = useRouter();

  const [sponsors] = useState([
    { link: "https://inteli.edu.br", name: "Inteli", icon: inteli },
    { link: "https://www.blockchainrio.com.br/", name: "BlockchainRio", icon: blockchain_rio },
    { link: "https://ethereum.org/en/foundation/", name: "Ethereum Foundation", icon: eth_foundation },
    { link: "https://ribus.com.br/", name: "Ribus", icon: ribus },
    { link: "https://www.mynt.com.br/", name: "Mynt", icon: mynt },
    { link: "", name: "Cartesi", icon: cartesi },
    { link: "https://www.alexia-ventures.com/", name: "Alexia Ventures", icon: alexiaVentures, blackBg: true },
    { link: "https://7visions.com.br/", name: "7Visions", icon: sevenVisions },
  ])

  const [modal, setModal] = useState(false);

  const {
    day,
    hour,
    minute,
    second,
  } = useTimer();

  {/* <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">07:30 ~ 08:00</p>
                            <p className="text-md  ml-2">{">_"} Abertura do campus</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">08:00 ~ 09:30</p>
                            <p className="text-md  ml-2">{">_"} Café da manhã</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">10:00 ~ 10:30</p>
                            <p className="text-md  ml-2">{">_"} Submissão final dos projetos às 10:30h</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">11:00 ~ 12:00</p>
                            <p className="text-md  ml-2">{">_"} Pitch parte 1</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">12:00 ~ 13:00</p>
                            <p className="text-md  ml-2">{">_"} Almoço</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">13:00 ~ 15:00</p>
                            <p className="text-md  ml-2">{">_"} Pitch parte 2</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">15:00 ~ 18:00</p>
                            <p className="text-md  ml-2">{">_"} Correção dos códigos dos projetos</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">18:30 ~ 20:00</p>
                            <p className="text-md  ml-2">{">_"} Cerimônia de encerramento</p>
                          </div>
                        </li> */}

  const [cronogram] = useState([
    {
      date: "03/05",
      time: "17:30 ~ 18:30",
      title: "Mynt"
    },
    {
      date: "03/05",
      time: "19:00 ~ 20:00",
      title: "Titanium Asset"
    },
    {
      date: "03/05",
      time: "20:00 ~ 20:30",
      title: "ETH Foundation"
    },
    {
      date: "03/05",
      time: "20:30 ~ 21:30",
      title: "Cartesi"
    },
    {
      date: "04/05",
      time: "17:30 ~ 18:30",
      title: "7Visions"
    },
    {
      date: "04/05",
      time: "19:00 ~ 20:00",
      title: "Hathor"
    },
    {
      date: "05/05",
      time: "16:30 ~ 18:30",
      title: "Credenciamento"
    },
    {
      date: "05/05",
      time: "18:30 ~ 20:30",
      title: "Abertura do evento"
    },
    {
      date: "05/05",
      time: "20:30 ~ 21:30",
      title: "Jantar"
    },
    {
      date: "05/05",
      time: "21:30 ~ 22:00",
      title: "Fechamento do campus"
    },
    {
      date: "06/05",
      time: "07:30 ~ 08:00",
      title: "Abertura do campus"
    },
    {
      date: "06/05",
      time: "08:00 ~ 09:30",
      title: "Café da manhã"
    },
    {
      date: "06/05",
      time: "12:00 ~ 13:30",
      title: "Almoço"
    },
    {
      date: "06/05",
      time: "20:00 ~ 21:00",
      title: "Jantar"
    },
    {
      date: "06/05",
      time: "21:30 ~ 22:00",
      title: "Fechamento do campus"
    },
    {
      date: "07/05",
      time: "07:30 ~ 08:00",
      title: "Abertura do campus"
    },
    {
      date: "07/05",
      time: "08:00 ~ 09:30",
      title: "Café da manhã"
    },
    {
      date: "07/05",
      time: "10:00 ~ 10:30",
      title: "Submissão final dos projetos às 10:30h"
    },
    {
      date: "07/05",
      time: "11:00 ~ 12:00",
      title: "Pitch parte 1"
    },
    {
      date: "07/05",
      time: "12:00 ~ 13:00",
      title: "Almoço"
    },
    {
      date: "07/05",
      time: "13:00 ~ 15:00",
      title: "Pitch parte 2"
    },
    {
      date: "07/05",
      time: "15:00 ~ 18:00",
      title: "Correção dos códigos dos projetos"
    },
    {
      date: "07/05",
      time: "18:30 ~ 20:00",
      title: "Cerimônia de encerramento"
    }
  ])

  return (
    <Layout modal={modal}>
      {modal && process.env.NEXT_PUBLIC_ALLOW_SUBSCRIPTIONS ? (
        <Modal setModal={setModal} />
      ) : null}

      <div className="flex flex-col items-center justify-center bg1 md:bg-black bg-center bg-cover pt-24 h-auto w-full mx-auto z-50 px-2">
        <Link href={"https://blockchain.inteli.edu.br/"} target="_blank">
          <Image src={logo} alt="inteli-blockchain" />
        </Link>

        <div className="relative flex w-full h-64 md:h-80 items-center justify-center">
          <div className="absolute h-80 md:h-96 left-auto right-auto">
            {/* <Cube /> */}
          </div>
          <div className="my-16 md:h-32 lg:h-40 absolute">
            <Image
              src={challenge}
              alt="Challenge 2023"
              className="z-100 w-full h-full left-auto right-auto"
            />
          </div>
        </div>

        <Subscription setModal={setModal} />

        {/* <div className="w-full md:w-2/5 pb-8 mb-4">
          <p className="text-2xl">Inscrições acabam em</p>

          <div className="grid grid-cols-2 auto-rows-max gap-8 md:grid-cols-4">
            <TimerBoxComp value={day} label="days" />
            <TimerBoxComp value={hour} label="hours" />
            <TimerBoxComp value={minute} label="minutes" />
            <TimerBoxComp value={second} label="seconds" />
          </div>
        </div> */}
      </div>

      {/* carousel */}
      <div className="flex h-auto items-center justify-center mx-auto border-border-red-500 py-8 pt-2 px-6 desktop:bg-black bg-[#0e0e10]">
        {/* <div className="flex">
					<Image className="ml-2" alt="arrow" src={arrowLeft}></Image>
				</div> */}
        <Carousel
          className="w-full md:w-2/5 border-2 border-purple1 rounded"
          autoPlay={true}
          showArrows={true}
          showThumbs={true}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          interval={3000}
          transitionTime={800}
          dynamicHeight={false}
        >
          <div>
            <Image
              className="p-8 rounded"
              src={inteliblockchain}
              alt="Inteli Blockchain"
            />
            <div className=" flex flex-col px-8">
              <p className="text-2xl font-semibold text-left">Premiações</p>
              <p className="text-left text-sm">
                O Challenge2023 traz um conceito diferente: As categorias. As
                empresas parceiras do evento trarão diversos temas diferentes de
                projeto, cada um com sua premiação. Fique de olho nas redes
                sociais para saber mais sobre as categorias e os prêmios.
              </p>
            </div>
          </div>

          <div>
            <Image className="p-8 rounded" src={inteli1} alt="" />
            <div className=" flex flex-col px-8">
              <p className=" text-2xl font-semibold text-left">
                Infraestrutura
              </p>
              <p className="text-left text-sm">
                O Hackathon será realizado no Instituto de Tecnologia e
                Inteligência (Inteli), localizado no Centro de São Paulo, com
                acesso fácil a transporte público e estacionamento. O local
                conta com uma estrutura completa para receber os participantes,
                com salas de aula, laboratórios, auditório, cantina,
                estacionamento e muito mais.
              </p>
            </div>
          </div>
          <div>
            <Image className="p-8 rounded" src={inteli2} alt="" />
            <div className=" flex flex-col px-8">
              <p className=" text-2xl font-semibold text-left">Educacional</p>
              <p className="text-left text-sm">
                Ainda não está sabendo tudo de Blockchain? Não se preocupe! Você
                tem acesso à diversos links e materiais de estudo para que você
                possa se preparar para o evento. No discord, você pode trocar
                ideias com outros participantes e tirar suas dúvidas.
              </p>
            </div>
          </div>
          <div>
            <Image className="p-8 rounded" src={inteli3} alt="" />
            <div className=" flex flex-col px-8">
              <p className=" text-2xl font-semibold text-left">Mentoria</p>
              <p className="text-left text-sm">
                Com todo projeto aparecem dúvidas e dificuldades. Para te
                ajudar, contaremos com profissionais e professores de diversas
                áreas para que estarão disponiveis para tirar suas dúvidas e te
                ajudar a desenvolver sua solução.
              </p>
            </div>
          </div>
        </Carousel>
      </div>

      {/* Empurraozinho */}
      <div className="flex flex-col items-center justify-center bg2 pt-10 pb-24 h-auto w-full mx-auto px-2">
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <p
              className="text-4xl text-center font-semibold mb-2"
              id="empurrao"
            >
              Informações importantes
            </p>
            <p className="text-md text-gray-300 text-center" id="empurrao">
              Aqui você pode encontrar o regulamento com regras importantes sobre a competição!
            </p>
          </div>

          <div className="flex flex-col my-4 items-center">

            <button
              className="text-md flex justify-center items-center border-2 border-[#4863F7] rounded-lg p-2"
              onClick={() => router.push('/regulamento.pdf')}
            >
              <Image
                className={"mr-4"}
                src={document}
                alt={"document"}
                width={24}
              />
              Veja o regulamento
            </button>
          </div>

          <div className="flex flex-col items-center my-8">
            <p className="text-md text-gray-300 text-center" id="empurrao">
              Aqui você pode encontrar o cronograma com as datas importantes sobre a competição!
            </p>

            <div className="w-full flex flex-col">
              <div className="w-full">
                <p className="text-center text-3xl mt-4 mb-2 font-semibold">Workshops Online</p>

                <div className="flex lg:flex-row flex-col w-full justify-evenly">
                  <div className="border-2 border-white rounded-lg py-2 lg:w-5/12 mb-4 lg:mb-0">
                    <div className="border-b-2 border-white px-2 text-center flex justify-center items-center">
                      <p className="text-lg font-semibold">3 de Maio</p>
                    </div>

                    <div className="px-2 mt-2">
                      <ul className="w-full">
                        {/* <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">17:30 ~ 18:30</p>
                            <p className="text-md  ml-2">{">_"} Mynt</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">19:00 ~ 20:00</p>
                            <p className="text-md  ml-2">{">_"} Titanium Asset</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">20:00 ~ 20:30</p>
                            <p className="text-md  ml-2">{">_"} ETH Foundation</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">20:30 ~ 21:30</p>
                            <p className="text-md  ml-2">{">_"} Cartesi</p>
                          </div>
                        </li> */}
                        {cronogram.filter((item) => item.date === "03/05").map((item) => (
                          <li>
                            <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                              <p className="text-md font-semibold">{item.time}</p>
                              <p className="text-md  ml-2">{">_"} {item.title}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-2 border-white rounded-lg py-2 lg:w-5/12 mb-4 lg:mb-0">
                    <div className="border-b-2 border-white px-2 text-center flex justify-center items-center">
                      <p className="text-lg font-semibold">4 de Maio</p>
                    </div>

                    <div className="px-2 mt-2">
                      <ul className="w-full">
                        {/* <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">17:30 ~ 18:30</p>
                            <p className="text-md  ml-2">{">_"} 7Visions</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">19:00 ~ 20:00</p>
                            <p className="text-md  ml-2">{">_"} Hathor</p>
                          </div>
                        </li> */}
                        {cronogram.filter((item) => item.date === "04/05").map((item) => (
                          <li>
                            <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                              <p className="text-md font-semibold">{item.time}</p>
                              <p className="text-md  ml-2">{">_"} {item.title}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              <div className="w-full">
                <p className="text-center text-3xl mt-4 mb-2 font-semibold">Evento presencial</p>

                <div className="flex lg:flex-row flex-col w-full justify-around">
                  <div className="border-2 border-white rounded-lg py-2 lg:w-[30%] mb-4 lg:mb-0">
                    <div className="border-b-2 border-white px-2 text-center flex justify-center items-center">
                      <p className="text-lg font-semibold">5 de Maio</p>
                    </div>

                    <div className="px-2 mt-2">
                      <ul className="w-full">
                        {/* <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">16:30 ~ 18:30</p>
                            <p className="text-md  ml-2">{">_"} Credenciamento</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">18:30 ~ 20:30</p>
                            <p className="text-md  ml-2">{">_"} Abertura do evento</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">20:30 ~ 21:30</p>
                            <p className="text-md  ml-2">{">_"} Jantar</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">21:30 ~ 22:00</p>
                            <p className="text-md  ml-2">{">_"} Fechamento do campus</p>
                          </div>
                        </li> */}
                        {cronogram.filter((item) => item.date === "05/05").map((item) => (
                          <li>
                            <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                              <p className="text-md font-semibold">{item.time}</p>
                              <p className="text-md  ml-2">{">_"} {item.title}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-2 border-white rounded-lg py-2 lg:w-[30%] mb-4 lg:mb-0">
                    <div className="border-b-2 border-white px-2 text-center flex justify-center items-center">
                      <p className="text-lg font-semibold">6 de Maio</p>
                    </div>

                    <div className="px-2 mt-2">
                      <ul className="w-full">
                        {/* <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">07:30 ~ 08:00</p>
                            <p className="text-md  ml-2">{">_"} Abertura do campus</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">08:00 ~ 09:30</p>
                            <p className="text-md  ml-2">{">_"} Café da manhã</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">12:00 ~ 13:30</p>
                            <p className="text-md  ml-2">{">_"} Almoço</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">20:00 ~ 21:00</p>
                            <p className="text-md  ml-2">{">_"} Jantar</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">21:30 ~ 22:00</p>
                            <p className="text-md  ml-2">{">_"} Fechamento do campus</p>
                          </div>
                        </li> */}
                        {cronogram.filter((item) => item.date === "06/05").map((item) => (
                          <li>
                            <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                              <p className="text-md font-semibold">{item.time}</p>
                              <p className="text-md  ml-2">{">_"} {item.title}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-2 border-white rounded-lg py-2 lg:w-[30%] mb-4 lg:mb-0">
                    <div className="border-b-2 border-white px-2 text-center flex justify-center items-center">
                      <p className="text-lg font-semibold">7 de Maio</p>
                    </div>

                    <div className="px-2 mt-2">
                      <ul className="w-full">
                        {/* <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">07:30 ~ 08:00</p>
                            <p className="text-md  ml-2">{">_"} Abertura do campus</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">08:00 ~ 09:30</p>
                            <p className="text-md  ml-2">{">_"} Café da manhã</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">10:00 ~ 10:30</p>
                            <p className="text-md  ml-2">{">_"} Submissão final dos projetos às 10:30h</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">11:00 ~ 12:00</p>
                            <p className="text-md  ml-2">{">_"} Pitch parte 1</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">12:00 ~ 13:00</p>
                            <p className="text-md  ml-2">{">_"} Almoço</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">13:00 ~ 15:00</p>
                            <p className="text-md  ml-2">{">_"} Pitch parte 2</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">15:00 ~ 18:00</p>
                            <p className="text-md  ml-2">{">_"} Correção dos códigos dos projetos</p>
                          </div>
                        </li>
                        <li>
                          <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                            <p className="text-md font-semibold">18:30 ~ 20:00</p>
                            <p className="text-md  ml-2">{">_"} Cerimônia de encerramento</p>
                          </div>
                        </li> */}
                        {cronogram.filter((item) => item.date === "07/05").map((item) => (
                          <li>
                            <div className="mt-2 transition-all hover:ml-2 hover:text-green-400">
                              <p className="text-md font-semibold">{item.time}</p>
                              <p className="text-md  ml-2">{">_"} {item.title}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col my-4 items-center">
            <p className="flex text-center text-lg mb-4 font-semibold">
              Acompanhe as atualizações pelas redes sociais:
            </p>

            <div className="flex w-full justify-evenly">
              <Link
                className="text-md flex justify-center items-center p-[1.25px] bg-gradient-to-r from-[#F78D35] to-[#B832A6] rounded-lg"
                href="https://www.instagram.com/inteli_blockchain/"
                target={"_blank"}
              >
                <div className="text-md flex justify-center items-center p-3 rounded-lg bg-gray-900">
                  <Image
                    className={"mr-4"}
                    src={instagram}
                    width={32}
                    alt={"telegram"}
                  />{" "}
                  Instagram
                </div>
              </Link>

              <Link
                className="text-md flex justify-center items-center border-2 p-3 border-[#0077B7] rounded-lg"
                href="https://www.linkedin.com/company/inteli-blockchain/"
                target={"_blank"}
              >
                <Image
                  className={"mr-4"}
                  src={linkedin}
                  width={32}
                  alt={"telegram"}
                />{" "}
                Linkedin
              </Link>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div className="w-4/5 md:w-2/5 mt-8">
          <div className="flex flex-col items-center w-full mb-8">
            <p className="text-xl font-semibold">Apoio:</p>
            <div className="w-full flex flex-col md:gap-4 md:grid md:grid-cols-2">
              {/* map the sponsor in a way they appear in a random order */}
              {sponsors.map(({ name, link, icon }, index) => (
                <Sponsor name={name} icon={icon} link={link} key={index} />
              ))}
              {/* <p className="text-center text-grayText text-2xl mt-8">Em breve...</p> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
