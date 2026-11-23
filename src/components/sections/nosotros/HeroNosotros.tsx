import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";

export function HeroNosotros() {
  return (
    <section className="w-full px-4 sm:px-8 pt-[100px] sm:pt-[110px] lg:pt-[114px] pb-8 lg:pb-11 overflow-x-clip">
      <div className="max-w-[1136px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8">
        
        {/* Columna Izquierda: Breadcrumb, Título, Cita y Botones */}
        <div className="lg:col-span-6 text-left lg:self-start lg:pt-[31px]">
          <nav
            aria-label="Ruta de navegación"
            className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.08em] mb-5 sm:mb-6"
          >
            <Link
              href="/"
              className="uppercase text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:underline"
            >
              INICIO
            </Link>
            <span className="text-slate-400 select-none">/</span>
            <span className="uppercase text-[#5A687C] font-medium">
              NOSOTROS
            </span>
          </nav>

          <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-[68px] text-slate-900 leading-[1.1] lg:leading-[74px] tracking-tight lg:tracking-[-2px] max-w-[460px] mb-5 sm:mb-6">
            Historia de
            <br />
            Riztek
          </h1>

          {/* Cita con comillas a la izquierda y línea vertical debajo */}
          <blockquote className="flex items-stretch gap-3.5 max-w-[470px] mb-8 sm:mb-9">
            <div className="flex flex-col items-center shrink-0 pt-0.5 select-none">
              <span
                aria-hidden="true"
                className="font-space font-bold text-[26px] leading-[0.8] text-slate-400/70 mb-1.5"
              >
                “
              </span>
              <span
                aria-hidden="true"
                className="w-[2px] flex-1 rounded-full bg-slate-300/80"
              />
            </div>

            <p className="text-base sm:text-lg lg:text-[18px] text-[#5A687C] leading-relaxed lg:leading-[29px]">
              Más de una década en la construcción de software e infraestructura
              digital sólida para tu negocio.
            </p>
          </blockquote>

          {/* Botones idénticos a HeroCasos */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <HeroButton href="#equipo" variant="blue">
              <span>Conoce nuestro equipo</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </HeroButton>

            <HeroButton href="/#servicios" variant="white">
              Nuestros servicios
            </HeroButton>
          </div>
        </div>

        {/* Columna Derecha: Misma caja exacta (463/445) que HeroCasos para alinear TrustedClientsStrip */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[463px] aspect-[463/445] flex items-center justify-center">
            <Image
              src="/images/illustrations/pared_logros.svg"
              alt="Hitos y evolución de Riztek desde 2013"
              fill
              priority
              className="object-contain lg:scale-[1.06] lg:origin-right drop-shadow-[0_24px_38px_rgba(30,79,184,0.12)] select-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
}