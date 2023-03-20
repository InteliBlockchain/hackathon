import { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '@/components/Layout'
import { Card } from '@/components/Card'
import { Carousel } from 'react-responsive-carousel'
import { Sponsor } from '@/components/Sponsor'
import { Modal } from '@/components/Modal'
import { Cube } from '@/components/Cube'

import logo from '@/assets/logo.svg'
import challenge from '@/assets/Challenge 2023.svg'

import instagram from '@/assets/instagram.svg'
import linkedin from '@/assets/linkedin.svg'

import right from '@/assets/arrow-right.svg'
import arrowLeft from '@/assets/arrow-left2.svg'
import arrowRight from '@/assets/arrow-right2.svg'
import document from '@/assets/document.svg'
import telegram from '@/assets/telegram.svg'

import inteli from '@/assets/sponsors/inteli.svg'
import eth_foundation from '@/assets/sponsors/eth_foundation.svg'
import blockchain_rio from '@/assets/sponsors/blockchain_rio.svg'
import ribus from '@/assets/sponsors/ribus.svg'
import mynt from '@/assets/sponsors/mynt.svg'
import cartesi from '@/assets/sponsors/cartesi.svg'
import alexiaVentures from '@/assets/sponsors/alexia-ventures.svg'
import sevenVisions from '@/assets/sponsors/7visions.svg'

import inteli1 from '@/assets/inteli.png'
import inteliblockchain from '@/assets/inteliblockchain.png'

import { useRouter } from 'next/router'
import { Subscription } from '@/components/Subscription'
import { toast } from 'react-toastify'
import { Container, PageContainer } from '@/styles/pages/admin/auth'
import { useForm } from 'react-hook-form'
import axios from '../../axios'


const Home = () => {
    const router = useRouter()

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data: any) =>  {
        try {
            const {data: result} = await axios.post('/callAdm', data)
            toast.success("Login realizado com sucesso!")

        } catch (err) {
            toast.error("Não foi possível fazer o login!")
        }
    }

    return (
        <Layout>
            <PageContainer>
                <Container>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Email' type="text" {...register('email')} />
                        <button type='submit'>Login</button>
                    </form>
                </Container>
            </PageContainer>
        </Layout>
    )
}

export default Home
