import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

interface PriceRow {
  label: string;
  price: string;
}

interface ContpaqiPackage {
  logo: string;
  logoAlt: string;
  logoClassName: string;
  modality: "Escritorio" | "En la nube";
  title: string;
  description: string;
  sectionLabel?: string;
  prices: PriceRow[];
}

const packages: ContpaqiPackage[] = [
  {
    logo: "/images/photos/contpaqi_contabilidad.png",
    logoAlt: "Logo CONTPAQi Contabilidad",
    logoClassName: "h-[44px]",
    modality: "Escritorio",
    title: "Contabilidad",
    description: "El software favorito de los contadores.",
    prices: [
      { label: "Licencia anual", price: "$4,690.00" },
      { label: "Usuario adicional en red", price: "$1,390.00" },
    ],
  },
  {
    logo: "/images/photos/contpaqi_nominas.png",
    logoAlt: "Logo CONTPAQi Nóminas",
    logoClassName: "h-[44px]",
    modality: "Escritorio",
    title: "Nóminas",
    description:
      "Facilita la nómina de tu negocio y gana tranquilidad.",
    prices: [
      { label: "Licencia anual Multi RFC", price: "$5,790.00" },
      { label: "Usuario adicional en red", price: "$1,490.00" },
    ],
  },
  {
    logo: "/images/photos/contpaqi_comercial.png",
    logoAlt: "Logo CONTPAQi Comercial",
    logoClassName: "h-[44px]",
    modality: "Escritorio",
    title: "Comercial Premium",
    description:
      "El software administrativo que te ayudará a simplificar tus procesos.",
    prices: [
      { label: "Licencia anual Multi RFC", price: "$8,490.00" },
      { label: "Usuario adicional en red", price: "$2,290.00" },
    ],
  },
  {
    logo: "/images/photos/contpaqi_contabiliza.png",
    logoAlt: "Logo CONTPAQi Contabiliza",
    logoClassName: "h-[46px]",
    modality: "En la nube",
    title: "Contabiliza",
    description:
      "El software favorito de los contadores, ahora en la nube.",
    sectionLabel: "LICENCIA ANUAL",
    prices: [
      { label: "1 RFC · 1 usuario", price: "$3,990.00" },
      { label: "Multi RFC · 2 usuarios", price: "$5,390.00" },
      { label: "Multi RFC · 5 usuarios", price: "$9,990.00" },
      { label: "Multi RFC · 10 usuarios", price: "$17,490.00" },
      { label: "Usuario adicional en red", price: "$1,690.00" },
    ],
  },
  {
    logo: "/images/photos/contpaqi_personia.png",
    logoAlt: "Logo CONTPAQi Personia",
    logoClassName: "h-[38px]",
    modality: "En la nube",
    title: "Personia",
    description:
      "Calcular tu nómina en la nube, nunca fue tan sencillo.",
    sectionLabel: "LICENCIA ANUAL · MULTI RFC Y MULTIUSUARIO",
    prices: [
      { label: "10 empleados", price: "$2,990.00" },
      { label: "20 empleados", price: "$4,390.00" },
      { label: "50 empleados", price: "$7,590.00" },
      { label: "100 empleados", price: "$11,990.00" },
    ],
  },
  {
    logo: "/images/photos/contpaqi_vende.png",
    logoAlt: "Logo CONTPAQi Vende",
    logoClassName: "h-[27px]",
    modality: "En la nube",
    title: "Vende",
    description: "La solución fácil para facturar en la nube.",
    sectionLabel: "LICENCIA ANUAL · TIMBRES ILIMITADOS",
    prices: [
      { label: "1 RFC · 1 usuario", price: "$1,290.00" },
      { label: "Multi RFC · 2 usuarios", price: "$2,290.00" },
      { label: "Multi RFC · 4 usuarios", price: "$4,590.00" },
      { label: "Multi RFC · 8 usuarios", price: "$9,290.00" },
      { label: "Usuario adicional en red", price: "$1,290.00" },
    ],
  },
];

export function PaquetesContpaqi() {
  return (
    <section
      id="paquetes"
      aria-labelledby="paquetes-contpaqi-heading"
      className="w-full px-4 sm:px-8 scroll-mt-28"
    >
      <div className="max-w-[1136px] mx-auto">
        <Reveal className="w-full text-left mb-12 lg:mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E3ECFF] text-[#1E4FB8] text-[11px] font-bold tracking-[0.14em] uppercase mb-5">
            PAQUETES CONTPAQI
          </span>
          <h2
            id="paquetes-contpaqi-heading"
            className="font-space font-semibold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.15] tracking-tight max-w-xl"
          >
            Elige el paquete ideal para tu negocio
          </h2>
        </Reveal>

        {/* Grid de 6 Paquetes (3 columnas en desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {packages.map((pkg, index) => {
            const isCloud = pkg.modality === "En la nube";
            return (
              <Reveal
                key={pkg.title}
                delay={(index % 3) * 90}
                className="h-full"
              >
                <article className="h-full bg-white rounded-[24px] p-7 border border-slate-200/70 shadow-[0_6px_24px_rgba(8,27,75,0.03)] flex flex-col">
                  {/* Bloque superior fijo para que la línea divisoria quede alineada en toda la fila */}
                  <div>
                    <div className="flex items-center justify-between gap-3 h-[46px] mb-5">
                      <div className="flex items-center min-w-0">
                        <Image
                          src={pkg.logo}
                          alt={pkg.logoAlt}
                          width={360}
                          height={90}
                          className={`w-auto object-contain object-left ${pkg.logoClassName}`}
                        />
                      </div>

                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold shrink-0 ${
                          isCloud
                            ? "bg-[#E2F6F3] text-[#0F8A7B]"
                            : "bg-[#EEF4FF] text-[#1E4FB8]"
                        }`}
                      >
                        {pkg.modality}
                      </span>
                    </div>

                    <h3 className="font-space font-semibold text-lg sm:text-xl text-slate-900 leading-snug mb-2">
                      {pkg.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed min-h-[44px] mb-5">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Tabla de Precios */}
                  <div className="border-t border-slate-200/80 pt-5 flex-1">
                    {pkg.sectionLabel && (
                      <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-slate-500 mb-3">
                        {pkg.sectionLabel}
                      </p>
                    )}

                    <ul className="space-y-2.5">
                      {pkg.prices.map((row) => (
                        <li
                          key={row.label}
                          className="flex items-baseline justify-between gap-3 text-xs sm:text-[13px]"
                        >
                          <span className="text-[#5A687C]">{row.label}</span>
                          <span className="font-semibold text-slate-900 whitespace-nowrap tabular-nums">
                            {row.price}{" "}
                            <span className="text-[10px] font-medium text-slate-400">
                              + IVA
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}