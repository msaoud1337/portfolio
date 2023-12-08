import { Box, Card, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import DialogSlide from 'components/dialog';
import { Reorder } from 'framer-motion';
import { useState } from 'react';

import { Projects } from '@/utils/Projects';

type ProjectCardProps = {
  description: string;
  imagePath: string;
  techs: string;
  title: string;
};

type DialogContentType = {
  title: string;
  techs: string;
  contents: {
    objectif: { title: string; text: string };
    functionalities: { title: string; steps: string[] };
  };
  description?: string;
};

type UseStateType = {
  dialogContent?: DialogContentType;
  isOpen: boolean;
};

type DialongContentProps = {
  dialogContent: DialogContentType;
};

const ProjectCard = ({ description, imagePath, techs, title }: ProjectCardProps) => {
  return (
    <Card sx={{ cursor: 'pointer', ':hover': { bgcolor: (theme) => theme.palette.grey[50016] } }}>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <Box
          draggable={false}
          component={'img'}
          src={imagePath}
          sx={{
            minWidth: { xs: '100%', sm: '200px' },
            minHeight: { xs: '300px', sm: '200px' },
            maxWidth: { xs: '100%', sm: '200px' },
            maxHeight: { xs: '300px', sm: '200px' },
            objectFit: { xs: 'cover', sm: 'unset' },
          }}
        />
        <Stack p={2} justifyContent={'space-between'}>
          <Typography variant="subtitle1" color={'primary.main'}>
            {title}
          </Typography>
          <Typography
            variant="paragraph"
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
          <Typography
            variant="subtitle2"
            color={'text.primary'}
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              WebkitLineClamp: 1,
            }}
          >
            Technologies :
            <Typography variant="paragraph" color={'text.secondary'}>
              {` ${techs}`}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

const DialogContent = ({ dialogContent }: DialongContentProps) => {
  const { title, contents, techs, description } = dialogContent;
  return (
    <Stack py={1} gap={1}>
      <Typography variant="subtitle1" color={'primary.main'}>
        {title}
      </Typography>
      <Typography variant="paragraph" color={'primary.secondary'}>
        {`${description}`}
      </Typography>
      <Typography variant="subtitle2">
        {contents.objectif.title}
        {': '}
        <Typography variant="paragraph" color={'text.secondary'}>
          {contents.objectif.text}
        </Typography>
      </Typography>
      <Typography variant="subtitle2">
        {contents.functionalities.title}
        {':'}
        <Stack>
          {contents.functionalities.steps.map((step, index) => (
            <Typography key={index} variant="paragraph" color={'text.secondary'}>
              {'- '}
              {step}
            </Typography>
          ))}
        </Stack>
      </Typography>
      <Typography variant="subtitle1">
        technologies :
        <Typography variant="paragraph" color={'text.secondary'}>
          {` ${techs}`}
        </Typography>
      </Typography>
    </Stack>
  );
};

const initialItems = Projects.map((project, index) => ({
  ...project,
  id: index.toString(),
  component: (
    <ProjectCard
      description={project.description!}
      imagePath={project.image}
      techs={project.techs}
      title={project.title}
    />
  ),
}));

export default function MyProject() {
  const [items, setItems] = useState(initialItems);
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useMediaQuery(useTheme().breakpoints.only('xs'));
  const [isOpenDialog, setIsOpenDialog] = useState<UseStateType>({
    dialogContent: undefined,
    isOpen: false,
  });

  return (
    <>
      <Stack p={0} gap={3} axis="y" component={Reorder.Group} onReorder={setItems} values={items}>
        {items.map((item) => (
          <Reorder.Item
            drag={!isMobile ? 'y' : false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onClick={() => {
              if (!isDragging)
                setIsOpenDialog({
                  dialogContent: {
                    title: item.title,
                    techs: item.techs,
                    contents: item.contentDetails,
                    description: item.description,
                  },
                  isOpen: true,
                });
            }}
            key={item.id}
            as={'div'}
            value={item}
            id={item.id}
          >
            {item.component}
          </Reorder.Item>
        ))}
      </Stack>
      {isOpenDialog.dialogContent && (
        <DialogSlide
          isOpen={isOpenDialog.isOpen}
          onClose={() => setIsOpenDialog({ dialogContent: undefined, isOpen: false })}
          content={<DialogContent dialogContent={isOpenDialog.dialogContent} />}
        />
      )}
    </>
  );
}
