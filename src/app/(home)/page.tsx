import { Audit } from "./sections/audit";
import { CallToAction } from "./sections/call-to-action";
import { Features } from "./sections/features";
import { Hero } from "./sections/hero";
import { Partners } from "./sections/partners";
import { PreferredChainSection } from "./sections/preferred-chain";
import { Roadmap } from "./sections/roadmap";

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
      <Roadmap />
      <CallToAction />
    </div>
  );
}
