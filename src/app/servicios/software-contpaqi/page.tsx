import { PageBackgroundGlow } from "@/components/ui/PageBackgroundGlow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroSoftwareContpaqi } from "@/components/sections/servicios/software-contpaqi/HeroSoftwareContpaqi";
import { TrustedClientsStrip } from "@/components/sections/shared/TrustedClientsStrip";
import { LoQueHacemosContpaqi } from "@/components/sections/servicios/software-contpaqi/LoQueHacemosContpaqi";
import { PaquetesContpaqi } from "@/components/sections/servicios/software-contpaqi/PaquetesContpaqi";
import { CtaSoftwareContpaqi } from "@/components/sections/servicios/software-contpaqi/CtaSoftwareContpaqi";

export default function SoftwareContpaqiPage() {
  return (
    <main className="relative min-h-screen bg-[#F3F7FF]">
      <PageBackgroundGlow />

      <div className="relative z-10 pb-20 lg:pb-28">
        <HeroSoftwareContpaqi />
        <TrustedClientsStrip />
        <SectionDivider showLine={false} />
        <LoQueHacemosContpaqi />
        <SectionDivider />
        <PaquetesContpaqi />
        <SectionDivider showLine={false} />
        <CtaSoftwareContpaqi />
      </div>
    </main>
  );
}