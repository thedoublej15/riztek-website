"use client";

import { SectionButton } from "@/components/ui/SectionButton";

const row1Logos = [
  { src: "/images/logos/1_logo_rios.png", alt: "Ríos Ríos & Co." },
  { src: "/images/logos/2_logo_benitez.png", alt: "Benítez & Yáñez Ingenieros" },
  { src: "/images/logos/3_logo_cuellar.png", alt: "Grupo Cuellar Asesores" },
  { src: "/images/logos/4_logo_icea.png", alt: "ICEA Proyectos" },
  { src: "/images/logos/5_logo_sd.png", alt: "SD Servicios de Mantenimiento" },
  { src: "/images/logos/6_logo_aguila.png", alt: "El Águila" },
  { src: "/images/logos/7_logo_elektro.png", alt: "Elektro" },
  { src: "/images/logos/8_logo_cb.png", alt: "CB" },
  { src: "/images/logos/9_logo_kargo.png", alt: "Kargo" },
  { src: "/images/logos/10_logo_proma.png", alt: "Proma" },
];

const row2Logos = [
  { src: "/images/logos/11_logo_gp.png", alt: "GP Servicios Integrales" },
  { src: "/images/logos/12_logo_mids.png", alt: "MIDS" },
  { src: "/images/logos/13_logo_zarco.png", alt: "Zarco" },
  { src: "/images/logos/14_logo_plancha.png", alt: "Plancha" },
  { src: "/images/logos/15_logo_kireen.png", alt: "Kireen" },
  { src: "/images/logos/16_logo_maku.png", alt: "Maku" },
  { src: "/images/logos/17_logo_aunores.png", alt: "Aunores" },
  { src: "/images/logos/18_logo_mrp.png", alt: "MRP" },
  { src: "/images/logos/19_logo_tempore.png", alt: "Tempore" },
  { src: "/images/logos/20_logo_its.png", alt: "ITS" },
  { src: "/images/logos/21_logo_odontologia.png", alt: "Odontología" },
];

export function ClientsSection() {
  const isDesktopHover = () =>
    typeof window !== "undefined" &&
    window.innerWidth >= 1024 &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handleSpeedChange = (
    e: React.MouseEvent<HTMLDivElement>,
    rate: number
  ) => {
    if (!isDesktopHover()) return;

    const animations = e.currentTarget.getAnimations();
    for (let i = 0; i < animations.length; i++) {
      animations[i].playbackRate = rate;
    }
  };

  return (
    <section className="w-full overflow-hidden">
      {/* Encabezado alineado a 1136px con la misma tipografía */}
      <div className="w-full px-4 sm:px-8">
        <div className="max-w-[1136px] mx-auto text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            EMPRESAS QUE HAN CONFIADO EN NOSOTROS
          </span>

          <h2 className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl mb-4">
            Impulsamos a empresas que buscan liderar su industria
          </h2>

          <p className="text-sm sm:text-base text-[#5A687C] leading-relaxed max-w-xl">
            Proyectos reales y soluciones tecnológicas que generan impacto en negocios de todos los sectores.
          </p>
        </div>
      </div>

      {/* Contenedor del Marquee Infinito con bordes difuminados */}
      <div className="max-w-[1200px] mx-auto space-y-5 sm:space-y-6 mb-10 lg:mb-12 [contain:layout_paint] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {/* Fila 1: Logos 1 - 10 (Movimiento hacia la izquierda) */}
        <div
          onMouseEnter={(e) => handleSpeedChange(e, 0.25)}
          onMouseLeave={(e) => handleSpeedChange(e, 1)}
          className="flex w-max animate-marquee-left [animation-duration:45s] will-change-transform"
        >
          {[...row1Logos, ...row1Logos].map((logo, idx) => (
            <div
              key={`row1-${idx}`}
              aria-hidden={idx >= row1Logos.length}
              className="mx-2.5 sm:mx-3 w-[200px] h-[94px] sm:w-[255px] sm:h-[112px] bg-white rounded-[22px] border border-slate-200/75 shadow-[0_4px_14px_rgba(8,27,75,0.03)] px-7 py-4 flex items-center justify-center shrink-0 select-none"
            >
              <img
                src={logo.src}
                alt={idx < row1Logos.length ? logo.alt : ""}
                width={200}
                height={80}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="max-w-full max-h-full w-auto h-auto object-contain pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Fila 2: Logos 11 - 21 (Movimiento hacia la derecha) */}
        <div
          onMouseEnter={(e) => handleSpeedChange(e, 0.25)}
          onMouseLeave={(e) => handleSpeedChange(e, 1)}
          className="flex w-max animate-marquee-right [animation-duration:49.5s] will-change-transform"
        >
          {[...row2Logos, ...row2Logos].map((logo, idx) => (
            <div
              key={`row2-${idx}`}
              aria-hidden={idx >= row2Logos.length}
              className="mx-2.5 sm:mx-3 w-[200px] h-[94px] sm:w-[255px] sm:h-[112px] bg-white rounded-[22px] border border-slate-200/75 shadow-[0_4px_14px_rgba(8,27,75,0.03)] px-7 py-4 flex items-center justify-center shrink-0 select-none"
            >
              <img
                src={logo.src}
                alt={idx < row2Logos.length ? logo.alt : ""}
                width={200}
                height={80}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="max-w-full max-h-full w-auto h-auto object-contain pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botón CTA alineado a 1136px */}
      <div className="w-full px-4 sm:px-8">
        <div className="max-w-[1136px] mx-auto">
          <SectionButton href="/casos-de-exito">
            Ver casos de éxito
          </SectionButton>
        </div>
      </div>
    </section>
  );
}