import { Plus } from "lucide-react";
import Image from "next/image";

import { Heading, Text } from "@/components/ui/typography";

const chainLogos = [
  { src: "/logos/nibiru.avif", alt: "Nibiru" },
  { src: "/logos/supra.avif", alt: "Supra" },
  { src: "/logos/goat.avif", alt: "GOAT" },
  { src: "/logos/manta.avif", alt: "Manta" },
  { src: "/logos/bitlayer.avif", alt: "Bitlayer" },
  { src: "/logos/near.avif", alt: "NEAR" },
];

const leftChains = chainLogos.slice(0, 3);
const rightChains = chainLogos.slice(3);

export function PreferredChainSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-20 sm:gap-24 px-4 min-h-screen overflow-hidden">
      {/* Chain Logos Row */}
      <div className="sm:flex sm:flex-nowrap justify-center items-center gap-4 grid grid-cols-1 w-full max-w-5xl">
        {/* Left Chain Logos */}
        <ChainLogoGroup chains={leftChains} alignment="end" />

        <PlusIconDivider />

        {/* Right Chain Logos */}
        <ChainLogoGroup chains={rightChains} alignment="start" />
      </div>

      <div className="space-y-8 mx-auto px-4 max-w-4xl text-center">
        <Heading variant="h2" size="4xl">
          Trade On Your Preferred Chain
        </Heading>
        <Text size="xl">Unlimited Chains, Unified Orderbook.</Text>
      </div>
    </section>
  );
}

interface ChainLogoGroupProps {
  chains: typeof chainLogos;
  alignment: "start" | "end";
}

function ChainLogoGroup({ chains, alignment }: ChainLogoGroupProps) {
  return (
    <div
      className={`sm:flex sm:justify-${alignment} justify-items-center items-center gap-2 sm:gap-4 grid grid-cols-3`}
    >
      {chains.map((logo, index) => (
        <ChainLogo key={index} {...logo} />
      ))}
    </div>
  );
}

interface ChainLogoProps {
  src: string;
  alt: string;
}

function ChainLogo({ src, alt }: ChainLogoProps) {
  return (
    <div
      className="relative flex justify-center items-center bg-[#1A0B3C]/50 p-2 sm:p-3 border border-[#4F3B99]/30 rounded-full w-14 h-14"
      style={{
        boxShadow: `
          0 0 0 1px rgba(79, 59, 153, 0.2),
          0 0 20px 0 rgba(79, 59, 153, 0.15)
        `,
      }}
    >
      <Image src={src} alt={alt} width={20} height={20} className="w-8 h-8" />
    </div>
  );
}

function PlusIconDivider() {
  return (
    <div className="relative flex justify-center justify-self-center items-center my-4 sm:my-0 w-24 sm:w-40 h-24 sm:h-40">
      {/* Main plus circle */}
      <div className="relative flex justify-center items-center bg-gradient-to-b from-[#b9a7f83b] to-[#b8a6f792] rounded-full w-16 sm:w-24 h-16 sm:h-24">
        <Plus
          className="stroke-[2.5] w-6 sm:w-10 h-6 sm:h-10 text-white/90"
          strokeLinecap="square"
        />
      </div>

      {/* Outer glowing circles */}
      <div className="absolute inset-0 bg-[#4F3B99]/20 rounded-full animate-pulse" />
      <div className="absolute -inset-1/2 bg-[#4F3B99]/10 rounded-full animate-pulse delay-75" />
      <div className="absolute -inset-full bg-[#4F3B99]/5 rounded-full animate-pulse delay-150" />
    </div>
  );
}
