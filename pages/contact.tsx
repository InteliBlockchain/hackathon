// import { useRef, useState } from "react";

// import { Layout } from "@/components/Layout";
// import { useRouter } from "next/router";
// import { useForm } from "react-hook-form";
// import axios from "@/axios";

// const Contact = () => {
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [data, setData] = useState({})
//   const [loading, setLoading] = useState(false)

//   const submitHandler = async (data: any) => {
//     setLoading(true)
//     const { name, email } = data

//     setData({
//       name,
//       email
//     })

//     try {
//       await axios.get("https://api.github.com/users/marcelofeitoza").then((res: any) => {
//         console.log(res.data)
//         setLoading(false)
//       }).catch((err: any) => {
//         console.log(err)
//         setLoading(false)
//       })

//       console.log({
//         name,
//         email
//       })
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <Layout>
//       <div className="flex flex-col items-center justify-center md:bg-black bg-center bg-cover pt-32 pb-24 h-auto w-full mx-auto">
//         <div className="md:h-32 lg:h-40">
//           <div className="flex flex-col items-center">
//             <h1 className="font-normal text-5xl text-center mb-4">
//               
//             </h1>
//             <p className="font-medium mt-2 text-center text-grayText text-xl">
//               
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center w-min-full -mt-8 mb-16">
//         <div className="w-11/12 md:4/5">
//           <form
//             onSubmit={submitHandler}
//             className="flex flex-col justify-center md:items-center min-w-full items-center self-center border-2 border-red-500"
//           >
//             <div className="flex flex-col justify-center">
//               <div>
//                 <input
//                   placeholder="nome"
//                   className="w-72 h-8 rounded-lg border-2 border-[#5A5A5A] bg-[#0e0e10] outline-0 pl-2 mb-5 placeholder:text-[#5A5A5A]"
//                 />
//                 {errors.name && <p className="text-red-500">Nome é obrigatório</p>}
//               </div>

//               <div>
//                 <input
//                   placeholder="email"
//                   className="w-72 h-8 rounded-lg border-2 border-[#5A5A5A] bg-[#0e0e10] outline-0 pl-2 mb-5 placeholder:text-[#5A5A5A]"
//                 />
//                 {errors.email && <p className="text-red-500">Email é obrigatório</p>}
//               </div>

//               <div>
//                 <input
//                   placeholder="mensagem"
//                   className="w-72 h-28 rounded-lg border-2 border-[#5A5A5A] bg-[#0e0e10] outline-0 pl-2 mb-5 placeholder:text-[#5A5A5A] placeholder:tx"
//                 />
//                 {errors.message && <p className="text-red-500">Mensagem é obrigatório</p>}
//               </div>

//               <button
//                 type="submit"
//                 className="bg-green-500 text-black font-semibold py-2 px-8 rounded-lg font text-lg w-max"
//               >
//                 Enviar
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Contact;

import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import Link from "next/link";
import { Layout } from "@/components/Layout"

import { useRouter } from "next/router";

import axios from "@/axios"

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
		const { name, email, message } = data

		setData({
			name,
			email,
			message
		})

		try {
			await axios.get("https://api.github.com/users/marcelofeitoza").then((res: any) => {
				console.log(res.data)
				setLoading(false)
			}).catch((err: any) => {
				console.log(err)
				setLoading(false)
			})

			console.log({
				name,
				email
			})
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Layout>
			<div className="flex flex-col items-center md:bg-black bg-center bg-cover h-auto w-full mx-auto md:w-3/5 px-4">
				<div className="flex flex-col md:bg-black bg-center bg-cover pt-24 pb-24 w-full mx-auto">
					<div className="md:h-32 lg:h-40">
						<div className="flex flex-col items-center">
							<h1 className="font-medium text-4xl text-center mb-2">
								Tem mais alguma dúvida?
							</h1>
							<p className="font-medium mt-2 text-center text-[#ABABAB] text-md">
								Entre em contato conosco e responderemos assim que possível
							</p>
						</div>

						<form onSubmit={handleSubmit(submitHandler)} className="flex flex-col justify-center md:items-center min-w-full items-center self-center mt-8">
							<div className="flex flex-col justify-center  w-full px-4">
								<div className="mb-4">
									<p className="text-md">Nome</p>
									<input
										{...register("name", { required: true })}
										placeholder="Nome"
										className="w-full rounded-lg border-2 border-[#5A5A5A] bg-[#0e0e10] p-2 placeholder:text-[#5A5A5A]"
									/>
									{errors.name && <p className="text-sm text-red-500">Nome é obrigatório</p>}
								</div>

								<div className="mb-4">
									<p className="text-md">Email</p>
									<input
										{...register("email", { required: true })}
										placeholder="contato@empresa.com" type="email"
										className="w-full rounded-lg border-2 border-[#5A5A5A] bg-[#0e0e10] p-2 placeholder:text-[#5A5A5A]"
									/>
									{errors.email && <p className="text-sm text-red-500">Email é obrigatório</p>}
								</div>

								<div className="mb-4">
									<p className="text-md">Email</p>
									<textarea
										{...register("message", { required: true })}
										placeholder="contato@empresa.com"
										rows={3}
										className="w-full rounded-lg border-2 border-[#5A5A5A] bg-[#0e0e10] p-2 placeholder:text-[#5A5A5A]"
									/>
									{errors.message && <p className="text-sm text-red-500">Mensagem é obrigatório</p>}
								</div>
							</div>
							<p className="text-grayText mb-8">Entraremos em contato assim que possível!</p>

							<button type="submit" className={`
              ${loading ? "bg-gray-500" : "bg-green-500"} text-black font-semibold py-2 px-8 rounded-lg font text-lg
              `}>{
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