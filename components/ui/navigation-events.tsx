'use client';

import * as React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    // Navigation change detected - you can add custom logic here
    console.log('Navigation to:', pathname);
  }, [pathname, searchParams]);

  return null;
}
