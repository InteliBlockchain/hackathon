import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/Layout"

import logo from "@/assets/logo.svg"
import challenge from "@/assets/Challenge 2023.svg"

const Subscription = () => {
	const router = useRouter();

	return (
        <>
			<Layout>
				<div className="flex flex-col items-center justify-center bg1 md:bg-black bg-center bg-cover pt-16 pb-6 h-auto w-full mx-auto">
					<Link href={"https://inteliblockchain.co/"} target="_blank">
						<Image src={logo} alt="inteli-blockchain" />
					</Link>

					<div className="mt-10 mb-10 md:h-32 lg:h-40">
						<Image src={challenge} alt="Challenge 2023" className="w-full h-full" />
					</div>

					<div className="w-full text-center flex flex-col">
						<label className="text-sm font-semibold text-grayText">Você está se inscrevendo com o email:</label>
						<label className="text-xs mt-2 font-normal text-white">Pedro.Baptista@sou.inteli.edu.br</label>
					</div>

					<div className="w-full mt-8 text-center">
						<div>
							<label className="font-thin text-sm text-blueText mr-2">*</label>
							<label className="font-thin text-sm text-blueText">dados obrigatórios</label>
						</div>
					</div>

					<div className="w-full mt-4 text-center">
						<div>
							<label className="font-semibold text-2xl text-white">Dados pessoais</label>
						</div>
					</div>
				</div>
				<div className="w-full">
					<div className="flex flex-row justify-center w-full gap-5">
						<div className="w-2/6">
							<div className="flex justify-center items-center min-w-full">
								<div className="flex flex-col">
									<label className="ml-1 font-normal text-sm text-white">Primeiro nome<label className="font-normal text-sm text-blueText">*</label></label>
									<input className="w-full h-10 rounded-lg border-2 border-blue bg-[#0e0e10] outline-0 font-extralight"></input>
								</div>
							</div>
						</div>
						
						<div className="w-auto">
							<div className="flex justify-center items-center min-w-full">
								<div className="flex flex-col w-full">
									<label className="ml-1 font-normal text-sm text-white">Sobrenome<label className="font-normal text-sm text-blueText">*</label></label>
									<input className="w-full h-10 rounded-lg border-2 border-blue bg-[#0e0e10] outline-0 font-extralight"></input>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div className="w-full mt-6">
					<div className="flex flex-row justify-center items-center w-full gap-3">
						<div>
							<select className="w-14 h-10 rounded-lg border-2 border-blue bg-[#0e0e10] outline-0 font-extralight">
								<option>RG</option>
								<option>CPF</option>
							</select>
						</div>

						<div>
							<div className="flex flex-col justify-center pb-5">
								<label className="ml-1 font-normal text-sm text-white">Documento<label className="font-normal text-sm text-blueText">*</label></label>
								<input placeholder="___.___.___-__" className="w-40 h-10 rounded-lg border-2 border-blue bg-[#0e0e10] outline-0 font-extralight placeholder:text-center placeholder:text-xl placeholder:text-white"></input>
							</div>
							
						</div>
					</div>
				</div>
				<div className="w-full mt-2">
					<div className="flex justify-center items-center w-min-full">
						<div className="flex flex-col w-10/12 bg-[#4863F7] bg-opacity-10 items-center rounded-xl">
							<div className="mt-1">
								<label className="font-bold text-lg">ATENÇÃO!</label>
							</div>
							<div className="text-center">
								<label className="font-ligth text-xs text-[#8F8F8F]">Para o credenciamento, será obrigatória a apresentação de documento <b>COM FOTO</b> que <b>CONTENHA O NÚMERO ACIMA</b> no dia do evento.
</label>
							</div>
							<div className="mt-3 text-center">
								<label className="font-ligth text-xs text-[#8F8F8F]">Os dados acima serão utilizados única e exclusivamente para o credenciamento.</label>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full mt-8">
					<div className="flex flex-row justify-center min-w-11/12 gap-5">
						<div className="w-2/6">
							<div className="flex justify-center items-center min-w-full">
								<div className="flex flex-col">
									<label className="ml-1 font-normal text-xs text-white">De onde você é?<label className="font-normal text-sm text-blueText">*</label></label>
									<input className="w-full h-10 rounded-lg border-2 border-blue bg-[#0e0e10] outline-0 font-extralight"></input>
								</div>
							</div>
						</div>
						
						<div className="w-auto">
							<div className="flex justify-center items-center min-w-full">
								<div className="flex flex-col w-full">
									<label className="ml-1 font-extrathin text-xxs text-white">Caso seja estudante, onde estuda<label className="font-normal text-sm text-blueText">*</label></label>
									<input className="w-full h-10 rounded-lg border-2 border-blue bg-[#0e0e10] outline-0 font-extralight"></input>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full mt-4">
					<div className="flex flex-row justify-center w-full">
						<div className="flex flex-col justify-center w-11/12">
							<label className="ml-1 font-normal text-xs text-white">Tem alguma necessidade especial?<label className="font-normal text-sm text-blueText">*</label></label>
							<input className="w-full h-10 rounded-lg border-2 border-blue bg-[#0e0e10] outline-0 font-extralight"></input>
						</div>
						
					</div>

				</div>
				<div className="w-full mt-12">
					<div className="flex flex-col items-center">
						<h1 className="text-3xl">Contato</h1>
						<label className="mt-3 font-semibold text-xs text-white">Telefone (DDD + Número)<label className="font-normal text-sm text-blueText">*</label></label>
						<input placeholder="(__) _____-____" className="w-3/6 h-10 rounded-lg border-2 border-blue bg-[#0e0e10] outline-0 font-extralight placeholder:text-center placeholder:text-xl placeholder:text-white"></input>
					</div>
				</div>
				<div className="w-full mt-2 mb-6">
					<div className="flex justify-center items-center w-min-full">
						<div className="flex flex-col w-10/12 bg-[#4863F7] bg-opacity-10 items-center rounded-xl">
							<div className="mt-1">
								<label className="text-xs">Seu Discord (com apelido e números)<label className="font-normal text-sm text-blueText">*</label></label>
								<div className="w-full">
									<input placeholder="nickname#1234" className="pl-2 w-full h-10 rounded-lg border-2 border-blue bg-[#0e0e10] outline-0 font-extralight placeholder:text-lg placeholder:text-white"></input>
								</div>
							</div>
							<div className="text-center mt-2">
								<label className="font-ligth text-xs text-[#8F8F8F]">O Discord será o principal meio de comunicação antes e durante o evento. Lá, você pode acessar conteúdos educacionais, conversar com os patrocinadores, se conectar com outros participantes e formar seu grupo!</label>
							</div>
							<div className="mt-4">
								<label className="font-ligth text-xs text-[#8F8F8F]">Ainda não tem uma conta? <a href="https://discord.com/register">crie a sua aqui</a></label>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="w-full">
					<div className="flex flex-row items-center justify-center">
						<div className="flex flex-col">
							<div className="">
								<label className="font-normal text-sm text-white">Primeiro nome</label>
								<label className="font-normal text-sm text-blueText">*</label>
							</div>
							<input className="w-4/5"></input>
						</div>
						<div className="flex flex-col">
							<div className="flex flex-row">
								<label className="font-normal text-sm text-white">Primeiro nome</label>
								<label className="font-normal text-sm text-blueText">*</label>
							</div>
							<input className="w-4/5"></input>
						</div>
					</div>
				</div> */}
				
				
			</Layout>
		</>
	)
}

export default Subscription;