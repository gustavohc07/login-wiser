import React from 'react'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Login - Wiser</title>
        <style>{`
        * {
        margin: 0;
        padding: 0;
        }
      `}
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
