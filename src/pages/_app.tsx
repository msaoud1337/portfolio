import '@/styles/global.css';

import RtlLayout from 'components/RltLayout';
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
          <RtlLayout>{getLayout(<Component {...pageProps} />)}</RtlLayout>
        </ThemePrimaryColor>
      </ThemeProvider>
    </SettingsProvider>
  );
}
export default MyApp;
