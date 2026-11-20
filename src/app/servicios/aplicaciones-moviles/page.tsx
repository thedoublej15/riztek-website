import { PageBackgroundGlow } from "@/components/ui/PageBackgroundGlow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroAplicacionesMoviles } from "@/components/sections/servicios/aplicaciones-moviles/HeroAplicacionesMoviles";
import { TrustedClientsStrip } from "@/components/sections/shared/TrustedClientsStrip";
import { PorQueUnaApp } from "@/components/sections/servicios/aplicaciones-moviles/PorQueUnaApp";
import { TiposDeApps } from "@/components/sections/servicios/aplicaciones-moviles/TiposDeApps";
import { CaracteristicasApps } from "@/components/sections/servicios/aplicaciones-moviles/CaracteristicasApps";
import { CtaAplicacionesMoviles } from "@/components/sections/servicios/aplicaciones-moviles/CtaAplicacionesMoviles";

export default function AplicacionesMovilesPage() {
  return (
    <main className="relative min-h-screen bg-[#F3F7FF]">
      <PageBackgroundGlow />

      <div className="relative z-10 pb-20 lg:pb-28">
        <HeroAplicacionesMoviles />
        <TrustedClientsStrip />
        <SectionDivider showLine={false} />
        <PorQueUnaApp />
        <SectionDivider />
        <TiposDeApps />
        <SectionDivider />
        <CaracteristicasApps />
        <SectionDivider showLine={false} />
        <CtaAplicacionesMoviles />
      </div>
    </main>
  );
}