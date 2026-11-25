import { Handshake, Shield, Heart, Flame, Award } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const valores = [
  {
    titulo: "Confianza",
    icon: Handshake,
  },
  {
    titulo: "Integridad",
    icon: Shield,
  },
  {
    titulo: "Compromiso",
    icon: Heart,
  },
  {
    titulo: "Inovación",
    icon: Flame,
  },
  {
    titulo: "Soluciones Profesionales",
    icon: Award,
  },
];

export function NuestrosValores() {
  return (
    <section
      id="valores"
      aria-labelledby="nuestros-valores-heading"
      className="w-full px-4 sm:px-8 scroll-mt-28"
    >
      <div className="max-w-[1136px] mx-auto">
        {/* Encabezado uniforme */}
        <Reveal className="w-full text-left mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            NUESTROS VALORES
          </span>

          <h2
            id="nuestros-valores-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            Lo que nos define
          </h2>
        </Reveal>

        {/* Grid de 5 tarjetas estáticas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            const isLastOdd = index === valores.length - 1;
            return (
              <Reveal
                key={valor.titulo}
                delay={index * 75}
                className={`h-full ${
                  isLastOdd ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <article className="h-full bg-white rounded-[22px] p-6 sm:p-7 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col justify-start text-left">
                  {/* Caja de icono uniforme */}
                  <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] mb-5 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Título del valor */}
                  <h3 className="font-space font-bold text-base sm:text-[17px] text-slate-900 leading-[1.3]">
                    {valor.titulo}
                  </h3>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}