import { FooterProps } from 'react-day-picker';
import { FooterType, NavbarType, SosmedType } from '../types/config';
import { IconBrandGithub, IconBrandDiscord, IconBrandTiktok } from '@tabler/icons-react';

export const NavbarApp: NavbarType[] = [
  {
    title: 'Smart Contracts',
    params: '#',
  },
  {
    title: 'Service',
    params: '#',
  },
  {
    title: 'Solutions',
    params: '#',
  },
  {
    title: 'Roadmap',
    params: '#',
  },
  {
    title: 'Whitepape',
    params: '#',
  },
];

export const SosmedApp: SosmedType[] = [
  {
    icon: IconBrandGithub,
    params: 'https://github.com/MuliaAndiki',
    name: 'Github',
  },
  {
    icon: IconBrandDiscord,
    params: '#',
    name: 'Discord',
  },
  {
    icon: IconBrandTiktok,
    params: 'https://www.tiktok.com/@dikzzycde',
    name: 'Tiktok',
  },
];

export const Avatars = [
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/16860528',
    profileUrl: 'https://github.com/dillionverma',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/20110627',
    profileUrl: 'https://github.com/tomonarifeehan',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/106103625',
    profileUrl: 'https://github.com/BankkRoll',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/59228569',
    profileUrl: 'https://github.com/safethecode',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/59442788',
    profileUrl: 'https://github.com/sanjay-mali',
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/89768406',
    profileUrl: 'https://github.com/itsarghyadas',
  },
];

export const FooterConfig: FooterType[] = [
  {
    Explore: [
      {
        title: 'Resources',
        params: '#',
      },
      {
        title: 'Blog',
        params: '#',
      },
      {
        title: 'Documents',
        params: '#',
      },
    ],

    Menu: [
      {
        title: 'Home',
        params: '#',
      },
      {
        title: 'About',
        params: '#',
      },
      {
        title: 'Contact',
        params: '#',
      },
    ],
  },
];
