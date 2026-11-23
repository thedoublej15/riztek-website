import { PageBackgroundGlow } from "@/components/ui/PageBackgroundGlow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroCasos } from "@/components/sections/casos-de-exito/HeroCasos";
import { TrustedClientsStrip } from "@/components/sections/shared/TrustedClientsStrip";
import { CasoDestacado } from "@/components/sections/casos-de-exito/CasoDestacado";
import { GridCasos } from "@/components/sections/casos-de-exito/GridCasos";
import { CtaCasos } from "@/components/sections/casos-de-exito/CtaCasos";
import { casosDeExito, getCasoDestacado } from "@/data/casos";

export default function CasosDeExitoPage() {
  const casoDestacado = getCasoDestacado();

  return (
    <main className="relative min-h-screen bg-[#F3F7FF]">
      <PageBackgroundGlow />

      <div className="relative z-10 pb-20 lg:pb-28">
        <HeroCasos />
        <TrustedClientsStrip />
        <SectionDivider showLine={false} />
        {casoDestacado && <CasoDestacado caso={casoDestacado} />}
        <SectionDivider />
        <GridCasos casos={casosDeExito} />
        <SectionDivider showLine={false} />
        <CtaCasos />
      </div>
    </main>
  );
}