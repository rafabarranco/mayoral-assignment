import type { AppProps } from 'next/app';

import RootLayout from 'containers/RootLayout';

import 'styles/globals.css';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Mayoral</title>
      <meta name="description" content="NextJS' technical assesment from Mayoral" />
      <meta name="keywords" content="nextjs, react, web development, mayoral" />
    </Head>
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  </>
);

export default App;
