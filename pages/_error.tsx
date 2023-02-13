import React from "react"
import Image from "next/image"

import logo from "@/assets/logo.svg"
import Link from "next/link"

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen h-full w-full text-white montserrat">
            <p className="text-2xl font-semibold">Not found</p>
            <p className="text-xl font-medium">404</p>

            <Link href={"/"} className="absolute top-0 mt-4">
                <Image src={logo} alt="inteliblockchain" height={24} />
            </Link>
        </div>
    )
}

export default Error