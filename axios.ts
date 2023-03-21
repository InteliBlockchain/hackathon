import axios from 'axios'

const instance: any
    = axios.create({
        // baseURL: "http://hackton-alb-39395383.us-east-1.elb.amazonaws.com/v1/"
        baseURL: `${process.env.NEXT_PUBLIC_API_URL}/v1/`
    })

export default instance