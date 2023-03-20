import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { Layout } from "@/components/Layout"

import { useRouter } from "next/router";

import axios from "@/axios"
import getToken from "@/utils/getToken";
import { toast } from "react-toastify";

const Contact = () => {
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

		let token = getToken(process.env.JWT_TOKEN_VALIDATION_FRONT)

		const headers = {
			'frontend': token
		}

		try {
			await axios.post("/contact/contact", { ...data }, {
				headers: headers,
			}).then((res: any) => {
				toast.success("Sua mensagem foi enviada com sucesso. Entraremos em contato assim que possível.")

				console.log(res)

				setLoading(false)
			}).catch((err: any) => {
				toast.error(err.response.data)

				console.log(err.response.data)

				setLoading(false)
			})
		} catch (err) {
			toast.error("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.")

			console.log(err)

			setLoading(false)
		}
	}

	return (
		<Layout>
			<div className="flex flex-col items-center bg-black bg-cover min-h-screen h-full mx-auto w-full px-4">
				<div className="flex flex-col bg-black bg-cover pt-60 pb-24 w-full mx-auto md:w-6/12">
					<div className="md:h-32 lg:h-40">
						<div className="flex flex-col items-center">
							<h1 className="font-medium text-5xl text-center mb-2">
								Tem mais alguma dúvida?
							</h1>
							<p className="font-medium mt-2 text-center text-[#ababab] text-md">
								Entre em contato conosco e responderemos assim que possível
							</p>
						</div>

						<form onSubmit={handleSubmit(submitHandler)} className="flex flex-col justify-center md:items-center min-w-full items-center self-center mt-8">
							<div className="flex flex-col justify-center  w-full px-4">
								<div className="mb-4">
									<p className="text-lg mb-1">Nome</p>
									<input
										{...register("name", { required: true })}
										placeholder="Nome"
										className="w-full outline-none rounded-lg border-2 border-white bg-[#0e0e10] p-2 placeholder:text-[#5A5A5A]"
									/>
									{errors.name && <p className="text-sm text-red-500">Nome é obrigatório</p>}
								</div>

								<div className="mb-4">
									<p className="text-lg mb-1">Email</p>
									<input
										{...register("email", { required: true })}
										placeholder="contato@empresa.com" type="email"
										className="w-full outline-none rounded-lg border-2 border-white bg-[#0e0e10] p-2 placeholder:text-[#5A5A5A]"
									/>
									{errors.email && <p className="text-sm text-red-500">Email é obrigatório</p>}
								</div>

								<div className="mb-4">
									<p className="text-lg mb-1">Mensagem</p>
									<textarea
										{...register("message", { required: true })}
										placeholder="Sua mensagem"
										rows={3}
										className="w-full outline-none rounded-lg border-2 border-white bg-[#0e0e10] p-2 placeholder:text-[#5A5A5A]"
									/>
									{errors.message && <p className="text-sm text-red-500">Mensagem é obrigatório</p>}
								</div>
							</div>
							<p className="text-grayText mb-8">Entraremos em contato assim que possível!</p>

							<button type="submit" className={`
              ${loading ? "bg-gray-500" : "bg-green-500"} text-black hover:scale-105 transition-all font-semibold py-2 px-8 rounded-lg font text-lg
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

export default Contact;