import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '../utils/createEmotionCache';

import { theme } from '../styles/theme';
import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider session={pageProps.session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Anunx</title>
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />

          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default MyApp;
