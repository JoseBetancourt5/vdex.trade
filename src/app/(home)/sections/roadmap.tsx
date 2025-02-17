"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Circle } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import type { ReactNode } from "react";

import { Section } from "@/components/section";
import { Heading, Text } from "@/components/ui/typography";

interface TimelineItem {
  title: string;
  status: "completed" | "upcoming";
  content: ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    title: "DEC 2024",
    status: "completed",
    content: (
      <ContentBlock
        title="Initial Launch"
        description="Building the foundation for decentralized trading with core blockchain integrations and trading pairs."
        features={[
          { text: "Ethereum and Bitlayer support", icon: getStatusIcon("completed") },
          { text: "BTC-USD and ETH-USD trading support", icon: getStatusIcon("completed") },
        ]}
      />
    ),
  },
  {
    title: "Q1 2025",
    status: "upcoming",
    content: (
      <ContentBlock
        title="Mainnet Phase"
        description="Launching our mainnet platform and expanding our network integrations for enhanced functionality."
        features={[
          { text: "VDEX Mainnet Launch (Invite Only)", icon: getStatusIcon("upcoming") },
          { text: "Integration of Nibiru and Goat Network", icon: getStatusIcon("upcoming") },
        ]}
      />
    ),
  },
  {
    title: "Q2 2025",
    status: "upcoming",
    content: (
      <ContentBlock
        title="Community Features"
        description="Introducing community-focused features and reward mechanisms to enhance user engagement."
        features={[
          {
            text: "Introduction of: Trading Competitions, Referral Program, etc",
            icon: getStatusIcon("upcoming"),
          },
          { text: "Launch of VDEX Vault with APR rewards", icon: getStatusIcon("upcoming") },
        ]}
      />
    ),
  },
  {
    title: "Q3 2025",
    status: "upcoming",
    content: (
      <ContentBlock
        title="Expansion Phase"
        description="Scaling our platform with additional blockchain integrations and trading capabilities."
        features={[
          { text: "Integration of top 15 Partner Chains", icon: getStatusIcon("upcoming") },
          { text: "Expansion of Spot and Perptual Trading", icon: getStatusIcon("upcoming") },
        ]}
      />
    ),
  },
  {
    title: "Q4 2025",
    status: "upcoming",
    content: (
      <ContentBlock
        title="Mobile & Vaults"
        description="Expanding platform accessibility with mobile support and advanced vault features."
        features={[
          {
            text: "Launch of Volatile Token Vaults & User Vaults",
            icon: getStatusIcon("upcoming"),
          },
          { text: "Release of Mobile app With Refined UI", icon: getStatusIcon("upcoming") },
        ]}
      />
    ),
  },
];

/**
 * The main export component that renders the roadmap timeline
 */
export function Roadmap() {
  return (
    <Section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="-z-30 absolute inset-0 w-full h-full">
        <Image
          src="/grid_u_bg.avif"
          alt="Grid Background"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-center object-cover pointer-events-none select-none contrast-125"
        />
      </div>
      <div className="relative mx-auto px-4 md:px-8 py-16 max-w-4xl">
        {/* Static vertical line */}
        <div className="top-0 bottom-0 left-[calc(5rem-1px)] -z-10 absolute bg-secondary/10 w-0.5" />
        {/* Top blur overlay for the vertical line */}
        <div className="top-0 left-[calc(5rem-1px)] -z-20 absolute bg-gradient-to-b from-background via-background/50 to-transparent w-12 h-24 -translate-x-1/2" />
        {/* Bottom blur overlay for the vertical line */}
        <div className="bottom-0 left-[calc(5rem-1px)] -z-20 absolute bg-gradient-to-t from-background via-background/50 to-transparent w-12 h-24 -translate-x-1/2" />

        {/* Timeline items */}
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </Section>
  );
}

/**
 * A single timeline item component that displays the timeline item's title, status, and content
 */
function TimelineItem({ item }: { item: TimelineItem }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  return (
    <div ref={ref} className="relative mb-8 last:mb-0">
      <div className="top-0 sticky pt-8 pb-8">
        <div className="relative ml-20 md:ml-24">
          {/* Date marker */}
          <div className="top-0 -left-[5rem] absolute font-medium text-neutral-400 text-sm whitespace-nowrap">
            {item.title}
          </div>
          {/* Content */}
          <motion.div style={{ opacity, scale }} className="bg-black p-4 rounded-lg">
            {item.content}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface ContentBlock {
  title: string;
  description: string;
  features: Array<{ text: string; icon: ReactNode }>;
}

/**
 * A content block component that displays the content block's title, description, and features
 */
function ContentBlock({ title, description, features }: ContentBlock) {
  return (
    <div>
      <Heading variant="h3" className="mb-2" size="lg">
        {title}
      </Heading>
      <Text className="mb-4 text-muted-foreground" size="sm">
        {description}
      </Text>
      <div className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="opacity-80">{feature.icon}</div>
            <Text size="sm" className="text-muted-foreground">
              {feature.text}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * A function that returns the status icon based on the status
 */
function getStatusIcon(status: TimelineItem["status"]) {
  return status === "completed" ? (
    <Check className="w-5 h-5 text-primary" />
  ) : (
    <Circle className="w-5 h-5 text-secondary" />
  );
}
