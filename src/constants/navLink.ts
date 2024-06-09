import { TNavLink } from '@/types';
import { Binary, CaseSensitive, MailCheck } from 'lucide-react';

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
];

export default navLinks;
