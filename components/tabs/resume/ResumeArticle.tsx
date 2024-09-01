/* eslint-disable react/no-unescaped-entities */
import { Box, Card, CardContent, CardHeader, Stack, Tooltip, Typography } from '@mui/material';
import type { MotionValue } from 'framer-motion';
import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';

import { INTERSTINGS, SKILLS_ICONS } from '@/utils';
import { varFadeInDown, varFadeInRight } from '@/utils/animations';
import { aboutMeText, jobSearchText } from '@/utils/texts';

import DialogSlide from '../../dialog';

type CardsProps = {
  text: string;
  title: string;
  icon: JSX.Element;
};

const IconContainer = ({ mouseX, icon }: { mouseX: MotionValue; icon: JSX.Element }) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div ref={ref} style={{ width, height }}>
      <motion.div style={{ width: widthIcon, height: heightIcon }}>{icon}</motion.div>
    </motion.div>
  );
};

const Cards = ({ text, icon, title }: CardsProps) => {
  const [scope, animate] = useAnimate();
  return (
    <Card
      component={motion.div}
      ref={scope}
      onMouseEnter={() => {
        animate(scope.current, { opacity: 1 });
      }}
      onMouseLeave={() => {
        animate(scope.current, { opacity: 1 });
      }}
      layout="size"
      layoutId={title}
      sx={{
        p: 3,
        pt: 3,
        mt: 1,
        maxWidth: '100%',
        height: 'auto',
        overflow: 'visible',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        position: 'relative',
        '&:hover': {
          '& > .iconBox': {
            border: 'unset',
            boxShadow: ({ customShadows }) => customShadows.z16,
          },
          '& > div > .text': {
            WebkitLineClamp: 'unset',
          },
        },
      }}
    >
      <Box
        sx={{
          height: 50,
          width: 50,
          position: 'absolute',
          top: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateY(-50%)',
          bgcolor: 'background.neutral',
          color: 'primary.main',
          borderRadius: '50%',
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
        fontSize="large"
        className="iconBox"
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="subtitle1" color={'primary.main'}>
          {title}
        </Typography>
        <Typography
          className="text"
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 2,
          }}
          variant="paragraph"
          color={'text.secondary'}
        >
          {text}
        </Typography>
      </Box>
    </Card>
  );
};

export default function ResumeArticle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mouseX = useMotionValue(Infinity);

  return (
    <>
      <AnimatePresence>
        <Box component={motion.div} {...varFadeInDown} pb={3}>
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
              <CardHeader title="Seeking Jobs" sx={{ color: 'primary.main' }} />
              <CardContent>
                <Typography variant="paragraph" color={'text.secondary'}>
                  {jobSearchText}
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
              Development Skills:
            </Typography>
            <Stack
              pb={2}
              gap={1}
              component={motion.div}
              flexWrap={'wrap'}
              direction={'row'}
              onMouseMove={(e) => mouseX.set(e.pageX)}
              onMouseLeave={() => mouseX.set(Infinity)}
            >
              {SKILLS_ICONS.map((icon, id) => {
                const iconTRansition = {
                  duration: 0.64 + id / 4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                };
                const iconFadeToRight = {
                  initial: { x: 400, opacity: 0 },
                  animate: { x: 0, opacity: 1, transition: iconTRansition },
                };
                return (
                  <IconContainer
                    key={id}
                    mouseX={mouseX}
                    icon={
                      <Tooltip title={icon.title}>
                        <motion.img
                          height={'100%'}
                          width={'100%'}
                          {...iconFadeToRight}
                          src={icon.href}
                        />
                      </Tooltip>
                    }
                  />
                );
              })}
            </Stack>
          </Box>
        </Box>
      </AnimatePresence>
      <DialogSlide
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Search for an internship"
        content={jobSearchText}
      />
    </>
  );
}
