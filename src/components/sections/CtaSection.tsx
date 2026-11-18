import Link from "next/link";
import Image from "next/image";

export function CtaSection() {
  return (
    <section className="w-full px-4 sm:px-8">
      {/* Tarjeta CTA de 1200 x 341 en escritorio */}
      <div className="relative max-w-[1200px] mx-auto lg:min-h-[341px] rounded-[28px] bg-[#E6EBF3] border border-slate-200/80 shadow-[0_12px_36px_-10px_rgba(8,27,75,0.08)] overflow-hidden flex flex-col lg:flex-row lg:items-center">
        
        {/* Imagen de fondo derecha (Desktop) */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[55%] pointer-events-none select-none">
          <Image
            src="/images/ilustrations/cta_home.jpg"
            alt="Transformación digital empresarial"
            fill
            sizes="660px"
            loading="eager"
            className="object-cover object-center"
          />
          {/* Fundido sedoso de izquierda a derecha sobre la imagen */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#E6EBF3_0%,rgba(230,235,243,0.92)_18%,rgba(230,235,243,0.35)_45%,rgba(230,235,243,0)_75%)]" />
        </div>

        {/* Contenido Izquierdo */}
        <div className="relative z-10 w-full lg:max-w-[600px] px-7 pt-9 pb-7 sm:px-12 sm:pt-12 sm:pb-9 lg:py-12 lg:pl-14 lg:pr-6 text-left">
          <h2 className="font-space font-semibold text-2xl sm:text-4xl lg:text-[38px] text-slate-900 leading-[1.15] tracking-tight mb-4">
            ¿Listo para impulsar el futuro digital de tu empresa?
          </h2>

          <p className="text-sm sm:text-base text-[#5A687C] leading-relaxed max-w-lg mb-7 sm:mb-8">
            Ya sea que necesites desarrollar un sistema a la medida o modernizar tu infraestructura actual, estamos listos para platicar sobre tu proyecto.
          </p>

          <Link
            href="/contacto"
            className="btn-motion inline-flex items-center justify-center px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#1E4FB8] hover:bg-[#173e93] shadow-sm shadow-[#1E4FB8]/25"
          >
            Trabaja con nosotros
          </Link>
        </div>

        {/* Imagen Inferior (Móvil y Tablet) */}
        <div className="relative lg:hidden w-full h-52 sm:h-64 pointer-events-none select-none">
          <Image
            src="/images/ilustrations/cta_home.jpg"
            alt="Transformación digital empresarial"
            fill
            sizes="(max-width: 1024px) 100vw, 660px"
            loading="eager"
            className="object-cover object-center"
          />
          {/* Fundido superior para unir suavemente con el fondo */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#E6EBF3_0%,rgba(230,235,243,0.4)_35%,rgba(230,235,243,0)_75%)]" />
        </div>

      </div>
    </section>
  );
}