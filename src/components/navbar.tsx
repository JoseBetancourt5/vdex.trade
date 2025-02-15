"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const moreLinks = [
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Terms",
    href: "/terms",
  },
];

export function Navbar() {
  return (
    <header className="top-0 z-50 sticky bg-black/80 w-full">
      <div className="flex items-center mx-auto py-10 h-16 container">
        <div className="w-1/4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/vdex-logo.png" alt="VDEX Logo" width={100} height={100} />
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
                    "flex items-center text-lg p-0 hover:bg-transparent active:bg-transparent focus:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent"
                  )}
                >
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black/80 w-full">
                  <ul className="gap-4 grid p-4">
                    {moreLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="block rounded-md text-white hover:text-primary text-lg no-underline leading-none select-non"
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
          <Link
            href="https://docs.virtuallabs.network"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "link" }),
              "hover:no-underline shadow-[inset_0_0_10px_rgba(124,58,237,0.8),0_0_10px_rgba(124,58,237,0.8)] px-6 py-5 border border-primary rounded-full text-white text-lg hover:scale-105 transition-all duration-300"
            )}
          >
            Join Whitelist
          </Link>
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
        "hover:bg-transparent active:bg-transparent focus:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent"
      )}
      href={href}
      {...props}
    >
      <span className="hover:text-primary text-lg cursor-pointer">{children}</span>
    </Link>
  );
}
