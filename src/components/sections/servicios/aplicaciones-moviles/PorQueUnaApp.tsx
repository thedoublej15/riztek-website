import { Eye, Heart, Target, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const appReasons = [
  {
    icon: Eye,
    title: "Visibilidad",
    subtitle: "Disponible para miles de usuarios.",
    description:
      "Hoy en día los usuarios están atentos a las nuevas tendencias en aplicaciones y buscan las últimas novedades que están a su alcance para facilitarles las cosas.",
  },
  {
    icon: Heart,
    title: "Valor a tus clientes",
    subtitle: "Tan cerca como sus dispositivos.",
    description:
      "Estarás tan cerca de ellos como ellos lo están de sus dispositivos. Cuanto más conozcamos a nuestros clientes, más acciones podremos generar para fidelizarlos y mantenerlos junto a nosotros.",
  },
  {
    icon: Target,
    title: "Complementar la estrategia",
    subtitle: "Nuevo canal de venta.",
    description:
      "En el momento de plantearse los objetivos de marketing, es importante utilizar los canales que tenemos a nuestro alcance, y el uso de la app gana en comodidad, rapidez y alcance.",
  },
  {
    icon: Clock,
    title: "Sin límite de tiempo",
    subtitle: "En cualquier momento que lo deseen.",
    description:
      "Una empresa puede cerrar sus oficinas a las 7 de la tarde, pero no por eso deja de “atender” a sus clientes. Mediante una aplicación, los clientes pueden seguir adquiriendo un producto o servicio.",
  },
];

export function PorQueUnaApp() {
  return (
    <section
      aria-labelledby="por-que-app-heading"
      className="w-full px-4 sm:px-8"
    >
      <div className="max-w-[1136px] mx-auto">
        <Reveal className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            POR QUÉ UNA APP
          </span>
          <h2
            id="por-que-app-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            Tu empresa en el bolsillo de tus clientes
          </h2>
        </Reveal>

        {/* Grid de 4 tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {appReasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 90} className="h-full">
                <article className="h-full bg-white rounded-[24px] p-7 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-space font-semibold text-lg sm:text-xl text-slate-900 leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-2.5">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}