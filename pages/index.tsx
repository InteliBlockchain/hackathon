import { Layout } from "@/components/Layout"
import Image from "next/image";

import logo from "@/assets/logo.svg"
import challenge from "@/assets/Challenge 2023.svg"
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center bg1 bg-fixed bg-center bg-cover py-24 h-auto">
        <Link href={"https://inteliblockchain.co/"} target="_blank">
          <Image src={logo} />
        </Link>

        <div className="my-8">
          <Image src={challenge} />
        </div>

        <div>
          <p className="text-white text-md">5-7 de Maio</p>
        </div>

        <div className="mt-16">
          <button className="px-8 py-4 text-[#4863F7] border-2 border-[#4863F7] rounded-lg">Faça sua pré-inscrição</button>
        </div>
      </div>


      {/* create a carousel */}
      <div className="flex max-w-screen items-center justify-center py-[-24] h-auto">
      </div>

    </Layout>
  )
}

export default Home;