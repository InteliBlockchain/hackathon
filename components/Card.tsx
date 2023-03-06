import React, { ReactElement } from "react"
import Image, { StaticImageData } from "next/image"

export const Card = ({ title, image, desc }: {
    image: string | StaticImageData,
    title: string,
    desc: ReactElement | string
}) => {
    return (
        <div className="border-2 border-[#575757] rounded-lg carousel-slide h-full w-full md:w-auto flex-shrink-0 transition-all duration-500 ease-in-out transform">
            <Image src={image} alt={title} className="w-full" height={64} />

            <div className="bg-[#1d1d1d] py-4 px-2">
                <p className="text-xl font-medium mb-2">{title}</p>

                <p className="text-sm">{desc}</p>
            </div>
        </div>
    )
}