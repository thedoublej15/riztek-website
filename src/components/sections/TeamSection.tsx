import Image from "next/image";
import { SectionButton } from "@/components/ui/SectionButton";

const teamMembers = [
  {
    name: "Iván Talamantes",
    image: "/images/team/ivan.jpeg",
  },
  {
    name: "Ana Cuenca",
    image: "/images/team/ana.jpeg",
  },
];

export function TeamSection() {
  return (
    <section className="w-full px-4 sm:px-8">
      {/* Contenedor alineado a 1138px: flujo vertical en móvil/tablet y 2 columnas en escritorio */}
      <div className="max-w-[1138px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,28rem)_1fr] lg:items-center gap-y-10 lg:gap-y-0 lg:gap-x-12">
        
        {/* 1. Encabezado (Arriba en móvil/tablet, Columna Izquierda Superior en escritorio) */}
        <div className="max-w-md text-left lg:self-end lg:mb-8">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            NUESTRO EQUIPO
          </span>

          <h2 className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight mb-4">
            Trato directo con expertos
          </h2>

          <p className="text-sm sm:text-base text-[#5A687C] leading-relaxed">
            Especialistas experimentados trabajando mano a mano en la solución que tu empresa necesita.
          </p>
        </div>

        {/* 2. Perfiles del Equipo (En medio en móvil/tablet, Columna Derecha completa en escritorio) */}
        <div className="grid grid-cols-2 sm:flex sm:items-center justify-center lg:justify-end gap-6 sm:gap-12 lg:gap-16 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center"
            >
              <h3 className="font-space font-medium text-base sm:text-xl lg:text-[22px] text-slate-900 mb-4 sm:mb-5">
                {member.name}
              </h3>

              <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-[216px] lg:h-[216px] rounded-full overflow-hidden bg-slate-900 border-4 border-white shadow-[0_12px_30px_-8px_rgba(8,27,75,0.18)]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 144px, (max-width: 1024px) 192px, 216px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 3. Botón CTA (Al final en móvil/tablet, Columna Izquierda Inferior en escritorio) */}
        <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
          <SectionButton href="/nosotros">
            Conócenos
          </SectionButton>
        </div>

      </div>
    </section>
  );
}