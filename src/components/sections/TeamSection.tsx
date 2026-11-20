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
      {/* Contenedor alineado a 1138px según diseño */}
      <div className="max-w-[1138px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">
        
        {/* Columna Izquierda: Textos y CTA */}
        <div className="max-w-md text-left">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            NUESTRO EQUIPO
          </span>

          <h2 className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight mb-4">
            Trato directo con expertos
          </h2>

          <p className="text-sm sm:text-base text-[#5A687C] leading-relaxed mb-8">
            Especialistas experimentados trabajando mano a mano en la solución que tu empresa necesita.
          </p>

          <SectionButton href="/nosotros">
            Conócenos
          </SectionButton>
        </div>

        {/* Columna Derecha: Perfiles del Equipo */}
        <div className="grid grid-cols-2 sm:flex sm:items-center justify-center lg:justify-end gap-6 sm:gap-12 lg:gap-16">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center"
            >
              <h3 className="font-space font-medium text-base sm:text-xl lg:text-[22px] text-slate-900 mb-4 sm:mb-5">
                {member.name}
              </h3>

              <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-[216px] lg:h-[216px] rounded-full overflow-hidden bg-slate-900 border-4 border-white shadow-[0_12px_30px_-8px_rgba(8,27,75,0.18)] lg:[@media(hover:hover)_and_(pointer:fine)]:transition-transform lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:ease-out lg:[@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03]">
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

      </div>
    </section>
  );
}