'use client';

import * as React from 'react';
import Link from 'next/link';

// import { toast } from 'sonner';

import { ExternalLink } from '@/components/marketing/fragments/external-link';
import { ThemeSwitcher } from '@/components/marketing/fragments/theme-switcher';
import {
  FOOTER_LINKS,
  SOCIAL_LINKS
} from '@/components/marketing/marketing-links';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { AppInfo } from '@/constants/app-info';

export function Footer(): React.JSX.Element {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Single Row: Success Stories, Products, Company, Follow Us */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Footer Links - Success Stories, Products, Company */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul
                role="list"
                className="space-y-3"
              >
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      title={link.name}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                      {link.external && <ExternalLink className="opacity-60" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Follow Us Section */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  title={link.name}
                  href={link.href}
                  className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Language Selector */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                eng
              </span>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} {AppInfo.APP_NAME}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                X
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
