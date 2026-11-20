import {
    Smartphone,
    Target,
    Share2,
    ShieldCheck,
    Bell,
    Star,
    Check,
  } from "lucide-react";
  
  const advantages = [
    {
      icon: Smartphone,
      title: "Software potente, fácil y amigable",
      description: "Potencia con uso fácil para todo tu equipo.",
    },
    {
      icon: Target,
      title: "Se adapta a tu empresa, no al revés",
      description: "Diseñado alrededor de tus procesos reales.",
    },
    {
      icon: Share2,
      title: "Escalable por módulos",
      description: "Crece cuando tu negocio lo necesite.",
    },
    {
      icon: ShieldCheck,
      title: "Costo único, sin licencias periódicas",
      description: "Inviertes una vez y el software es tuyo.",
    },
    {
      icon: Bell,
      title: "Excelente soporte",
      description: "Para cambios y actualizaciones cuando los necesites.",
    },
    {
      icon: Star,
      title: "Automatiza procesos manuales",
      description: "Ahorra tiempo y gana productividad.",
    },
  ];
  
  export function VentajasSoftware() {
    return (
      <section
        aria-labelledby="ventajas-heading"
        className="w-full px-4 sm:px-8"
      >
        <div className="max-w-[1136px] mx-auto">
          <div className="w-full text-left mb-12 lg:mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
              VENTAJAS
            </span>
            <h2
              id="ventajas-heading"
              className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
            >
              ¿Por qué un software a la medida?
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="bg-white rounded-[24px] p-7 sm:p-8 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
  
                  <h3 className="font-space font-semibold text-lg sm:text-xl text-slate-900 leading-snug mb-3">
                    {item.title}
                  </h3>
  
                  <div className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#E3ECFF] text-[#1E4FB8] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" strokeWidth={3} />
                    </span>
                    <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }