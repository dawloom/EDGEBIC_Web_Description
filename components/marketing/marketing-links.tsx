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
      },
      {
        title: 'Partners',
        description: 'Our manufacturing software partners',
        icon: <HandshakeIcon className="size-5 shrink-0" />,
        href: Routes.Partners,
        external: false
      }
    ]
  },
  {
    title: 'Products',
    items: [
      {
        title: 'EDGEBIC',
        description: 'Entry-level production scheduling for job shops',
        icon: <ClipboardIcon className="size-5 shrink-0" />,
        href: Routes.JobSchedulerLite,
        external: false
      },
      {
        title: 'Operations Manager',
        description: 'Excel templates for production and operations management',
        icon: <ClipboardIcon className="size-5 shrink-0" />,
        href: Routes.OperationsManager,
        external: false
      },
      {
        title: 'Production Planning',
        description: 'Production planning and scheduling solutions',
        icon: <Factory className="size-5 shrink-0" />,
        href: Routes.ProductionPlanning,
        external: false
      },
      {
        title: 'Product Downloads',
        description: 'Download free trials and samples of our software',
        icon: <DownloadIcon className="size-5 shrink-0" />,
        href: Routes.ProductDownloads,
        external: false
      },
      {
        title: 'Product Videos',
        description: 'Watch software demonstrations and tutorials',
        icon: <MonitorIcon className="size-5 shrink-0" />,
        href: Routes.ProductVideos,
        external: false
      },
      {
        title: 'Excel Templates',
        description: 'Excel applications for manufacturing scheduling',
        icon: <FileTextIcon className="size-5 shrink-0" />,
        href: Routes.ExcelTemplates,
        external: false
      }
    ]
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Resource Management',
        description: 'Resource management insights and best practices',
        icon: <BookIcon className="size-5 shrink-0" />,
        href: Routes.ResourceManagement,
        external: false
      },
      {
        title: 'News',
        description: 'Latest news, press releases, and media coverage',
        icon: <NewspaperIcon className="size-5 shrink-0" />,
        href: Routes.News,
        external: false
      },
      {
        title: 'Blog',
        description: 'Insights, articles, and updates from Payload CMS',
        icon: <BookIcon className="size-5 shrink-0" />,
        href: Routes.Blog,
        external: false
      }
    ]
  },
  {
    title: 'Contact',
    description: 'Reach out for assistance',
    icon: <PaperPlaneIcon className="size-5 shrink-0" />,
    href: Routes.ContactUs,
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
}> = [
    {
      title: 'Success Stories',
      links: [
        {
          name: 'All Success Stories',
          href: Routes.SuccessStories,
          external: false
        },
        { name: 'Sleepmaster Ltd', href: Routes.SleepmasterLtd, external: false },
        {
          name: 'Cook Compression',
          href: Routes.CookCompression,
          external: false
        },
        {
          name: 'Incon Incorporated',
          href: Routes.InconIncorporated,
          external: false
        }
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'EDGEBIC (JSL)', href: Routes.JobSchedulerLite, external: false },
        {
          name: 'Operations Manager',
          href: Routes.OperationsManager,
          external: false
        },
        { name: 'Excel Templates', href: Routes.ExcelTemplates, external: false },
        {
          name: 'Product Downloads',
          href: Routes.ProductDownloads,
          external: false
        },
        { name: 'Product Videos', href: Routes.ProductVideos, external: false },
        { name: 'Pricing', href: Routes.Pricing, external: false }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: Routes.About, external: false },
        { name: 'Mission Statement', href: Routes.Mission, external: false },
        { name: 'Values', href: Routes.Values, external: false },
        { name: 'Company History', href: Routes.History, external: false },
        { name: 'Partners', href: Routes.Partners, external: false },
        { name: 'Team', href: Routes.Team, external: false },
        { name: 'Careers', href: Routes.Careers, external: false }
      ]
    }
  ];

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
