import { LayoutTemplate, Server, Check } from "lucide-react";

const includedFeatures = [
  {
    icon: LayoutTemplate,
    title: "Diseño Web",
    description:
      "Página web profesional. Diseño responsivo adaptado a tu empresa y a todos los dispositivos.",
    bullets: [
      "Página web profesional",
      "Diseño responsivo",
      "Adaptado a todos los dispositivos",
    ],
  },
  {
    icon: Server,
    title: "Dominio y Hosting",
    description:
      "Tu dominio tuempresa.com o .mx, con el mejor alojamiento al mejor costo.",
    bullets: ["Seguridad", "Acceso", "Almacenamiento"],
  },
];

export function LoQueIncluyeWeb() {
  return (
    <section
      aria-labelledby="lo-que-incluye-heading"
      className="w-full px-4 sm:px-8"
    >
      <div className="max-w-[1136px] mx-auto">
        <div className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            LO QUE INCLUYE
          </span>
          <h2
            id="lo-que-incluye-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            Todo lo que tu sitio necesita para destacar
          </h2>
        </div>

        {/* Grid de 2 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {includedFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="bg-white rounded-[24px] p-7 sm:p-8 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col justify-between"
              >
                <div>
                  {/* Cabecera horizontal: Caja de ícono + Título */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-space font-semibold text-lg sm:text-xl text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Descripción */}
                  <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Lista vertical de 3 bullets con check circular */}
                <ul className="space-y-3 pt-1">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#E3ECFF] text-[#1E4FB8] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span>{bullet}</span>
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