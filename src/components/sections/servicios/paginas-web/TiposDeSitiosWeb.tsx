import Image from "next/image";
import { Info, Briefcase, ShoppingCart } from "lucide-react";

const websiteTypes = [
  {
    icon: Info,
    title: "Corporativa - Información",
    description:
      "Posiciona tu empresa mostrando tu información principal. También tus productos o servicios principales que ofreces.",
  },
  {
    icon: Briefcase,
    title: "Portafolio Digital",
    description:
      "Muestra tus servicios o productos de una forma elegante.",
  },
  {
    icon: ShoppingCart,
    title: "Tienda Electrónica",
    description:
      "Vende tus productos y servicios las 24 horas del día, los 7 días de la semana.",
  },
];

const websitePhotos = [
  {
    src: "/images/photos/diseño_a_la_medida.jpeg",
    alt: "Diseño web personalizado y a la medida",
    badge: "Diseño a la medida",
  },
  {
    src: "/images/photos/interfaces_modernas.jpg",
    alt: "Interfaces web modernas y atractivas",
    badge: "Interfaces modernas",
  },
  {
    src: "/images/photos/navegacion_fluida.jpg",
    alt: "Navegación web fluida en computadora y dispositivos móviles",
    badge: "Navegación fluida",
  },
];

export function TiposDeSitiosWeb() {
  return (
    <section
      aria-labelledby="tipos-sitios-heading"
      className="w-full px-4 sm:px-8"
    >
      <div className="max-w-[1136px] mx-auto">
        <div className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            TIPOS DE SITIOS WEB
          </span>
          <h2
            id="tipos-sitios-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            El sitio web ideal para cada tipo de negocio
          </h2>
        </div>

        {/* Fila 1: 3 Tarjetas de Tipos de Sitios Web */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mb-6 lg:mb-7">
          {websiteTypes.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="bg-white rounded-[24px] p-7 sm:p-8 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] mb-6">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-space font-semibold text-lg sm:text-xl text-slate-900 leading-snug mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Fila 2: 3 Tarjetas Fotográficas con Badge flotante */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {websitePhotos.map((photo) => (
            <div
              key={photo.badge}
              className="relative h-[220px] sm:h-[235px] lg:h-[240px] w-full rounded-[24px] overflow-hidden bg-slate-200 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
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