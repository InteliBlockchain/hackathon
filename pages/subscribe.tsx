import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '@/components/Layout'

import logo from '@/assets/logo.svg'
import challenge from '@/assets/Challenge 2023.svg'
import { GetServerSideProps } from 'next'
import { useForm } from 'react-hook-form'

import axios from '@/axios'
import { toast } from 'react-toastify'
import getToken from '@/utils/getToken'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { token, email } = ctx.query

    return {
        props: { token, email },
    }
}

const Subscription = ({ token, email }: { token: string; email: string }) => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        resetField,
        reset,
    } = useForm()

    const [documentType, setDocumentType] = useState('cpf')

    const [mathProblem, setMathProblem] = useState({
        problem: '',
        result: 0,
    })

    useEffect(() => {
        console.log('token: ' + token, '\nemail: ' + email)

        // !email ? toast.error("Email inválido") && router.push("/") : null
        // !validToken ? toast.error("Token inválido") && router.push("/") : toast.success("Token e email verificados com sucesso")

        setMathProblem(createMathProblem())

        email ? toast.info('Para se inscrever, preencha o formulário abaixo e resolva o problema matemático') : null

        const validateToken = async () => {
            let frontendToken = getToken('fda185375967e0569363a5f061f0e1ae')

            const headers = {
                frontend: frontendToken,
            }

            try {
                await axios.get(`/sub/validateToken/${token}`, {
                    headers: headers,
                })

                toast.success('Token verificado com sucesso')
            } catch (err) {
                toast.error('Token inválido')
                setTimeout(() => {
                    router.push('/')
                }, 1500)
            }
        }

        validateToken()

        const defaultForm = {
            fullName: '',
            local: '',
            github: '',
            linkedIn: '',
            documentType: 'cpf',
            document: '',
            genre: '',
            level: '',
            institution: '',
            specialNeeds: '',
            why: '',
            history: '',
            habilities: '',
            contact: '',
            discord: '',
            mailing: '',
        }

        if (localStorage.getItem('form')) {
            const form = JSON.parse(localStorage.getItem('form') || JSON.stringify(defaultForm))
            reset(form)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(watch()))
    }, [watch()])

    useEffect(() => {
        resetField('document', {defaultValue: null, keepError: false, })
    }, [documentType])

    const createMathProblem = () => {
        const firstNumber = Math.floor(Math.random() * 10)
        const secondNumber = Math.floor(Math.random() * 10)

        const problem = `${firstNumber} + ${secondNumber} = ?`

        const result = firstNumber + secondNumber

        return { problem, result }
    }

    const [loading, setLoading] = useState(false)

    const onSubmit = async (data: any) => {
        if (data.problemResult != mathProblem.result) {
            toast.error('Resposta do prompt incorreta!')
            return
        }

        setLoading(true)

        let frontendToken = getToken('fda185375967e0569363a5f061f0e1ae')

        const headers = {
            frontend: frontendToken,
        }

        try {
            await axios.post(
                `sub/validateEmail/${token}`,
                {
                    ...data,
                    email,
                },
                {
                    headers: headers,
                }
            )
            toast.success('Inscrição realizada com sucesso! Aguarde atualizações sobre a sua participação no evento!')
            localStorage.removeItem('form')

            router.push('/success')
        } catch (err: any) {
            if (err.response.data == 'Invalid Document') {
                toast.error('Documento inválido!')
            } else {
                toast.error('Occorreu um erro, tente novamente mais tarde ou contate um administrador.')
            }
            setLoading(false)
        }
    }

    const cpfMask = (value: String) => {
        return value
            .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
            .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    }

    return (
        <Layout>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center bg1 md:bg-black bg-center bg-cover pt-16 pb-6 h-auto w-full mx-auto">
                    <Link href={'https://blockchain.inteli.edu.br/'} target="_blank">
                        <Image src={logo} alt="inteli-blockchain" />
                    </Link>

                    <div className="mt-10 mb-10 md:h-32 lg:h-40">
                        <Image src={challenge} alt="Challenge 2023" className="w-full h-full" />
                    </div>

                    <div className="w-full text-center flex flex-col">
                        <p className="text-md text-[#c4c4c4] mb-1">Você está se inscrevendo com o email:</p>
                        <p className="text-sm font-medium text-white">{email}</p>
                        <p className="text-md text-red-400 mt-2">* dados obrigatórios</p>

                        <p className="text-md text-[#c4c4c4] mt-4">
                            Você tem 2 horas a partir do recebimento do email para realizar a inscrição. Caso não
                            consiga realizar a inscrição dentro do prazo, volte para{' '}
                            <Link className="text-green-400" href="/">
                                aqui
                            </Link>{' '}
                            e tente novamente.
                        </p>

                        <p className="text-md text-[#c4c4c47d] mb-1">
                            OBS.: Seus dados estão sendo salvos automaticamente, caso você saia do site e volte ou
                            atualize, seus dados estarão salvos.
                        </p>
                    </div>
                </div>

                <div className="w-full bg-black flex flex-col items-center justify-center">
                    <div className="w-full md:w-2/5 flex flex-col items-center justify-center pb-8 bg-black">
                        <p className="font-semibold text-2xl text-white">Dados pessoais</p>
                        <form
                            className="flex flex-col items-center justify-center w-full px-4"
                            onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-full mt-4">
                                <p className="text-md text-[#c4c4c4] mb-1">
                                    Nome completo: <span className="text-red-400">*</span>
                                </p>
                                <input
                                    placeholder="Seu nome"
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight text-sm"
                                    {...register('fullName', { required: true })}
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-xs mt-2 mt-2">Insira seu nome completo</p>
                                )}
                            </div>

                            <div className="w-full mt-4">
                                <p className="text-md text-[#c4c4c4] mb-1">
                                    Cidade/Estado: <span className="text-red-400">*</span>
                                </p>

                                <input
                                    placeholder="São Paulo/SP"
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight text-sm"
                                    {...register('local', { required: true })}
                                />
                                {errors.local && <p className="text-red-500 text-xs mt-2">Insira sua cidade/estado</p>}
                            </div>

                            <div className="w-full mt-4">
                                <p className="text-md text-[#c4c4c4] mb-1">Github:</p>
                                <input
                                    placeholder=""
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight text-sm"
                                    {...register('github')}
                                />
                            </div>

                            <div className="w-full mt-4">
                                <p className="text-md text-[#c4c4c4] mb-1">LinkedIn:</p>
                                <input
                                    placeholder=""
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight text-sm"
                                    {...register('linkedin')}
                                />
                            </div>

                            <div className="w-full mt-4">
                                <p className="text-md text-[#c4c4c4] mb-1">
                                    Documento: <span className="text-red-400">*</span>
                                </p>
                                <div className="flex">
                                    <select
                                        className="w-fit mr-2 p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight text-sm"
                                        {...register('documentType', { required: true })}
                                        onChange={(e) => {
                                            setDocumentType(e.target.value)
                                        }}>
                                        <option value="cpf">CPF</option>
                                        <option value="rg">RG</option>
                                    </select>
                                    <input
                                        placeholder={`${documentType == 'cpf' ? '000.000.000-00' : '00.000.000-00'}`}
                                        id="document"
                                        className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight flex text-sm"
                                        maxLength={documentType == 'cpf' ? 14 : 13}
                                        {...register('document', {
                                            required: true,
                                            maxLength: documentType == 'cpf' ? 14 : 13,
                                            minLength: documentType == 'cpf' ? 14 : 10,
                                            pattern:
                                                documentType == 'cpf'
                                                    ? /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
                                                    : undefined,
                                            onChange: (e) => {
                                                if (documentType == 'cpf') {
                                                e.target.value = cpfMask(e.target.value)
                                            }
                                            },
                                        })}
                                    />
                                </div>
                                {errors.document?.type == 'required' && (
                                    <p className="text-red-500 text-xs mt-2">
                                        Insira seu {documentType == 'cpf' ? 'CPF' : 'RG'}
                                    </p>
                                )}
                                {errors.document?.type == 'minLength' && (
                                    <p className="text-red-500 text-xs mt-2">
                                        O documento deve ter no mínimo {documentType == 'cpf' ? '13' : '10'} caracteres
                                    </p>
                                )}
                                {errors.document?.type == 'maxLength' && (
                                    <p className="text-red-500 text-xs mt-2">
                                        O documento deve ter no máximo 14 caracteres
                                    </p>
                                )}
                                {errors.document?.type == 'pattern' && (
                                    <p className="text-red-500 text-xs mt-2">
                                        Formato inválido, insira "." e "-" se necessário
                                    </p>
                                )}

                                <div className="text-xs py-4 px-2 bg-[#4862f721] text-[#c4c4c4] flex flex-col items-center justify-center mt-4 rounded-lg">
                                    <p className="text-base font-medium text-white">Atenção!</p>

                                    <p className="text-center my-4">
                                        Para o credenciamento, será obrigatória a apresentação de documento{' '}
                                        <span className="font-semibold italic">COM FOTO</span> que{' '}
                                        <span className="font-semibold italic">CONTENHA O NÚMERO ACIMA</span> no dia do
                                        evento.
                                    </p>

                                    <p className="text-center">
                                        Os dados acima serão utilizados única e exclusivamente para o credenciamento.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full mt-4 text-sm">
                                <p className="text-base text-[#c4c4c4] mb-1">
                                    Gênero <span className="text-red-400">*</span>
                                </p>
                                <select
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight flex"
                                    {...register('gender', { required: true })}>
                                    <option></option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="outro">Outro</option>
                                </select>
                                {errors.gender?.type == 'required' && (
                                    <p className="text-red-500 text-xs mt-2">Insira seu gênero</p>
                                )}
                            </div>

                            <div className="w-full mt-4 text-sm">
                                <p className="text-base text-[#c4c4c4] mb-1">
                                    Nível na carreira <span className="text-red-400">*</span>
                                </p>
                                <select
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight flex"
                                    {...register('level', { required: true })}>
                                    <option></option>
                                    <option value="ensino-medio">Ensino médio</option>
                                    <option value="graduacao">Graduação</option>
                                    <option value="pos-graduacao">Pós-graduação</option>
                                    <option value="mestrado">Mercado de trabalho</option>
                                    <option value="mestrado">Outro</option>
                                </select>
                                {errors.level?.type == 'required' && (
                                    <p className="text-red-500 text-xs mt-2">Selecione seu nível de carreira</p>
                                )}
                            </div>

                            <div className="w-full mt-4 text-sm">
                                <p className="text-base text-[#c4c4c4] mb-1">
                                    Instituição <span className="text-red-400">*</span>
                                </p>
                                <input
                                    placeholder="Ex.: Inteli, BTG Pactual, etc."
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight flex"
                                    {...register('institution', { required: true })}
                                />
                                {errors.institution?.type == 'required' && (
                                    <p className="text-red-500 text-xs mt-2">Insira sua instituição/empresa</p>
                                )}
                            </div>

                            <div className="text-sm w-full mt-4">
                                <p className="text-base text-[#c4c4c4] mb-1">Tem alguma necessidade especial?</p>
                                <input
                                    placeholder="Sua necessidade"
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight flex"
                                    {...register('specialNeeds')}
                                />
                            </div>

                            <p className="font-semibold text-2xl text-white mt-8">Perguntas</p>
                            <div className="w-full mt-4 text-sm">
                                <p className="text-base text-[#c4c4c4] mb-1">
                                    Por que você quer participar do Challenge? <span className="text-red-400">*</span>
                                </p>
                                <textarea
                                    minLength={0}
                                    maxLength={4000}
                                    rows={8}
                                    placeholder=""
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight flex"
                                    {...register('why', { required: true, maxLength: 4000, minLength: 0 })}
                                />
                                {/* add how much characters have been typed */}
                                {errors.why?.type == 'required' && (
                                    <p className="text-red-500 text-xs mt-2">Insira sua resposta</p>
                                )}
                                {errors.why?.type == 'maxLength' && (
                                    <p className="text-red-500 text-xs mt-2">Insira no máximo 4000 caracteres</p>
                                )}
                            </div>

                            <div className="w-full mt-4 text-sm">
                                <p className="text-base text-[#c4c4c4] mb-1">Conte um pouco da sua história</p>
                                <textarea
                                    rows={8}
                                    placeholder=""
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight flex"
                                    {...register('history')}
                                />
                            </div>

                            <div className="w-full mt-4 text-sm">
                                <p className="text-base text-[#c4c4c4] mb-1">Habilidades que gostaria de destacar</p>
                                <textarea
                                    rows={8}
                                    placeholder=""
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight flex"
                                    {...register('habilities')}
                                />
                            </div>

                            <div className="w-full mt-4">
                                <p className="text-md text-[#c4c4c4] mb-1">
                                    Tem grupo? <span className="text-red-400">*</span>
                                </p>

                                <select
                                    className="w-full p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight flex"
                                    {...register('group', { required: true })}>
                                    <option></option>
                                    <option value={'true'}>Sim</option>
                                    <option value={'false'}>Não</option>
                                </select>
                                {errors.group?.type == 'required' && (
                                    <p className="text-red-500 text-xs mt-2">Selecione uma opção</p>
                                )}
                            </div>

                            <div className="w-full mt-8 flex flex-col justify-center text-sm">
                                <p className="font-semibold text-2xl text-white mb-4 text-center">Contato</p>

                                <p className="text-md text-[#c4c4c4] mb-1">
                                    Telefone (DDD + número) <span className="text-red-400">*</span>
                                </p>
                                <input
                                    placeholder="Número"
                                    className="p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight w-full"
                                    type="text"
                                    {...register('contact', {
                                        required: true,
                                        // pattern: /^\(\d{2}\) \d \d{4}-\d{4}$/,
                                        onChange: (e) => {
                                            e.target.value = e.target.value
                                                .replace(/\D/g, '')
                                                .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
                                        },
                                    })}
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-xs mt-2">Insira sua forma de contato</p>
                                )}
                                {errors.contact?.type == 'pattern' && (
                                    <p className="text-red-500 text-xs mt-2">Insira um número válido</p>
                                )}

                                <div className="text-xs p-4 bg-[#4862f721] text-[#c4c4c4] flex flex-col justify-center mt-4 rounded-lg">
                                    <p className="text-base text-[#c4c4c4] mb-1 font-medium">
                                        Seu Discord (com apelido e número) <span className="text-red-400">*</span>
                                    </p>

                                    <input
                                        placeholder="nickname#1234"
                                        className="p-2 text-base rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight w-full"
                                        {...register('discord', { required: true })}
                                    />
                                    {errors.fullName && <p className="text-red-500 text-xs mt-2">Insira seu Discord</p>}

                                    <p className="text-center my-4 text-base">
                                        O Discord será o principal meio de comunicação antes e durante o evento. Lá,
                                        você pode acessar conteúdos educacionais, conversar com os patrocinadores, se
                                        conectar com outros participantes e formar seu grupo!
                                    </p>

                                    <p className="text-center text-base">
                                        Ainda não tem uma conta?{' '}
                                        <Link
                                            className="text-green-500"
                                            href={'https://discord.com/register'}
                                            target={'_blank'}>
                                            Crie a sua conta aqui
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="w-full mt-8 flex flex-col justify-center text-sm">
                                <div className="flex text-xs">
                                    <input
                                        type={'checkbox'}
                                        {...register('mailing')}
                                        className={'mr-2 checked:bg-green-500'}
                                    />
                                    <p className="text-base text-[#c4c4c4] mb-1">
                                        Aceito receber emails sobre informações, prêmios e patrocinadores do evento.
                                    </p>
                                </div>
                            </div>

                            <div className="text-sm w-fit mt-8">
                                <p className="text-md text-[#c4c4c4] mb-1">
                                    {mathProblem.problem} <span className="text-red-400">*</span>
                                </p>
                                <input
                                    placeholder="Resposta"
                                    type="number"
                                    className="w-auto p-2 rounded-lg border-2 border-blue bg-[#0e0e10] font-extralight"
                                    {...register('problemResult', { required: true })}
                                />
                                {errors.problemResult && (
                                    <p className="text-red-500 text-xs mt-2">Responda o problema!</p>
                                )}
                            </div>

                            <div className="w-full px-8 flex flex-col justify-center mt-8">
                                <button
                                    type="submit"
                                    className={`${
                                        loading ? 'bg-gray-500' : 'bg-green-500'
                                    } py-2 px-8 rounded-lg font text-lg text-white`}
                                    disabled={loading}>
                                    {loading ? 'Enviando...' : 'Enviar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Subscription
