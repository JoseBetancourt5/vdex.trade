"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Circle } from "lucide-react";
import { useRef } from "react";
import type { ReactNode } from "react";

interface TimelineItemType {
  title: string;
  status: "completed" | "upcoming";
  content: ReactNode;
}

interface ContentBlockProps {
  title: string;
  description: string;
  features: Array<{ text: string; icon: ReactNode }>;
}

const ContentBlock = ({ title, description, features }: ContentBlockProps) => (
  <div>
    <h3 className="mb-2 font-bold text-white text-lg">{title}</h3>
    <p className="mb-4 font-normal text-neutral-200 text-sm">{description}</p>
    <div className="space-y-2 text-neutral-300 text-sm">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          {feature.icon}
          {feature.text}
        </div>
      ))}
    </div>
  </div>
);

const getStatusIcon = (status: TimelineItemType["status"]) =>
  status === "completed" ? (
    <Check className="w-5 h-5 text-green-500" />
  ) : (
    <Circle className="w-5 h-5 text-blue-500" />
  );

const timelineData: TimelineItemType[] = [
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

interface TimelineItemProps {
  item: TimelineItemType;
}

const TimelineItem = ({ item }: TimelineItemProps) => {
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
};

const Timeline = ({ data }: { data: TimelineItemType[] }) => {
  return (
    <div className="relative mx-auto px-4 md:px-8 py-16 max-w-4xl">
      {/* Static vertical line */}
      <div className="top-0 bottom-0 left-[calc(5rem-1px)] absolute bg-neutral-800 w-0.5" />
      {data.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>
  );
};

export function Roadmap() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Timeline data={timelineData} />
    </div>
  );
}
