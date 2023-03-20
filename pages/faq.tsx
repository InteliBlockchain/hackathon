import Link from "next/link";
import Image from "next/image";

import { Layout } from "@/components/Layout";
import logo from "@/assets/logo.svg"
import challenge from "@/assets/Challenge 2023.svg"


const Faq = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center bg1 md:bg-black bg-center bg-cover pt-16 pb-24 h-auto w-full mx-auto">
                <Link href={"https://blockahain.inteli.edu.br/"} target="_blank">
                    <Image src={logo} alt="inteli-blockchain" />
                </Link>

                <div className="my-4 md:h-32 lg:h-40">
                    <Image src={challenge} alt="Challenge 2023" className="w-full h-full" />
                </div>
                <div className="bg-[#2C2C2C] rounded w-5/6 h-12">
                    <p className="justify-center">
                        Qual o preço do ingresso?
                    </p>

                </div>
            </div>

        </Layout>
    )

}

export default Faq;