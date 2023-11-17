/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { aboutMeText, internShipText } from '@/utils/texts';

import DialogSlide from './dialog';

const array = [
  { href: '/js.svg', title: 'javascript' },
  { href: '/ts.svg', title: 'typescript' },
  { href: '/react.svg', title: 'reactjs' },
  { href: '/next.svg', title: 'nextjs' },
  { href: '/mui.svg', title: 'material Ui' },
  { href: '/github.svg', title: 'github' },
  { href: '/git.svg', title: 'git' },
  { href: '/html.svg', title: 'html' },
  { href: '/css.svg', title: 'css' },
  {
    href: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
    title: 'c',
  },
];

const DISTANCE = 400;

const TRANSITION_ENTER1 = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const TRANSITION_ENTER2 = {
  duration: 1.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const varFadeInDown = {
  initial: { y: -DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER1 },
};

export const varFadeInRight = {
  initial: { x: DISTANCE, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER1 },
};

export const varFadeInRightSlow = {
  initial: { x: DISTANCE, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER2 },
};

type CardsProps = {
  text: string;
  title: string;
  icon: JSX.Element;
};

const Cards = ({ text, icon, title }: CardsProps) => {
  const [maxHeight, setMaxHeight] = useState<number | string>('60px');
  const [nbline, setnbline] = useState<number | string>(2);

  return (
    <Card
      onMouseEnter={() => {
        setMaxHeight('auto');
        setnbline('unset');
      }}
      onMouseLeave={() => {
        setMaxHeight('60px');
        setnbline(2);
      }}
      sx={{
        p: 3,
        pt: 3,
        maxWidth: '100%',
        minHeight: '134px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        component={motion.div}
        initial={{ height: 0 }}
        animate={{ height: maxHeight }}
        exit={{ height: maxHeight }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        sx={{ display: 'flex' }}
        color={'primary.main'}
      >
        <SvgIcon sx={{ mr: 1 }} fontSize="large" color={'inherit'}>
          {icon}
        </SvgIcon>
        <Box>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography
            className="text"
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              WebkitLineClamp: nbline,
            }}
            variant="paragraph"
            color={'text.secondary'}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default function ResumeArticle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const INTERSTINGS = [
    {
      title: 'FrontEnd Web Dev',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="190px" height="190px" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3.2 14.222V4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19h2m1-13l2 2l-2 2m-4-4L8 8l2 2"
            />
          </g>
        </svg>
      ),
      animation: varFadeInRight,
      content:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard',
    },
    {
      title: 'Mobile Dev',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
            <path strokeLinejoin="round" d="m12 19.01l.01-.011" />
            <path d="M18 18v3.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6V18M18 6V2.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V6" />
            <path strokeLinejoin="round" d="M15.5 8.5L19 12l-3.5 3.5m-7-7L5 12l3.5 3.5" />
          </g>
        </svg>
      ),
      animation: varFadeInRightSlow,
      content:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard',
    },
  ];

  return (
    <>
      <AnimatePresence>
        <Box component={motion.div} {...varFadeInDown} px={4.8} pb={3}>
          <Typography variant="paragraph" color={'text.secondary'}>
            {aboutMeText}
          </Typography>
          <Box pt={2}>
            <Typography variant="h4" mb={2}>
              Currently involved in:
            </Typography>
            <Card
              onClick={() => setIsOpen(true)}
              component={motion.div}
              {...varFadeInRight}
              sx={{ cursor: 'pointer' }}
            >
              <CardHeader
                title="Search for an internship"
                sx={{ color: 'primary.main' }}
              ></CardHeader>
              <CardContent>
                <Typography
                  variant="paragraph"
                  color={'text.secondary'}
                  sx={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 3,
                  }}
                >
                  {internShipText}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box pt={2}>
            <Typography variant="h4" mb={2}>
              Currently interested in:
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} gap={2}>
              {INTERSTINGS.map((item, id) => (
                <Box
                  key={id}
                  sx={{
                    maxWidth: { xs: '100%', sm: '100%', md: '50%' },
                  }}
                  component={motion.div}
                  {...item.animation}
                >
                  <Cards text={item.content} title={item.title} icon={item.icon} />
                </Box>
              ))}
            </Stack>
          </Box>
          <Box pt={2}>
            <Typography variant="h4" mb={2}>
              My Current web dev skills:
            </Typography>
            <Stack direction={'row'} flexWrap={'wrap'} gap={1} pb={2}>
              {array.map((icon, id) => {
                const iconTRansition = {
                  duration: 0.64 + id / 4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                };
                const iconFadeToRight = {
                  initial: { x: DISTANCE, opacity: 0 },
                  animate: { x: 0, opacity: 1, transition: iconTRansition },
                };
                return (
                  <Tooltip key={id} title={icon.title}>
                    <motion.img height={40} width={40} {...iconFadeToRight} src={icon.href} />
                  </Tooltip>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </AnimatePresence>
      <DialogSlide content={aboutMeText} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
