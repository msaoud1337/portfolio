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
    if (!href) window.location.href = 'mailto:medaminesaoud8020@gmail.com';
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

export default function MyCvPDF() {
  const [open, setOpen] = useState(false);

  const DetailItem = ({ children }: { children: ReactNode }) => {
    return (
      <Typography variant="paragraph" pl={2} sx={{ '&::before': { content: '"• "' } }}>
        {children}
      </Typography>
    );
  };

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
      <Stack>
        <Typography variant="h4" textAlign={'center'}>
          Mohamed amine saoud
        </Typography>
        <Stack flexDirection={'row'} justifyContent={'center'}>
          <Links href="">Email : medsaoud.amine@gmail.com</Links>
          <Links href="https://www.linkedin.com/in/mohamed-amine-saoud-63ab12249/">
            Linkedin : mohamed-amine-saoud
          </Links>
        </Stack>
        <Typography variant="paragraph">
          Experienced <b>FrontEnd</b> Developer with a strong background in UI/UX design. Passionate
          about creating high-quality, interactive, and responsive digital experiences. Proven
          problem solver who adapts quickly to new technologies and learns new skills efficiently.
          Recognized for delivering elegant solutions and staying updated with industry trends.
        </Typography>
        <Typography variant="body1" fontWeight={600} pt={2}>
          PROFESSIONAL EXPERIENCE
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Stack>
          <Stack justifyContent={'space-between'} flexDirection={'row'}>
            <Typography variant="paragraph">
              <b>eProgram</b> - CasaBlanca (Hybrid)
            </Typography>
            <Typography variant="paragraph">Feb 2024 – Aug 2024</Typography>
          </Stack>
          <Typography variant="paragraph" pl={1}>
            Front end developer
          </Typography>
          <DetailItem>
            Collaborated with two experts and an intern to develop a{' '}
            <b>Progressive Web App (PWA)</b> using <b>React.js</b> and <b>TypeScript</b>, handling
            all company business operations. Integrated credit services, payment processing, and a
            balance rewarding system within the application.
          </DetailItem>
          <DetailItem>
            Developed a full-stack app for a company rewards system for <b>Webhelp</b>, converting
            employee performance points into balances for use on products and service
          </DetailItem>
          <DetailItem>
            Developed an application that interacts with <b>EQDOM</b>, one of Morocco&apos;s largest
            credit companies, to handle credit requests and provide customers with instant status
            updates via API integration, using <b>Next.js</b> and <b>Express</b>.
          </DetailItem>
          <DetailItem>
            Maintained, debugged, and added over 15 new features to the company’s store based on
            client needs.
          </DetailItem>
          <DetailItem>
            Enhanced the company’s institutional website by adding sections and optimizing them with
            SEO best practices using <b>React.js</b>.
          </DetailItem>
          <DetailItem>
            Implemented animations throughout the <b>PWA</b>, including onboarding flows, layout
            transitions, and other interactive elements,
          </DetailItem>
          <Stack justifyContent={'space-between'} flexDirection={'row'}>
            <Typography variant="paragraph" fontWeight={700}>
              Freelance
            </Typography>
            <Typography variant="paragraph">Feb 2023 – Dec 2023</Typography>
          </Stack>
          <Typography variant="paragraph" pl={1}>
            DonVIP - (coaching website)
          </Typography>
          <DetailItem>
            Developed coach management system to streamline the coordination between coaches,
            clients, and sessions.
          </DetailItem>
          <DetailItem>Managed coach information, session scheduling, and pricing.</DetailItem>
          <DetailItem>
            Enabled coaches to oversee teams, track progress, and manage diet plans.
          </DetailItem>
          <DetailItem>Handled secure client payments and profile management.</DetailItem>
          <Typography variant="paragraph" pl={1}>
            DocVisit History - (doc visits’s history)
          </Typography>
          <DetailItem>
            Developed a website that Manage and Track Doctor&apos;s Visit History.{' '}
          </DetailItem>
          <DetailItem>
            Manages visitor information, the reason for the visit, and schedules the next visit
            date.
          </DetailItem>
        </Stack>
        <Typography variant="body1" fontWeight={600} pt={2}>
          EDUCATION
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Stack flexDirection={'row'} justifyContent={'space-between'}>
          <Typography variant="paragraph" fontWeight={700}>
            1337 Coding School ( 42 Network )
          </Typography>
          <Typography variant="paragraph">Nov 2021 - Feb 2024</Typography>
        </Stack>
        <DetailItem>Software Architect</DetailItem>
        <Stack flexDirection={'row'} justifyContent={'space-between'}>
          <Typography variant="paragraph" fontWeight={700}>
            Institut Spécialisé de Technologie Appliquée de Khouribga
          </Typography>
          <Typography variant="paragraph">2018 – 2020</Typography>
        </Stack>
        <DetailItem>Technicien Spécialisé Electromécanique des Systèmes Automatisés</DetailItem>
        <Typography variant="body1" fontWeight={600} pt={2}>
          PROGRAMMING SKILLS
        </Typography>
        <Divider sx={{ my: 1 }} />
        <DetailItem>
          <b>Programming Languages:</b> Javascript, Typescript, C.
        </DetailItem>
        <DetailItem>
          <b>Frameworks/Libraries:</b> React.js, Next.js, Remix.js, React native, Nest.js, Redux,
          Frame motion.
        </DetailItem>
        <DetailItem>
          <b>Markup/Styling:</b>HTML, CSS, Tailwind CSS, Material UI.
        </DetailItem>
        <DetailItem>
          <b>Tools/Technologies:</b>Git, GitHub, Figma, Unix, GraphQL.
        </DetailItem>
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
