import { EyeIcon } from '@heroicons/react/24/solid';
import { Box, Button, Divider, Stack, Typography, useTheme } from '@mui/material';
import DialogSlide from 'components/dialog';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { CV_DETAILS } from '@/utils/texts';

const PDFGenerator = dynamic(
  import('./CvContent').then((res) => res.default),
  {
    ssr: false,
  }
);

const Links = ({ children, href }: { children: ReactNode; href: string }) => {
  const handleClick = () => {
    if (!href) window.location.href = 'mailto:medsaoud.amine@gmail.com';
  };

  return (
    <Typography
      component={Link}
      target="_blank"
      href={href}
      typography={'paragraph'}
      mx={1}
      color={'text.secondary'}
      fontWeight={600}
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        ':hover': { textDecoration: ({ palette }) => `underline ${palette.primary.main}` },
      }}
    >
      {children}
    </Typography>
  );
};

const DetailItem = ({ content }: { content: string }) => {
  return (
    <Typography
      variant="paragraph"
      px={2}
      sx={{ '&::before': { content: '"• "' } }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

const Title = ({ title, duration }: { title: string; duration: string }) => {
  return (
    <Stack justifyContent={'space-between'} flexDirection={{ xs: 'column', sm: 'row' }}>
      <Typography
        variant="paragraph"
        textAlign={'center'}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Typography variant="paragraph" textAlign={'center'}>
        {duration}
      </Typography>
    </Stack>
  );
};

const Project = ({
  title,
  duration,
  projectDetails,
  mb = 0,
}: {
  title: string;
  duration: string;
  projectDetails?: string[];
  mb?: number;
}) => {
  return (
    <>
      <Title title={title} duration={duration} />
      <Stack mb={mb}>
        {projectDetails?.map((details, index) => (
          <DetailItem key={index} content={details} />
        ))}
      </Stack>
    </>
  );
};

const WhileInViewBox = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {children}
    </motion.div>
  );
};

export default function MyCvPDF() {
  const [open, setOpen] = useState(false);
  const { contrastText } = useTheme().palette.primary;

  return (
    <Box sx={{ '*': { color: 'text.secondary' }, pb: 4 }}>
      <Stack mb={2} direction={'row'} justifyContent={'flex-end'} gap={1}>
        <Button
          onClick={() => setOpen(true)}
          endIcon={<EyeIcon height={18} width={18} fill={contrastText} />}
          size="small"
          variant="contained"
          sx={{ color: contrastText }}
        >
          View as pdf
        </Button>
      </Stack>
      <Stack gap={1}>
        <Typography variant="h4" textAlign={'center'}>
          Mohamed amine saoud
        </Typography>
        <Stack
          flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
          justifyContent={'center'}
          textAlign={'center'}
          whiteSpace={'nowrap'}
        >
          {CV_DETAILS.links.map((link, index) => (
            <Links key={index} href={link.href}>
              {link.title}
            </Links>
          ))}
        </Stack>
        <Typography
          variant="paragraph"
          dangerouslySetInnerHTML={{ __html: CV_DETAILS.presentation }}
        />
        <WhileInViewBox>
          <Typography
            variant="body1"
            fontWeight={600}
            textAlign={{ xs: 'center', sm: 'start' }}
            pt={1}
          >
            PROFESSIONAL EXPERIENCE
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Stack gap={0.5}>
            <Project
              title="<b>eProgram</b> - CasaBlanca (Hybrid)"
              duration="Feb 2024 - Aug 2024"
              projectDetails={CV_DETAILS.eProgramProjectDetails}
            />
            <Project
              title="<b>DonVIP</b> - (coaching website)"
              duration="Oct 2023 - Dec 2023"
              projectDetails={CV_DETAILS.donVipDetails}
            />
            <Project
              title="<b>DocVisit</b> History - (doc visits’s history)"
              duration="Jul 2023"
              projectDetails={CV_DETAILS.docVisitDetails}
            />
          </Stack>
        </WhileInViewBox>
        <WhileInViewBox>
          <Typography
            variant="body1"
            fontWeight={600}
            textAlign={{ xs: 'center', sm: 'start' }}
            pt={1}
          >
            EDUCATION
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Stack>
            <Project
              title="<b>1337 Coding School ( 42 Network )</b>"
              duration="Nov 2021 - Feb 2024"
              projectDetails={['Software Architect']}
              mb={1}
            />
            <Project
              title="<b>Institut Spécialisé de Technologie Appliquée de Khouribga</b>"
              duration="2018 - 2020"
              projectDetails={['Technicien Spécialisé Electromécanique des Systèmes Automatisés']}
            />
          </Stack>
        </WhileInViewBox>
        <WhileInViewBox>
          <Typography
            variant="body1"
            fontWeight={600}
            textAlign={{ xs: 'center', sm: 'start' }}
            pt={1}
          >
            PROGRAMMING SKILLS
          </Typography>
          <Divider sx={{ my: 1 }} />
          <DetailItem content="<b>Programming Languages:</b> Javascript, Typescript, C." />
          <DetailItem
            content="<b>Frameworks/Libraries:</b> React.js, Next.js, Remix.js, React native, Nest.js, Redux,
          Frame motion."
          />
          <DetailItem content="<b>Markup/Styling:</b> HTML, CSS, Tailwind CSS, Material UI." />
          <DetailItem content="<b>Tools/Technologies:</b> Git, GitHub, Figma, Unix, GraphQL." />
        </WhileInViewBox>
      </Stack>
      <DialogSlide
        isOpen={open}
        content={<PDFGenerator />}
        onClose={() => setOpen(false)}
        isFullScreen
      />
    </Box>
  );
}
