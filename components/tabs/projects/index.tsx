import { Box, Card, Stack, Typography } from '@mui/material';
import DialogSlide from 'components/dialog';
import { Reorder } from 'framer-motion';
import { useState } from 'react';

import { Projects } from '@/utils/Projects';

interface Props {
  item: {
    id: string;
    component: JSX.Element;
    title: string;
    image: string;
    content: string;
    techs: string;
  };
}

export const Item = ({ item }: Props) => {
  return (
    <Reorder.Item as={'div'} value={item} id={item.id}>
      {item.component}
    </Reorder.Item>
  );
};

type ProjectCardProps = {
  content: string;
  imagePath: string;
  techs: string;
  title: string;
};

const ProjectCard = ({ content, imagePath, techs, title }: ProjectCardProps) => {
  return (
    <Card>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <Box
          component={'img'}
          src={imagePath}
          sx={{
            width: { xs: '100%', sm: '200px' },
            height: { xs: '300px', sm: 'unset' },
            objectFit: 'cover',
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
            {content}
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
      content={project.content}
      imagePath={project.image}
      techs={project.image}
      title={project.title}
    />
  ),
}));

export default function MyProject() {
  const [items, setItems] = useState(initialItems);
  return (
    <>
      <Stack p={0} gap={3} axis="y" component={Reorder.Group} onReorder={setItems} values={items}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Stack>
      <DialogSlide isOpen={false} onClose={() => {}} content={''} />
    </>
  );
}
