import { ArrowTopRightOnSquareIcon, EyeIcon, XMarkIcon } from '@heroicons/react/24/solid';
import {
  Box,
  Button,
  Card,
  Dialog,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRouter as nextRouter } from 'next/router';
import { useState } from 'react';

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

const ViewCardButton = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  if (!isDesktop) return null;
  return (
    <motion.div
      style={{
        position: 'absolute',
        bottom: '16px',
        right: '11px',
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
        px={{ xs: 0, sm: 2 }}
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
              loading="lazy"
              src={path}
              width={100}
              sx={{
                width: '100%',
                aspectRatio: { xs: '3/5', sm: '3/4' },
                objectFit: 'cover',
                borderRadius: 2,
                overflow: 'hidden',
                mb: 1,
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

const ProjectContent = ({ openedProject }: { openedProject?: (typeof initialItems)[0] }) => {
  const { push } = useRouter();
  const [image, setImage] = useState<string | undefined>(undefined);

  if (!openedProject) return null;
  return (
    <Dialog
      open
      TransitionProps={{ timeout: 550 }}
      onClose={() => push('?tab=Projects', { scroll: false })}
      component={motion.div}
      sx={{
        '.MuiDialog-paper': {
          maxHeight: 'calc(100% - 140px)',
        },
      }}
    >
      <Box component={motion.div} sx={{ p: 2, position: 'relative', opacity: 1 }}>
        <IconButton
          edge="end"
          onClick={() => push('?tab=Projects', { scroll: false })}
          aria-label="close"
          sx={{ position: 'absolute', right: 18, top: 4, color: 'primary.main' }}
        >
          <XMarkIcon height={24} width={24} color="inherit" />
        </IconButton>
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
            textDecoration: openedProject.projectLink ? 'underline' : 'unset',
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
        <Box component={'video'} sx={{ width: '100%', pt: 2, aspectRatio: '2/1.1' }} controls>
          <source src={`${openedProject.video}.mov`} type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
        {image && (
          <Card
            key={image}
            component={motion.div}
            transition={{ delay: 0.2 }}
            layoutId={image}
            sx={{
              position: 'relative',
              borderRadius: 2,
              my: 2,
            }}
          >
            <img key={image} alt="selected image" src={image} width={'100%'} />
            <IconButton
              edge="end"
              onClick={() => setImage(undefined)}
              aria-label="close"
              sx={{ position: 'absolute', right: 18, top: 4, color: 'primary.main' }}
            >
              <XMarkIcon height={24} width={24} color="inherit" />
            </IconButton>
          </Card>
        )}
        <Card
          component={motion.div}
          layoutId={openedProject.title}
          layout={'position'}
          transition={
            !image
              ? {
                  delay: 0.3,
                  duration: 0.6,
                }
              : {
                  delay: 0.3,
                  duration: 0.6,
                }
          }
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            gap: 2,
            overflow: 'visible',
          }}
          initial="initial"
          animate="animate"
        >
          {openedProject.images
            // ?.filter((path) => path !== image)
            .map((path, index) => (
              <Box
                onClick={() => setImage(path)}
                flexGrow={1}
                zIndex={index === 1 ? 1 : 0}
                key={path}
              >
                <Box
                  component={motion.img}
                  key={path}
                  layoutId={path}
                  loading="lazy"
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
        <motion.div
          layout
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
        >
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
            {`${openedProject.details} ${openedProject.moreDetails}`}
          </Typography>
          <Typography variant="subtitle2" color={'text.primary'}>
            Technologies :
            <Typography variant="paragraph" color={'text.secondary'} fontWeight={500}>
              {` ${openedProject.techs}`}
            </Typography>
          </Typography>
        </motion.div>
      </Box>
    </Dialog>
  );
};

export default function MyProject() {
  const { push } = useRouter();
  const { query } = nextRouter();
  const openedProjectsTitle = query.project as string;
  const openedProject = initialItems.find((item) => item.title === openedProjectsTitle);

  return (
    <div>
      <Typography sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
        {'Here are my recent web projects (5):'.split(' ').map((item, index) => (
          <Typography
            component={motion.p}
            variant="body2"
            color="text.secondary"
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + 0.2 * index, duration: 0.4, ease: 'easeInOut' }}
          >
            {item}
          </Typography>
        ))}
      </Typography>
      <Stack p={0} pt={1} pb={3} gap={3}>
        {initialItems.map((item, index) => (
          <Card
            key={item.title}
            layoutId={item.title}
            component={motion.div}
            onClick={() => push(`?tab=Projects&project=${item.title}`, { scroll: false })}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4 + 0.1 * index,
                duration: 0.6,
              },
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
      <ProjectContent key={openedProject?.id} openedProject={openedProject} />
    </div>
  );
}
