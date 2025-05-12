import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jasa Dokumen Bisnis | NPWP, SIUP/NIB, Efin DJP</title>
        <meta name="description" content="Jasa pembuatan dokumen bisnis seperti NPWP, SIUP/NIB, dan Efin DJP dengan proses cepat dan mudah." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 