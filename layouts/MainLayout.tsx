import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode, useRef, useState } from 'react';

import ColorOptions from './ColorOptions';
import type { IMetaProps } from './Meta';
import { Meta } from './Meta';

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

  const onLeaveHandle = () => {
    timeoutRef.current = setTimeout(() => {
      isVisibleRef.current = false;
      setIsVisible(false);
    }, 2000);
  };

  const VisibleBox = () => (
    <Box
      onMouseEnter={onEnterHandle}
      onMouseLeave={onLeaveHandle}
      sx={{
        width: '100px',
        height: '100%',
        position: 'absolute',
        left: 0,
      }}
    >
      {isVisible && (
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
            exit={{
              x: -140,
              opacity: 1,
              transition: { duration: 0.64, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
          >
            <ColorOptions />
          </motion.div>
        </AnimatePresence>
      )}
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
