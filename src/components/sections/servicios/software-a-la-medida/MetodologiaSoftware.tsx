import { Info, CircleDot, Code2, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const methodologySteps = [
  {
    number: "01",
    icon: Info,
    title: "Análisis de requerimientos",
    description: "Aterrizamos tus ideas y objetivos en un software.",
  },
  {
    number: "02",
    icon: CircleDot,
    title: "Diseño",
    description:
      "Con base en tus requerimientos y nuestro análisis, diseñamos la mejor opción para tu empresa.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Codificación",
    description:
      "Con un método de retroalimentación constante, logramos realizar el software necesario para tu compañía.",
  },
  {
    number: "04",
    icon: Clock,
    title: "Implementación y capacitación",
    description:
      "Nos encargamos de implementar, migrar y capacitar a tu personal hasta que el sistema sea totalmente funcional.",
  },
];

export function MetodologiaSoftware() {
  return (
    <section
      aria-labelledby="metodologia-heading"
      className="w-full px-4 sm:px-8"
    >
      <div className="max-w-[1136px] mx-auto">
        <Reveal className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            METODOLOGÍA DE TRABAJO
          </span>
          <h2
            id="metodologia-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            Del análisis a la implementación
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {methodologySteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === methodologySteps.length - 1;

            return (
              <Reveal
                key={step.number}
                delay={index * 90}
                className="relative flex"
              >
                <article className="w-full bg-white rounded-[24px] p-7 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-space font-semibold text-2xl sm:text-[26px] tracking-tight text-[#1E4FB8]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-space font-semibold text-lg sm:text-xl text-slate-900 leading-snug mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed">
                    {step.description}
                  </p>
                </article>

                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex items-center w-7 -right-7 top-12 absolute z-10 pointer-events-none"
                  >
                    <span className="w-full border-t-2 border-dotted border-[#93B4FF]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E4FB8] shrink-0 -ml-1" />
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}