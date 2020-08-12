// Top level App component
import React from "react"
import Head from 'next/head'
import '../base.css'

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>GeorgS.me | Georg Schelkshorn</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8;" />
        <style>{'#__next { height: 100%; }'}</style>
      </Head>
      <main><Component {...pageProps} /></main>
    </React.Fragment>
  )
}