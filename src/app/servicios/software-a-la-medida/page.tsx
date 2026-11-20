import { PageBackgroundGlow } from "@/components/ui/PageBackgroundGlow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroSoftwareMedida } from "@/components/sections/servicios/software-a-la-medida/HeroSoftwareMedida";
import { TrustedClientsStrip } from "@/components/sections/shared/TrustedClientsStrip";
import { ValorAgregadoSoftware } from "@/components/sections/servicios/software-a-la-medida/ValorAgregadoSoftware";
import { MetodologiaSoftware } from "@/components/sections/servicios/software-a-la-medida/MetodologiaSoftware";
import { VentajasSoftware } from "@/components/sections/servicios/software-a-la-medida/VentajasSoftware";
import { CtaSoftwareMedida } from "@/components/sections/servicios/software-a-la-medida/CtaSoftwareMedida";

export default function SoftwareALaMedidaPage() {
  return (
    <main className="relative min-h-screen bg-[#F3F7FF]">
      <PageBackgroundGlow />

      <div className="relative z-10 pb-20 lg:pb-28">
        <HeroSoftwareMedida />
        <TrustedClientsStrip />
        <SectionDivider showLine={false} />
        <ValorAgregadoSoftware />
        <SectionDivider />
        <MetodologiaSoftware />
        <SectionDivider />
        <VentajasSoftware />
        <SectionDivider showLine={false} />
        <CtaSoftwareMedida />
      </div>
    </main>
  );
}