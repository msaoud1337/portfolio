import { EyeIcon } from '@heroicons/react/24/solid';
import { Box, Button, Card, DialogContent, Stack, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
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

type DialogProps = {
  content: JSX.Element;
  isOpen: boolean;
  onClose: VoidFunction;
  title?: string;
};

function Dialoge({ content, onClose, isOpen, title }: DialogProps) {
  return (
    <React.Fragment>
      <Dialog open={isOpen} TransitionProps={{ timeout: 550 }} onClose={onClose}>
        <Box component={motion.div} layoutId={title}>
          {content}
        </Box>
      </Dialog>
    </React.Fragment>
  );
}

const ProjectCard = ({ title, imagesPath, description }: ProjectCardProps) => {
  const ViewCardButton = () => {
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
          <Button variant="contained" endIcon={<EyeIcon height={12} width={12} />}>
            More Details
          </Button>
        </motion.div>
      </motion.div>
    );
  };

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
        layoutId={`title${title}`}
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
  const { push, query } = useRouter();
  const openedProjectsTitle = query.project as string;

  const CustomeDialogContent = () => {
    const openedProject = initialItems.find((item) => item.title === openedProjectsTitle);
    console.log({ openedProject });
    return (
      <DialogContent>
        <video width="600" controls>
          <source src="video.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </DialogContent>
    );
  };

  return (
    <>
      <Stack p={0} gap={3}>
        {initialItems.map((item) => (
          <Card
            key={item.title}
            layoutId={item.title}
            component={motion.div}
            onClick={() => push(`?tab=Projects&project=${item.title}`)}
            sx={{
              cursor: 'pointer',
              boxShadow: 'none',
              position: 'relative',
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
      {openedProjectsTitle && (
        <Dialoge
          isOpen={!!openedProjectsTitle}
          onClose={() => push('?tab=Projects')}
          title={openedProjectsTitle}
          content={<CustomeDialogContent />}
        />
      )}
    </>
  );
}
