import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-black py-12 w-full text-white">
      <div className="mx-auto px-4 container">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-12">
          {/* Logo and Newsletter Section */}
          <div className="space-y-8 lg:col-span-7">
            <Link href="/" className="inline-block">
              <Image
                src="/vdex-logo.png"
                alt="VDEX Logo"
                width={140}
                height={48}
                className="w-auto h-12"
              />
            </Link>
            <div className="space-y-4 max-w-xl">
              <h3 className="text-gray-300 text-lg">
                Join our newsletter to stay up to date on features and releases.
              </h3>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-500"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-gray-400 text-sm">
                We care about your data in our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Resources and Social Links */}
          <div className="lg:col-span-5">
            <div className="gap-8 grid grid-cols-2">
              {/* Resources */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Resources</h3>
                <nav className="flex flex-col space-y-3">
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                  <Link
                    href="/integrate"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Integrate
                  </Link>
                  <Link
                    href="https://docs.virtuallabs.network"
                    className="text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Docs
                  </Link>
                </nav>
              </div>

              {/* Social */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Social</h3>
                <nav className="flex flex-col space-y-3">
                  <Link
                    href="https://discord.com/invite/x9PPR2PAEf"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Image
                      src="/icons/discord.png"
                      alt="Discord"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </Link>
                  <Link
                    href="https://x.com/0xVDEX"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Image src="/icons/x.avif" alt="X" width={20} height={20} className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://x.com/0xVDEX"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Image
                      src="/icons/zealy.avif"
                      alt="Zealy"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </Link>
                  <Link
                    href="https://linkedin.com/company/vdex"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Image
                      src="/icons/linkedin.avif"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </Link>
                  <Link
                    href="https://t.me/vdex"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Image
                      src="/icons/telegram.avif"
                      alt="Telegram"
                      width={20}
                      height={20}
                      className="w-5 h-5"
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
