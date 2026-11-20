import {
    Bell,
    Share2,
    Smartphone,
    ShieldCheck,
    TabletSmartphone,
    Star,
    Check,
  } from "lucide-react";
  
  const appFeatures = [
    {
      icon: Bell,
      title: "Notificaciones Push",
      description:
        "Envía notificaciones a tus clientes, colaboradores o socios.",
      bullets: ["Clientes", "Socios", "Colaboradores", "Tiempo real"],
    },
    {
      icon: Share2,
      title: "Redes Sociales",
      description:
        "Integra tus redes sociales para que tus clientes estén en contacto contigo y tu negocio.",
      bullets: ["Facebook", "Instagram", "WhatsApp", "Contacto directo"],
    },
    {
      icon: Smartphone,
      title: "iOS y Android",
      description: "Disponible en AppStore y PlayStore.",
      bullets: ["AppStore", "PlayStore", "Publicación", "Actualizaciones"],
    },
    {
      icon: ShieldCheck,
      title: "Seguridad",
      description:
        "Confía en que los datos personales estarán protegidos.",
      bullets: ["Datos cifrados", "Privacidad", "Acceso seguro", "Respaldos"],
    },
    {
      icon: TabletSmartphone,
      title: "Diseño Responsivo",
      description: "Usa tu app en un celular o en una tableta.",
      bullets: ["Celular", "Tableta", "Interfaz fluida", "Adaptable"],
    },
    {
      icon: Star,
      title: "Beneficios Únicos",
      description:
        "Digitaliza tu negocio, usando al máximo las características de tu celular.",
      bullets: ["Cámara", "Ubicación", "Pagos móviles", "Modo sin conexión"],
    },
  ];
  
  export function CaracteristicasApps() {
    return (
      <section
        aria-labelledby="caracteristicas-apps-heading"
        className="w-full px-4 sm:px-8"
      >
        <div className="max-w-[1136px] mx-auto">
          <div className="w-full text-left mb-12 lg:mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
              CARACTERÍSTICAS
            </span>
            <h2
              id="caracteristicas-apps-heading"
              className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
            >
              Todo lo que tu app necesita para destacar
            </h2>
          </div>
  
          {/* Grid de 6 tarjetas (3 columnas x 2 filas en escritorio) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {appFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="bg-white rounded-[24px] p-7 sm:p-8 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col justify-between"
                >
                  <div>
                    {/* Cabecera horizontal: Caja de ícono + Título */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-space font-semibold text-lg sm:text-xl text-slate-900 leading-snug">
                        {feature.title}
                      </h3>
                    </div>
  
                    {/* Descripción */}
                    <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>
  
                  {/* Grid 2x2 de 4 bullets con check circular */}
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 pt-1">
                    {feature.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-xs font-medium text-slate-800"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#E3ECFF] text-[#1E4FB8] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </span>
                        <span className="truncate">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }