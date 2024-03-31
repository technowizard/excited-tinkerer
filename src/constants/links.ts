import { GithubIcon } from '@/assets/icons/github';
import { LinkedinIcon } from '@/assets/icons/linkedin';
import { XIcon } from '@/assets/icons/x';
import { MailIcon } from 'lucide-react';
import { customMetadata, defaultMetadata } from '../../site.config';

export const links = [
  { Icon: MailIcon, href: `mailto:${defaultMetadata.email}`, label: 'Email' },
  { Icon: LinkedinIcon, href: customMetadata.linkedinUrl, label: 'LinkedIn' },
  { Icon: GithubIcon, href: customMetadata.githubUrl, label: 'GitHub' },
  { Icon: XIcon, href: customMetadata.xUrl, label: 'X (formerly Twitter)' },
];
