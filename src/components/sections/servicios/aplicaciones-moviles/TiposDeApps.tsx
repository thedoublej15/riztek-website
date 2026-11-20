import Image from "next/image";
import { ShoppingCart, Gift, Info, Briefcase } from "lucide-react";

const appTypes = [
  {
    icon: ShoppingCart,
    title: "Comercial - Ventas",
    description: "Comercio electrónico, ventas 24/7.",
  },
  {
    icon: Gift,
    title: "Fidelización",
    description:
      "Como acción publicitaria, promociones, estrategia de conexión con los clientes.",
  },
  {
    icon: Info,
    title: "Información",
    description:
      "Valor real al cliente, guías turísticas, recursos útiles, gratuitos para los clientes.",
  },
  {
    icon: Briefcase,
    title: "Empresarial",
    description:
      "Para la gestión corporativa, facturación, contabilidad, etc.",
  },
];

const appPhotos = [
  {
    src: "/images/photos/experiencia_movil.jpg",
    alt: "Experiencia móvil interactiva en smartphones",
    badge: "Experiencia móvil",
  },
  {
    src: "/images/photos/soluciones_a_tu_medida.jpg",
    alt: "Equipo diseñando soluciones móviles a la medida",
    badge: "Soluciones a tu medida",
  },
  {
    src: "/images/photos/siempre_al_alcance.jpg",
    alt: "Usuario interactuando con aplicación móvil",
    badge: "Siempre al alcance",
  },
];

export function TiposDeApps() {
  return (
    <section
      aria-labelledby="tipos-apps-heading"
      className="w-full px-4 sm:px-8"
    >
      <div className="max-w-[1136px] mx-auto">
        <div className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            TIPOS DE APPS
          </span>
          <h2
            id="tipos-apps-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            La app ideal para cada objetivo
          </h2>
        </div>

        {/* Fila 1: 4 Tarjetas de Tipos de Apps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mb-6 lg:mb-7">
          {appTypes.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="bg-white rounded-[24px] p-7 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col"
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
          {appPhotos.map((photo) => (
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