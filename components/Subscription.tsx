import { useRouter } from "next/router"
import { useEffect, useState } from "react"

//require("dotenv").config();

export const Subscription = ({ setModal }: {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const router = useRouter();

    const [daysLeft, setDaysLeft] = useState(0)
    const [hoursLeft, setHoursLeft] = useState(0)
    const [minutesLeft, setMinutesLeft] = useState(0)
    const [secondsLeft, setSecondsLeft] = useState(0)

    useEffect(() => {
        setInterval(() => {
            const openingDate = Math.floor(new Date('2023-03-21T:00:00').getTime() / 1000)
            const currentDate = Math.floor(new Date().getTime() / 1000)

            const timeLeft = openingDate - currentDate

            const days = Math.floor(timeLeft / 86400)
            const hours = Math.floor((timeLeft - (days * 86400)) / 3600)
            const minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60)
            const seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)))

            setDaysLeft(days)
            setHoursLeft(hours)
            setMinutesLeft(minutes)
            setSecondsLeft(seconds)
        }, 1000)
    }, [])

    const toggleModal = () => {
        setModal(true)
    }

    return (
        process.env.allow_subscriptions ? (
            <div className="w-full md:w-2/5 flex flex-col items-center">
                <button className="font-semibold text-xl bg-[#4863F7] rounded-lg my-2 px-8 w-3/5 py-4 text-[#f1f1f1] shadow-lg" onClick={() => toggleModal()}>
                    Inscreva-se!
                </button>
            </div>
        ) : (
            <div className="w-full md:w-2/5 mb-8 flex flex-col items-center px-4">
                <p className="text-gray1 text-3xl font-bold mb-4">5-7 de Maio</p>

                <div className="flex flex-col items-center w-full">
                    <p className="text-gray1 text-lg font-medium">Inscrições: 21.03.2023</p>

                    <p className="mt-8 text-gray1 italic text-xl font-medium">Faltam</p>

                    <button className="px-4 py-2 text-[#4863F7] text-md border-2 border-[#4863F7] rounded-lg font-medium my-2 w-full hover:bg-[#4863f7] hover:text-black  cursor-not-allowed">
                        {`${daysLeft || "0"} dias, ${hoursLeft || "0"} horas, ${minutesLeft || "0"} minutos e ${secondsLeft || "0"} segundos`}
                    </button>

                    <p className="text-gray1 text-xl italic font-medium">Para o início das inscrições!</p>
                </div>
            </div>
        )
    )
}
