/* eslint-disable react/display-name */
import React from 'react'
import axios from '../axios'
import Router from 'next/router'
import { parseCookies } from 'nookies'

const RequireAuthentication = (WrappedComponent: any) => {
    return class extends React.Component {
        static async getInitialProps(ctx: any) {
            let token = null
            if (ctx.req) {
                const { token: tokenFromCookies } = parseCookies(ctx)
                token = tokenFromCookies
            }

            try {
                if (ctx.req) {
                    await axios.get('/admin', {
                        headers: {
                            Cookie: `token=${token};`,
                        },
                    })
                } else {
                    await axios.get('/admin')
                }

                if (WrappedComponent.getInitialProps) {
                    const pageProps = await WrappedComponent.getInitialProps(ctx, token)
                    return { ...pageProps }
                }

                return {}
            } catch (err) {
                if (ctx.req) {
                    ctx.res.writeHead(302, {
                        Location: '/admin/auth',
                    })
                    ctx.res.end()
                } else {
                    Router.push('/admin/auth')
                }
            }
            return {}
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

export default RequireAuthentication
