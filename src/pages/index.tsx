/* eslint-disable react/no-unescaped-entities */
import { Box, Card, Container, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import ResumeArticle from 'components/ResumeArticle';
import SideBarConfig from 'components/userCard';
import MainLayout from 'layouts/MainLayout';
import { type ReactElement, useState } from 'react';

const Article = () => {
  const [value, setValue] = useState('About');

  const TAB_CONFIG = [
    { value: 'About', element: <ResumeArticle /> },
    { value: 'Resume', element: <></> },
    { value: 'Science', element: <></> },
    { value: 'Project', element: <></> },
    { value: 'Contact', element: <></> },
  ];

  const tabs = (
    <Tabs
      value={value}
      scrollButtons="auto"
      variant="scrollable"
      allowScrollButtonsMobile
      onChange={(_, newValue) => setValue(newValue)}
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
                width: '40px',
                height: '5px',
                borderRadius: '3px',
                backgroundColor: 'primary.main',
              },
            }}
          >
            {value}
          </Typography>
          {tabs}
        </Box>
        {TAB_CONFIG.map((tab, id) => {
          const isMatchedValue = tab.value === value;
          return isMatchedValue && <Box key={id}>{tab.element}</Box>;
        })}
      </Stack>
    </Card>
  );
};

function Index() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: { xs: 2, sm: 4, md: 6 }, pb: 2 }}>
      <Box sx={{ paddingInline: { sm: '10%', md: 'unset' } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3}>
            <SideBarConfig />
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Article />
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
