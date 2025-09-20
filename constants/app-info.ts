import type { ObjectValues } from '@/types/object-values';

import packageInfo from '../package.json';

export const AppInfo = {
  APP_NAME: 'EDGEBIC',
  APP_DESCRIPTION:
    'EDGEBIC is a flexible and affordable production planning, scheduling, and tracking solution that is designed to adapt to your operations. We can work with whatever data you have to achieve better production scheduling, just easier and quicker than you ever thought possible.',
  APP_VERSION: '1.0.0',
  COMPANY_NAME: 'EDGEBIC Solutions',
  SUPPORT_EMAIL: 'support@edgebic.com',
  CONTACT_EMAIL: 'contact@edgebic.com',
  VERSION: packageInfo.version
} as const;

export type AppInfo = ObjectValues<typeof AppInfo>;
