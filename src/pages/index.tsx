/* eslint-disable react/no-unescaped-entities */
import { Box, Card, Container, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import MyContact from 'components/tabs/contact';
import MyProject from 'components/tabs/projects';
import ResumeArticle from 'components/tabs/resume/ResumeArticle';
import SideBarConfig from 'components/userCard';
import MainLayout from 'layouts/MainLayout';
import dynamic from 'next/dynamic';
import type { Dispatch, ReactElement, SetStateAction } from 'react';
import { useState } from 'react';

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const Article = ({ value, setValue }: Props) => {
  const FeedBackSsr = dynamic(
    import('../../components/tabs/cv').then((res) => res.default),
    {
      ssr: false,
    }
  );
  const TAB_CONFIG = [
    { value: 'About', element: <ResumeArticle /> },
    { value: 'Resume', element: <FeedBackSsr /> },
    { value: 'Project', element: <MyProject /> },
    { value: 'Contact', element: <MyContact /> },
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
                width: '50px',
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

  return (
    <Container maxWidth="lg" sx={{ paddingTop: { xs: 2, sm: 4, md: 6 }, pb: 2 }}>
      <Box sx={{ paddingInline: { sm: '10%', md: 'unset' } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3}>
            <SideBarConfig value={value} />
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Article value={value} setValue={setValue} />
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
