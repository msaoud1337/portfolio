import '@/styles/global.css';

import RtlLayout from 'components/RltLayout';
import SnackbarOverride from 'components/snackbarOverride';
import ThemePrimaryColor from 'components/TeamPrimaryColor';
import { SettingsProvider } from 'contexts/SettingsContext';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import ThemeProvider from 'theme';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SettingsProvider>
      <ThemeProvider>
        <ThemePrimaryColor>
          <RtlLayout>
            <SnackbarOverride>{getLayout(<Component {...pageProps} />)}</SnackbarOverride>
          </RtlLayout>
        </ThemePrimaryColor>
      </ThemeProvider>
    </SettingsProvider>
  );
}
export default MyApp;
