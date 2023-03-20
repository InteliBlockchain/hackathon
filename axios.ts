import axios from 'axios'

const instance: any
    = axios.create({
        // baseURL: "http://hackton-alb-39395383.us-east-1.elb.amazonaws.com/v1/"
        baseURL: `${process.env.API_PUBLIC_URL}`
    })

export default instance