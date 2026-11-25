import Link from "next/link";
import { Terminal, Smartphone, AppWindow, BarChart2 } from "lucide-react";
import { SectionButton } from "@/components/ui/SectionButton";

const services = [
  {
    title: "Software a la Medida",
    description:
      "Creamos herramientas tecnológicas que se adaptan a tu empresa para impulsar su crecimiento.",
    bullets: ["Control centralizado", "Datos al instante", "Sin licencias"],
    href: "/servicios/software-a-la-medida",
    icon: Terminal,
  },
  {
    title: "Aplicaciones Móviles",
    description:
      "Desarrollamos apps para iOS y Android enfocadas en facilitar la vida de tus usuarios.",
    bullets: ["Mayor alcance", "Experiencia ágil", "Vanguardia digital"],
    href: "/servicios/aplicaciones-moviles",
    icon: Smartphone,
  },
  {
    title: "Páginas Web",
    description:
      "Diseñamos sitios web profesionales con todo lo necesario para tu presencia digital.",
    bullets: ["Diseño responsivo", "Hosting y dominio", "Correos corporativos"],
    href: "/servicios/paginas-web",
    icon: AppWindow,
  },
  {
    title: "Software CONTPAQi",
    description:
      "Implementamos y damos soporte a sistemas Contpaqi para optimizar tu negocio.",
    bullets: ["Soporte experto", "Adaptabilidad total", "Gestión eficiente"],
    href: "/servicios/software-contpaqi",
    icon: BarChart2,
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="w-full px-4 sm:px-8 scroll-mt-28">
      {/* Contenedor principal de 1136px para el encabezado alineado a la izquierda */}
      <div className="max-w-[1136px] mx-auto">
        
        {/* Encabezado de Sección (1136 x 185 en escritorio) */}
        <div className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            NUESTROS SERVICIOS
          </span>

          <h2 className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl mb-4">
            Tenemos exactamente lo que tu empresa necesita
          </h2>

          <p className="text-sm sm:text-base text-[#5A687C] leading-relaxed max-w-xl">
            Desde software a la medida hasta soporte administrativo, cubrimos cada área de tu transformación digital.
          </p>
        </div>

        {/* Grid de 4 Tarjetas centrado dentro del contenedor */}
        <div className="max-w-[940px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative group bg-white rounded-[24px] p-7 sm:p-9 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] lg:[@media(hover:hover)_and_(pointer:fine)]:transition-all lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:ease-out lg:[@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.02] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:border-[#1E4FB8]/45 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_18px_40px_-12px_rgba(30,79,184,0.16)] flex flex-col justify-between"
              >
                {/* Capa clicable de tarjeta completa: activa SOLO en escritorio con puntero fino */}
                <Link
                  href={service.href}
                  aria-label={`Ver servicio ${service.title}`}
                  className="hidden lg:block [@media(pointer:coarse)]:!hidden absolute inset-0 z-10 rounded-[24px]"
                />

                <div>
                  {/* Icono en caja azul suave */}
                  <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:transition-colors lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:group-hover:text-white mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Título y Descripción */}
                  <h3 className="font-space font-semibold text-lg sm:text-xl text-slate-900 mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Lista de 3 características */}
                  <ul className="space-y-3 mb-8">
                    {service.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-800"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#1E4FB8] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón CTA: único disparador en celular, tablet y pantallas táctiles */}
                <div className="relative z-20 lg:pointer-events-none [@media(pointer:coarse)]:!pointer-events-auto">
                  <SectionButton
                    href={service.href}
                    className="lg:[@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-[#173e93] lg:[@media(hover:hover)_and_(pointer:fine)]:group-hover:[&_svg]:translate-x-1"
                  >
                    Ver servicio
                  </SectionButton>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}