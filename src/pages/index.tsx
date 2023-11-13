/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import MainLayout from 'layouts/MainLayout';
import { type ReactElement, useState } from 'react';

const SideBarConfig = () => {
  return <Card></Card>;
};

const Article = () => {
  const [value, setValue] = useState('About');

  const TAB_CONFIG = [
    { value: 'About', element: <></> },
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
        backgroundColor: 'background.neutral',
        borderRadius: { xs: 'unset', sm: '0 0 0 18px' },
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
          <Typography px={4.8} pt={4} variant="h4">
            {value}
          </Typography>
          {tabs}
        </Box>
        <Box px={4.8}>
          <Typography variant="paragraph" color={'text.secondary'}>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
            les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu
            n'en
          </Typography>
        </Box>
        <Box px={4.8} pt={2}>
          <Typography variant="h4" mb={2}>
            Currently involved in:
          </Typography>
          <Card>
            <Box bgcolor={'background.neutral'}>
              <CardHeader title="Search for an internship"></CardHeader>
              <CardContent>
                <Typography variant="paragraph" color={(theme) => theme.palette.grey[300]}>
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                  en page avant impression. Le Lorem Ipsum est le faux texte standard de
                  l'imprimerie depuis les anné...
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Box>
      </Stack>
    </Card>
  );
};

function Index() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: { xs: 2, sm: 4, md: 6 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <SideBarConfig />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Article />
        </Grid>
      </Grid>
    </Container>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout meta={{ title: 'Msaoud - Personal Portfolio', description: '' }}>{page}</MainLayout>
  );
};

export default Index;
