import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';

type RtlLayoutProps = {
  children?: ReactNode;
};

export default function RtlLayout({ children }: RtlLayoutProps) {
  const theme = useTheme();

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  const cacheRtl = createCache({
    key: theme.direction === 'rtl' ? 'rtl' : 'css',
    stylisPlugins: theme.direction === 'rtl' ? [rtlPlugin] : [],
  });

  cacheRtl.compat = true;

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
