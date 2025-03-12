import { Socials } from '@/types/ISocials';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export const socials: Socials[] = [
  {
    icon: <Linkedin />,
    href: 'https://linkedin.com/in/lucaserm',
    label: 'LinkedIn',
    handle: 'Lucas Macedo',
  },
  {
    icon: <Instagram />,
    href: 'https://instagram.com/fvckkiaz',
    label: 'Instagram',
    handle: '@kiaz',
  },
  {
    icon: <Mail />,
    href: 'mailto:lucas.macedo@ufms.br',
    label: 'Email',
    handle: 'lucas.macedo@ufms.br',
  },
  {
    icon: <Github />,
    href: 'https://github.com/lucaserm',
    label: 'Github',
    handle: 'lucaserm',
  },
];
