import Image from "next/image";
import { CasoExito } from "@/data/casos";
import { Reveal } from "@/components/ui/Reveal";

interface ResultadosCasoProps {
  titulo: string;
  cliente: string;
  coverBg?: string;
  metricas: CasoExito["metricas"];
  galeria?: string[];
}

export function ResultadosCaso({
  titulo,
  cliente,
  coverBg,
  metricas,
  galeria = [],
}: ResultadosCasoProps) {
  const hasGallery = galeria.length > 0;
  const hasAsymmetricThree = galeria.length >= 3;

  // Orden visual: izquierda [0 (monitor), 2 (laptop)] apiladas, derecha [1 (celular)] vertical
  const leftImages = hasAsymmetricThree ? [galeria[0], galeria[2]] : galeria;
  const rightImage = hasAsymmetricThree ? galeria[1] : null;

  return (
    <section
      aria-labelledby="resultados-caso-heading"
      className="w-full px-4 sm:px-8"
    >
      <div className="max-w-[1136px] mx-auto">
        {/* Encabezado uniforme */}
        <Reveal className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            03. EL RESULTADO
          </span>

          <h2
            id="resultados-caso-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight"
          >
            {titulo}
          </h2>
        </Reveal>

        {/* Fila 1: 3 Tarjetas de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {metricas.map((metrica, index) => (
            <Reveal
              key={metrica.descripcion}
              delay={index * 90}
              className="h-full"
            >
              <article className="h-full bg-white rounded-[24px] p-7 sm:p-8 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col text-left">
                <span className="font-space font-bold text-4xl sm:text-[44px] text-slate-900 leading-none tracking-tight mb-4">
                  {metrica.valor}
                </span>

                <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#5A687C] leading-relaxed">
                  {metrica.descripcion}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Fila 2: Galería asimétrica de capturas del proyecto */}
        {hasGallery && (
          <div className="mt-6 lg:mt-7">
            {hasAsymmetricThree && rightImage ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
                {/* Columna Izquierda: monitor (arriba) y laptop (abajo) apiladas */}
                <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-7">
                  {leftImages.map((src, index) => (
                    <Reveal key={src} delay={index * 100}>
                      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-slate-900 shadow-[0_18px_40px_rgba(15,23,41,0.14)] select-none">
                        {coverBg && (
                          <>
                            <Image
                              src={coverBg}
                              alt=""
                              aria-hidden="true"
                              fill
                              sizes="(max-width: 1024px) 100vw, 650px"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/25" />
                          </>
                        )}

                        <div className="relative z-10 w-full h-full p-5 sm:p-7">
                          <div className="relative w-full h-full">
                            <Image
                              src={src}
                              alt={`Captura ${index + 1} de la plataforma ${cliente}`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 650px"
                              className="object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.45)]"
                            />
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Columna Derecha: celular vertical */}
                <Reveal delay={120} className="lg:col-span-5 h-full">
                  <div className="relative w-full h-full min-h-[420px] rounded-[24px] overflow-hidden bg-slate-900 shadow-[0_18px_40px_rgba(15,23,41,0.14)] select-none">
                    {coverBg && (
                      <>
                        <Image
                          src={coverBg}
                          alt=""
                          aria-hidden="true"
                          fill
                          sizes="(max-width: 1024px) 100vw, 450px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/25" />
                      </>
                    )}

                    <div className="relative z-10 w-full h-full p-6 sm:p-8">
                      <div className="relative w-full h-full min-h-[372px]">
                        <Image
                          src={rightImage}
                          alt={`Vista móvil de la plataforma ${cliente}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 450px"
                          className="object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.45)]"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 ${
                  galeria.length === 2 ? "md:grid-cols-2" : ""
                } gap-6 lg:gap-7`}
              >
                {galeria.map((src, index) => (
                  <Reveal key={src} delay={index * 100}>
                    <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-slate-900 shadow-[0_18px_40px_rgba(15,23,41,0.14)] select-none">
                      {coverBg && (
                        <>
                          <Image
                            src={coverBg}
                            alt=""
                            aria-hidden="true"
                            fill
                            sizes="(max-width: 1024px) 100vw, 554px"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/25" />
                        </>
                      )}

                      <div className="relative z-10 w-full h-full p-5 sm:p-7">
                        <div className="relative w-full h-full">
                          <Image
                            src={src}
                            alt={`Captura ${index + 1} de la plataforma ${cliente}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 554px"
                            className="object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.45)]"
                          />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}