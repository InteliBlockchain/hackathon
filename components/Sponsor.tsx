import Image from "next/image";
import Link from "next/link";

export const Sponsor = ({ name, icon, link }: {
    link: string;
    name: string;
    icon: string;
}) => {
    return (
        <div className="border border-gray rounded-lg w-full mt-4 bg-[rgba(0,0,0,0.25)]">
            <Link className="p-4 w-full flex items-center" target={"_blank"} href={link}>
                <Image alt={name} src={icon} className={"mx-auto"} />
            </Link>
        </div>
    )
}
