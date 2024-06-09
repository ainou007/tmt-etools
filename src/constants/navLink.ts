import { TNavLink } from '@/types';
import { Binary, CaseSensitive, MailCheck, MailPlus } from 'lucide-react';

const navLinks: TNavLink[] = [
  {
    label: 'Text Transform',
    route: 'text-transform',
    icon: CaseSensitive,
  },
  {
    label: 'Text Encoder',
    route: 'text-encoder',
    icon: Binary,
  },
  {
    label: 'Email Validator',
    route: 'email-validator',
    icon: MailCheck,
  },
  // {
  //   label: 'Email Builder',
  //   route: 'email-builder',
  //   icon: MailPlus,
  // },
];

export default navLinks;
