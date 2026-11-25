import { CasoExito } from "@/data/casos";
import { Reveal } from "@/components/ui/Reveal";

interface RetosCasoProps {
  titulo: string;
  retos: CasoExito["retos"];
}

export function RetosCaso({ titulo, retos }: RetosCasoProps) {
  return (
    <section
      aria-labelledby="retos-caso-heading"
      className="w-full px-4 sm:px-8"
    >
      <div className="max-w-[1136px] mx-auto">
        {/* Encabezado uniforme */}
        <Reveal className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            1. EL RETO
          </span>

          <h2
            id="retos-caso-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight"
          >
            {titulo}
          </h2>
        </Reveal>

        {/* Grid de 3 Tarjetas de Retos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {retos.map((reto, index) => (
            <Reveal key={reto.titulo} delay={index * 90} className="h-full">
              <article className="h-full bg-white rounded-[24px] p-7 sm:p-8 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col text-left">
                <h3 className="font-space font-semibold text-lg sm:text-xl text-slate-900 leading-snug mb-3">
                  {reto.titulo}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed">
                  {reto.descripcion}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}