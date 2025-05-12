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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 