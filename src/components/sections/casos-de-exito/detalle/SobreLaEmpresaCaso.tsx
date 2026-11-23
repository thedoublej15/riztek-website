import { CasoExito } from "@/data/casos";

interface SobreLaEmpresaCasoProps {
  sobreLaEmpresa: CasoExito["sobreLaEmpresa"];
}

export function SobreLaEmpresaCaso({ sobreLaEmpresa }: SobreLaEmpresaCasoProps) {
  return (
    <section
      aria-labelledby="sobre-la-empresa-heading"
      className="w-full px-4 sm:px-8"
    >
      <div className="max-w-[1136px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-start gap-6 lg:gap-12">
        {/* Columna Izquierda: Badge y Título */}
        <div className="lg:col-span-5 text-left">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            SOBRE LA EMPRESA
          </span>

          <h2
            id="sobre-la-empresa-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight"
          >
            {sobreLaEmpresa.titulo}
          </h2>
        </div>

        {/* Columna Derecha: Descripción */}
        <div className="lg:col-span-7 text-left lg:pt-[48px]">
          <p className="text-base sm:text-lg lg:text-[18px] text-[#5A687C] leading-relaxed lg:leading-[30px]">
            {sobreLaEmpresa.descripcion}
          </p>
        </div>
      </div>
    </section>
  );
}