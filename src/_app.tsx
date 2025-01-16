import type { AppProps } from 'next/app';

import RootLayout from 'containers/RootLayout';

import 'styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <RootLayout>
    <Component {...pageProps} />
  </RootLayout>
);

export default App;
