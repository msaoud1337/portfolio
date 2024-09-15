import { EyeIcon } from '@heroicons/react/24/solid';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import DialogSlide from 'components/dialog';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

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

const CV_DETAILS = {
  links: [
    {
      title: 'Linkedin : mohamed-amine-saoud',
      href: 'https://www.linkedin.com/in/mohamed-amine-saoud-63ab12249/',
    },
    {
      title: 'Email : medsaoud.amine@gmail.com',
      href: '',
    },
  ],
  presentation:
    'Experienced <b>FrontEnd</b> Developer with a strong background in UI/UX design. Passionate about creating high-quality, interactive, and responsive digital experiences. Proven problem solver who adapts quickly to new technologies and learns new skills efficiently. Recognized for delivering elegant solutions and staying updated with industry trends.',
  eProgramProjectDetails: [
    'Collaborated with two experts and an intern to develop a <b>Progressive Web App (PWA)</b> using <b>React.js</b> and <b>TypeScript</b>, handling all company business operations. Integrated credit services, payment processing, and a balance rewarding system within the application.',
    'Contributed in full-stack app for a company rewards system for <b>Webhelp</b>, converting employee performance points into balances for use on products and service',
    'Contributed in application that interacts with <b>EQDOM</b>, one of Morocco&apos;s largest credit companies, to handle credit requests and provide customers with instant status updates via API integration, using <b>Next.js</b> and <b>Express</b>.',
    'Maintained, debugged, and added over 15 new features to the company’s store based on client needs.',
    'Enhanced the company’s institutional website by adding sections and optimizing them with SEO best practices using <b>React.js</b>.',
    'Implemented animations throughout the <b>PWA</b>, including onboarding flows, layout transitions, and other interactive elements,',
  ],
  donVipDetails: [
    'Developed coach management system to streamline the coordination between coaches, clients, and sessions.',
    'Managed coach information, session scheduling, and pricing.',
    'Enabled coaches to oversee teams, track progress, and manage diet plans.',
    'Handled secure client payments and profile management.',
  ],
  docVisitDetails: [
    'Developed a website that Manage and Track Doctor&apos;s Visit History.',
    'Manages visitor information, the reason for the visit, and schedules the next visit date.',
  ],
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

export default function MyCvPDF() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ '*': { color: 'text.secondary' }, pb: 4 }}>
      <Stack mb={2} direction={'row'} justifyContent={'flex-end'} gap={1}>
        <Button
          onClick={() => setOpen(true)}
          endIcon={<EyeIcon height={18} width={18} />}
          size="small"
          variant="contained"
          sx={{ color: 'primary.contrastText' }}
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
        <Typography
          variant="body1"
          fontWeight={600}
          textAlign={{ xs: 'center', sm: 'start' }}
          pt={1}
        >
          PROFESSIONAL EXPERIENCE
        </Typography>
        <Divider />
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
        <Typography
          variant="body1"
          fontWeight={600}
          textAlign={{ xs: 'center', sm: 'start' }}
          pt={1}
        >
          EDUCATION
        </Typography>
        <Divider />
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
        <Typography
          variant="body1"
          fontWeight={600}
          textAlign={{ xs: 'center', sm: 'start' }}
          pt={1}
        >
          PROGRAMMING SKILLS
        </Typography>
        <Divider />
        <DetailItem content="<b>Programming Languages:</b> Javascript, Typescript, C." />
        <DetailItem
          content="<b>Frameworks/Libraries:</b> React.js, Next.js, Remix.js, React native, Nest.js, Redux,
          Frame motion."
        />
        <DetailItem content="<b>Markup/Styling:</b> HTML, CSS, Tailwind CSS, Material UI." />
        <DetailItem content="<b>Tools/Technologies:</b> Git, GitHub, Figma, Unix, GraphQL." />
      </Stack>
      {/* <PDFGenerator /> */}
      <DialogSlide
        isOpen={open}
        content={<PDFGenerator />}
        onClose={() => setOpen(false)}
        isFullScreen
      />
    </Box>
  );
}
