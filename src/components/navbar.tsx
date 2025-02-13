'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const moreLinks = [
  {
    title: 'Team',
    href: '/team',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Terms',
    href: '/terms',
  },
];

export function Navbar() {
  return (
    <header className="top-0 z-50 sticky bg-black/80 w-full">
      <div className="flex items-center mx-auto h-16 container">
        <div className="w-1/4">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="w-8 h-8"
            >
              <path
                d="M8 4C8 2.89543 8.89543 2 10 2H22C23.1046 2 24 2.89543 24 4V28C24 29.1046 23.1046 30 22 30H10C8.89543 30 8 29.1046 8 28V4Z"
                fill="#7C3AED"
              />
              <path
                d="M13 8C13 6.89543 13.8954 6 15 6H27C28.1046 6 29 6.89543 29 8V24C29 25.1046 28.1046 26 27 26H15C13.8954 26 13 25.1046 13 24V8Z"
                fill="#4F46E5"
              />
            </svg>
            <span className="font-bold text-white text-xl">VDEX</span>
          </Link>
        </div>

        <div className="flex flex-grow justify-center items-center gap-4">
          <NavLink
            href="https://docs.virtuallabs.network"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </NavLink>
          <NavLink href="/data-room">About</NavLink>
          <NavLink href="/form">Integrate</NavLink>
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'flex items-center text-lg p-0 hover:bg-transparent active:bg-transparent focus:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent'
                  )}
                >
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black/80 w-full">
                  <ul className="gap-4 grid px-2 py-3">
                    {moreLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="block rounded-md text-white hover:text-primary no-underline leading-none select-none"
                          >
                            {link.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex justify-end w-1/4">
          <Button className="bg-transparent hover:bg-transparent shadow-[inset_0_0_10px_rgba(124,58,237,0.8),0_0_10px_rgba(124,58,237,0.8)] border border-primary rounded-full text-white hover:scale-105 transition-all duration-300">
            Join Whitelist
          </Button>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  ...props
}: { href: string; children: React.ReactNode } & React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      className={cn(
        navigationMenuTriggerStyle(),
        'hover:bg-transparent active:bg-transparent focus:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent'
      )}
      href={href}
      {...props}
    >
      <span className="hover:text-primary text-lg cursor-pointer">{children}</span>
    </Link>
  );
}
