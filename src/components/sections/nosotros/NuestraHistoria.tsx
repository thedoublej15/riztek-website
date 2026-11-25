import { Reveal } from "@/components/ui/Reveal";

const hitos = [
  {
    titulo: "2013",
    descripcion:
      "Inicio de servicios informáticos remotos para pequeña y mediana empresa.",
  },
  {
    titulo: "2014",
    descripcion:
      "19 de febrero: se crea la empresa por la necesidad de soporte integral en sistemas.",
  },
  {
    titulo: "Nace Riztek",
    descripcion: "De rizoma + tecnología.",
  },
  {
    titulo: "Hoy",
    descripcion: "Compromiso y lealtad con clientes.",
  },
];

export function NuestraHistoria() {
  return (
    <section
      id="historia"
      aria-labelledby="nuestra-historia-heading"
      className="w-full px-4 sm:px-8 scroll-mt-28"
    >
      <div className="max-w-[1136px] mx-auto">
        {/* Encabezado uniforme con ServicesSection y Casos de Éxito */}
        <Reveal className="w-full text-left mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            NUESTRA HISTORIA
          </span>

          <h2
            id="nuestra-historia-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            Un camino de constancia y especialización
          </h2>
        </Reveal>

        {/* Contenido en 2 columnas: Línea de tiempo (izquierda) + Relato (derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-10 lg:gap-12">
          
          {/* Columna Izquierda: Timeline vertical */}
          <div className="lg:col-span-5">
            <ol className="relative pl-7 sm:pl-8 space-y-8 sm:space-y-9">
              {/* Línea vertical continua alineada al centro de los puntos (w-2.5 = 10px -> centro en 5px) */}
              <span
                aria-hidden="true"
                className="absolute left-[4px] top-2 bottom-2 w-[1.5px] bg-[#1E4FB8]/15"
              />

              {hitos.map((hito, index) => (
                <Reveal key={hito.titulo} delay={index * 90}>
                  <li className="relative">
                    {/* Punto azul del hito */}
                    <span
                      aria-hidden="true"
                      className="absolute -left-7 sm:-left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-[#1E4FB8] ring-4 ring-[#F3F7FF]"
                    />

                    <h3 className="font-space font-bold text-lg sm:text-[19px] text-slate-900 leading-snug mb-1.5">
                      {hito.titulo}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#5A687C] leading-[1.6] max-w-[300px]">
                      {hito.descripcion}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Columna Derecha: Narrativa histórica en 3 párrafos */}
          <Reveal
            delay={120}
            className="lg:col-span-7 space-y-5 text-sm sm:text-[15px] text-[#5A687C] leading-[1.75] text-left"
          >
            <p>
              Riztek, antes conocido de otra manera, tuvo su comienzo en el año
              2013, ofreciendo una gran variedad de servicios informáticos los
              cuales eran por medio de trabajo remoto y no presencial brindado
              únicamente a la pequeña y mediana empresa. El 19 de febrero del
              2014 se crea la empresa en base a la necesidad de un soporte
              integral en sistemas, con el tiempo se fueron ajustando los
              servicios ofrecidos al igual que el nombre, hasta llegar a lo que
              es hoy “Riztek”, que proviene de las palabras rizoma y tecnología,
              lo cual en conjunto significan “aportar para el crecimiento de
              otras empresas en el ámbito tecnológico.”
            </p>

            <p>
              Con estos cambios fue reducido el catálogo de servicios a
              únicamente Asesoría, Soporte y Desarrollo de Software, este
              último contando con dos opciones: en base a catálogo o
              personalizado. Estos cambios fueron realizados con el fin de ser
              especialistas en el tema y ofrecer servicios con aún mayor calidad
              y garantía de recibir un trabajo profesional.
            </p>

            <p>
              En ese momento se abrieron las puertas de Riztek al público en
              general, no solo empresas y con ello la cartera de clientes fue en
              crecimiento, así como el número de empleados. Hoy en día Riztek
              ofrece compromiso y lealtad con sus clientes, brindando la
              confianza de recibir lo que se pide excediendo expectativas ya que
              cuenta con constante capacitación y actualización.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}