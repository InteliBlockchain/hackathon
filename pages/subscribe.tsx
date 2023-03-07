import { Layout } from "@/components/Layout"
import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/logo.svg"
import challenge from "@/assets/Challenge 2023.svg"

const Subscribe = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center bg1 md:bg-black bg-center bg-cover py-24 h-auto w-full mx-auto">
                <Link href={"https://inteliblockchain.co/"} target="_blank">
                    <Image src={logo} alt="inteli-blockchain" />
                </Link>

                <div className="my-16 md:h-32 lg:h-40">
                    <Image src={challenge} alt="Challenge 2023" className="w-full h-full" />
                </div>

            </div>
        </Layout>
    )
}

export default Subscribe