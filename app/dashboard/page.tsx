import { redirect } from 'next/navigation';

export default function DashboardPage(): never {
  redirect('/dashboard/home');
}
