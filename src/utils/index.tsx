import type { Palette } from '@mui/material';
import MyContact from 'components/tabs/contact';
import MyProject from 'components/tabs/projects';
import ResumeArticle from 'components/tabs/resume/ResumeArticle';

import MyCvPDF from '../../components/tabs/cv';
import { varFadeInRight, varFadeInRightSlow } from './animations';

export const TAB_CONFIG = [
  { value: 'About', element: <ResumeArticle /> },
  { value: 'Resume', element: <MyCvPDF /> },
  { value: 'Projects', element: <MyProject /> },
  { value: 'Contact', element: <MyContact /> },
];

export const userLinksConfig = (color: string) => {
  return [
    {
      title: 'LINKEDIN',
      name: 'Mohmed amine saoud',
      href: 'https://www.linkedin.com/in/mohamed-amine-saoud-63ab12249/',
      tooltip: 'https://www.linkedin.com/in/mohamed-amine-saoud-63ab12249/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0 0 48 48"
        >
          <path
            fill={color}
            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
          ></path>
          <path
            fill="#FFF"
            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
          ></path>
        </svg>
      ),
    },
    {
      title: 'GITHUB',
      name: 'Msaoud 1337',
      href: 'https://github.com/msaoud1337',
      tooltip: 'https://github.com/msaoud1337',
      icon: (
        <svg height="25" viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.99925 0c-6.62625 0-11.99925 5.393546-11.99925 12.048322 0 5.3220135 3.438 9.837593 8.20725 11.430884.6.110687.819-.2612815.819-.580542 0-.28613-.0105-1.043621-.0165-2.04884-3.33825.728125-4.0425-1.615127-4.0425-1.615127-.54525-1.3914945-1.332-1.761957-1.332-1.761957-1.08975-.7477025.0825-.732643.0825-.732643 1.20375.085086 1.8375 1.2416525 1.8375 1.2416525 1.071 1.8410195 2.80875 1.3094205 3.49275 1.0007015.10875-.778574.41925-1.30942.762-1.6106095-2.66475-.304201-5.466-1.33728-5.466-5.953758 0-1.315444.46725-2.3906895 1.23525-3.2332665-.12375-.304954-.5355-1.529288.117-3.188088 0 0 1.008-.323778 3.3 1.234876.95775-.2673055 1.98375-.4005815 3.0045-.4058525 1.01925.005271 2.046.138547 3.0045.4058525 2.2905-1.558654 3.29625-1.234876 3.29625-1.234876.65475 1.6588.243 2.883134.11925 3.188088.7695.842577 1.23375 1.9178225 1.23375 3.2332665 0 4.6277725-2.80575 5.646545-5.47875 5.9447225.4305.3719685.8145 1.1068705.8145 2.231059 0 1.6106095-.015 2.909488-.015 3.304799 0 .3222725.216.697253.825.579036 4.76475-1.596303 8.19975-6.1088705 8.19975-11.429378 0-6.654776-5.373-12.048322-12.00075-12.048322"
            fill={color}
            transform="translate(0 .5)"
          />
        </svg>
      ),
    },
    {
      title: 'EMAIL',
      name: 'medsaoud.amine@gmail.com',
      href: '',
      tooltip: 'medsaoud.amine@gmail.com',
      icon: (
        <svg height="25" viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(1.5 4)">
            <path
              fill={color}
              d="m11.0988387 10.3846452c-.1981935.1238709-.4211613.1734193-.6193548.1734193-.1981936 0-.4211613-.0495484-.61935487-.1734193l-9.86012903-6.02012907v8.00206447c0 1.7094194 1.38735484 3.0967742 3.09677419 3.0967742h14.79019351c1.7094194 0 3.0967742-1.3873548 3.0967742-3.0967742v-8.00206447z"
            />
            <path
              fill={color}
              d="m17.8869677.00425806h-14.79019351c-1.46167742 0-2.70038709 1.04051613-2.99767742 2.42787097l10.40516133 6.34219355 10.3803871-6.34219355c-.2972904-1.38735484-1.536-2.42787097-2.9976775-2.42787097z"
              opacity=".48"
            />
          </g>
        </svg>
      ),
    },
    {
      title: 'LOCATION',
      name: 'Morocco, Khouribga',
      href: 'https://www.google.com/maps/place/Khouribga/@32.8807847,-6.9996947,12z/data=!3m1!4b1!4m6!3m5!1s0xda427fa6cc01abd:0x81e42d2370814027!8m2!3d32.8867434!4d-6.9114722!16zL20vMDRsdHF0?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D',
      tooltip: 'Morocco, Khouribga',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512">
          <circle cx="256" cy="192" r="32" fill={color} />
          <path
            fill={color}
            d="M256 32c-88.22 0-160 68.65-160 153c0 40.17 18.31 93.59 54.42 158.78c29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"
          />
        </svg>
      ),
    },
  ];
};

export const SKILLS_ICONS = [
  { href: '/js.svg', title: 'Javascript' },
  { href: '/ts.svg', title: 'Typescript' },
  { href: '/react.svg', title: 'ReactJs' },
  { href: '/remix.svg', title: 'RemixJs' },
  { href: '/next.svg', title: 'NextJs' },
  { href: '/redux.svg', title: 'Redux' },
  { href: '/mui.svg', title: 'Material Ui' },
  { href: '/github.svg', title: 'Github' },
  { href: '/git.svg', title: 'Git' },
  { href: '/html.svg', title: 'Html' },
  { href: '/css.svg', title: 'Css' },
  { href: '/tailwind.svg', title: 'Tailwind' },
  { href: '/framerMotion.svg', title: 'Framer Motion' },
  {
    href: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
    title: 'c',
  },
  { href: '/nest.svg', title: 'NestJs' },
];

export const INTERSTINGS = [
  {
    title: 'FrontEnd Web Dev',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={30}
        width={30}
        style={{ transform: 'rotate(-45deg)' }}
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3.2 14.222V4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 19h2m1-13l2 2l-2 2m-4-4L8 8l2 2"
          />
        </g>
      </svg>
    ),
    animation: varFadeInRight,
    content:
      "I'm currently immersed in frontend web development, specifically improving my skills in React and Next.js to create more dynamic and robust web applications.",
  },
  {
    title: 'Mobile Dev',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={30}
        width={30}
        style={{ transform: 'rotate(-45deg)' }}
      >
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
          <path strokeLinejoin="round" d="m12 19.01l.01-.011" />
          <path d="M18 18v3.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6V18M18 6V2.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V6" />
          <path strokeLinejoin="round" d="M15.5 8.5L19 12l-3.5 3.5m-7-7L5 12l3.5 3.5" />
        </g>
      </svg>
    ),
    animation: varFadeInRightSlow,
    content:
      "I'm interested in mobile development and excited to learn. Although I currently have no hands-on experience, I am eager to acquire the necessary skills and knowledge to master it.",
  },
];

export const AvatarBackgroundBlop = ({ palette }: { palette: Palette }) => (
  <svg
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100%"
    height={'100%'}
    id="blobSvg"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: palette.primary.main }}></stop>
        <stop
          offset="100%"
          style={{ stopColor: palette.mode === 'dark' ? 'white' : 'black' }}
        ></stop>
      </linearGradient>
    </defs>
    <path fill="url(#gradient)">
      <animate
        attributeName="d"
        dur="5000ms"
        repeatCount="indefinite"
        values={`
        M447.5,301Q409,352,371.5,392.5Q334,433,278.5,435.5Q223,438,155,438Q87,438,67.5,373.5Q48,309,52,251Q56,193,78.5,135.5Q101,78,160,56Q219,34,284.5,33Q350,32,404,74Q458,116,472,183Q486,250,447.5,301Z;
        M445.9455,310.84515Q440.08995,371.6903,391.1903,411.15397Q342.29065,450.61764,283.68166,437.57266Q225.07266,424.52769,175.72663,408.46455Q126.3806,392.40141,104.28977,345.51905Q82.19894,298.63668,67.54497,245.30018Q52.89101,191.96367,83.68166,142.75432Q114.47231,93.54497,169.32698,81.39012Q224.18166,69.23527,286.57266,50.61764Q348.96367,32,380.16437,89.02681Q411.36508,146.05362,431.58307,198.02681Q451.80106,250,445.9455,310.84515Z;
        M447.5,301Q409,352,371.5,392.5Q334,433,278.5,435.5Q223,438,155,438Q87,438,67.5,373.5Q48,309,52,251Q56,193,78.5,135.5Q101,78,160,56Q219,34,284.5,33Q350,32,404,74Q458,116,472,183Q486,250,447.5,301Z
        `}
      />
    </path>
  </svg>
);
