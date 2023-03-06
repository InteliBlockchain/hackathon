import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/Layout"
import { Card } from "@/components/Card"
import { Carousel } from '@/components/Carousel'
import { Sponsor } from "@/components/Sponsor";

import logo from "@/assets/logo.svg"
import challenge from "@/assets/Challenge 2023.svg"
import one from "@/assets/cards/1.png"
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

  const [sponsors, setSponsors] = useState([
    { link: "https://inteli.edu.br", name: "Inteli", icon: inteli },
    { link: "https://ethereum.org/en/foundation/", name: "Ethereum Foundation", icon: eth_foundation }
  ])

  return (
    <Layout>
      {/* <div className="flex flex-col items-center justify-center bg1 bg-fixed bg-center bg-cover py-16 h-auto w-full mx-auto md:w-2/5"> */}
      <div className="flex flex-col items-center justify-center bg1 bg-fixed bg-center bg-cover pt-16 pb-24 h-auto w-full mx-auto">
        <Link href={"https://inteliblockchain.co/"} target="_blank">
          <Image src={logo} alt="inteli-blockchain" />
        </Link>

        <div className="my-16">
          <Image src={challenge} alt="Challenge 2023" className="w-full" />
        </div>

        <div>
          <p className="text-white text-md">5-7 de Maio</p>
        </div>

        <div className="mt-8">
          <button className="px-8 py-4 text-[#4863F7] border-2 border-[#4863F7] rounded-lg font-semibold" onClick={() => router.push("/preinscricao")
          }>Faça sua pré-inscrição</button>
        </div>
      </div>


      {/* carousel */}
      <div className="flex flex-col items-center justify-center translate-y-[-4rem] h-auto w-full mx-auto">
        <Carousel>
          <Card title={"Slide 1"} desc={`Salas de reunião, conexão Wi-Fi rápida e ambiente pensado para favorecer a inovação.\n\nO evento será no Inteli, a faculdade feita para você desenvolver uma solução do c*ralho e ganhar muito (MUITO) dinheiro dos patrocinadores.`} image={one} />
          <Card title={"Slide 2"} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl.`} image={two} />
          <Card title={"Slide 3"} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl.`} image={three} />
        </Carousel>
      </div>

      {/* Empurraozinho */}
      <div className="flex flex-col items-center justify-center bg2 bg-center bg-cover pt-16 pb-24 h-auto w-full mx-auto translate-y-[-2rem]">
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