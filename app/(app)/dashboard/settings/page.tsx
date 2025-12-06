import { redirect } from 'next/navigation';

import { Routes } from '@/constants/routes';

export default function SettingsPage() {
  redirect(Routes.Profile);
}
