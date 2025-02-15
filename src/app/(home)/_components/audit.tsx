import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/section";
import { Heading, Text } from "@/components/ui/typography";

export function Audit() {
  return (
    <Section centerContent className="gap-8 my-12 md:my-24">
      <Heading variant="h2" size="3xl">
        Audited by
      </Heading>
      <Link
        className="group hover:bg-primary/30 px-8 py-3 border border-yellow-300 transition-colors duration-300"
        href="https://virtuallabs.network/audits"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View audit report by Halborn"
      >
        <Image
          src="/logos/halborn.avif"
          alt="Halborn"
          width={160}
          height={160}
          priority={false}
          loading="lazy"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <Text className="max-w-prose text-center">
        Security will always be our top priority, as we recognise its importance in building trust
        within the community
      </Text>
    </Section>
  );
}
