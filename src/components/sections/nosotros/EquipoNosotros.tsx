import Image from "next/image";

const miembros = [
  {
    nombre: "Iván",
    apellido: "Talamantes",
    cargo: "DIRECTOR EJECUTIVO",
    imagen: "/images/team/ivan.jpeg",
  },
  {
    nombre: "Ana",
    apellido: "Cuenca",
    cargo: "DIRECTORA COMERCIAL",
    imagen: "/images/team/ana.jpeg",
  },
];

export function EquipoNosotros() {
  return (
    <section
      id="equipo"
      aria-labelledby="nuestro-equipo-heading"
      className="w-full px-4 sm:px-8 scroll-mt-28"
    >
      <div className="max-w-[1136px] mx-auto">
        {/* Encabezado uniforme */}
        <div className="w-full text-left mb-12 sm:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            NUESTRO EQUIPO
          </span>

          <h2
            id="nuestro-equipo-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-2xl mb-4"
          >
            Liderazgo que impulsa tu negocio.
          </h2>

          <p className="text-sm sm:text-base text-[#5A687C] leading-relaxed max-w-xl">
            Especialistas en tecnología y estrategia dedicados al crecimiento
            digital de tu empresa.
          </p>
        </div>

        {/* Grid de 2 miembros centrado */}
        <div className="max-w-[780px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {miembros.map((miembro) => (
            <article key={miembro.cargo} className="flex flex-col text-left">
              <h3 className="font-space font-bold text-2xl sm:text-[26px] text-slate-900 leading-[1.2] mb-2">
                {miembro.nombre}
                <br />
                {miembro.apellido}
              </h3>

              <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-[#8A98AC] mb-5">
                {miembro.cargo}
              </span>

              <div className="relative w-full aspect-[4/4.6] rounded-[24px] overflow-hidden bg-slate-900 shadow-[0_18px_40px_rgba(15,23,41,0.12)] select-none">
                <Image
                  src={miembro.imagen}
                  alt={`${miembro.nombre} ${miembro.apellido} - ${miembro.cargo}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 350px"
                  className="object-cover object-top"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}