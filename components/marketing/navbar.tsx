'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ExternalLink } from '@/components/marketing/fragments/external-link';
import { MENU_LINKS } from '@/components/marketing/marketing-links';
import { MobileMenu } from '@/components/marketing/mobile-menu';
import { buttonVariants } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Routes } from '@/constants/routes';
import { cn } from '@/lib/utils';

export function Navbar(): React.JSX.Element {
  const pathname = usePathname();
  return (
    <section className="w-full border-b bg-white dark:bg-slate-900">
      <div className="mx-auto px-6">
        <nav className="hidden h-20 items-center justify-between lg:flex">
          <Link
            href={Routes.Root}
            className="flex items-center gap-2"
          >
            <Logo />
          </Link>
          <div className="flex items-center gap-x-4">
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {MENU_LINKS.map((item, index) =>
                    item.items ? (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuTrigger
                          data-active={
                            item.items.some((subItem) =>
                              pathname.startsWith(subItem.href)
                            )
                              ? ''
                              : undefined
                          }
                          className="h-20 rounded-none border-b-2 border-transparent text-[15px] font-medium text-slate-700 hover:border-slate-900 hover:bg-transparent data-[active]:border-slate-900 data-[state=open]:border-slate-900 data-[state=open]:bg-transparent dark:text-slate-300 dark:hover:border-white dark:data-[active]:border-white dark:data-[state=open]:border-white"
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-96 list-none p-4">
                            {item.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href || '#'}
                                    target={
                                      subItem.external ? '_blank' : undefined
                                    }
                                    rel={
                                      subItem.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                    }
                                    className="group flex select-none flex-row items-center gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 focus:bg-slate-50 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                                  >
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
                                      {subItem.icon}
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                                        {subItem.title}
                                        {subItem.external && (
                                          <ExternalLink className="-mt-2 ml-1 inline text-muted-foreground" />
                                        )}
                                      </div>
                                      <p className="text-sm leading-snug text-slate-600 dark:text-slate-400">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                        <NavigationMenuIndicator />
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          asChild
                          active={
                            item.href === Routes.Root
                              ? pathname === '/'
                              : pathname.startsWith(item.href)
                          }
                        >
                          <Link
                            href={item.href || '#'}
                            target={item.external ? '_blank' : undefined}
                            rel={
                              item.external ? 'noopener noreferrer' : undefined
                            }
                            className={cn(
                              'inline-flex h-20 items-center border-b-2 border-transparent px-3 text-[15px] font-medium text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 dark:text-slate-300 dark:hover:border-white dark:hover:text-white',
                              (item.href === Routes.Root
                                ? pathname === '/'
                                : pathname.startsWith(item.href)) &&
                              'border-slate-900 text-slate-900 dark:border-white dark:text-white'
                            )}
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={Routes.Login}
                className="px-4 py-2 text-[15px] font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href={Routes.Contact}
                className="rounded-md bg-[#0066cc] px-6 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-[#0052a3] dark:bg-[#0066cc] dark:hover:bg-[#0052a3]"
              >
                Try it
              </Link>
            </div>
          </div>
        </nav>
        <MobileMenu className="lg:hidden" />
      </div>
    </section>
  );
}
