import { Audit } from "./_components/audit";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { Partners } from "./_components/partners";
import { PreferredChainSection } from "./_components/preferred-chain-section";

export default function Home() {
  return (
    <div className="relative">
      {/* Gradient overlay for smooth section transitions */}
      <div
        className="-z-10 absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(10, 4, 28, 0) 0%,
              rgba(10, 4, 28, 0.8) 85%,
              rgba(10, 4, 28, 1) 100%
            )
          `,
        }}
      />

      <Hero />
      <PreferredChainSection />
      <Partners />
      <Audit />
      <Features />
    </div>
  );
}
