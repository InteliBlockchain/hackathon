import Image from "next/image";
import Link from "next/link";

export const Sponsor = ({ name, icon, link }: {
    link: string;
    name: string;
    icon: string;
}) => {
    return (
        <div className="border border-gray rounded-lg flex items-center justify-center w-full mt-4 md:mt-2 py-4 bg-[rgba(0,0,0,0.25)]">
            <Link className="w-full flex items-center justify-center" target={"_blank"} href={link}>
                <Image alt={name} src={icon} />
            </Link>
        </div>
    )
}
