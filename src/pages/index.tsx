import { Box, Card, Container, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import SideBarConfig from 'components/userCard';
import MainLayout from 'layouts/MainLayout';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

import { TAB_CONFIG } from '@/utils';

type Props = {
  tabValue: string;
};

const Article = ({ tabValue }: Props) => {
  const pushRouter = useRouter().push;
  const tabs = (
    <Tabs
      value={tabValue}
      scrollButtons="auto"
      variant="scrollable"
      onChange={(_, newValue) => {
        pushRouter(`/?tab=${newValue}`);
      }}
      sx={{
        borderRadius: { xs: 'unset', sm: '0 0 0 18px' },
        backgroundColor: (theme) => theme.palette.background.neutral,
      }}
    >
      {TAB_CONFIG.map((tab) => (
        <Tab disableRipple key={tab.value} value={tab.value} label={tab.value} />
      ))}
    </Tabs>
  );

  return (
    <Card>
      <Stack spacing={2} bgcolor={'background.paper'}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'row', justifyContent: 'space-between' },
          }}
        >
          <Typography
            px={4.8}
            py={4}
            variant="h4"
            sx={{
              position: 'relative',
              '&.MuiTypography-root::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 38.4,
                width: '50px',
                height: '5px',
                borderRadius: '3px',
                backgroundColor: 'primary.main',
              },
            }}
          >
            {tabValue}
          </Typography>
          {tabs}
        </Box>
        {TAB_CONFIG.map((tab, id) => {
          const isMatchedValue = tab.value === tabValue;
          return (
            isMatchedValue && (
              <Box px={4.8} key={id}>
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
  const [value, setValue] = useState('About');
  const routerTabValue = useRouter().query.tab as string;

  useEffect(() => {
    if (routerTabValue) setValue(routerTabValue);
  }, [routerTabValue]);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: { xs: 2, sm: 4, md: 6 }, pb: 2 }}>
      <Box sx={{ paddingInline: { sm: '10%', md: 'unset' } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3}>
            <SideBarConfig value={value} />
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Article tabValue={value} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout meta={{ title: 'Msaoud - Personal Portfolio', description: '' }}>{page}</MainLayout>
  );
};

export default Index;
