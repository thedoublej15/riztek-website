import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";

export function HeroAplicacionesMoviles() {
  return (
    <section className="w-full px-4 sm:px-8 pt-[100px] sm:pt-[110px] lg:pt-[114px] pb-8 lg:pb-11 overflow-x-clip">
      <div className="max-w-[1136px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8">
        
        {/* Columna Izquierda: Breadcrumb, Título, Subtítulo y Botones */}
        <div className="lg:col-span-6 text-left">
          <nav
            aria-label="Ruta de navegación"
            className="hero-enter flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.08em] mb-5 sm:mb-6"
          >
            <Link
              href="/"
              className="uppercase text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:underline"
            >
              INICIO
            </Link>
            <span className="text-slate-400 select-none">/</span>
            <Link
              href="/#servicios"
              className="uppercase text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:underline"
            >
              SERVICIOS
            </Link>
            <span className="text-slate-400 select-none">/</span>
            <span className="text-[#5A687C] font-medium">
              Aplicaciones Móviles
            </span>
          </nav>

          <h1 className="hero-enter hero-delay-1 font-space font-bold text-4xl sm:text-5xl lg:text-[68px] text-slate-900 leading-[1.1] lg:leading-[74px] tracking-tight lg:tracking-[-2px] max-w-[460px] mb-5 sm:mb-6">
            Aplicaciones
            <br />
            Móviles
          </h1>

          <p className="hero-enter hero-delay-2 text-base sm:text-lg lg:text-[18px] text-[#5A687C] leading-relaxed lg:leading-[29px] max-w-[470px] mb-8 sm:mb-9">
            Tu empresa en el móvil de tu cliente. Desarrollamos apps para iOS y
            Android que acercan tu negocio a tus clientes en cualquier momento.
          </p>

          <div className="hero-enter hero-delay-3 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <HeroButton href="/contacto" variant="blue">
              <span>Cotizar servicio</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </HeroButton>

            <HeroButton href="/casos-de-exito" variant="white">
              Ver proyectos
            </HeroButton>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta azul e ilustración móvil */}
        <div className="hero-enter hero-delay-2 lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[463px] aspect-[463/445] rounded-[32px] bg-gradient-to-tr from-[#1E4FB8] via-[#2F6BDC] to-[#5B95F2] shadow-[0_35px_70px_rgba(30,79,184,0.45)] flex items-center justify-center px-5 sm:px-7">
            <Image
              src="/images/illustrations/moviles.svg"
              alt="Ilustración de desarrollo de aplicaciones móviles"
              width={435}
              height={340}
              priority
              className="w-full h-auto drop-shadow-[0_22px_28px_rgba(15,23,41,0.42)] select-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
}