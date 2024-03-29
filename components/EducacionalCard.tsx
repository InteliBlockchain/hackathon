import { type } from "os"
import { useEffect, useState } from "react"
import Link from "next/link"

type Props = {
    title: string,
    text: string,
    type: string,
    level: number,
    link: string,
    important?: boolean
}

const EducacionalCard = ({ title, text, level, type, important, link }: Props) => {

    const [levelText, setLevelText] = useState("")
    const [levelStyle, setLevelStyle] = useState("")

    useEffect(() => {

        switch (level) {
            case 1:
                setLevelText("Básico")
                setLevelStyle("text-green-500")
                break
            case 2:
                setLevelText("Intermediário")
                setLevelStyle("text-yellow-500")
                break
            case 3:
                setLevelText("Avançado")
                setLevelStyle("text-red-500")
                break
        }
    }, [])
    return (
        <div className="p-2 border-2 flex flex-col shadow-purple1 shadow rounded-lg border-purple1 w-full md:w-4/5 h-auto items-center justify-between">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <p className="p-3 font-medium text-xl">{title}</p>
                <p className="text-sm p-2">{text}</p>
                <div className="flex w-full justify-around p-2">
                    <p className="text-[#c4c4c4]">{type}</p>
                    {important ? <p className="text-red-500">Importante</p> : null}
                    <p className={levelStyle}>{levelText}</p>
                </div>
            </div>

            <div className="text-center p-2 h-12 hover:text-black transition-all text-purple1 hover:bg-purple1 rounded-lg border-t-2 border-purple1 w-full">
                <Link href={link}>
                    <p className="text-lg"> Acessar</p>
                </Link>
            </div>
        </div>
    )
}

export default EducacionalCard