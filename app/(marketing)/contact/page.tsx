import * as React from 'react';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { Routes } from '@/constants/routes';

export const metadata: Metadata = {
  title: 'Contact - Redirecting...'
};

export default function ContactPage(): React.JSX.Element {
  redirect(Routes.ContactUs);
}
