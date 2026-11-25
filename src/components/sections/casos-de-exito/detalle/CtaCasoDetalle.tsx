import { HeroButton } from "@/components/ui/HeroButton";
import { Reveal } from "@/components/ui/Reveal";

export function CtaCasoDetalle() {
  return (
    <section
      aria-labelledby="cta-caso-detalle-heading"
      className="w-full px-4 sm:px-8"
    >
      <Reveal className="relative max-w-[1200px] mx-auto rounded-[28px] bg-gradient-to-br from-[#235FE3] via-[#1C4EC3] to-[#143B99] shadow-[0_16px_40px_-12px_rgba(20,59,153,0.35)] overflow-hidden px-7 py-11 sm:px-12 sm:py-14 lg:py-16 text-center">
        {/* Destello decorativo suave */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[260px] rounded-full bg-white/10 blur-3xl"
        />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2
            id="cta-caso-detalle-heading"
            className="font-space font-semibold text-2xl sm:text-4xl lg:text-[38px] text-white leading-[1.15] tracking-tight mb-4"
          >
            ¿Quieres resultados así en tu negocio?
          </h2>

          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-lg mb-8">
            Analizamos tus procesos actuales y desarrollamos la solución digital
            que tu operación necesita para crecer sin fricciones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <HeroButton href="/contacto" variant="white">
              <span>Hablar con un asesor</span>
              <span>→</span>
            </HeroButton>

            <a
              href="/casos-de-exito#casos"
              className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/15"
            >
              <span>Ver más casos</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}