import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heading, Text } from "@/components/ui/typography";

export function Footer() {
  return (
    <footer className="bg-black mx-auto py-12 md:py-16 w-full">
      <div className="mx-auto px-4 w-full max-w-7xl container">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-12">
          {/* Logo and Newsletter Section */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <Link href="/" className="inline-block">
              <Image
                src="/vdex-logo.png"
                alt="VDEX Logo"
                width={140}
                height={48}
                className="w-auto h-12"
              />
            </Link>
            <div className="flex flex-col gap-4 max-w-xl">
              <Heading variant="h3" size="base">
                Join our newsletter to stay up to date on features and releases.
              </Heading>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-500"
                />
                <Button>Subscribe</Button>
              </div>
              <Text size="sm" className="text-gray-400">
                We care about your data in our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  privacy policy
                </Link>
                .
              </Text>
            </div>
          </div>

          {/* Resources and Social Links */}
          <div className="lg:justify-self-end lg:col-span-5">
            <div className="gap-8 grid grid-cols-2">
              {/* Resources */}
              <div className="flex flex-col gap-4">
                <Heading variant="h3" size="base">
                  Resources
                </Heading>
                <nav className="flex flex-col gap-3">
                  <Link href="/blog" className="hover:text-primary transition-colors">
                    Blog
                  </Link>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link href="/integrate" className="hover:text-primary transition-colors">
                    Integrate
                  </Link>
                  <Link
                    href="https://docs.virtuallabs.network"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Docs
                  </Link>
                </nav>
              </div>

              {/* Social */}
              <div className="flex flex-col lg:justify-self-end gap-4">
                <Heading variant="h3" size="base">
                  Social
                </Heading>
                <nav className="flex flex-col gap-3">
                  <Link
                    href="https://discord.com/invite/x9PPR2PAEf"
                    className="inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/discord.png"
                      alt="Discord"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                  </Link>
                  <Link
                    href="https://x.com/0xVDEX"
                    className="inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/icons/x.avif" alt="X" width={20} height={20} className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://zealy.io/cw/virtuallabs-9746/questboard"
                    className="inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/zealy.avif"
                      alt="Zealy"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/0xvirtuallabs/posts/?feedView=all"
                    className="inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/linkedin.avif"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                  </Link>
                  <Link
                    href="https://t.me/VDEXcommunity"
                    className="inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/telegram.avif"
                      alt="Telegram"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
