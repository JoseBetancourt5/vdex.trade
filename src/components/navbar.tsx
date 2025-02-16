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

interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  {
    title: "Docs",
    href: "https://docs.virtuallabs.network",
    isExternal: true,
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Integrate",
    href: "/integrate",
  },
];

const moreLinks: NavItem[] = [
  { title: "Team", href: "/team" },
  { title: "Blog", href: "/blog" },
  { title: "Terms", href: "/terms" },
];

function MobileNavLink({ href, title, isExternal }: NavItem) {
  return (
    <Link
      href={href}
      className="text-md text-white hover:text-primary"
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {title}
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="top-0 z-50 sticky bg-black/90 w-full">
      <div className="flex justify-between md:justify-start items-center mx-auto px-4 py-10 max-w-7xl h-16 container">
        <div className="w-1/4">
          <Link href="/" className="flex items-center gap-2" prefetch>
            <Image
              src="/vdex-logo.png"
              alt="VDEX Logo"
              width={100}
              height={100}
              priority
              className="w-auto h-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:flex flex-grow justify-center items-center gap-4">
          {navItems.map((item) => (
            <NavLink key={item.title} {...item}>
              {item.title}
            </NavLink>
          ))}
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "flex items-center text-lg p-0 hover:!bg-transparent active:bg-transparent focus:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent"
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
                            className="block rounded-md text-white hover:text-primary text-lg no-underline leading-none select-none"
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
        </nav>

        <div className="flex justify-end gap-4 w-1/4">
          <Link
            href="https://virtuallabs.network/vdex-whitelist"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "glow", hoverStyle: "scale" }),
              "px-6 py-5 text-lg rounded-full"
            )}
          >
            Join Whitelist
          </Link>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button className="text-white hover:text-primary" aria-label="Toggle menu">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/80 border-primary">
              <nav className="flex flex-col gap-3">
                {[...navItems, ...moreLinks].map((item) => (
                  <MobileNavLink key={item.title} {...item} />
                ))}
                <Link
                  href="https://dapp.vdex.trade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "glow", hoverStyle: "scale" }),
                    "w-full mt-4 rounded-full"
                  )}
                >
                  Trade Now
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  isExternal,
  ...props
}: NavItem & { children: React.ReactNode }) {
  return (
    <Link
      className={cn(
        navigationMenuTriggerStyle(),
        "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent"
      )}
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      <span className="hover:text-primary text-lg cursor-pointer">{children}</span>
    </Link>
  );
}
