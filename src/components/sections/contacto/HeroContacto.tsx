import Link from "next/link";

export function HeroContacto() {
  return (
    <section
      aria-labelledby="hero-contacto-heading"
      className="w-full px-4 sm:px-8 pt-28 sm:pt-36 lg:pt-40 pb-10 sm:pb-12"
    >
      <div className="max-w-[1136px] mx-auto text-left">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase mb-5"
        >
          <Link
            href="/"
            className="text-slate-400 hover:text-[#1E4FB8] transition-colors"
          >
            INICIO
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#1E4FB8]">CONTACTO</span>
        </nav>

        {/* Título principal */}
        <h1
          id="hero-contacto-heading"
          className="font-space font-semibold text-4xl sm:text-5xl lg:text-[54px] text-slate-900 leading-[1.1] tracking-tight max-w-2xl mb-5"
        >
          Hablemos de tu
          <br />
          próximo proyecto
        </h1>

        {/* Subtítulo */}
        <p className="text-sm sm:text-base text-[#5A687C] leading-relaxed max-w-lg">
          Da el paso hacia la transformación digital de tu empresa. Cuéntanos tu
          reto y construyamos juntos la solución tecnológica a la medida de tu
          negocio.
        </p>
      </div>
    </section>
  );
}