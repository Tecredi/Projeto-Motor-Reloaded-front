import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import store from '../src/app/store';
import theme from '../src/themes/tecredi-blue';
import Layout from '../src/components/Layout/Layout';
import GlobalStyles from '../src/styles/GlobalStyles';
import { useState, useEffect } from 'react';
import '../src/styles/antd.css';
import AntGlobalStyles from '../src/styles/AntStyles/AntGlobalStyles';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [initialized, setInitialized] = useState(false);

  const GOD_MODE = process.env.NEXT_PUBLIC_GOD_MODE_ENABLED === 'true';

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, []);

  if (!initialized) {
    return <></>;
  }

  return (
    <>
      <GlobalStyles />
      <AntGlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Layout godMode={GOD_MODE}>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
