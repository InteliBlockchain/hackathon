import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/Layout"
import { Card } from "@/components/Card"
import { Carousel } from "react-responsive-carousel";
import { Sponsor } from "@/components/Sponsor";
import { Modal } from "@/components/Modal";

import logo from "@/assets/logo.svg"
import challenge from "@/assets/Challenge 2023.svg"

import instagram from "@/assets/instagram.svg"
import linkedin from "@/assets/linkedin.svg"

import right from '@/assets/arrow-right.svg'
import arrowLeft from '@/assets/arrow-left2.svg'
import arrowRight from '@/assets/arrow-right2.svg'
import document from '@/assets/document.svg'
import telegram from "@/assets/telegram.svg"

import inteli from "@/assets/sponsors/inteli.svg"
import eth_foundation from "@/assets/sponsors/eth_foundation.svg"
import blockchain_rio from "@/assets/sponsors/blockchain_rio.svg"

import { useRouter } from "next/router";
import { Subscription } from "@/components/Subscription";

const Home = () => {
	const router = useRouter();

	const [sponsors] = useState([
		{ link: "https://inteli.edu.br", name: "Inteli", icon: inteli },
		{ link: "https://ethereum.org/en/foundation/", name: "Ethereum Foundation", icon: eth_foundation },
        { link: "https://www.blockchainrio.com.br/", name: "BlockchainRio", icon: blockchain_rio }
	])

	const [ modal, setModal ] = useState(true)

	const inteli1 = "https://imgur.com/dsBSU0e.png"

	return (
            <Layout modal={modal}>
		    { modal ? <Modal setModal={setModal} /> : null }

			{/* <div className="flex flex-col items-center justify-center bg1 bg-fixed bg-center bg-cover py-16 h-auto w-full mx-auto md:w-2/5"> */}
			<div className="flex flex-col items-center justify-center bg1 md:bg-black bg-center bg-cover py-32 h-auto w-full mx-auto">
				<Link href={"https://inteliblockchain.co/"} target="_blank">
					<Image src={logo} alt="inteli-blockchain" />
				</Link>

				<div className="my-16 md:h-32 lg:h-40">
					<Image src={challenge} alt="Challenge 2023" className="w-full h-full" />
				</div>

				<Subscription setModal={setModal} />
			</div>


			{/* carousel */}
			<div className="grid grid-cols-10 h-auto">
        <div className="flex">
          <Image className="ml-2" alt="arrow" src={arrowLeft}></Image>
        </div>
        <Carousel className="col-span-8" autoPlay={true} showArrows={false} showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop={true} interval={3000} transitionTime={800} dynamicHeight={false}>
          <div className="border-2 border-purple1 mx-2 rounded">
            <img src={inteli1} alt="" />
            <div className="bg-gray-900">
              <p className=" text-2xl font-semibold text-left ml-2 pt-2">Infraestrutura</p>
              <p className="text-left text-sm p-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam, delectus nulla fuga pariatur consequatur! Molestias ut rerum dignissimos quibusdam consectetur cupiditate, maiores nemo nulla similique, voluptates fugit culpa porro!</p>
            </div>
          </div>
          <div className="border-2 border-purple1 mx-2 rounded">
            <img src={inteli1} alt="" className="rotate-180" />
            <div className="bg-gray-900">
              <p className=" text-2xl font-semibold text-left ml-2 pt-2">Prêmios</p>
              <p className="text-left text-sm p-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam, delectus nulla fuga pariatur consequatur! Molestias ut rerum dignissimos quibusdam consectetur cupiditate, maiores nemo nulla similique, voluptates fugit culpa porro!</p>
            </div>
          </div>
          <div className="border-2 border-purple1 mx-2 rounded">
            <img src={inteli1} alt="" />
            <div className="bg-gray-900">
              <p className=" text-2xl font-semibold text-left ml-2 pt-2">Mentores</p>
              <p className="text-left text-sm p-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam, delectus nulla fuga pariatur consequatur! Molestias ut rerum dignissimos quibusdam consectetur cupiditate, maiores nemo nulla similique, voluptates fugit culpa porro!</p>
            </div>
          </div>
          <div className="border-2 border-purple1 mx-2 rounded">
            <img src={inteli1} alt="" className="rotate-180" />
            <div className="bg-gray-900">
              <p className=" text-2xl font-semibold text-left ml-2 pt-2">Festas</p>
              <p className="text-left text-sm p-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam, delectus nulla fuga pariatur consequatur! Molestias ut rerum dignissimos quibusdam consectetur cupiditate, maiores nemo nulla similique, voluptates fugit culpa porro!</p>
            </div>
          </div>
        </Carousel>
        <div className="flex">
          <Image className="ml-2" alt="arrow" src={arrowRight}></Image>
        </div>
      </div>

			{/* Empurraozinho */}
			{/* <div className="flex flex-col items-center justify-center bg2 bg-center bg-cover pt-16 pb-24 h-auto w-full mx-auto">
        <div className="w-4/5 md:w-3/5 flex flex-col items-center justify-center"> */}
			<div className="flex flex-col items-center justify-center bg2 bg-center bg-cover pt-10 pb-24 h-auto w-full mx-auto ">
				<div className="w-4/5 flex flex-col items-center justify-center">
					<div className="flex flex-col items-center">
						<p className="text-2xl text-center font-semibold mb-2" id="empurrao">Precisa de um empurrãozinho?</p>
						<p className="text-md text-gray-300 text-center" id="empurrao">Aqui você pode conhecer todas as tecnologias que serão necessárias para se sair bem no hackathon!</p>
					</div>

					<div className="flex flex-col my-4 items-center">
						<button className="items-center justify-center font-semibold text-lg mb-4 py-4 px-8 rounded-md flex bg-[#04d361] text-[#f1f1f1]">Acessar conteúdo <Image alt="content" width={24} src={right} className={"ml-2"} /></button>

						<button className="text-md flex justify-center items-center border-2 border-[#4863F7] rounded-lg p-2"><Image className={"mr-4"} src={document} alt={"document"} width={24} />Veja o regulamento</button>
					</div>

					<div className="flex flex-col my-4 items-center">
						<p className="flex text-center text-lg mb-4 font-semibold">Acompanhe as atualizações pelas redes sociais:</p>

						<div className="flex w-full justify-evenly">
							<Link className="text-md flex justify-center items-center p-[1.25px] bg-gradient-to-r from-[#F78D35] to-[#B832A6] rounded-lg" href="https://www.instagram.com/inteli_blockchain/" target={"_blank"}>
								<div className="text-md flex justify-center items-center p-3 rounded-lg bg-gray-900">
									<Image className={"mr-4"} src={instagram} width={32} alt={"telegram"} /> Instagram
								</div>
							</Link>

							<Link className="text-md flex justify-center items-center border-2 p-3 border-[#0077B7] rounded-lg" href="https://www.linkedin.com/company/inteli-blockchain/" target={"_blank"}><Image className={"mr-4"} src={linkedin} width={32} alt={"telegram"} /> Linkedin</Link>
						</div>
					</div>
				</div>

				{/* Sponsors */}
				<div className="w-4/5 md:w-2/5 mt-8">
					<div className="flex flex-col items-center w-full mb-8">
						<p className="text-xl font-semibold">Apoio:</p>
                        <div className="w-full flex flex-col md:gap-4 md:grid-cols-2 md:grid">
							{sponsors.map(({ name, link, icon }, index) =>
                                <Sponsor name={name} icon={icon} link={link} key={index} />
                            )}
						</div>
					</div>
				</div>
			</div>

		</Layout>
	)
}

export default Home;