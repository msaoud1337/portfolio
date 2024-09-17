import {
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
import MainLayout from 'layouts/MainLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

import { TAB_CONFIG } from '@/utils';

type Props = {
  tabValue: string;
};

const MobileNav = ({ tabValue }: Props) => {
  return (
    <Box
      component={'nav'}
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '100vw',
        backgroundColor: (theme) => theme.palette.background.neutral,
        zIndex: 1337,
      }}
      aria-label="Main Navigation"
    >
      <Stack
        component={'ul'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          'li::marker': {
            content: '""',
          },
          li: {
            flexGrow: 1,
          },
        }}
      >
        {TAB_CONFIG.map((tab, index) => {
          const isActive = tabValue === tab.value;
          return (
            <li key={index}>
              <Typography
                component={Link}
                href={`/?tab=${tab.value}`}
                variant="body2"
                fontWeight={700}
                color={isActive ? 'primary.main' : 'text.secondary'}
              >
                {tab.value}
              </Typography>
            </li>
          );
        })}
      </Stack>
    </Box>
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
    <Container maxWidth="lg" sx={{ pb: 2 }}>
      <Box sx={{ paddingInline: { sm: '10%', md: 'unset' } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3} paddingTop={0}>
            <SideBarConfig value={tabValue || 'About'} />
          </Grid>
          <Grid item xs={12} sm={12} md={9} paddingTop={0}>
            <Article tabValue={tabValue || 'About'} />
          </Grid>
        </Grid>
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
