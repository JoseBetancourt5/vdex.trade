import Image from "next/image";

import { Section } from "@/components/section";
import { Heading } from "@/components/ui/typography";

const partners = [
  { src: "/partners/wagmi.avif", alt: "WAGMI" },
  { src: "/partners/blockchain_founders.avif", alt: "Blockchain Founders" },
  { src: "/partners/binance.avif", alt: "Binance" },
  { src: "/partners/bitlayer.avif", alt: "Bit Layer" },
  { src: "/partners/near.avif", alt: "Near" },
  { src: "/partners/gateio.avif", alt: "Gate IO" },
  { src: "/partners/inception.webp", alt: "Inception" },
];

export function Partners() {
  return (
    <Section centerContent className="relative gap-8">
      {/* Background image */}
      <div
        className="-z-10 absolute inset-0"
        style={{
          backgroundImage: `url('/space_circle_bg.avif')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Heading variant="h3" size="3xl">
        Partners
      </Heading>

      <div className="md:flex md:flex-row flex-col gap-8 grid grid-cols-2">
        {partners.map((partner) => (
          <Image
            className="md:w-20 md:h-20 object-contain"
            key={partner.alt}
            src={partner.src}
            alt={partner.alt}
            width={100}
            height={100}
          />
        ))}
      </div>
    </Section>
  );
}
