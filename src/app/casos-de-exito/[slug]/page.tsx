import { notFound } from "next/navigation";
import { PageBackgroundGlow } from "@/components/ui/PageBackgroundGlow";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { HeroCasoDetalle } from "@/components/sections/casos-de-exito/detalle/HeroCasoDetalle";
import { SobreLaEmpresaCaso } from "@/components/sections/casos-de-exito/detalle/SobreLaEmpresaCaso";
import { RetosCaso } from "@/components/sections/casos-de-exito/detalle/RetosCaso";
import { DesarrolloCaso } from "@/components/sections/casos-de-exito/detalle/DesarrolloCaso";
import { ResultadosCaso } from "@/components/sections/casos-de-exito/detalle/ResultadosCaso";
import { CtaCasoDetalle } from "@/components/sections/casos-de-exito/detalle/CtaCasoDetalle";
import { casosDeExito, getCasoBySlug } from "@/data/casos";

interface CasoDetallePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return casosDeExito.map((caso) => ({
    slug: caso.slug,
  }));
}

export default async function CasoDetallePage({ params }: CasoDetallePageProps) {
  const { slug } = await params;
  const caso = getCasoBySlug(slug);

  if (!caso) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-[#F3F7FF]">
      <PageBackgroundGlow />

      <div className="relative z-10 pb-20 lg:pb-28">
        <HeroCasoDetalle caso={caso} />
        <SectionDivider showLine={false} />
        <SobreLaEmpresaCaso sobreLaEmpresa={caso.sobreLaEmpresa} />
        <SectionDivider />
        <RetosCaso titulo={caso.retoTitulo} retos={caso.retos} />
        <SectionDivider />
        <DesarrolloCaso
          titulo={caso.desarrolloTitulo}
          modulos={caso.modulos}
        />
        <SectionDivider />
        <ResultadosCaso
          titulo={caso.resultadoTitulo}
          cliente={caso.cliente}
          metricas={caso.metricas}
          galeria={caso.galeria}
        />
        <SectionDivider showLine={false} />
        <CtaCasoDetalle />
      </div>
    </main>
  );
}