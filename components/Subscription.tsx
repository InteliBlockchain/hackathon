import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const Subscription = ({ setModal }: {
    setModal:  React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const router = useRouter();

    const [daysLeft, setDaysLeft] = useState(0)
    const [hoursLeft, setHoursLeft] = useState(0)
    const [minutesLeft, setMinutesLeft] = useState(0)
    const [secondsLeft, setSecondsLeft] = useState(0)

    useEffect(() => {
        setInterval(() => {
            const openingDate = Math.floor(new Date('2023-03-17T18:00:00').getTime() / 1000)
            const currentDate = Math.floor(new Date().getTime() / 1000)
            const timeDiference = openingDate - currentDate
            setDaysLeft(Math.floor(timeDiference / (3600 * 24)))
            setHoursLeft(Math.floor(timeDiference % (3600 * 24) / 3600) - 2)
            setMinutesLeft(Math.floor(timeDiference % 3600 / 60))
            let seconds = timeDiference - (daysLeft * 3600 * 24) - (hoursLeft * 3600) - (minutesLeft * 60)
            setSecondsLeft(timeDiference % 60)
        }, 1000)
    }, [])

    const toggleModal = () => {
        setModal(true)
        console.log("Teste")
    }

    return (
        process.env.allow_subscriptions ? (
            <div className="w-full md:w-2/5 flex flex-col items-center">
                <button className="font-semibold text-xl bg-[#4863F7] rounded-lg my-2 px-8 w-3/5 py-4 text-[#f1f1f1] shadow-lg" onClick={() => toggleModal()}>
                    Inscreva-se!
                </button>
            </div>
        ) : (
            <div className="w-full md:w-2/5 flex flex-col items-center">
                <p className="text-gray1 text-3xl font-bold mb-4">5-7 de Maio</p>

                <div className="flex flex-col items-center w-full cursor-not-allowed">
                    <p className="text-gray1 text-lg font-medium">Inscrições: 17.03.2023</p>

                    <p className="mt-8 text-gray1 italic text-xl font-medium">Faltam</p>

                    <button className="px-4 py-2 text-[#4863F7] text-xl border-2 border-[#4863F7] rounded-lg font-medium my-2 w-2/3 cursor-not-allowed hover:bg-[#4863f7] hover:text-black">
                        {`${daysLeft || "?"} dias, ${hoursLeft || "?"} horas, ${minutesLeft || "?"} minutos e ${secondsLeft || "?"} segundos`}
                    </button>

                    <p className="text-gray1 text-xl italic font-medium">Para o início das inscrições</p>
                </div>
            </div>
        )
    )
}
