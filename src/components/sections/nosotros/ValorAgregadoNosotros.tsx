import { Headset, Lightbulb, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const diferenciales = [
  {
    titulo: "Servicio Post Venta",
    descripcion:
      "Nuestro servicio no termina al momento de entregar el proyecto, continuamos con un acompañamiento integral, buscando siempre relaciones largas ganar-ganar.",
    icon: Headset,
  },
  {
    titulo: "Entendemos 100% al cliente",
    descripcion:
      "Tenemos la capacidad de lograr aterrizar y materializar cada requerimiento de nuestro cliente, sumando nuestra experiencia, logramos un producto funcional y personalizado.",
    icon: Lightbulb,
  },
  {
    titulo: "Sistemas amigables al usuario",
    descripcion:
      "Logramos que los sistemas puedan manejarlo por cada tipo de usuario.",
    icon: Users,
  },
];

export function ValorAgregadoNosotros() {
  return (
    <section
      id="valor-agregado"
      aria-labelledby="valor-agregado-nosotros-heading"
      className="w-full px-4 sm:px-8 scroll-mt-28"
    >
      <div className="max-w-[1136px] mx-auto">
        {/* Encabezado uniforme */}
        <Reveal className="w-full text-left mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            NUESTRO VALOR AGREGADO
          </span>

          <h2
            id="valor-agregado-nosotros-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            Más allá de la entrega
          </h2>
        </Reveal>

        {/* Grid de 3 tarjetas estáticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {diferenciales.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.titulo} delay={index * 90} className="h-full">
                <article className="h-full bg-white rounded-[24px] p-7 sm:p-8 lg:p-9 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col justify-start text-left">
                  {/* Caja de icono uniforme */}
                  <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] mb-6 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Título */}
                  <h3 className="font-space font-bold text-lg sm:text-[20px] text-slate-900 leading-[1.3] mb-3">
                    {item.titulo}
                  </h3>

                  {/* Descripción */}
                  <p className="text-xs sm:text-sm text-[#5A687C] leading-[1.7]">
                    {item.descripcion}
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