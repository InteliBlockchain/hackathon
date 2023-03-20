import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import close from "../assets/x.svg"

import axios from "@/axios"
import getToken from "@/utils/getToken"

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const Modal = ({ setModal }: {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    useEffect(() => {
        const background = document.querySelector("#background");
        const sidebar = document.querySelector("#sidebar");

        function openAnimation() {
            background?.animate([
                { opacity: "0%", backdropFilter: "blur(0px)" },
                { opacity: "100%", backdropFilter: "blur(10px)" }
            ], {
                duration: 500,
                easing: "ease-in-out",
                fill: "forwards"
            })

            //            if (window.matchMedia("(max-width: 768px)").matches) {
            //                sidebar?.animate([
            //                    { width: "0%", height: "0%" },
            //                    { width: "75%", height: "100%" }
            //                ], {
            //                    duration: 1500,
            //                    easing: "ease-in-out",
            //                    fill: "forwards"
            //                })
            //            } else {
            //                sidebar?.animate([
            //                    { width: "0%", height: "0%" },
            //                    { width: "30%", height: "100%" }
            //                ], {
            //                    duration: 800,
            //                    easing: "ease-in-out",
            //                    fill: "forwards"
            //                })
            //            }
        }

        openAnimation();
    }, [])

    const closeModal = () => {
        const background = document.querySelector("#background");
        const sidebar = document.querySelector("#sidebar");

        background?.animate([
            { opacity: "100%", backdropFilter: "blur(10px)" },
            { opacity: "0%", backdropFilter: "blur(0px)" }
        ], {
            duration: 500,
            easing: "ease-in-out",
            fill: "forwards"
        })

        if (window.matchMedia("(max-width: 768px)").matches) {
            sidebar?.animate([
                { width: "70%", height: "100%" },
                { width: "0%", height: "0%" }
            ], {
                duration: 500,
                easing: "ease-in-out",
                fill: "forwards"
            })
        } else {
            sidebar?.animate([
                { width: "30%", height: "100%" },
                { width: "0%", height: "0%" }
            ], {
                duration: 500,
                easing: "ease-in-out",
                fill: "forwards"
            })
        }

        setTimeout(() => {
            setModal(false)
        }, 800)
    }

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data: any) => {
        // check if the date is after 19-03-2023 at 23:59
        if (new Date(data.date) > new Date("2023-03-19T23:59:59") && !process.env.NEXT_PUBLIC_allow_subscriptions) {
            toast.error("Inscrições ainda não estão abertas!")
            return
        }


        setLoading(true)
        setData(data)

        let token = getToken(process.env.JWT_TOKEN_VALIDATION_FRONT)

        const headers = {
            'frontend': token
        }

        try {
            await axios.post("/Sub/sendConfirmation", {
                email: data.email,
            }, {
                headers: headers,
            }).then((res: any) => {
                toast.success("Um email foi enviado para " + data.email + " com um link para confirmar seu cadastro")

                // router.push("/success?email=" + data.email)

                setLoading(false)
            }).catch(async (err: any) => {
                try {
                    await axios.post("/Sub/resendConfirmation", {
                        email: data.email,
                    }, {
                        headers: headers,
                    }).then((res: any) => {
                        toast.success("Um email foi enviado para " + data.email + " com um link para confirmar seu cadastro")

                        // router.push("/success?email=" + data.email)

                        setLoading(false)
                    }).catch((err: any) => {
                        err?.message == "Request failed with status code 429" ? toast.error("Bloqueado por excesso de tentativas.") : toast.error("Ocorreu um erro e o email não pôde ser enviado para " + data.email + ". Tente novamente mais tarde ou cheque seu email")


                        setLoading(false)
                    })
                } catch (err) {
                    toast.error("Ocorreu um erro e o email não pôde ser enviado para " + data.email + ". Tente novamente mais tarde ou cheque seu email")
                }
            })
        } catch (err) {
            toast.error("Ocorreu um erro, tente novamente mais tarde")
            setLoading(false)
        }
    }

    return (
        <div className="absolute mx-auto bg-[rgba(0,0,0,0.25)] flex z-10 h-full w-full" id="background">
            <div className="w-11/12 md:w-1/2 lg:w-1/4 h-fit my-auto mx-auto flex flex-col bg-[#2e2e2e] py-8 rounded-xl" id="sidebar">
                <div className="flex items-center justify-center mb-4 px-4">
                    <button className="absolute left-20 md:hidden" onClick={closeModal}>
                        <Image src={close} width={32} alt={"close"} />
                    </button>


                    <button className="md:flex hidden" onClick={closeModal}>
                        <Image src={close} width={32} alt={"close"} />
                    </button>

                    <p className="text-xl font-medium md:mx-auto">
                        Quase lá...
                    </p>
                </div>

                <form className="w-full mt-4 flex flex-col justify-center items-center px-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full">
                        <p className="text-lg font-medium">E-mail</p>
                        <input className="bg-[rgba(0,0,0,0.25)] w-full px-4 py-2 rounded-lg text-md" placeholder={"seu@email.com"}
                            {...register("email", {
                                required: "Campo obrigatório",
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email?.type === "required" && <p className="text-red-500 text-sm">Campo obrigatório</p>}
                        {errors.email?.type === "pattern" && <p className="text-red-500 text-sm">Por favor, insira um email válido</p>}
                    </div>

                    <p className="my-4 text-md text-[#7D7D7D] text-center">Você receberá um email com um link para completar sua inscrição. O link é valido por uma hora.</p>

                    <button className={`${loading ? "bg-[#7D7D7D]" : "bg-[#4863F7]"} font-semibold text-lg rounded-lg my-2 px-8 w-3/5 py-4 text-[#f1f1f1] shadow-lg}`} type={"submit"} disabled={loading}>
                        {loading ? "Enviando..." : "Enviar"}
                    </button>
                </form>
            </div>
        </div>
    )
}