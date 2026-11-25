import Image from "next/image";
import { CasoExito } from "@/data/casos";

interface HeroCasoDetalleProps {
  caso: CasoExito;
}

export function HeroCasoDetalle({ caso }: HeroCasoDetalleProps) {
  return (
    <section className="w-full px-4 sm:px-8 pt-[100px] sm:pt-[110px] lg:pt-[114px] pb-8 lg:pb-11 overflow-x-clip">
      <div className="max-w-[1136px] mx-auto">
        {/* Bloque principal de 2 columnas (idéntico posicionamiento a HeroCasos y Servicios) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8">
          
          {/* Columna Izquierda: Breadcrumb, Título y Resumen */}
          <div className="lg:col-span-6 text-left lg:self-start lg:pt-[31px]">
            <nav
              aria-label="Ruta de navegación"
              className="hero-enter flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.08em] mb-5 sm:mb-6"
            >
              <a
                href="/"
                className="uppercase text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:underline"
              >
                INICIO
              </a>
              <span className="text-slate-400 select-none">/</span>
              <a
                href="/casos-de-exito"
                className="uppercase text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:underline"
              >
                CASOS DE ÉXITO
              </a>
              <span className="text-slate-400 select-none">/</span>
              <span className="text-[#5A687C] font-medium">
                {caso.cliente}
              </span>
            </nav>

            <h1 className="hero-enter hero-delay-1 font-space font-bold text-4xl sm:text-5xl lg:text-[68px] text-slate-900 leading-[1.1] lg:leading-[74px] tracking-tight lg:tracking-[-2px] max-w-[540px] mb-5 sm:mb-6">
              {caso.titulo}
            </h1>

            <p className="hero-enter hero-delay-2 text-base sm:text-lg lg:text-[18px] text-[#5A687C] leading-relaxed lg:leading-[29px] max-w-[470px]">
              {caso.resumen}
            </p>
          </div>

          {/* Columna Derecha: Tarjeta con coverBg, logo a color y badge inferior */}
          <div className="hero-enter hero-delay-2 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[463px] aspect-[463/445] rounded-[32px] overflow-hidden bg-slate-900 shadow-[0_30px_60px_rgba(15,23,41,0.22)] select-none">
              <Image
                src={caso.coverBg}
                alt={`Portada del proyecto ${caso.cliente}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 463px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />

              {/* Logo centrado a todo color */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-8 sm:p-10">
                <div className="relative w-52 sm:w-60 h-32 sm:h-36">
                  <Image
                    src={caso.logo}
                    alt={`Logo de ${caso.cliente}`}
                    fill
                    priority
                    sizes="240px"
                    className="object-contain drop-shadow-[0_8px_22px_rgba(0,0,0,0.45)]"
                  />
                </div>
              </div>

              {/* Píldora inferior izquierda */}
              <div className="absolute bottom-5 left-5 z-10">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white text-[#1E4FB8] text-[11px] font-bold shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
                  {caso.servicio}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Barra inferior de metadatos: Cliente, Tecnologías y Sector */}
        <div className="hero-enter hero-delay-3 mt-10 lg:mt-12 bg-white rounded-[22px] px-6 py-5 sm:px-9 sm:py-6 border border-slate-100/90 shadow-[0_12px_34px_rgba(30,79,184,0.06)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 sm:divide-x sm:divide-slate-100">
            <div>
              <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.08em] text-[#8A98AC] mb-1.5">
                CLIENTE
              </span>
              <span className="block text-sm sm:text-[15px] font-bold text-slate-900">
                {caso.cliente}
              </span>
            </div>

            <div className="sm:pl-8">
              <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.08em] text-[#8A98AC] mb-1.5">
                TECNOLOGÍAS
              </span>
              <span className="block text-sm sm:text-[15px] font-bold text-slate-900">
                {caso.tecnologias.join("   ")}
              </span>
            </div>

            <div className="sm:pl-8">
              <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.08em] text-[#8A98AC] mb-1.5">
                SECTOR
              </span>
              <span className="block text-sm sm:text-[15px] font-bold text-slate-900">
                {caso.sector}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}