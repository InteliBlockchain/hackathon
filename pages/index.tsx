import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/Layout"
import { Card } from "@/components/Card"
import { Carousel } from '@/components/Carousel'
import { Sponsor } from "@/components/Sponsor";

import logo from "@/assets/logo.svg"
import challenge from "@/assets/Challenge 2023.svg"
import one from "@/assets/inteli 1.png"
import two from "@/assets/cards/2.png"
import three from "@/assets/cards/3.png"
import right from '@/assets/arrow-right.svg'
import document from '@/assets/document.svg'
import telegram from "@/assets/telegram.svg"
import inteli from "@/assets/sponsors/inteli.svg"
import eth_foundation from "@/assets/sponsors/eth_foundation.svg"

import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  // contadores de tempo até inscrição
  const [daysLeft, setDaysLeft] = useState(0)
  const [hoursLeft, setHoursLeft] = useState(0)
  const [minutesLeft, setMinutesLeft] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(0)

  useEffect(()=>{

    // calcula a quantidade de tempo até a inscrição abrir e coloca no lugar do botão
    setInterval(()=>{
      const openingDate = Math.floor(new Date('2023-03-17T18:00:00').getTime() / 1000)
      const currentDate = Math.floor(new Date().getTime() / 1000)
      const timeDiference = openingDate - currentDate
      setDaysLeft(Math.floor(timeDiference / (3600*24)))
      setHoursLeft(Math.floor(timeDiference % (3600*24) / 3600) - 2)
      setMinutesLeft(Math.floor(timeDiference % 3600 / 60))
      let seconds = timeDiference - (daysLeft*3600*24)- (hoursLeft * 3600) - (minutesLeft * 60)
      setSecondsLeft(timeDiference % 60)
    }, 1000)

  }, [])

  const [sponsors, setSponsors] = useState([
    { link: "https://inteli.edu.br", name: "Inteli", icon: inteli },
    { link: "https://ethereum.org/en/foundation/", name: "Ethereum Foundation", icon: eth_foundation }
  ])

  const inteli1 = "https://imgur.com/dsBSU0e.png"

  return (
    <Layout>
      {/* <div className="flex flex-col items-center justify-center bg1 bg-fixed bg-center bg-cover py-16 h-auto w-full mx-auto md:w-2/5"> */}
      <div className="flex flex-col items-center justify-center bg1 md:bg-black bg-center bg-cover pt-48 pb-48 h-auto w-full mx-auto">
        <Link href={"https://inteliblockchain.co/"} target="_blank">
          <Image src={logo} alt="inteli-blockchain" />
        </Link>

        <div className="my-10">
          <Image src={challenge} alt="Challenge 2023" className="w-full" />
        </div>

        <div>
          <p className="text-gray1 text-2xl font-bold">5-7 de Maio</p>
        </div>
        <div>
          <p className="text-gray1 text-lg font-medium">Inscrições: 17.03.2023</p>
        </div>

        <p className="mt-8 mb-2 text-gray1 italic ">Faltam</p>
        <div className="">
          <button className="px-4 py-2 text-[#4863F7] text-xs border-2 border-[#4863F7] rounded-lg font-medium" onClick={() => router.push("/preinscricao")
          }>{`${daysLeft || "?"} dias, ${hoursLeft || "?"} horas, ${minutesLeft || "?"} minutos e ${secondsLeft || "?"} segundos`}</button>
        </div>
        <p className="mt-2 text-gray1 italic">Para o início das inscrições</p>
      </div>


      {/* carousel */}
      <div className="flex flex-col items-center justify-center translate-y-[-4rem] h-auto w-full mx-auto">
        <Carousel>
          <Card title={"Slide 1"} desc={`Salas de reunião, conexão Wi-Fi rápida e ambiente pensado para favorecer a inovação.\n\nO evento será no Inteli, a faculdade feita para você desenvolver uma solução do c*ralho e ganhar muito (MUITO) dinheiro dos patrocinadores.`} image={inteli1} />
          <Card title={"Slide 2"} desc={`Salas de reunião, conexão Wi-Fi rápida e ambiente pensado para favorecer a inovação.\n\nO evento será no Inteli, `} image={inteli1} />
          <Card title={"Slide 3"} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl.`} image={inteli1} />
        </Carousel>
      </div>

      {/* Empurraozinho */}
      <div className="flex flex-col items-center justify-center bg2 bg-center bg-cover pt-4 pb-24 h-auto w-full mx-auto translate-y-[-2rem]">
        <div className="w-4/5 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl text-center font-semibold mb-2">Precisa de um
              empurrãozinho?</p>
            <p className="text-md text-gray-300 text-center">Aqui você pode conhecer todas as tecnologias que serão necessárias para se sair bem no hackathon!</p>
          </div>

          <div className="flex flex-col my-4 items-center">
            <button className="items-center justify-center font-semibold text-lg mb-4 py-4 px-8 rounded-md flex bg-[#04D361]">Acessar conteúdo <Image alt="content" width={24} src={right} className={"ml-2"} /></button>

            <button className="text-md flex justify-center items-center border-2 border-[#4863F7] rounded-lg p-2"><Image className={"mr-4"} src={document} alt={"document"} width={24} />Veja o regulamento</button>
          </div>

          <div className="flex flex-col my-4 items-center">
            <p className="flex text-center text-lg mb-4 font-semibold">Acesse os grupos para não perder
              nenhuma novidade</p>

            <button className="text-md flex justify-center items-center border-2 p-3 border-[#4863F7] rounded-lg"><Image className={"mr-4"} src={telegram} width={32} alt={"telegram"} /> Entrar na comunidade do telegram</button>
          </div>
        </div>

        {/* Sponsors */}
        <div className="w-4/5">
          <div className="flex flex-col items-center w-full mb-8">
            <p className="text-xl font-semibold">Apoio:</p>
            <div className="w-full">
              {sponsors.map(({ name, link, icon }, index) => index % 2 == 0 ? <Sponsor name={name} icon={icon} link={link} key={index} /> : null)}
            </div>
          </div>

          <div className="flex flex-col items-center w-full">
            <p className="text-xl font-semibold">Patrocinadores:</p>
            <div className="w-full">
              {sponsors.map(({ name, link, icon }, index) => index % 2 != 0 ? <Sponsor name={name} icon={icon} link={link} key={index} /> : null)}
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Home;