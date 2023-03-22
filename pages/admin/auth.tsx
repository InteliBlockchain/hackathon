import { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Layout } from '@/components/Layout'

import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { Container, PageContainer } from '@/styles/pages/admin/auth'
import { useForm } from 'react-hook-form'
import axios from '../../axios'
import getToken from '@/utils/getToken'

const Home = () => {
    const router = useRouter()

    const [emailSent, setEmailSent] = useState(false)

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data: any) =>  {
        let token = getToken(process.env.NEXT_PUBLIC_JWT_TOKEN_VALIDATION_FRONT)
     
		const headers = {
			'frontend': token,
            'Authorization': `Bearer ${data.token}`
        }
        if (!emailSent) {
            try {
                await axios.post('/sub/callAdm', data, { headers })
                toast.success("Cheque o seu email!")
                setEmailSent(true)
            } catch (err) {
                toast.error("Não foi possível fazer o login!")
            }
            return
        }

        try {
            const {data: result} = await axios.get('/sub/validateadmin/' + data.token, {headers})
            localStorage.setItem('adminToken', result.token)
            
            toast.success("Login realizado com sucesso!")
            router.push('/admin/subscriptions')
        } catch (err) {
            toast.error("Não foi possível fazer o login!")
        }
    }

    return (
        <Layout>
            <PageContainer>
                <Container>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Email' type="text" {...register('email')} />
                        {emailSent && <input placeholder='Token' type="text" {...register('token')} />}
                        <button type='submit'>Login</button>
                    </form>
                </Container>
            </PageContainer>
        </Layout>
    )
}

export default Home
