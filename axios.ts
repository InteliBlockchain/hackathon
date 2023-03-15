import axios from 'axios'

const instance: any
    = axios.create({
        // baseURL: `${process.env.API_PUBLIC_URL}/v1/`
        baseURL: "http://hackton-alb-39395383.us-east-1.elb.amazonaws.com/v1/"
    })

export default instance