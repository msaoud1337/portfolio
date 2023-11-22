import { CogIcon } from '@heroicons/react/24/solid';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode, useRef, useState } from 'react';

import type { IMetaProps } from './Meta';
import { Meta } from './Meta';
import ThemeSettings from './SettingsOptions';

type IMainProps = {
  meta: IMetaProps;
  children: ReactNode;
};

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  position: 'relative',
});

function MainLayout({ meta, children }: IMainProps) {
  const isVisibleRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const onEnterHandle = () => {
    isVisibleRef.current = true;
    clearTimeout(timeoutRef.current!);
    setIsVisible(true);
  };

  if (isVisible) {
    timeoutRef.current = setTimeout(() => {
      isVisibleRef.current = false;
      setIsVisible(false);
    }, 2000);
  }

  const isVisibleContent = isVisible && (
    <AnimatePresence>
      <motion.div
        initial={{ x: -140, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.64,
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        }}
      >
        <ThemeSettings />
      </motion.div>
    </AnimatePresence>
  );

  const isNotVisibleContent = !isVisible && (
    <AnimatePresence>
      <motion.div
        initial={{ x: -140, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.64,
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        }}
      >
        <Box
          onClick={onEnterHandle}
          sx={{
            p: 0.5,
            px: '4px',
            left: 0,
            bottom: '50%',
            color: 'text.primary',
            position: 'absolute',
            bgcolor: 'background.neutral',
            borderRadius: '0 24px 16px 24px',
            boxShadow: (theme) => theme.customShadows.z12,
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <CogIcon style={{ paddingTop: 2 }} height={35} width={35} />
        </Box>
      </motion.div>
    </AnimatePresence>
  );

  const VisibleBox = () => (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 1337,
      }}
    >
      {isNotVisibleContent}
      {isVisibleContent}
    </Box>
  );

  return (
    <>
      <Meta {...meta} />
      <RootStyle>
        <VisibleBox />
        {children}
      </RootStyle>
    </>
  );
}

export default MainLayout;
