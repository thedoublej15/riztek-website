"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const isDesktopWithMouse = () => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.innerWidth >= 1024
    );
  };

  const handleSpeedChange = (
    e: React.MouseEvent<HTMLDivElement>,
    rate: number
  ) => {
    if (!isDesktopWithMouse()) return;

    const animations = e.currentTarget.getAnimations();
    animations.forEach((anim) => {
      anim.playbackRate = rate;
    });
  };

  const handleDesktopPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    // Bloquea cualquier interacción táctil ('touch') o lápiz ('pen'), y exige botón izquierdo del ratón en escritorio
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    if (!isDesktopWithMouse()) return;

    router.push("/casos-de-exito");
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
      <div
        onPointerUp={handleDesktopPointerUp}
        className="max-w-[1200px] mx-auto space-y-5 sm:space-y-6 mb-10 lg:mb-12 lg:[@media(hover:hover)_and_(pointer:fine)]:cursor-pointer [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        {/* Fila 1: Logos 1 - 10 (Movimiento hacia la derecha) */}
        <div
          onMouseEnter={(e) => handleSpeedChange(e, 0.25)}
          onMouseLeave={(e) => handleSpeedChange(e, 1)}
          className="flex w-max animate-marquee-right"
        >
          {[...row1Logos, ...row1Logos].map((logo, idx) => (
            <div
              key={`row1-${idx}`}
              className="mx-2.5 sm:mx-3 w-[200px] h-[94px] sm:w-[255px] sm:h-[112px] bg-white rounded-[22px] border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] lg:[@media(hover:hover)_and_(pointer:fine)]:transition-all lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:border-[#1E4FB8]/45 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_12px_28px_rgba(30,79,184,0.1)] px-7 py-4 flex items-center justify-center shrink-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 150px, 200px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Fila 2: Logos 11 - 21 (Movimiento hacia la izquierda) */}
        <div
          onMouseEnter={(e) => handleSpeedChange(e, 0.25)}
          onMouseLeave={(e) => handleSpeedChange(e, 1)}
          className="flex w-max animate-marquee-left"
        >
          {[...row2Logos, ...row2Logos].map((logo, idx) => (
            <div
              key={`row2-${idx}`}
              className="mx-2.5 sm:mx-3 w-[200px] h-[94px] sm:w-[255px] sm:h-[112px] bg-white rounded-[22px] border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] lg:[@media(hover:hover)_and_(pointer:fine)]:transition-all lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:border-[#1E4FB8]/45 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_12px_28px_rgba(30,79,184,0.1)] px-7 py-4 flex items-center justify-center shrink-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 150px, 200px"
                  className="object-contain"
                />
              </div>
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