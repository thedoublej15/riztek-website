import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CasoExito } from "@/data/casos";

interface CasoDestacadoProps {
  caso: CasoExito;
}

export function CasoDestacado({ caso }: CasoDestacadoProps) {
  return (
    <section id="casos" className="w-full px-4 sm:px-8 scroll-mt-28">
      <div className="max-w-[1136px] mx-auto">
        {/* Pill superior uniforme */}
        <div className="mb-5 sm:mb-6">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#DCE6FF] text-[#1E4FB8] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em]">
            CASO DESTACADO
          </span>
        </div>

        {/* Tarjeta horizontal principal */}
        <article className="group bg-white rounded-[24px] p-5 sm:p-7 lg:p-8 border border-slate-100/90 shadow-[0_14px_38px_rgba(30,79,184,0.06)] transition-all duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_20px_48px_rgba(30,79,184,0.11)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-7 lg:gap-10">
            
            {/* Columna Izquierda: Cover con fondo + Logo centrado */}
            <Link
              href={`/casos-de-exito/${caso.slug}`}
              className="lg:col-span-6 relative block w-full aspect-[16/10] rounded-[18px] overflow-hidden bg-slate-900 select-none"
            >
              <Image
                src={caso.coverBg}
                alt={`Fondo de ${caso.cliente}`}
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover transition-transform duration-500 lg:[@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/35" />

              <div className="relative z-10 w-full h-full flex items-center justify-center p-8 sm:p-10">
                <div className="relative w-48 sm:w-56 h-28 sm:h-32">
                  <Image
                    src={caso.logo}
                    alt={`Logo de ${caso.cliente}`}
                    fill
                    sizes="240px"
                    className="object-contain grayscale opacity-90 drop-shadow-[0_6px_18px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>
            </Link>

            {/* Columna Derecha: Badges, Título, Resumen, Metadatos y Link */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left">
              <div>
                {/* Badges de Sector y Servicio */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#DCE6FF] text-[#1E4FB8] text-[11px] font-semibold tracking-[0.02em]">
                    {caso.sector}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#DCE6FF] text-[#1E4FB8] text-[11px] font-semibold tracking-[0.02em]">
                    {caso.servicio}
                  </span>
                </div>

                {/* Título */}
                <h2 className="font-space font-bold text-2xl sm:text-[28px] lg:text-[31px] text-slate-900 leading-[1.2] tracking-[-0.5px] mb-3.5">
                  <Link
                    href={`/casos-de-exito/${caso.slug}`}
                    className="lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] transition-colors"
                  >
                    {caso.titulo}
                  </Link>
                </h2>

                {/* Descripción */}
                <p className="text-sm sm:text-[15px] text-[#5A687C] leading-[1.65] mb-6">
                  {caso.resumen}
                </p>

                {/* Caja de Metadatos (Cliente, Tecnologías, Sector) */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-[14px] bg-[#F8FAFC] border border-slate-100 mb-6">
                  <div>
                    <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.08em] text-[#8A98AC] mb-1">
                      CLIENTE
                    </span>
                    <span className="block text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                      {caso.cliente}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.08em] text-[#8A98AC] mb-1">
                      TECNOLOGÍAS
                    </span>
                    <span className="block text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                      {caso.tecnologias.join("  ")}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.08em] text-[#8A98AC] mb-1">
                      SECTOR
                    </span>
                    <span className="block text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                      {caso.sector}
                    </span>
                  </div>
                </div>
              </div>

              {/* Acción inferior */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/casos-de-exito/${caso.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:gap-2.5 transition-all"
                >
                  <span>Ver caso completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {caso.sitioWeb && (
                  <a
                    href={caso.sitioWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#5A687C] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] transition-colors"
                  >
                    <span>Visitar sitio web</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </article>
      </div>
    </section>
  );
}