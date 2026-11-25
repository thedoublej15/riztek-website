import { HeroButton } from "@/components/ui/HeroButton";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CtaCasos() {
  return (
    <section className="w-full px-4 sm:px-8">
      <Reveal className="relative max-w-[1200px] mx-auto rounded-[28px] bg-gradient-to-br from-[#235FE3] via-[#1C4EC3] to-[#143B99] shadow-[0_16px_40px_-12px_rgba(20,59,153,0.35)] overflow-hidden px-7 py-11 sm:px-12 sm:py-14 lg:py-16 text-center">
        {/* Destello decorativo suave */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[260px] rounded-full bg-white/10 blur-3xl"
        />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-space font-semibold text-2xl sm:text-4xl lg:text-[38px] text-white leading-[1.15] tracking-tight mb-4">
            Haz de tu empresa nuestro próximo caso.
          </h2>

          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-lg mb-8">
            Ya viste cómo transformamos la operación de otras industrias.
            Hablemos de tus retos y diseñemos tu solución a la medida.
          </p>

          <HeroButton href="/contacto" variant="white">
            Iniciar mi proyecto
            <ArrowRight className="w-4 h-4 shrink-0" />
          </HeroButton>
        </div>
      </Reveal>
    </section>
  );
}