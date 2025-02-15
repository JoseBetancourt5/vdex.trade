"use client";

import { Menu } from "lucide-react";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
      <div className="flex justify-between md:justify-start items-center mx-auto px-4 py-10 h-16 container">
        <div className="w-1/4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/vdex-logo.png" alt="VDEX Logo" width={100} height={100} />
          </Link>
        </div>

        <div className="hidden md:flex flex-grow justify-center items-center gap-4">
          <NavLink
            href="https://docs.virtuallabs.network"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/integrate">Integrate</NavLink>
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

        <div className="flex justify-end gap-4 w-1/4">
          <Link
            href="https://docs.virtuallabs.network"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "glow", hoverStyle: "scale" }),
              "px-6 py-5 text-lg"
            )}
          >
            Join Whitelist
          </Link>

          <div className="md:hidden flex">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-white hover:text-primary">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Toggle menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/80 border-primary">
                <nav className="flex flex-col gap-3">
                  <Link
                    href="https://docs.virtuallabs.network"
                    className="text-md text-white hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Docs
                  </Link>
                  <Link href="/data-room" className="text-md text-white hover:text-primary">
                    About
                  </Link>
                  <Link href="/form" className="text-md text-white hover:text-primary">
                    Integrate
                  </Link>
                  {moreLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="text-md text-white hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  ))}
                  <Link
                    href="https://www.vdex.trade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "glow", hoverStyle: "scale" }),
                      "w-full mt-4"
                    )}
                  >
                    Trade Now
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
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
        "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent"
      )}
      href={href}
      {...props}
    >
      <span className="hover:text-primary text-lg cursor-pointer">{children}</span>
    </Link>
  );
}
