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
import Image from 'next/image';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { AvatarBackgroundBlop, userLinksConfig } from '@/utils';
import { parentAnimation, varFadeInUp, varFadeInUpFaster } from '@/utils/animations';

const ImageBox = styled(Image)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(10%, 10%)',
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
  const isTabletOrMObile = useMediaQuery(useTheme().breakpoints.between('xs', 'md'));

  const handleOpenNewMail = () => {
    if (title === 'EMAIL') window.location.href = 'mailto:medaminesaoud8020@gmail.com';
    if (title === 'PHONE') {
      const tempInput = document.createElement('input');
      tempInput.value = '0617031650';
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      enqueueSnackbar('0617031650 copied', {
        variant: 'success',
      });
      if (isTabletOrMObile) window.location.href = 'tel:0617031650';
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
                  maxWidth: { xs: 'unset', sm: 'unset', md: '140px' },
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
  const { palette, breakpoints } = useTheme();
  const stackRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  const isMobileOrTabllet = !isDesktop;
  const [isOpenAccordion, setAccordion] = useState(true);
  const [elementsHeight, setElementsHeight] = useState({
    stack: 0,
    accordion: 0,
  });

  const handleDownload = () => {
    const fileUrl = 'msaoudsCv.pdf';
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'msaoudCv.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const userAvatar = (
    <Box
      component={motion.div}
      {...(isDesktop ? varFadeInUp : {})}
      sx={{
        maxHeight: { xs: '130px', sm: '150px', md: '256px' },
        maxWidth: { xs: '130px', sm: '150px', md: '256px' },
        position: 'relative',
      }}
    >
      <AvatarBackgroundBlop palette={palette} />
      <ImageBox src="/me.png" loading="lazy" alt="me.png" fill />
    </Box>
  );

  const fullNameSection = (
    <motion.div {...(isDesktop ? varFadeInUp : {})}>
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
              border: `2px solid ${palette.background.paper}`,
            },
          }}
          label={
            <Typography variant="caption" color={'text.secondary'}>
              Frontend Developer
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
          <Button
            sx={{ m: 'auto', color: 'primary.contrastText' }}
            variant="contained"
            endIcon={<CloudDownloadIcon />}
            onClick={handleDownload}
          >
            Download cv
          </Button>
        </Stack>
      </motion.div>
    ) : (
      <></>
    );

  const componentsArray = useMemo(() => {
    const userLinks = userLinksConfig(palette.primary.main).map((item, id) => (
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
  }, [palette]);

  const widthRef = useRef<HTMLDivElement | null>(null);

  const tablettMobileCard = isMobileOrTabllet && (
    <AnimatePresence>
      <motion.div>
        <Accordion
          ref={widthRef}
          expanded={isOpenAccordion}
          onChange={() => setAccordion((prevState) => !prevState)}
        >
          <AccordionSummary sx={{ backgroundColor: 'background.neutral' }}>
            <motion.div>
              <Stack
                sx={{
                  flexDirection: { xs: 'row', sm: 'row', md: 'column' },
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start',
                  spacing: { xs: 2, sm: 2, md: 2 },
                }}
              >
                {userAvatar}
                {fullNameSection}
              </Stack>
              <Button
                size={isDesktop ? 'medium' : 'small'}
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  minWidth: { xs: '100px', md: '150px' },
                  borderRadius: '0 0 0 18px',
                  color: 'primary.contrastText',
                  ':hover': {
                    color: 'primary.contrastText',
                  },
                  background: `linear-gradient(to right, ${palette.primary.main}, ${
                    palette.mode === 'light' ? palette.primary.dark : palette.primary.light
                  })`,
                }}
                variant="contained"
              >
                {isOpenAccordion ? 'Collapse' : 'Extend'}
              </Button>
            </motion.div>
          </AccordionSummary>
          <AccordionDetails ref={accordionRef} sx={{ py: 2 }}>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: elementsHeight.accordion }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {userLinksConfig(palette.primary.main).map((item, id) => (
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
      </motion.div>
    </AnimatePresence>
  );

  const desktopCard = isDesktop && (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: elementsHeight.stack }}
      exit={{ height: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Stack ref={stackRef} sx={{ height: 'auto' }}>
        {components.map((item, index) => (
          <motion.div key={index} {...parentAnimation}>
            {item}
          </motion.div>
        ))}
      </Stack>
    </motion.div>
  );

  useEffect(() => {
    if (components.length === 0) {
      const addComponentWithDelay = async () => {
        for (const element of componentsArray) {
          if (isDesktop) {
            await new Promise((resolve) => setTimeout(resolve, 800));
            setComponents((prevState) =>
              !prevState.includes(element) ? [...prevState, element] : [...prevState]
            );
          }
        }
      };
      addComponentWithDelay();
    }
  }, []);

  useEffect(() => {
    if (components.length >= 6) {
      if (value === 'Resume' && !components.some((component) => component?.key === '190')) {
        setComponents((prev) => [...prev, downloadButton]);
      } else if (value !== 'Resume' && components.some((component) => component?.key === '190')) {
        setComponents((prev) => prev.filter((component) => component?.key !== '190'));
      }
    }
  }, [value, components.length]);

  useLayoutEffect(() => {
    const updateStackHeight = () => {
      const newHeight = stackRef.current?.offsetHeight || 0;
      setElementsHeight({ ...elementsHeight, stack: newHeight });
      if (accordionRef.current) {
        if (value !== 'Resume')
          setElementsHeight({
            ...elementsHeight,
            accordion: 276 - 32,
          });
        else setElementsHeight({ ...elementsHeight, accordion: 353 - 32 });
      }
    };

    updateStackHeight();

    window.addEventListener('resize', updateStackHeight);

    return () => {
      window.removeEventListener('resize', updateStackHeight);
    };
  }, [stackRef.current?.offsetHeight, components.length, value]);

  return (
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
  );
}
