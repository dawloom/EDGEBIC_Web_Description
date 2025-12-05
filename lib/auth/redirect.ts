import { Routes } from '@/constants/routes';
import { getPathname } from '@/lib/network/get-pathname';

export function getLoginRedirect(): string {
  const callbackUrl = getPathname();

  return callbackUrl
    ? `${Routes.Login}?${new URLSearchParams({ callbackUrl })}`
    : Routes.Login;
}
