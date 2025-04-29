import { HeroSection } from "@/components/sections/hero";
import { MemorialSection } from "@/components/sections/memorial";
import { ObituarySection } from "@/components/sections/obituary";
import { QuotesSection } from "@/components/sections/quotes";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection />

      {/* Obituary Writer Section */}
      <section className="py-24 px-4 md:px-6">
        <ObituarySection />
      </section>

      {/* Quote Generator Section */}
      <section className="py-24 px-4 md:px-6 bg-muted/25">
        <QuotesSection />
      </section>

      {/* Memorial Card/Image Creator Section */}
      <section className="py-24 px-4 md:px-6">
        <MemorialSection />
      </section>
    </main>
  );
}
