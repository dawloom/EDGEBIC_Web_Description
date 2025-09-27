import * as React from 'react';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import {
  BookIcon,
  // BookOpenIcon,
  ClipboardIcon,
  FileTextIcon,
  // MapIcon,
  MonitorIcon,
  PackageIcon,
  ZapIcon
} from 'lucide-react';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon
} from '@/components/ui/brand-icons';
import { Routes } from '@/constants/routes';

export const MENU_LINKS = [
  {
    title: 'Home',
    description: 'Return to homepage',
    icon: <MonitorIcon className="size-5 shrink-0" />,
    href: Routes.Root,
    external: false
  },
  {
    title: 'Features',
    items: [
      {
        title: 'All Features',
        description: 'Complete feature overview',
        icon: <ZapIcon className="size-5 shrink-0" />,
        href: Routes.Features,
        external: false
      },
      {
        title: 'Summary Features',
        description: 'Key capabilities at a glance',
        icon: <FileTextIcon className="size-5 shrink-0" />,
        href: Routes.SummaryFeatures,
        external: false
      },
      {
        title: 'Why User Solutions?',
        description: 'What makes us unique',
        icon: <BookIcon className="size-5 shrink-0" />,
        href: Routes.WhyUserSolutions,
        external: false
      }
    ]
  },
  {
    title: 'Company',
    items: [
      {
        title: 'Mission',
        description: 'Our company mission and vision',
        icon: <BookIcon className="size-5 shrink-0" />,
        href: Routes.Mission,
        external: false
      },
      {
        title: 'Values',
        description: 'Our core company values',
        icon: <ZapIcon className="size-5 shrink-0" />,
        href: Routes.Values,
        external: false
      },
      {
        title: 'History',
        description: '30+ years of manufacturing excellence',
        icon: <FileTextIcon className="size-5 shrink-0" />,
        href: Routes.History,
        external: false
      }
    ]
  },
  {
    title: 'Contact',
    description: 'Reach out for assistance',
    icon: <PaperPlaneIcon className="size-5 shrink-0" />,
    href: Routes.Contact,
    external: false
  },
  {
    title: 'Solutions',
    description: 'Manufacturing solutions portfolio',
    icon: <PackageIcon className="size-5 shrink-0" />,
    href: Routes.Solutions,
    external: false
  },
  {
    title: 'About Us',
    description: 'Meet our team and learn our story',
    icon: <BookIcon className="size-5 shrink-0" />,
    href: Routes.About,
    external: false
  },
  {
    title: 'Success Stories',
    description: 'Customer testimonials and case studies',
    icon: <ZapIcon className="size-5 shrink-0" />,
    href: Routes.SuccessStories,
    external: false
  },
  {
    title: 'Excel Templates',
    description: 'Excel applications for manufacturing scheduling',
    icon: <FileTextIcon className="size-5 shrink-0" />,
    href: Routes.ExcelTemplates,
    external: false
  },
  {
    title: 'Resource Management',
    description: 'Resource management insights and best practices',
    icon: <BookIcon className="size-5 shrink-0" />,
    href: Routes.ResourceManagement,
    external: false
  }
  // {
  //   title: 'Resources',
  //   items: [
  //     {
  //       title: 'Contact',
  //       description: 'Reach out for assistance',
  //       icon: <PaperPlaneIcon className="size-5 shrink-0" />,
  //       href: Routes.Contact,
  //       external: false
  //     },
  //     {
  //       title: 'Roadmap',
  //       description: 'See what is coming next',
  //       icon: <MapIcon className="size-5 shrink-0" />,
  //       href: Routes.Roadmap,
  //       external: true
  //     },
  //     {
  //       title: 'Docs',
  //       description: 'Learn how to use our platform',
  //       icon: <BookOpenIcon className="size-5 shrink-0" />,
  //       href: Routes.Docs,
  //       external: false
  //     }
  //   ]
  // },
  // {
  // title: 'Pricing',
  // href: Routes.Pricing,
  // external: false
  // },
  // {
  //   title: 'Blog',
  //   href: Routes.Blog,
  //   external: false
  // },
  // {
  //   title: 'Story',
  //   href: Routes.Story,
  //   external: false
  // }
];

export const FOOTER_LINKS: Array<{
  title: string;
  links: Array<{
    name: string;
    href: string;
    external: boolean;
  }>;
}> = [];

export const SOCIAL_LINKS = [
  {
    name: 'X (formerly Twitter)',
    href: '#',
    icon: <XIcon className="size-4 shrink-0" />
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: <LinkedInIcon className="size-4 shrink-0" />
  },
  {
    name: 'Facebook',
    href: '#',
    icon: <FacebookIcon className="size-4 shrink-0" />
  },
  {
    name: 'Instagram',
    href: '#',
    icon: <InstagramIcon className="size-4 shrink-0" />
  },
  {
    name: 'TikTok',
    href: '#',
    icon: <TikTokIcon className="size-4 shrink-0" />
  }
];

export const DOCS_LINKS = [
  {
    title: 'Getting Started',
    icon: <PackageIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: 'Introduction',
        href: '/docs',
        items: []
      },
      {
        title: 'Dependencies',
        href: '/docs/dependencies',
        items: []
      }
    ]
  },
  {
    title: 'Guides',
    icon: <BookIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: 'Using MDX',
        href: '/docs/using-mdx',
        items: []
      }
    ]
  }
];
