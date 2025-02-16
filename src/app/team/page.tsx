import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/section";
import { Heading } from "@/components/ui/typography";

const teamMembers = [
  {
    name: "José",
    role: "Founder & CEO",
    headerImgUrl: "/team/jose.avif",
    twitterUrl: "https://twitter.com/josebetandcourt",
    color: "#D868D7",
  },
  {
    name: "Vincenzo",
    role: "Cryptographer",
    headerImgUrl: "/team/vincenzo.avif",
    color: "#5BD1D1",
  },
  {
    name: "Jorge",
    role: "Operations",
    headerImgUrl: "/team/jorge.avif",
    twitterUrl: "https://x.com/J3_VDEX",
    color: "#0EA2B7",
  },
  {
    name: "Pawello",
    role: "Blockchain Engineer",
    headerImgUrl: "/team/pawello.avif",
    color: "#5DD2D2",
  },
  {
    name: "Jasmine",
    role: "Community Manager",
    headerImgUrl: "/team/jasmine.avif",
    twitterUrl: "https://x.com/0xJasminee101",
    color: "#0CC7E0",
  },
  {
    name: "Shumaila",
    role: "Product Designer",
    headerImgUrl: "/team/shumaila.avif",
    twitterUrl: "https://x.com/chini_shumaila",
    color: "#EC71ED",
  },
];

export default function TeamPage() {
  return (
    <Section centerContent className="mx-auto max-w-5xl">
      <Heading variant="h1" size="4xl" className="mb-8 sm:mb-16 md:mb-24 text-center">
        Meet the Vanguards
      </Heading>
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((member) => (
          <NeonCard key={member.name} {...member} />
        ))}
      </div>
    </Section>
  );
}

interface NeonCardProps {
  headerImgUrl: string;
  name: string;
  role: string;
  twitterUrl?: string;
  color?: string;
}

function NeonCard({ headerImgUrl, name, role, twitterUrl, color = "#67bbf7" }: NeonCardProps) {
  const gradientStyle = {
    background: `linear-gradient(to bottom, ${color}90 0%, ${color}40 50%, transparent 100%)`,
  };

  return (
    <div className="w-full max-w-xs overflow-hidden text-white">
      <div className="relative aspect-square">
        <Image
          src={headerImgUrl || "/placeholder.svg"}
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex flex-col items-center gap-2 p-6 pb-12 text-center" style={gradientStyle}>
        <h2 className="font-semibold text-3xl tracking-wide">{name}</h2>
        <p className="text-white/90 text-xl">{role}</p>
        <div className="flex items-center h-[44px]">
          {twitterUrl && (
            <Link
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black mt-2 p-2 rounded-full hover:scale-110 transition-transform"
            >
              <Image src="/icons/x.avif" alt="X" width={20} height={20} className="w-6 h-6" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
