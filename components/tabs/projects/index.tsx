import { Box, Card, Stack, Typography } from '@mui/material';
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
          component={'img'}
          src={imagePath}
          sx={{
            minWidth: { xs: '100%', sm: '200px' },
            minHeight: { xs: '300px', sm: '200px' },
            maxWidth: { xs: '100%', sm: '200px' },
            maxHeight: { xs: '300px', sm: '200px' },
            objectFit: { xs: 'cover', sm: 'fill' },
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
            Technologies : {techs}
          </Typography>
        </Stack>
      </Stack>
    </Card>
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

const DialogContent = ({ dialogContent }: DialongContentProps) => {
  const { title, contents, techs, description } = dialogContent;
  return (
    <Box>
      <Typography mb={1} variant="subtitle1" color={'primary.main'}>
        {title}
      </Typography>
      <Typography mb={1} variant="subtitle2" color={'primary.secondary'}>
        {`_ ${description}`}
      </Typography>
      <Stack>
        <Typography mb={1} variant="subtitle2">
          {contents.objectif.title}
          {': '}
          <Typography variant="paragraph" color={'text.secondary'}>
            {contents.objectif.text}
          </Typography>
        </Typography>
        <Typography mb={1} variant="subtitle2">
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
      </Stack>
      <Typography variant="subtitle1">technologies : {techs}</Typography>
    </Box>
  );
};

export default function MyProject() {
  const [items, setItems] = useState(initialItems);
  const [isOpenDialog, setIsOpenDialog] = useState<UseStateType>({
    dialogContent: undefined,
    isOpen: false,
  });
  return (
    <>
      <Stack p={0} gap={3} axis="y" component={Reorder.Group} onReorder={setItems} values={items}>
        {items.map((item) => (
          <Reorder.Item
            onClick={() =>
              setIsOpenDialog({
                dialogContent: {
                  title: item.title,
                  techs: item.techs,
                  contents: item.contentDetails,
                  description: item.description,
                },
                isOpen: true,
              })
            }
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
