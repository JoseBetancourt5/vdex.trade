import { FileText, ArrowUpRight, BookOpenText, Code2, Zap, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";

export default function DataRoomPage() {
  return (
    <Section className="mx-auto max-w-7xl">
      <Heading variant="h1" size="4xl" className="mb-16 text-center">
        About
      </Heading>

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        {/* Welcome Card */}
        <div className="bg-card p-8 border border-border rounded-3xl">
          <div className="flex flex-col gap-6">
            <Heading variant="h2" size="2xl">
              Welcome to <span className="text-muted-foreground">Virtual Labs Data Room</span>
            </Heading>

            <div className="flex flex-col gap-4">
              <Text className="text-muted-foreground">
                Access everything you need to collaborate effectively.
              </Text>
              <Text className="text-muted-foreground">
                Our portal offers a comprehensive suite of resources, including essential documents,
                powerful tools, and cutting-edge APIs. Streamline your workflows, integrate
                effortlessly, and foster innovation.
              </Text>
            </div>

            <div className="flex justify-between gap-6 mt-12">
              <Button size="lg" className="w-fit" asChild>
                <Link
                  href="https://virtuallabs.network/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Integrate VR 1.2 <Zap className="ml-2 w-4 h-4" />
                </Link>
              </Button>

              <div className="flex gap-4">
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
                    className="w-5 h-5"
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
                    className="w-5 h-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Card */}
        <div className="bg-card p-8 border border-border rounded-3xl">
          <Heading variant="h2" size="2xl" className="mb-6">
            Resources
          </Heading>

          <div className="flex flex-col gap-2">
            {[
              {
                title: "Whitepaper",
                icon: FileText,
                href: "https://virtuallabs.network/whitepaper",
              },
              {
                title: "VDEX",
                icon: BarChart3,
                href: "https://vdex.trade",
              },
              {
                title: "Documentation",
                icon: BookOpenText,
                href: "https://docs.virtuallabs.network",
              },
              {
                title: "Smart contracts",
                icon: Code2,
                href: "https://github.com/0xVirtualLabs/vdex-smart-contracts",
              },
            ].map((resource) => (
              <Button
                key={resource.title}
                variant="outline"
                size="lg"
                className="justify-start bg-muted/50 hover:bg-card/80 p-4 rounded-xl w-full transition-colors"
                asChild
              >
                <Link
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-start items-center gap-3"
                >
                  <resource.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">{resource.title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* About Card */}
        <div className="bg-card p-8 border border-border rounded-3xl">
          <Heading variant="h2" size="2xl" className="mb-6">
            About <span className="text-muted-foreground">Virtual Labs</span>
          </Heading>

          <div className="space-y-6 text-muted-foreground">
            <Text className="text-muted-foreground">
              {`Virtual's solution is Virtual Rollups, the first deployable omnichain rollups with sub-millisecond finality. DApps built on Virtual Rollups accomplish web2-style UX through:`}
            </Text>
            <Text className="text-muted-foreground">
              {`Virtual Labs is a cryptography company with the firm belief that user experience is the single largest issue holding back web3 adoption. 
              The Virtual team identifies these problems to specifically include latency, gas, and wallet frictions.`}
            </Text>

            <ul className="space-y-2">
              {["Zero latency", "ZeroGas", "Zero wallet clicks", "Full chain abstraction"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="bg-primary rounded-full w-1.5 h-1.5" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-card p-8 border border-border rounded-3xl">
          <div className="flex flex-col gap-6">
            <Heading variant="h2" size="base" className="text-primary uppercase">
              Coming soon
            </Heading>

            <Image
              src="/trading_terminal.avif"
              alt="VDEX Trading Terminal"
              width={800}
              height={450}
              className="border border-border rounded-2xl"
            />

            <Button variant="outline" size="lg" className="w-full" asChild>
              <Link
                href="https://docs.virtuallabs.network"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Text className="text-muted-foreground">
              {`VDEX is the first omnichain perpDEX with no slippage and sustainable Bitcoin Yield.
                VDEX emphasizes experience and capital efficiency.`}
            </Text>
            <Text className="text-muted-foreground">
              {`VDEX's parent company, Virtual, is a cryptography company aimed at improving
                user experience through most efficient and user-focused solutions. So, VDEX aims to
                achieve centralized exchange-style UX while maintaining decentralization.`}
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
}
