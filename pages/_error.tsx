import React from "react"
import Image from "next/image"

import logo from "@/assets/logo.svg"
import Link from "next/link"

    import left from '@/assets/arrow-left.svg'
import { useRouter } from "next/router"

const Error = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen h-full w-full text-white montserrat">
            <p className="text-2xl font-semibold">Not found</p>
            <p className="text-xl font-medium">404</p>

            <button onClick={() => {
                router.back()
            }} className="flex items-center justify-center font-bold absolute bottom-0 mb-4 py-2 px-4 rounded-lg border-2 border-[#575757]"><Image src={left} height={16} alt={'left-arrow'} />Return</button>

            <Link href={"/"} className="absolute top-0 mt-4">
                <Image src={logo} alt="inteliblockchain" height={24} />
            </Link>
        </div>
    )
}

export default Error