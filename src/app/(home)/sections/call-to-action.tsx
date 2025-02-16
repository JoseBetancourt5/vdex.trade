import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function CallToAction() {
  return (
    <Section centerContent className="gap-8">
      <Image src="/vdex_logo_no_bg.png" alt="VDEX logo" width={120} height={120} />
      <Heading variant="h2" size="4xl">
        Try VDEX
      </Heading>
      <Link
        href="https://dapp.vdex.trade/trade"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "glow", size: "lg", hoverStyle: "scale" }),
          "rounded-full"
        )}
      >
        Try Now
      </Link>
    </Section>
  );
}
