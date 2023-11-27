import '@/styles/global.css';

import SnackbarOverride from 'components/snackbarOverride';
import { SettingsProvider } from 'contexts/SettingsContext';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import type { ReactElement, ReactNode } from 'react';
import ThemeProvider from 'theme';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const SsrOff = dynamic(
  import('components/TeamPrimaryColor').then((res) => res.default),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SettingsProvider>
      <ThemeProvider>
        <SsrOff>
          <SnackbarOverride>{getLayout(<Component {...pageProps} />)}</SnackbarOverride>
        </SsrOff>
      </ThemeProvider>
    </SettingsProvider>
  );
}
export default MyApp;
