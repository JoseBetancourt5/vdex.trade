import { Vault, TrendingUp, BookOpenText, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { LightningIcon } from "@/components/icons/lightning";
import { Section } from "@/components/section";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <Section centerContent className="gap-8 my-12 md:my-24">
      <Heading variant="h2" size="3xl" className="mb-6 text-center">
        {`Unlike any DEX`}
        <br />
        {`you've used before`}
      </Heading>

      <Text className="text-center">
        VDEX offers the performance of Binance and decentralization of Ethereum
      </Text>

      <BentoGrid className="w-full max-w-6xl">
        <Card className="justify-between gap-4 md:col-span-8">
          <div className="relative h-32 md:h-44">
            <Image
              src="/vdex_diagram.png"
              alt="VDEX Architecture"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 mx-auto max-w-[90%] text-center">
            <Heading variant="h3" size="xl">
              Sustainable Bitcoin Yield
            </Heading>
            <p className="text-muted-foreground text-sm">
              Virtual, is a cryptography company aimed at improving user experience through most
              efficient and user-focused solutions.
            </p>
          </div>
        </Card>

        <Card className="justify-between gap-6 md:col-span-4">
          <div className="relative flex flex-grow">
            <Image
              src="/vdex_logo_neon.avif"
              alt="VDEX Logo"
              fill
              className="mx-auto max-w-[140px] object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex flex-col gap-2 mx-auto max-w-[90%] text-center">
            <Heading variant="h3" size="xl">
              Derived from ZK State Channels
            </Heading>
            <p className="text-muted-foreground text-sm">
              Comes with built-in workflows that create focus and routine.
            </p>
          </div>
        </Card>

        <Card className="justify-between md:col-span-4">
          <div className="flex flex-grow justify-center items-center gap-4">
            <LightningIcon className="block" width={140} />
          </div>
          <div className="flex flex-col gap-2 mx-auto max-w-[90%] text-center">
            <Heading variant="h3" size="xl">
              200x Faster
            </Heading>
            <p className="text-muted-foreground text-sm">
              VDEX trades execute in sub-millisecond finality
            </p>
          </div>
        </Card>

        <Card className="md:col-span-8">
          <div className="mx-auto w-[90%] text-center">
            <Heading variant="h3" size="xl">
              Read Docs
            </Heading>
            <CommandMenu />
          </div>
        </Card>
      </BentoGrid>
    </Section>
  );
}

function Card({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <BentoGridItem className={cn("min-h-80 flex flex-col", className)}>{children}</BentoGridItem>
  );
}

interface CommandMenuOption {
  icon: React.ReactNode;
  label: string;
  href: string;
  isExternal?: boolean;
}

function CommandMenu() {
  const menuOptions: CommandMenuOption[] = [
    {
      icon: <BookOpenText className="w-4 h-4" />,
      label: "About Virtual Labs",
      href: "https://docs.virtuallabs.network/",
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      label: "What is VDEX?",
      href: "https://docs.virtuallabs.network/vdex/what-is-vdex",
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      label: "Trading",
      href: "https://dapp.vdex.trade/trade/",
      isExternal: true,
    },
    {
      icon: <Vault className="w-4 h-4" />,
      label: "VDEX Vault",
      href: "https://dapp.vdex.trade/liquidity-pool",
      isExternal: true,
    },
  ];

  return (
    <div className="shadow-[0_0_40px_rgba(157,109,239,0.5)] mt-4 rounded-lg w-full overflow-hidden font-inter text-sm leading-5">
      <div className="bg-black/70 backdrop-blur-sm border border-white/10 rounded-lg w-full transition-all duration-300">
        <div className="px-4 py-2 border-white/10 border-b text-white/60 text-left">
          <div className="bg-white/10 px-2 py-1 rounded-lg">https://docs.virtuallabs.network/</div>
        </div>
        <div className="space-y-1 p-2">
          {menuOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:bg-white/5 px-3 py-2 rounded-md transition-colors"
            >
              <span className="text-white/60">{option.icon}</span>
              <span className="text-white/90">{option.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
