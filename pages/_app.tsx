import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// require("dotenv").config();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
