import { CasoExito } from "@/data/casos";
import { Reveal } from "@/components/ui/Reveal";

interface DesarrolloCasoProps {
  titulo: string;
  modulos: CasoExito["modulos"];
}

export function DesarrolloCaso({ titulo, modulos }: DesarrolloCasoProps) {
  return (
    <section
      aria-labelledby="desarrollo-caso-heading"
      className="w-full px-4 sm:px-8"
    >
      <div className="max-w-[1136px] mx-auto">
        {/* Encabezado uniforme */}
        <Reveal className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            02. EL DESARROLLO
          </span>

          <h2
            id="desarrollo-caso-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight"
          >
            {titulo}
          </h2>
        </Reveal>

        {/* Grid de 2 columnas con los módulos implementados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {modulos.map((modulo, index) => (
            <Reveal key={modulo.numero} delay={index * 90} className="h-full">
              <article className="h-full bg-white rounded-[24px] p-7 sm:p-8 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col text-left">
                <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-[#1E4FB8] mb-2">
                  {modulo.numero}
                </span>

                <h3 className="font-space font-semibold text-lg sm:text-xl text-slate-900 leading-snug mb-3">
                  {modulo.titulo}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed">
                  {modulo.descripcion}
                </p>

                {/* Píldoras de tecnologías alineadas al fondo */}
                <div className="flex flex-wrap items-center gap-2 mt-auto pt-6">
                  {modulo.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-[#E8F0FE] text-[#1E4FB8] text-[11px] font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}