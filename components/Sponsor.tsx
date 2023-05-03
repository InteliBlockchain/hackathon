import Image from "next/image";
import Link from "next/link";

export const Sponsor = ({ name, icon, link, blackBg }: {
    link: string;
    name: string;
    icon: string;
    blackBg?: boolean;
}) => {
    return (
        <div className={`border border-gray rounded-lg flex items-center justify-center w-full mt-4 md:mt-2 p-6 md:p-20 ${name == "Alexia Ventures" ? "bg-black" : "bg-[rgba(0,0,0,0.25)]"}`}>
            <Link className={`w-full flex items-center justify-center px-2 ${name == "Alexia Ventures" ? "bg-black" : ""}`} target={"_blank"} href={link}>
                <Image alt={name}  src={icon} className="w-full h-full" />
            </Link>
        </div>
    )
}
