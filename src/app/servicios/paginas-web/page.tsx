import { PageBackgroundGlow } from "@/components/ui/PageBackgroundGlow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroPaginasWeb } from "@/components/sections/servicios/paginas-web/HeroPaginasWeb";
import { TrustedClientsStrip } from "@/components/sections/shared/TrustedClientsStrip";
import { TiposDeSitiosWeb } from "@/components/sections/servicios/paginas-web/TiposDeSitiosWeb";
import { LoQueIncluyeWeb } from "@/components/sections/servicios/paginas-web/LoQueIncluyeWeb";
import { CtaPaginasWeb } from "@/components/sections/servicios/paginas-web/CtaPaginasWeb";

export default function PaginasWebPage() {
  return (
    <main className="relative min-h-screen bg-[#F3F7FF]">
      <PageBackgroundGlow />

      <div className="relative z-10 pb-20 lg:pb-28">
        <HeroPaginasWeb />
        <TrustedClientsStrip />
        <SectionDivider showLine={false} />
        <TiposDeSitiosWeb />
        <SectionDivider />
        <LoQueIncluyeWeb />
        <SectionDivider showLine={false} />
        <CtaPaginasWeb />
      </div>
    </main>
  );
}