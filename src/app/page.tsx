import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F7FF]">
      <Hero />
      <div className="pb-20 lg:pb-28">
        <SectionDivider showLine={false} />
        <ServicesSection />
        <SectionDivider />
        <ClientsSection />
        <SectionDivider />
        <TeamSection />
        <SectionDivider showLine={false} />
        <CtaSection />
      </div>
    </main>
  );
}