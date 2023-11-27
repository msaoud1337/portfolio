import type { Palette } from '@mui/material';
import MyContact from 'components/tabs/contact';
import MyProject from 'components/tabs/projects';
import ResumeArticle from 'components/tabs/resume/ResumeArticle';

import MyCvPDF from '../../components/tabs/cv';
import { varFadeInRight, varFadeInRightSlow } from './animations';

export const TAB_CONFIG = [
  { value: 'About', element: <ResumeArticle /> },
  { value: 'Resume', element: <MyCvPDF /> },
  { value: 'Project', element: <MyProject /> },
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
          height="25"
          width="25"
          viewBox="0 -28.5 256 256"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                fill={color}
                fillRule="nonzero"
                d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
              />
            </g>
          </g>
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
      name: 'medaminesaoud8020@gmail.com',
      href: '',
      tooltip: 'medaminesaoud8020@gmail.com',
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
      title: 'PHONE',
      name: '06 17 03 16 50',
      href: '',
      tooltip: '+212 6 17 03 16 50',
      icon: (
        <svg
          viewBox="0 0 24 24"
          height="25"
          width="25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M12 18H12.01M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
          </g>
        </svg>
      ),
    },
  ];
};

export const SKILLS_ICONS = [
  { href: '/js.svg', title: 'javascript' },
  { href: '/ts.svg', title: 'typescript' },
  { href: '/react.svg', title: 'reactjs' },
  { href: '/next.svg', title: 'nextjs' },
  { href: '/mui.svg', title: 'material Ui' },
  { href: '/github.svg', title: 'github' },
  { href: '/git.svg', title: 'git' },
  { href: '/html.svg', title: 'html' },
  { href: '/css.svg', title: 'css' },
  {
    href: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
    title: 'c',
  },
];

export const INTERSTINGS = [
  {
    title: 'FrontEnd Web Dev',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
          <path strokeLinejoin="round" d="m12 19.01l.01-.011" />
          <path d="M18 18v3.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6V18M18 6V2.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V6" />
          <path strokeLinejoin="round" d="M15.5 8.5L19 12l-3.5 3.5m-7-7L5 12l3.5 3.5" />
        </g>
      </svg>
    ),
    animation: varFadeInRightSlow,
    content:
      "I'm interested in mobile development and eager to learn, despite currently having no experience in it.",
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
