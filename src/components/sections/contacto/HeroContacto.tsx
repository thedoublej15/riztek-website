import Link from "next/link";

export function HeroContacto() {
  return (
    <section
      aria-labelledby="hero-contacto-heading"
      className="w-full px-4 sm:px-8 pt-[100px] sm:pt-[110px] lg:pt-[114px] pb-10 sm:pb-12 overflow-x-clip"
    >
      <div className="max-w-[1136px] mx-auto text-left lg:pt-[31px]">
        {/* Breadcrumb uniforme con HeroNosotros */}
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
            CONTACTO
          </span>
        </nav>

        {/* Título principal con la misma escala tipográfica que HeroNosotros */}
        <h1
          id="hero-contacto-heading"
          className="font-space font-bold text-4xl sm:text-5xl lg:text-[68px] text-slate-900 leading-[1.1] lg:leading-[74px] tracking-tight lg:tracking-[-2px] max-w-[650px] mb-5 sm:mb-6"
        >
          Hablemos de tu
          <br />
          próximo proyecto
        </h1>

        {/* Subtítulo uniforme */}
        <p className="text-base sm:text-lg lg:text-[18px] text-[#5A687C] leading-relaxed lg:leading-[29px] max-w-[540px]">
          Da el paso hacia la transformación digital de tu empresa. Cuéntanos tu
          reto y construyamos juntos la solución tecnológica a la medida de tu
          negocio.
        </p>
      </div>
    </section>
  );
}