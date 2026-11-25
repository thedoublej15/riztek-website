import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";
import { Reveal } from "@/components/ui/Reveal";

export function CtaSection() {
  return (
    <section className="w-full px-4 sm:px-8">
      {/* Tarjeta CTA de 1200 x 341 en escritorio */}
      <Reveal className="relative max-w-[1200px] mx-auto lg:min-h-[341px] rounded-[28px] bg-[#E6EBF3] border border-slate-200/80 shadow-[0_12px_36px_-10px_rgba(8,27,75,0.08)] overflow-hidden flex flex-col lg:flex-row lg:items-center">
        
        {/* Imagen de fondo derecha (Desktop) con mask-image para evitar cortes de subpíxel al hacer zoom */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[56%] pointer-events-none select-none [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.08)_16%,rgba(0,0,0,0.65)_45%,#000_78%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.08)_16%,rgba(0,0,0,0.65)_45%,#000_78%)]">
          <Image
            src="/images/photos/cta_home.jpg"
            alt="Transformación digital empresarial"
            fill
            sizes="672px"
            loading="eager"
            className="object-cover object-center"
          />
        </div>

        {/* Contenido Izquierdo */}
        <div className="relative z-10 w-full lg:max-w-[600px] px-7 pt-9 pb-7 sm:px-12 sm:pt-12 sm:pb-9 lg:py-12 lg:pl-14 lg:pr-6 text-left">
          <h2 className="font-space font-semibold text-2xl sm:text-4xl lg:text-[38px] text-slate-900 leading-[1.15] tracking-tight mb-4">
            ¿Listo para impulsar el futuro digital de tu empresa?
          </h2>

          <p className="text-sm sm:text-base text-[#5A687C] leading-relaxed max-w-lg mb-7 sm:mb-8">
            Ya sea que necesites desarrollar un sistema a la medida o modernizar tu infraestructura actual, estamos listos para platicar sobre tu proyecto.
          </p>

          <HeroButton href="/contacto" variant="blue">
            Trabaja con nosotros
            <ArrowRight className="w-4 h-4 shrink-0" />
          </HeroButton>
        </div>

        {/* Imagen Inferior (Móvil y Tablet) también con máscara limpia */}
        <div className="relative lg:hidden w-full h-52 sm:h-64 pointer-events-none select-none [mask-image:linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.6)_38%,#000_78%)] [-webkit-mask-image:linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.6)_38%,#000_78%)]">
          <Image
            src="/images/photos/cta_home.jpg"
            alt="Transformación digital empresarial"
            fill
            sizes="(max-width: 1024px) 100vw, 672px"
            loading="eager"
            className="object-cover object-center"
          />
        </div>

      </Reveal>
    </section>
  );
}