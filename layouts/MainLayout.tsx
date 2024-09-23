import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { cubicBezier, motion } from 'framer-motion';
import useSettings from 'hooks/useSettings';
import { type ReactNode } from 'react';

import type { IMetaProps } from './Meta';
import { Meta } from './Meta';

type IMainProps = {
  meta: IMetaProps;
  children: ReactNode;
};

const RootStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  overflow: 'hidden',
  position: 'relative',
});

const AnimatedNightIcon = () => {
  return (
    <motion.svg
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
      }}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </motion.svg>
  );
};

const AnimatedLightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  );
};

function MainLayout({ meta, children }: IMainProps) {
  const { onChangeMode, themeMode } = useSettings();

  const isLight = themeMode === 'light';

  return (
    <>
      <Meta {...meta} />
      <RootStyle>
        <Stack
          component={'nav'}
          sx={{
            justifyContent: 'center',
            alignItems: isLight ? 'flex-end' : 'flex-start',
            py: { xs: 1, sm: 2 },
            paddingInline: { xs: 2, sm: '12%', md: 3 },
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box
            key={21}
            component={motion.span}
            layoutId="themeIcon"
            transition={{
              duration: 1.2,
              ease: cubicBezier(0.35, 0.17, 0.3, 1),
            }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid rgba(145, 158, 171, 0.24)',
                p: 1,
                borderRadius: '50%',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: (theme) => `0px 0px 3px 2px ${theme.palette.primary.main}`,
                },
                '&:active': {
                  boxShadow: (theme) => `0px 0px 3px 5px ${theme.palette.primary.main}`,
                },
              }}
              onClick={() => onChangeMode()}
            >
              {!isLight ? <AnimatedNightIcon /> : <AnimatedLightIcon />}
            </Box>
          </Box>
        </Stack>
        {children}
      </RootStyle>
    </>
  );
}
export default MainLayout;
