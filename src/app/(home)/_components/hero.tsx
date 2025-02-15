import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <Section className="relative">
      {/* Content container */}
      <div className="mx-auto px-4 container">
        {/* Hero section */}
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            variant="h1"
            size="5xl"
            className="bg-clip-text bg-gradient-to-r from-white via-white/70 to-neutral-400 mb-10 text-transparent"
          >
            Omnichain PerpDex
          </Heading>

          <Text variant="lead" size="lg" className="mb-6 text-muted-foreground">
            The Degen Playground: Trade with{" "}
            <span className="font-medium text-white">sub-millisecond finality</span>,{" "}
            <span className="font-medium text-white">omnichain deposits</span>, and{" "}
            <span className="font-medium text-white">full self-custody</span>.
          </Text>

          <div className="flex md:flex-row flex-col justify-center items-center gap-4 mb-10 md:mb-20 pt-4">
            <Link
              href="https://dapp.vdex.trade"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              Trade Instantly
            </Link>
            <Link
              href="https://dapp.vdex.trade/liquidity-pool"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              Earn BTC Yield
            </Link>
          </div>

          <div className="relative overflow-visible">
            <div className="-z-10 absolute inset-0 bg-purple-900/40 blur-[100px]" />
            <Image
              src="/trading_terminal.avif"
              alt="VDEX Logo"
              width={1200}
              height={1200}
              className="relative rounded-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
