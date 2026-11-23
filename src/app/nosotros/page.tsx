import type { Metadata } from "next";
import { PageBackgroundGlow } from "@/components/ui/PageBackgroundGlow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroNosotros } from "@/components/sections/nosotros/HeroNosotros";
import { TrustedClientsStrip } from "@/components/sections/shared/TrustedClientsStrip";
import { NuestraHistoria } from "@/components/sections/nosotros/NuestraHistoria";
import { MisionVision } from "@/components/sections/nosotros/MisionVision";
import { NuestrosValores } from "@/components/sections/nosotros/NuestrosValores";
import { ValorAgregadoNosotros } from "@/components/sections/nosotros/ValorAgregadoNosotros";
import { EquipoNosotros } from "@/components/sections/nosotros/EquipoNosotros";
import { CtaNosotros } from "@/components/sections/nosotros/CtaNosotros";

export const metadata: Metadata = {
  title: "Nosotros | Riztek - Historia y Equipo de Ingeniería",
  description:
    "Conoce la historia de Riztek. Más de una década construyendo software a la medida, soluciones CONTPAQi e infraestructura digital sólida para empresas.",
};

export default function NosotrosPage() {
  return (
    <main className="relative min-h-screen bg-[#F3F7FF]">
      <PageBackgroundGlow />

      <div className="relative z-10 pb-20 lg:pb-28">
        <HeroNosotros />
        <TrustedClientsStrip />
        <SectionDivider showLine={false} />
        <NuestraHistoria />
        <SectionDivider />
        <MisionVision />
        <SectionDivider />
        <NuestrosValores />
        <SectionDivider />
        <ValorAgregadoNosotros />
        <SectionDivider />
        <EquipoNosotros />
        <SectionDivider showLine={false} />
        <CtaNosotros />
      </div>
    </main>
  );
}