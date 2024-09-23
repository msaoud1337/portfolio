import { ArrowTopRightOnSquareIcon, EyeIcon } from '@heroicons/react/24/solid';
import {
  Box,
  Button,
  Card,
  Dialog,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRouter as nextRouter } from 'next/router';
import * as React from 'react';

import { Projects } from '@/utils/Projects';

type ProjectCardProps = {
  description?: string;
  imagesPath: string[];
  techs?: string;
  title: string;
};

const first = {
  initial: {
    x: 30,
    rotate: -5,
  },
  hover: {
    x: 0,
    rotate: 0,
  },
};
const second = {
  initial: {
    x: -30,
    rotate: 5,
  },
  hover: {
    x: 0,
    rotate: 0,
  },
};

const displayedCardImageOne = {
  initial: {
    x: 30,
    rotate: -5,
  },
  animate: {
    x: 0,
    rotate: 0,
  },
};

const displayedCardImageTwo = {
  initial: {
    x: -30,
    rotate: 5,
  },
  animate: {
    x: 0,
    rotate: 0,
  },
};

const ViewCardButton = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  if (!isDesktop) return null;
  return (
    <motion.div
      style={{
        position: 'absolute',
        bottom: 15,
        right: 5,
        overflow: 'hidden',
        paddingInline: '4px',
      }}
    >
      <motion.div
        variants={{
          initial: {
            x: '-110%',
          },
          hover: {
            x: 0,
          },
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <Button
          sx={{ boxShadow: 'unset' }}
          variant="contained"
          endIcon={<EyeIcon height={13} width={13} />}
        >
          More Details
        </Button>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ title, imagesPath, description }: ProjectCardProps) => {
  return (
    <Box component={motion.div} initial="initial" animate="animate" whileHover="hover">
      <ViewCardButton />
      <Stack
        flexDirection={'row'}
        component={motion.div}
        px={4}
        pb={0}
        gap={2}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        {imagesPath?.map((path, index) => (
          <Box
            component={motion.div}
            key={index}
            /* eslint-disable no-nested-ternary */
            variants={!index ? first : index === 2 ? second : undefined}
            flexGrow={1}
            zIndex={index === 1 ? 1 : 0}
          >
            <Box
              component={'img'}
              src={path}
              width={100}
              sx={{
                width: '100%',
                height: '90%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            />
          </Box>
        ))}
      </Stack>
      <Typography
        component={motion.p}
        variants={{
          initial: {
            x: 0,
            y: 0,
          },
          hover: {
            x: 5,
            y: -2,
          },
        }}
        variant="subtitle1"
        color={'primary.main'}
      >
        {title}
      </Typography>
      <Typography
        variant="paragraph"
        component={motion.p}
        variants={{
          initial: {
            x: 0,
            y: 0,
            fontWeight: '300',
          },
          hover: {
            x: 5,
            y: -2,
            fontWeight: '500',
          },
        }}
        color={'text.secondary'}
        sx={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          WebkitLineClamp: { xs: 2, sm: 3 },
          mb: -1.2,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

const initialItems = Projects.map((project, index) => ({
  ...project,
  id: index.toString(),
  component: (
    <ProjectCard
      description={project.description!}
      imagesPath={project.images}
      techs={project.techs}
      title={project.title}
    />
  ),
}));

export default function MyProject() {
  const { push } = useRouter();
  const { query } = nextRouter();
  const openedProjectsTitle = query.project as string;

  const openedProject = initialItems.find((item) => item.title === openedProjectsTitle);

  const CustomeDialogContent = openedProject && (
    <Dialog
      open
      TransitionProps={{ timeout: 550 }}
      onClose={() => push('?tab=Projects', { scroll: false })}
      component={motion.div}
      sx={{
        '.MuiPaper-root': {
          margin: 0,
        },
      }}
    >
      <Box component={motion.div} sx={{ p: 2 }}>
        <Typography
          component={openedProject.projectLink ? Link : Typography}
          href={openedProject.projectLink}
          target="_blank"
          mb={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          variant="subtitle1"
          color={'primary.main'}
        >
          {openedProject.title}
          {openedProject.projectLink && (
            <ArrowTopRightOnSquareIcon height={16} width={16} color="inherit" fontWeight={600} />
          )}
        </Typography>
        <Card
          component={motion.div}
          layoutId={openedProject.title}
          transition={{
            delay: 0.6,
            duration: 0.6,
          }}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            gap: 2,
          }}
          initial="initial"
          animate="animate"
        >
          {openedProject.images?.map((path, index) => (
            <Box
              component={motion.div}
              key={index}
              /* eslint-disable no-nested-ternary */
              variants={
                !index ? displayedCardImageOne : index === 2 ? displayedCardImageTwo : undefined
              }
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              flexGrow={1}
              zIndex={index === 1 ? 1 : 0}
            >
              <Box
                component={'img'}
                src={path}
                width={100}
                sx={{
                  width: '100%',
                  height: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              />
            </Box>
          ))}
        </Card>
        <Box component={'video'} sx={{ width: '100%', pt: 2, aspectRatio: '2/1.1' }} controls>
          <source src={`${openedProject.video}.mov`} type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
        <Typography
          variant="paragraph"
          color={'text.secondary'}
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            my: 1,
          }}
        >
          {openedProject.details}
        </Typography>
        <Typography variant="subtitle2" color={'text.primary'}>
          Technologies :
          <Typography variant="paragraph" color={'text.secondary'} fontWeight={500}>
            {` ${openedProject.techs}`}
          </Typography>
        </Typography>
      </Box>
    </Dialog>
  );

  return (
    <div>
      <Stack p={0} gap={3}>
        {initialItems.map((item) => (
          <Card
            key={item.title}
            layoutId={item.title}
            component={motion.div}
            onClick={() => push(`?tab=Projects&project=${item.title}`, { scroll: false })}
            sx={{
              cursor: 'pointer',
              boxShadow: 'none',
              position: 'relative',
              width: '100%',
              p: 2,
              ':hover': {
                borderColor: 'transparent',
                boxShadow: (theme) => theme.customShadows.z16,
              },
            }}
          >
            {item.component}
          </Card>
        ))}
      </Stack>
      {CustomeDialogContent}
    </div>
  );
}
