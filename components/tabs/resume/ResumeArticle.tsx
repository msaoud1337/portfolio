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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type { MotionValue } from 'framer-motion';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { INTERSTINGS, SKILLS_ICONS } from '@/utils';
import { varFadeInDown, varFadeInRight } from '@/utils/animations';
import { aboutMeText, jobSearchText } from '@/utils/texts';

import DialogSlide from '../../dialog';

const MOBILEICONSIZE = '29px';
const DESKTOPICONSIZE = '35px';

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
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.only('xs'));
  const [maxHeight, setMaxHeight] = useState<number | string>('60px');
  const [nbline, setnbline] = useState<number | string>(2);

  useEffect(() => {
    if (isMobile) {
      setMaxHeight('120px');
    } else setMaxHeight('60px');
  }, [isMobile]);

  return (
    <Card
      onMouseEnter={() => {
        setMaxHeight('auto');
        setnbline('unset');
      }}
      onMouseLeave={() => {
        if (isMobile) setMaxHeight('120px');
        else setMaxHeight('60px');
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
        sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}
        color={'primary.main'}
      >
        <SvgIcon
          sx={{
            mr: 1,
            mb: 1,
            height: { xs: MOBILEICONSIZE, sm: DESKTOPICONSIZE },
            width: { xs: MOBILEICONSIZE, sm: DESKTOPICONSIZE },
          }}
          fontSize="large"
          color={'inherit'}
        >
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
