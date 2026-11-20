import Image from "next/image";
import { Eye, Smartphone, Briefcase } from "lucide-react";

const valueCards = [
  {
    icon: Eye,
    title: "Toma el control",
    subtitle: "El conocimiento es poder",
    description:
      "Mediante nuestros sistemas tendrás toda la información de tu empresa a un solo click.",
  },
  {
    icon: Smartphone,
    title: "Digitaliza y automatiza tu empresa",
    subtitle: "Aplicaciones Web Progresivas",
    description:
      "Ayudamos a dueños de negocios a digitalizar su empresa, de esta manera aseguran la permanencia de su negocio evitando el riesgo de desaparecer.",
  },
  {
    icon: Briefcase,
    title: "El valor agregado de tu empresa",
    subtitle: "Crecimiento · Productividad · Ahorro",
    description:
      "Mediante un solo software adaptado que controle todas las áreas de tu negocio, sin pagar licencias.",
  },
];

const featurePhotos = [
  {
    src: "/images/photos/codigo_a_tu_medida.jpg",
    alt: "Desarrollador programando código a tu medida",
    badge: "Código a tu medida",
  },
  {
    src: "/images/photos/trabajo_en_equipo.jpg",
    alt: "Equipo de ingeniería colaborando en escritorio",
    badge: "Trabajo en equipo",
  },
];

export function ValorAgregadoSoftware() {
  return (
    <section
      aria-labelledby="valor-agregado-heading"
      className="w-full px-4 sm:px-8"
    >
      <div className="max-w-[1136px] mx-auto">
        <div className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            VALOR AGREGADO
          </span>
          <h2
            id="valor-agregado-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            Toma el control de tu empresa
          </h2>
        </div>

        {/* Fila 1: 3 Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mb-6 lg:mb-7">
          {valueCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="bg-white rounded-[24px] p-7 sm:p-8 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] mb-6">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-space font-semibold text-lg sm:text-xl text-slate-900 leading-snug mb-2">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-2.5">
                  {card.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Fila 2: 2 Tarjetas Fotográficas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {featurePhotos.map((photo) => (
            <div
              key={photo.badge}
              className="relative h-[220px] sm:h-[250px] lg:h-[265px] w-full rounded-[24px] overflow-hidden bg-slate-200 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 554px"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-semibold px-3.5 py-1.5 shadow-sm">
                {photo.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}