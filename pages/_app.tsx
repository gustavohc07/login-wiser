import React from 'react'
import Head from 'next/head'

const App = ({ Component, pageProps }: any): any => {
  return (
    <>
      <Head>
        <meta name='description' content='Área do aluno'/>
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
