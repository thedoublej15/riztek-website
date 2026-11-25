const clientLogos = [
  { src: "/images/logos/1_logo_rios.png", alt: "Ríos" },
  { src: "/images/logos/2_logo_benitez.png", alt: "Benítez" },
  { src: "/images/logos/3_logo_cuellar.png", alt: "Grupo Cuellar" },
  { src: "/images/logos/4_logo_icea.png", alt: "ICEA" },
  { src: "/images/logos/5_logo_sd.png", alt: "SD" },
  { src: "/images/logos/6_logo_aguila.png", alt: "Águila" },
  { src: "/images/logos/7_logo_elektro.png", alt: "Elektro" },
  { src: "/images/logos/8_logo_cb.png", alt: "CB" },
  { src: "/images/logos/9_logo_kargo.png", alt: "Kargo" },
  { src: "/images/logos/10_logo_proma.png", alt: "Proma" },
  { src: "/images/logos/11_logo_gp.png", alt: "GP" },
  { src: "/images/logos/12_logo_mids.png", alt: "MIDS" },
];

export function TrustedClientsStrip() {
  const trackLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      aria-label="Clientes que confían en nuestra ingeniería"
      className="w-full px-4 sm:px-8 pt-2"
    >
      <div className="max-w-[1136px] mx-auto">
        <p className="text-center text-[11px] font-bold tracking-[0.14em] uppercase text-[#5A687C] mb-6 sm:mb-7">
          CLIENTES QUE CONFÍAN EN NUESTRA INGENIERÍA
        </p>

        <div className="relative overflow-hidden select-none pointer-events-none [contain:layout_paint] [mask-image:linear-gradient(90deg,transparent_0%,#000_12%,#000_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_12%,#000_88%,transparent_100%)]">
          <div className="flex w-max animate-marquee-left [animation-duration:48s] will-change-transform gap-4 sm:gap-5 py-1">            {trackLogos.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                aria-hidden={index >= clientLogos.length}
                className="w-[140px] sm:w-[162px] h-[64px] sm:h-[72px] shrink-0 rounded-2xl bg-white border border-slate-200/70 shadow-[0_4px_14px_rgba(8,27,75,0.03)] flex items-center justify-center px-5 py-3"
              >
                <img
                  src={logo.src}
                  alt={index < clientLogos.length ? logo.alt : ""}
                  width={130}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="max-w-full max-h-full w-auto h-auto object-contain grayscale contrast-125 opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}