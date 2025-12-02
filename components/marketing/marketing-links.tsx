import * as React from 'react';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import {
  BookIcon,
  // BookOpenIcon,
  ClipboardIcon,
  DownloadIcon,
  Factory,
  FileTextIcon,
  HandshakeIcon,
  // MapIcon,
  MonitorIcon,
  NewspaperIcon,
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
    href: Routes.Root,
    external: false
  },
  {
    title: 'Industries',
    items: [
      {
        title: 'Manufacturing',
        description: 'Job shops and small manufacturers',
        icon: <Factory className="size-5 shrink-0" />,
        href: Routes.Solutions,
        external: false
      },
      {
        title: 'Production Planning',
        description: 'Production planning and scheduling solutions',
        icon: <ClipboardIcon className="size-5 shrink-0" />,
        href: Routes.ProductionPlanning,
        external: false
      }
    ]
  },
  {
    title: 'Reviews',
    href: Routes.SuccessStories,
    external: false
  },
  {
    title: 'Integrations',
    href: Routes.Partners,
    external: false
  },
  {
    title: 'Pricing',
    items: [
      {
        title: 'Excel Templates',
        description: 'Excel applications for manufacturing - $39-$1,200',
        icon: <FileTextIcon className="size-5 shrink-0" />,
        href: Routes.ExcelTemplates,
        external: false
      },
      {
        title: 'EDGEBIC',
        description: 'Entry-level production scheduling - Starting at $1,000',
        icon: <ClipboardIcon className="size-5 shrink-0" />,
        href: Routes.JobSchedulerLite,
        external: false
      },
      {
        title: 'Operations Manager',
        description: 'Excel templates for operations management',
        icon: <PackageIcon className="size-5 shrink-0" />,
        href: Routes.OperationsManager,
        external: false
      }
    ]
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'All Features',
        description: 'Complete feature overview',
        icon: <ZapIcon className="size-5 shrink-0" />,
        href: Routes.Features,
        external: false
      },
      {
        title: 'Product Downloads',
        description: 'Download free trials and samples',
        icon: <DownloadIcon className="size-5 shrink-0" />,
        href: Routes.ProductDownloads,
        external: false
      },
      {
        title: 'Product Videos',
        description: 'Watch software demonstrations',
        icon: <MonitorIcon className="size-5 shrink-0" />,
        href: Routes.ProductVideos,
        external: false
      },
      {
        title: 'Blog',
        description: 'Insights and articles',
        icon: <BookIcon className="size-5 shrink-0" />,
        href: Routes.Blog,
        external: false
      },
      {
        title: 'News',
        description: 'Latest news and press releases',
        icon: <NewspaperIcon className="size-5 shrink-0" />,
        href: Routes.News,
        external: false
      },
      {
        title: 'About Us',
        description: 'Our story and mission',
        icon: <BookIcon className="size-5 shrink-0" />,
        href: Routes.About,
        external: false
      }
    ]
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
