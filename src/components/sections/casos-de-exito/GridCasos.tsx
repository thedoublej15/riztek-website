"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CasoExito } from "@/data/casos";

interface GridCasosProps {
  casos: CasoExito[];
}

export function GridCasos({ casos }: GridCasosProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (window.location.hash === "#casos" && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="casos"
      aria-labelledby="todos-los-casos-heading"
      className="w-full px-4 sm:px-8 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-[1136px] mx-auto">
        {/* Encabezado uniforme */}
        <div className="mb-8 sm:mb-10 text-left">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#DCE6FF] text-[#1E4FB8] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] mb-4">
            TODOS LOS CASOS
          </span>

          <h2
            id="todos-los-casos-heading"
            className="font-space font-bold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-[-1px]"
          >
            Conoce nuestros proyectos a detalle
          </h2>
        </div>

        {/* Grid de tarjetas (escalable de 1 a N casos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {casos.map((caso) => (
            <article
              key={caso.slug}
              className="group flex flex-col justify-between bg-white rounded-[22px] p-5 border border-slate-100/90 shadow-[0_12px_32px_rgba(30,79,184,0.05)] transition-all duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_18px_42px_rgba(30,79,184,0.11)] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5"
            >
              <div>
                {/* Imagen superior con fondo + logo en escala de grises */}
                <Link
                  href={`/casos-de-exito/${caso.slug}`}
                  className="relative block w-full aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-900 mb-5 select-none"
                >
                  <Image
                    src={caso.coverBg}
                    alt={`Portada de ${caso.cliente}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 340px"
                    className="object-cover transition-transform duration-500 lg:[@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/35" />

                  <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                    <div className="relative w-32 h-20">
                      <Image
                        src={caso.logo}
                        alt={`Logo de ${caso.cliente}`}
                        fill
                        sizes="140px"
                        className="object-contain grayscale opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
                      />
                    </div>
                  </div>
                </Link>

                {/* Badges de Sector y Servicio */}
                <div className="flex flex-wrap items-center gap-2 mb-3.5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#DCE6FF] text-[#1E4FB8] text-[10px] font-semibold tracking-[0.02em]">
                    {caso.sector}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#DCE6FF] text-[#1E4FB8] text-[10px] font-semibold tracking-[0.02em]">
                    {caso.servicio}
                  </span>
                </div>

                {/* Título */}
                <h3 className="font-space font-bold text-lg sm:text-[19px] text-slate-900 leading-[1.3] tracking-[-0.3px] mb-2.5">
                  <Link
                    href={`/casos-de-exito/${caso.slug}`}
                    className="lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] transition-colors"
                  >
                    {caso.titulo}
                  </Link>
                </h3>

                {/* Resumen */}
                <p className="text-[13px] sm:text-sm text-[#5A687C] leading-[1.6] mb-6">
                  {caso.resumen}
                </p>
              </div>

              {/* Pie de tarjeta: Ver caso + Visitar sitio web (si está habilitado) */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <Link
                  href={`/casos-de-exito/${caso.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:gap-2 transition-all"
                >
                  <span>Ver caso</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {caso.sitioWeb && (
                  <a
                    href={caso.sitioWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#5A687C] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] transition-colors"
                  >
                    <span>Visitar sitio web</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}