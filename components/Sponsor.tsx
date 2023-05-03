import Image from "next/image";
import Link from "next/link";

export const Sponsor = ({ name, icon, link, blackBg, whiteBg }: {
    link: string;
    name: string;
    icon: string;
    blackBg?: boolean;
    whiteBg?: boolean;
}) => {
    return (
        <div className={`border border-gray rounded-lg flex items-center justify-center w-full mt-4 md:mt-2 md:p-8 ${name == "Alexia Ventures" ? "bg-black" : "bg-[rgba(0,0,0,0.25)]"} ${whiteBg ? "bg-white" : ""}`}>
            <Link className={`w-full flex items-center justify-center`} target={"_blank"} href={link}>
                <Image alt={name}  src={icon} className="w-full h-full" />
            </Link>
        </div>
    )
}
