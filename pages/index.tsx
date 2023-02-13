import { Layout } from "@/components/Layout"
import Image from "next/image";

import logo from "@/assets/logo.svg"
import challenge from "@/assets/Challenge 2023.svg"
import Link from "next/link";

import one from "@/assets/cards/1.svg"

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center bg1 bg-fixed bg-center bg-cover py-16 h-auto w-full mx-auto md:w-2/5">
        <Link href={"https://inteliblockchain.co/"} target="_blank">
          <Image src={logo} alt="inteli-blockchain" />
        </Link>

        <div className="my-8">
          <Image src={challenge} alt="Challenge 2023" />
        </div>

        <div>
          <p className="text-white text-md">5-7 de Maio</p>
        </div>

        <div className="mt-16">
          <button className="px-8 py-4 text-[#4863F7] border-2 border-[#4863F7] rounded-lg font-semibold">Faça sua pré-inscrição</button>
        </div>
      </div>


      {/* create a carousel */}
      <div className="flex flex-col max-w-screen items-center justify-center py-[] h-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </Layout>
  )
}

const Card = () => {
  return (
    <div className="border-2 border-[#575757] rounded-lg w-4/5">
      <Image src={one} alt="Challenge 2023" className="w-full" />

      <div className="bg-[#1d1d1d] py-4 px-2">
        <p className="text-xl font-medium mb-2">Infraestrutura</p>

        {/* <p className="text-sm">Salas de reunião, conexão Wi-Fi rápida e ambiente pensado para favorecer a inovação.<br /><br />O evento será no Inteli, a faculdade feita para você desenvolver uma solução do c*ralho e ganhar muito (MUITO) dinheiro dos patrocinadores.</p> */}
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl.
        </p>
      </div>
    </div>
  )
}

export default Home;