import axios from 'axios'

const instance: any
    = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_API_URL}/v1/`
    })

export default instance