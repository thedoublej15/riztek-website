import { ArrowRight, Download } from "lucide-react";
import { HeroButton } from "@/components/ui/HeroButton";
import { Reveal } from "@/components/ui/Reveal";

const LISTA_PRECIOS_PDF_URL =
  "https://storage.googleapis.com/wzukusers/user-34871119/documents/8a1f9cdfca3b4369a4a22715664950e9/Lista_de_Precios_Sistemas_CONTPAQi_2021.pdf";

export function CtaSoftwareContpaqi() {
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
            ¿Listo para implementar tu software CONTPAQi?
          </h2>

          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-lg mb-8">
            Te asesoramos para elegir, instalar y capacitar a tu equipo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <HeroButton href="/contacto" variant="white">
              Hablar con un asesor
              <ArrowRight className="w-4 h-4 shrink-0" />
            </HeroButton>

            <a
              href={LISTA_PRECIOS_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto h-[52px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/40 bg-white/5 px-8 text-sm font-semibold text-white lg:[@media(hover:hover)_and_(pointer:fine)]:transition-all lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:ease-out lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/15 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:border-white/60 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5"
            >
              <span>Descargar lista completa</span>
              <Download className="w-4 h-4 shrink-0 lg:[@media(hover:hover)_and_(pointer:fine)]:transition-transform lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}