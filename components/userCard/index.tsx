/* eslint-disable react/no-unescaped-entities */
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Stack,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { userLinksConfig } from '@/utils';

const DISTANCE = 600;

const TRANSITION_ENTER = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const TRANSITION_ENTER_FASTER = {
  duration: 0.32,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const varFadeInUp = {
  initial: { y: DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER },
};

export const varFadeInUpFaster = {
  initial: { y: DISTANCE, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: TRANSITION_ENTER_FASTER },
};

export const varFadeInRight = {
  initial: { x: DISTANCE, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER },
};

const parentAnimation = {
  initial: { x: 0, opacity: 1 },
  animate: { transition: { duration: 0.32, ease: [0.68, -0.55, 0.27, 1.55] } },
};

const ImageBox = styled('img')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  objectFit: 'contain',
  maxHeight: '80%',
  maxWidth: '80%',
  borderRadius: '40%',
}));

type UserLinksProps = {
  title: string;
  name: string;
  icon: JSX.Element;
  href: string;
  tooltip: string;
};

type WraperProps = {
  children: React.ReactNode;
  href: string;
};

const Wraper = ({ children, href }: WraperProps) =>
  href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  ) : (
    <>{children}</>
  );

const UserLinks = ({ title, name, icon, href, tooltip }: UserLinksProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const handleOpenNewMail = () => {
    if (title === 'EMAIL') window.location.href = 'mailto:medaminesaoud8020@gmail.com';
    if (title === 'PHONE') {
      console.log('here');
      const tempInput = document.createElement('input');
      tempInput.value = '0617031650';
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      enqueueSnackbar('0617031650 copied', {
        variant: 'success',
      });
    }
  };

  return (
    <motion.div {...varFadeInUpFaster}>
      <Wraper href={href}>
        <Tooltip title={tooltip} placement="top">
          <Box
            onClick={handleOpenNewMail}
            sx={{
              display: 'flex',
              p: 1,
              py: 1,
              mb: 0.5,
              flexDirection: 'row',
              borderRadius: 1,
              cursor: 'pointer',
              overflow: 'hidden',
              ':hover': {
                backgroundColor: 'background.neutral',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid palette.divider',
                borderRadius: 1,
                mr: { xs: 2, md: 1, lg: 2 },
                backgroundColor: 'background.neutral',
                flexShrink: 0,
                p: { xs: 1, md: 1, lg: 1.4 },
                boxShadow: (theme) => theme.customShadows.z12,
              }}
            >
              {icon}
            </Box>
            <Stack gap={0.5} pt={0.1} sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
              <Typography variant="caption" color={'text.secondary'}>
                {title}
                <br />
              </Typography>
              <Typography
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: { xs: '160px', sm: 'unset', md: '140px' },
                }}
                variant="caption"
                color={'text.primary'}
                fontWeight={600}
              >
                {name}
              </Typography>
            </Stack>
          </Box>
        </Tooltip>
      </Wraper>
    </motion.div>
  );
};

type SideBarConfigProps = {
  value: string;
};

export default function SideBarConfig({ value }: SideBarConfigProps) {
  const [components, setComponents] = useState<JSX.Element[]>([]);
  const theme = useTheme();
  const stackRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobileOrTabllet = !isDesktop;
  const [isOpenAccordion, setAccordion] = useState(false);
  const [elementsHeight, setElementsHeight] = useState({
    stack: 0,
    accordion: 0,
  });

  const userAvatar = (
    <Box
      component={motion.div}
      {...varFadeInUp}
      sx={{
        maxHeight: { xs: '130px', sm: '150px', md: '256px' },
        maxWidth: { xs: '130px', sm: '150px', md: '256px' },
        position: 'relative',
      }}
    >
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height={'100%'}
        id="blobSvg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'white' }}></stop>
            <stop offset="100%" style={{ stopColor: theme.palette.primary.main }}></stop>
          </linearGradient>
        </defs>
        <path fill="url(#gradient)">
          <animate
            attributeName="d"
            dur="5000ms"
            repeatCount="indefinite"
            values={`
            M447.5,301Q409,352,371.5,392.5Q334,433,278.5,435.5Q223,438,155,438Q87,438,67.5,373.5Q48,309,52,251Q56,193,78.5,135.5Q101,78,160,56Q219,34,284.5,33Q350,32,404,74Q458,116,472,183Q486,250,447.5,301Z;
            M445.9455,310.84515Q440.08995,371.6903,391.1903,411.15397Q342.29065,450.61764,283.68166,437.57266Q225.07266,424.52769,175.72663,408.46455Q126.3806,392.40141,104.28977,345.51905Q82.19894,298.63668,67.54497,245.30018Q52.89101,191.96367,83.68166,142.75432Q114.47231,93.54497,169.32698,81.39012Q224.18166,69.23527,286.57266,50.61764Q348.96367,32,380.16437,89.02681Q411.36508,146.05362,431.58307,198.02681Q451.80106,250,445.9455,310.84515Z;
            M447.5,301Q409,352,371.5,392.5Q334,433,278.5,435.5Q223,438,155,438Q87,438,67.5,373.5Q48,309,52,251Q56,193,78.5,135.5Q101,78,160,56Q219,34,284.5,33Q350,32,404,74Q458,116,472,183Q486,250,447.5,301Z
            `}
          />
        </path>
      </svg>
      <ImageBox src="/me.png" />
    </Box>
  );

  const fullNameSection = (
    <motion.div {...varFadeInUp}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: isMobileOrTabllet ? 1 : 2,
          mb: 2,
        }}
      >
        <Typography variant="h5" textAlign={'center'}>
          Mohamed amine saoud
        </Typography>
        <Chip
          sx={{
            bgcolor: 'background.neutral',
            '&.MuiChip-root': {
              borderRadius: 1,
              border: `2px solid ${theme.palette.background.paper}`,
            },
          }}
          label={
            <Typography variant="caption" color={'text.secondary'}>
              FullStack Developer
            </Typography>
          }
          size="medium"
        />
      </Box>
    </motion.div>
  );

  const downloadButton =
    value === 'Resume' ? (
      <motion.div key={'190'} {...varFadeInUp}>
        <Divider key={2} component={motion.div} {...varFadeInUp} sx={{ pt: 2, mb: 3 }} />
        <Stack justifyContent={'center'}>
          <Button sx={{ m: 'auto' }} variant="contained" endIcon={<CloudDownloadIcon />}>
            Download cv
          </Button>
        </Stack>
      </motion.div>
    ) : (
      <></>
    );

  const componentsArray = useMemo(() => {
    const userLinks = userLinksConfig(theme.palette.primary.main).map((item, id) => (
      <UserLinks
        key={id}
        tooltip={item.tooltip}
        title={item.title}
        name={item.name}
        icon={item.icon}
        href={item.href}
      />
    ));

    return [
      <Stack
        key={0}
        sx={{
          flexDirection: { xs: 'row', sm: 'row', md: 'column' },
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          spacing: { xs: 2, sm: 2, md: 2 },
        }}
      >
        {userAvatar}
        {fullNameSection}
      </Stack>,
      <Divider key={1} component={motion.div} {...varFadeInUp} sx={{ mb: 2 }} />,
      ...userLinks,
    ];
  }, [theme.palette.primary.main]);

  const tablettMobileCard = isMobileOrTabllet && (
    <Accordion expanded={isOpenAccordion} onChange={() => setAccordion((prevState) => !prevState)}>
      <AccordionSummary sx={{ backgroundColor: 'background.neutral' }}>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Stack
            sx={{
              flexDirection: { xs: 'row', sm: 'row', md: 'column' },
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
              spacing: { xs: 2, sm: 2, md: 2 },
            }}
          >
            {userAvatar}
            {fullNameSection}
          </Stack>
        </motion.div>
      </AccordionSummary>
      <AccordionDetails ref={accordionRef} sx={{ py: 2 }}>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: elementsHeight.accordion }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {userLinksConfig(theme.palette.primary.main).map((item, id) => (
            <UserLinks
              key={id}
              tooltip={item.tooltip}
              title={item.title}
              name={item.name}
              icon={item.icon}
              href={item.href}
            />
          ))}
          {downloadButton}
        </motion.div>
      </AccordionDetails>
    </Accordion>
  );

  useEffect(() => {
    const addComponentWithDelay = async () => {
      for (const element of componentsArray) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setComponents((prevState: any) =>
          !prevState.includes(element) ? [...prevState, element] : [...prevState]
        );
      }
    };

    addComponentWithDelay();
  }, [isDesktop]);

  useEffect(() => {
    if (value === 'Resume' && !components.some((component) => component?.key === '190')) {
      setComponents((prev) => [...prev, downloadButton]);
    } else if (value !== 'Resume' && components.some((component) => component?.key === '190')) {
      setComponents((prev) => prev.filter((component) => component?.key !== '190'));
    }
  }, [value]);

  useLayoutEffect(() => {
    console.log(stackRef.current?.offsetHeight, accordionRef, components.length);
    if (isOpenAccordion) setAccordion(false);
    const updateStackHeight = () => {
      const newHeight = stackRef.current?.offsetHeight || 0;
      setElementsHeight({ ...elementsHeight, stack: newHeight });
      if (accordionRef.current) {
        if (value !== 'Resume')
          setElementsHeight({
            ...elementsHeight,
            accordion: 276 - 32,
          });
        // 32 for the padding top and bottom
        else setElementsHeight({ ...elementsHeight, accordion: 353 - 32 }); // 32 for the padding top and bottom
      }
    };

    updateStackHeight();

    window.addEventListener('resize', updateStackHeight);

    return () => {
      window.removeEventListener('resize', updateStackHeight);
    };
  }, [stackRef.current?.offsetHeight, accordionRef, components.length]);

  const desktopCard = isDesktop && (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: elementsHeight.stack }}
      exit={{ height: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Stack ref={stackRef} sx={{ height: 'auto' }}>
        {components.map((item: any, index: number) => (
          <motion.div key={index} {...parentAnimation}>
            {item}
          </motion.div>
        ))}
      </Stack>
    </motion.div>
  );

  return (
    <AnimatePresence>
      <Card
        sx={{
          bgcolor: 'background.paper',
          p: isDesktop ? 2 : 0,
          pb: isDesktop ? 3 : 0,
        }}
      >
        {tablettMobileCard}
        {desktopCard}
      </Card>
    </AnimatePresence>
  );
}
