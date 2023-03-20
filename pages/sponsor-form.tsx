import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import Link from "next/link";
import { Layout } from "@/components/Layout"

import { useRouter } from "next/router";

import axios from "@/axios"
import { toast } from "react-toastify";
import getToken from "@/utils/getToken";

const Sponsor = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const submitHandler = async (
    data: FieldValues
  ) => {
    setLoading(true)
    setData(data)

    let token = getToken(process.env.NEXT_PUBLIC_JWT_TOKEN_VALIDATION_FRONT)

    const headers = {
      'frontend': token
    }

    try {
      await axios.post("/contact/partner", { ...data }, {
        headers: headers,
      }).then((res: any) => {
        toast.success("Sua mensagem foi enviada com sucesso. Entraremos em contato assim que possível.")

        setLoading(false)
      }).catch((err: any) => {
        toast.error(err.response.data)

        setLoading(false)
      })
    } catch (err) {
      toast.error("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.")

      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className="flex flex-col items-center bg-black bg-cover min-h-screen h-full mx-auto w-full px-4">
        <div className="flex flex-col bg-black bg-cover pt-24 w-full mx-auto md:w-6/12">
          <div className="md:h-32 lg:h-40">
            <div className="flex flex-col items-center">
              <h1 className="font-medium text-5xl text-center mb-2">
                Traga sua empresa para o evento
              </h1>
              <p className="font-medium mt-2 text-center text-[#ABABAB] text-md">
                Ajude-nos a viabilizar o desenvolvimento de soluções inovadoras e sustentáveis no nosso hackathon
              </p>
            </div>

            <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col justify-center md:items-center min-w-full items-center self-center mt-8">
              <div className="flex flex-col justify-center  w-full px-4">
                <div className="mb-4">
                  <p className="text-lg pb-1">Nome da empresa</p>
                  <input
                    {...register("companyName", { required: true })}
                    placeholder="Nome da empresa"
                    className="w-full rounded-lg border-2 border-[#5A5A5A] bg-[#0e0e10] p-2 placeholder:text-[#5A5A5A]"
                  />
                  {errors.companyName && <p className="text-sm text-red-500">Nome é obrigatório</p>}
                </div>

                <div className="mb-4">
                  <p className="text-lg pb-1">Email</p>
                  <input
                    {...register("email", { required: true })}
                    placeholder="contato@empresa.com" type="email"
                    className="w-full rounded-lg border-2 border-[#5A5A5A] bg-[#0e0e10] p-2 placeholder:text-[#5A5A5A]"
                  />
                  {errors.email && <p className="text-sm text-red-500">Email é obrigatório</p>}
                </div>
              </div>
              <p className="text-grayText mb-8">Entraremos em contato assim que possível!</p>

              <button type="submit" className={`
              ${loading ? "bg-gray-500" : "bg-green-500"} transition-all hover:scale-105 text-black font-semibold py-2 px-8 rounded-lg font text-lg
              `}
                disabled={loading}
              >{
                  loading ? "Enviando..." : "Enviar"
                }</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Sponsor;