import React from 'react'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Login - Wiser</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App