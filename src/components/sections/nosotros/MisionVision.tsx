import { Target, Eye } from "lucide-react";

const pilares = [
  {
    titulo: "Misión",
    descripcion:
      "Ser una empresa resolutiva para la pequeña y mediana empresa, brindando la confianza de disponer de un único proveedor capaz de satisfacer las necesidades tecnológicas por medio de asesoría, soporte y desarrollo de software para eficientizar procesos en base a una garantía de excelencia en nuestro trabajo. Siempre cumpliendo y superando las expectativas de nuestros clientes.",
    icon: Target,
  },
  {
    titulo: "Visión",
    descripcion:
      "Llegar a ser reconocidos a nivel nacional mediante constante crecimiento y actualización. Contando con sede Riztek especializada en asesoría, soporte y desarrollo de software.",
    icon: Eye,
  },
];

export function MisionVision() {
  return (
    <section
      id="mision-vision"
      aria-labelledby="mision-vision-heading"
      className="w-full px-4 sm:px-8 scroll-mt-28"
    >
      <div className="max-w-[1136px] mx-auto">
        {/* Encabezado uniforme */}
        <div className="w-full text-left mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            MISIÓN Y VISIÓN
          </span>

          <h2
            id="mision-vision-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            Hacia dónde vamos y cómo lo hacemos
          </h2>
        </div>

        {/* Grid de 2 tarjetas estáticas de Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {pilares.map((pilar) => {
            const Icon = pilar.icon;
            return (
              <article
                key={pilar.titulo}
                className="bg-white rounded-[24px] p-7 sm:p-9 lg:p-10 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col justify-start text-left"
              >
                {/* Caja de icono uniforme */}
                <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] mb-6 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Título */}
                <h3 className="font-space font-bold text-xl sm:text-[22px] text-slate-900 leading-snug mb-3.5">
                  {pilar.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-sm sm:text-[15px] text-[#5A687C] leading-[1.75]">
                  {pilar.descripcion}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}