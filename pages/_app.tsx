import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../src/app/store';
import theme from '../src/themes/tecredi-blue';
import MainFrame from '../src/components/MainFrame/MainFrame';
import GlobalStyles from '../src/styles/GlobalStyles';
import { useState, useEffect } from 'react';
import '../src/styles/ant.css'



export default function MyApp({ Component, pageProps }: AppProps) {
  const [initialized, setInitialized] = useState(false);

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
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <MainFrame>
            <Component {...pageProps} />
          </MainFrame>
        </Provider>
      </ThemeProvider>
    </>
  );
}
