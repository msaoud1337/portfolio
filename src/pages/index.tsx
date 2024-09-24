import {
  alpha,
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from '@mui/material';
import SideBarConfig from 'components/userCard';
import { motion } from 'framer-motion';
import MainLayout from 'layouts/MainLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type ReactElement, useEffect, useRef, useState } from 'react';

import { TAB_CONFIG } from '@/utils';

type Props = {
  tabValue: string;
};

const MobileNav = ({ tabValue }: Props) => {
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null);
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos.current > currentScrollPos || currentScrollPos < 10);
    prevScrollPos.current = currentScrollPos;
    clearTimeout(timeoutRef.current!);
    timeoutRef.current = setTimeout(() => setVisible(true), 400);
  };

  const addScrollListener = () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
  };

  const removeScrollListener = () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutRef.current!);
    }
  };

  useEffect(() => {
    addScrollListener();

    return () => {
      removeScrollListener();
    };
  }, []);

  return (
    <motion.div
      ref={navRef}
      animate={{ translateY: visible ? 0 : navRef?.current?.clientHeight }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        bottom: 0,
        zIndex: 1337,
        right: 0,
      }}
    >
      <Box
        component={'nav'}
        sx={{
          width: '100vw',
          backgroundColor: (theme) => theme.palette.background.neutral,
        }}
        aria-label="Main Navigation"
      >
        <Stack
          component={'ul'}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
            justifyContent: 'center',
            alignItems: 'center',
            height: '55px',
            margin: 0,
            li: {
              position: 'relative',
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
              gap: 1.7,
              px: 2,
            },
            'li::marker': {
              content: '""',
            },
          }}
        >
          {TAB_CONFIG.map((tab, index) => {
            const isActive = tabValue === tab.value;
            return (
              <Box
                key={index}
                component={'li'}
                sx={{
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {isActive && (
                  <Box
                    component={motion.span}
                    layoutId="navBar"
                    initial={{
                      originY: '0px',
                    }}
                    sx={{
                      height: '3px',
                      borderRadius: '2px',
                      width: '70%',
                      backgroundColor: 'primary.main',
                      position: 'absolute',
                      top: 0,
                      zIndex: 1,
                    }}
                  />
                )}
                {isActive && (
                  <Box
                    component={motion.span}
                    layoutId="navBarBackground"
                    initial={{
                      originY: '0px',
                    }}
                    sx={{
                      height: '100%',
                      width: '70%',
                      background: 'red',
                      position: 'absolute',
                      backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.15),
                      top: 0,
                      zIndex: 0,
                    }}
                  />
                )}
                <Typography
                  component={Link}
                  href={`/?tab=${tab.value}`}
                  variant="body2"
                  fontWeight={700}
                  textAlign={'center'}
                  color={isActive ? 'primary.main' : 'text.secondary'}
                  zIndex={1}
                >
                  {tab.value}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </motion.div>
  );
};

const SectionNav = ({ tabValue }: Props) => {
  const pushRouter = useRouter().push;
  return (
    <Tabs
      value={tabValue}
      component={'div'}
      scrollButtons="auto"
      variant="scrollable"
      onChange={(_, newValue) => {
        pushRouter(`/?tab=${newValue}`);
      }}
      sx={{
        borderRadius: '0 0 0 18px',
        backgroundColor: (theme) => theme.palette.background.neutral,
        width: '550px',
        position: 'absolute',
        top: 0,
        right: '-120px',
      }}
    >
      {TAB_CONFIG.map((tab) => (
        <Tab disableRipple key={tab.value} value={tab.value} label={tab.value} />
      ))}
    </Tabs>
  );
};

const Article = ({ tabValue }: Props) => {
  const isMobile = useMediaQuery('@media (min-width:0px) and (max-width:600px)');

  return (
    <Card>
      <Stack spacing={2} bgcolor={'background.paper'} position={'relative'}>
        {!isMobile ? <SectionNav tabValue={tabValue} /> : <MobileNav tabValue={tabValue} />}
        {TAB_CONFIG.map((tab, id) => {
          const isMatchedValue = tab.value === tabValue;
          return (
            isMatchedValue && (
              <Box px={{ xs: 2, sm: 4.8 }} pt={!isMobile ? '60px' : undefined} key={id}>
                {tab.element}
              </Box>
            )
          );
        })}
      </Stack>
    </Card>
  );
};

function Index() {
  const tabValue = useRouter().query.tab as string;

  return (
    <Container
      maxWidth="lg"
      component={'section'}
      sx={{
        py: 2,
        pb: { xs: '55px', sm: 2 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
      }}
    >
      <Box
        component={Grid}
        container
        spacing={3}
        sx={{ paddingInline: { sm: '10%', md: 'unset' } }}
      >
        <Grid item xs={12} sm={12} md={3} paddingTop={0}>
          <SideBarConfig value={tabValue || 'About'} />
        </Grid>
        <Grid item xs={12} sm={12} md={9} paddingTop={0}>
          <Article tabValue={tabValue || 'About'} />
        </Grid>
      </Box>
      <Box component={'footer'}>
        <Typography typography={'body2'} color={'text.secondary'} align="center" py={2}>
          © Made with Love by Msaoud
        </Typography>
      </Box>
    </Container>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout
      meta={{
        title: 'Msaoud - Personal Portfolio',
        description: 'A portfolio showcasing the work of Msaoud',
      }}
    >
      {page}
    </MainLayout>
  );
};

export default Index;
