import Head from 'next/head';
import '../styles/globals.scss';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';
import { RecoilRoot } from 'recoil';;


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>OneBitFood</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Container className='mt-6'>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Container>        
      </main>
    </>
  )
}

export default MyApp
