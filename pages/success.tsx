import Link from "next/link";
import Image from "next/image";

import { Layout } from "@/components/Layout";
import logo from "@/assets/logo.svg"
import challenge from "@/assets/Challenge 2023.svg"

import right from '@/assets/arrow-right.svg'


const Success = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center bg1 md:bg-black bg-center bg-cover pt-16 pb-14 md:pb-16 h-auto w-full mx-auto">
                <Link href={"https://blockchain.inteli.edu.br/"} target="_blank">
                    <Image src={logo} alt="inteli-blockchain" />
                </Link>

                <div className="my-4 md:h-32 lg:h-40">
                    <Image src={challenge} alt="Challenge 2023" className="w-full h-full" />
                </div>
                <div className="text-center mt-10">
                    <h1 className="font-bold text-[#04D361] text-6xl italic">Quase lá!</h1>
                    <p className="text-2xl font-normal italic">Sua inscrição foi registrada</p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-4 mb-16">
                <div className="flex flex-col w-10/12 md:w-3/5 bg-[#4863F7] bg-opacity-10 px-4 items-center rounded-xl">
                    <div className="text-center mt-8">
                        <label className="font-ligth text-sm md:text-lg text-white">Fique atento ao seu email!
                            Assim que a sua inscrição for confirmada, você receberá um email com a confirmação de participação e o acesso ao Discord do evento.</label>
                    </div>
                    <div className="mt-4 mb-8 text-center">
                        <label className="font-ligth text-sm md:text-lg text-white">Caso necessário, entre em contato conosco:</label>
                        <br />
                        <Link className="block mt-2 text-lg underline" href={"/contact"}>Página de contato</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default Success;