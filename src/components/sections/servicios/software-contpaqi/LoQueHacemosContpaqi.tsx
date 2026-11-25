import Image from "next/image";
import { ShoppingCart, Headphones, GraduationCap, Plug } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const contpaqiServices = [
  {
    icon: ShoppingCart,
    title: "Venta e Instalación",
    description:
      "Somos Distribuidores Autorizados de los sistemas Contpaq.",
  },
  {
    icon: Headphones,
    title: "Soporte Técnico",
    description:
      "Amplia experiencia en el manejo de los sistemas Contpaq, nos posicionan como una excelente opción para dar soporte de software.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación y Asesoría",
    description:
      "Cuentas ya con estos sistemas, nosotros te ayudaremos a sacarle el máximo provecho.",
  },
  {
    icon: Plug,
    title: "Interfaces",
    description:
      "Realizamos interfaces para integrar los sistemas Contpaq con sistemas ERP o de Producción.",
  },
];

const contpaqiPhotos = [
  {
    src: "/images/photos/control_financiero_claro.jpg",
    alt: "Panel de control financiero y facturación electrónica",
    badge: "Control financiero claro",
  },
  {
    src: "/images/photos/acompanamiento_en_el_proceso.jpg",
    alt: "Equipo brindando asesoría y acompañamiento en sistemas CONTPAQi",
    badge: "Acompañamiento en el proceso",
  },
];

export function LoQueHacemosContpaqi() {
  return (
    <section
      aria-labelledby="lo-que-hacemos-contpaqi-heading"
      className="w-full px-4 sm:px-8"
    >
      <div className="max-w-[1136px] mx-auto">
        <Reveal className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            LO QUE HACEMOS POR TI
          </span>
          <h2
            id="lo-que-hacemos-contpaqi-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            Más que licencias: te acompañamos de punta a punta
          </h2>
        </Reveal>

        {/* Fila 1: 4 Tarjetas de Servicios CONTPAQi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mb-6 lg:mb-7">
          {contpaqiServices.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 90} className="h-full">
                <article className="h-full bg-white rounded-[24px] p-7 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col">
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
              </Reveal>
            );
          })}
        </div>

        {/* Fila 2: 2 Tarjetas Fotográficas con Badge flotante */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {contpaqiPhotos.map((photo, index) => (
            <Reveal key={photo.badge} delay={index * 110}>
              <div className="relative h-[220px] sm:h-[235px] lg:h-[240px] w-full rounded-[24px] overflow-hidden bg-slate-200 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 554px"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-semibold px-3.5 py-1.5 shadow-sm">
                  {photo.badge}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}