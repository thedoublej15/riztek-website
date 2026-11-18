import Link from "next/link";
import { Hourglass, Building2, Handshake } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full px-4 sm:px-8 pt-[124px] lg:pt-[110px] pb-0 bg-[linear-gradient(180deg,#081B4B_0%,#11317A_28%,#1E4FB8_52%,#5A84D6_72%,#B4CBF2_88%,#F3F7FF_100%)]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Etiqueta superior */}
        <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-blue-200/90 uppercase mb-3 lg:mb-4">
          AGENCIA DE SOFTWARE
        </span>

        {/* Título Principal */}
        <h1 className="font-space font-semibold text-4xl sm:text-5xl lg:text-[76px] text-white leading-[1.1] lg:leading-[77.5px] tracking-tight lg:tracking-[-1.9px] max-w-2xl lg:max-w-[540px] mb-5 lg:mb-5">
          Procesos más rápidos, Negocios más eficientes
        </h1>

        {/* Subtítulo */}
        <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mb-8 lg:mb-8 font-normal">
          Especialistas en desarrollo de software y soporte técnico.
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12 lg:mb-10">
          <Link
            href="/contacto"
            className="btn-motion w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-slate-900 bg-white hover:bg-blue-50 shadow-lg shadow-blue-950/20"
          >
            Iniciar cotización
          </Link>

          <Link
            href="/casos-de-exito"
            className="btn-motion w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-slate-900 bg-white/30 hover:bg-white/80 backdrop-blur-sm"
          >
            Proyectos realizados
          </Link>
        </div>

        {/* Barra Blanca de Métricas (1200 x 108 en escritorio) */}
        <div className="w-full lg:h-[108px] bg-white rounded-[28px] shadow-[0_12px_28px_-6px_rgba(8,27,75,0.14),0_28px_60px_-15px_rgba(30,79,184,0.22)] border border-[#1E4FB8]/10 px-6 py-7 lg:py-0 lg:px-8 flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-slate-200/75 items-center">
            
            {/* Métrica 1 */}
            <div className="w-[245px] mx-auto md:w-auto md:mx-0 flex items-center justify-start md:justify-center gap-4 md:px-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] shrink-0">
                <Hourglass className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-space text-2xl lg:text-[28px] font-bold text-slate-900 leading-none mb-1">
                  +10 años
                </p>
                <p className="text-xs sm:text-[13px] text-[#5A687C] leading-tight">
                  de trayectoria tecnológica
                </p>
              </div>
            </div>

            {/* Métrica 2 */}
            <div className="w-[245px] mx-auto md:w-auto md:mx-0 flex items-center justify-start md:justify-center gap-4 md:px-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-space text-2xl lg:text-[28px] font-bold text-slate-900 leading-none mb-1">
                  2014
                </p>
                <p className="text-xs sm:text-[13px] text-[#5A687C] leading-tight">
                  fundación formal
                </p>
              </div>
            </div>

            {/* Métrica 3 */}
            <div className="w-[245px] mx-auto md:w-auto md:mx-0 flex items-center justify-start md:justify-center gap-4 md:px-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] shrink-0">
                <Handshake className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-space text-2xl lg:text-[28px] font-bold text-slate-900 leading-none mb-1">
                  100%
                </p>
                <p className="text-xs sm:text-[13px] text-[#5A687C] leading-tight">
                  enfoque en el cliente
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}