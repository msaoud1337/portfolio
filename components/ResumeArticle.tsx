/* eslint-disable react/no-unescaped-entities */
import { Box, Card, CardContent, CardHeader, Stack, SvgIcon, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

const DISTANCE = 200;

const TRANSITION_ENTER = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const TRANSITION_EXIT = {
  duration: 0.48,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const varFadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: TRANSITION_ENTER },
  exit: { opacity: 0, transition: TRANSITION_EXIT },
};

export const varFadeInUp = {
  initial: { y: DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER },
  exit: { y: DISTANCE, opacity: 0, transition: TRANSITION_EXIT },
};

export const varFadeInLeft = {
  initial: { x: -DISTANCE, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER },
  exit: { x: -DISTANCE, opacity: 0, transition: TRANSITION_EXIT },
};

export const varFadeInDown = {
  initial: { y: -DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER },
  exit: { y: -DISTANCE, opacity: 0, transition: TRANSITION_EXIT },
};

export const varFadeInRight = {
  initial: { x: DISTANCE, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER },
  exit: { x: DISTANCE, opacity: 0, transition: TRANSITION_EXIT },
};

type CardsProps = {
  text: string;
  title: string;
  icon: JSX.Element;
};

const Cards = ({ text, icon }: CardsProps) => (
  <Card sx={{ p: 3, pt: 3, maxWidth: { xs: '100%', sm: '50%' } }}>
    <Stack
      direction={'row'}
      sx={{ minHeight: '50px', minWidth: '50px' }}
      color={'primary.main'}
      gap={2}
    >
      <SvgIcon sx={{ pt: 1, height: '100%' }} fontSize="large" color={'inherit'}>
        {icon}
      </SvgIcon>
      <Box>
        <Typography variant="subtitle1">Frontend Web Dev</Typography>
        <Typography variant="paragraph" color={'text.secondary'}>
          {text}
        </Typography>
      </Box>
    </Stack>
  </Card>
);

export default function ResumeArticle() {
  const INTERSTINGS = [
    {
      title: 'title',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="190px" height="190px" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3.2 14.222V4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 19h2m1-13l2 2l-2 2m-4-4L8 8l2 2"
            />
          </g>
        </svg>
      ),
      content:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard',
    },
    {
      title: 'title',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
            <path stroke-linejoin="round" d="m12 19.01l.01-.011" />
            <path d="M18 18v3.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6V18M18 6V2.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V6" />
            <path stroke-linejoin="round" d="M15.5 8.5L19 12l-3.5 3.5m-7-7L5 12l3.5 3.5" />
          </g>
        </svg>
      ),
      content:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard',
    },
  ];

  return (
    <AnimatePresence>
      <Box component={motion.div} {...varFadeInDown} px={4.8}>
        <Typography variant="paragraph" color={'text.secondary'}>
          Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
          avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les
          années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,
          mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en
        </Typography>
        <Box pt={2}>
          <Typography variant="h4" mb={2}>
            Currently involved in:
          </Typography>
          <Card component={motion.div} {...varFadeInRight} sx={{ cursor: 'pointer' }}>
            <Box bgcolor={'background.neutral'}>
              <CardHeader
                title="Search for an internship"
                sx={{ color: 'primary.main' }}
              ></CardHeader>
              <CardContent>
                <Typography variant="paragraph" color={'text.secondary'}>
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                  en page avant impression. Le Lorem Ipsum est le faux texte standard de
                  l'imprimerie depuis les anné...
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Box>
        <Box pt={2}>
          <Typography variant="h4" mb={2}>
            Currently interested in:
          </Typography>
          <Stack
            component={motion.div}
            {...varFadeInRight}
            direction={{ xs: 'column', sm: 'row' }}
            gap={2}
          >
            {INTERSTINGS.map((item, id) => (
              <Cards key={id} text={item.content} title={item.title} icon={item.icon} />
            ))}
          </Stack>
        </Box>
        <Box pt={2}>
          <Typography variant="h4" mb={2}>
            Current Skills:
          </Typography>
          <Stack direction={'row'} gap={1}>
            <motion.img {...varFadeInRight} src="/js.svg" />
            <motion.img {...varFadeInRight} src="/ts.svg" />
            <motion.img {...varFadeInRight} src="/react.svg" />
            <motion.img {...varFadeInRight} src="/mui.svg" />
          </Stack>
        </Box>
      </Box>
    </AnimatePresence>
  );
}
