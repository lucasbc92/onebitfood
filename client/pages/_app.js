import Head from 'next/head'
import '../styles/globals.scss'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>OneBitFood</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
