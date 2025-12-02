'use client';

import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';

interface SmoothLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
  onClick?: () => void;
}

export function SmoothLink({
  children,
  href,
  className,
  prefetch = true,
  onClick,
  ...props
}: SmoothLinkProps): React.JSX.Element {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call custom onClick if provided
    onClick?.();

    // If it's an external link, let it handle naturally
    if (typeof href === 'string' && href.startsWith('http')) {
      return;
    }

    // For internal navigation, use Next.js router with smooth transition
    e.preventDefault();

    // Smooth scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Small delay to allow scroll animation
    setTimeout(() => {
      router.push(href.toString());
    }, 100);
  };

  return (
    <Link
      href={href}
      className={cn('transition-colors duration-200', className)}
      prefetch={prefetch}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
