import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/526143779995",
    icon: (
      <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.758.458 3.475 1.329 4.988L2 22l5.182-1.359a9.927 9.927 0 0 0 4.849 1.265h.004c5.515 0 9.969-4.454 9.969-9.969A9.914 9.914 0 0 0 19.08 4.92 9.908 9.908 0 0 0 12.031 2Zm0 18.221h-.003a8.234 8.234 0 0 1-4.197-1.15l-.301-.179-3.075.806.821-2.998-.196-.312a8.218 8.218 0 0 1-1.263-4.388c0-4.555 3.706-8.261 8.263-8.261 2.207 0 4.281.86 5.841 2.421a8.208 8.208 0 0 1 2.419 5.842c0 4.556-3.707 8.219-8.26 8.219Zm4.532-6.185c-.248-.124-1.469-.725-1.697-.808-.228-.083-.393-.124-.559.124-.166.248-.642.808-.787.974-.145.166-.29.186-.538.062-.248-.124-1.048-.386-1.996-1.232-.738-.658-1.236-1.471-1.381-1.719-.145-.248-.015-.382.109-.506.112-.111.248-.29.373-.435.124-.145.165-.248.248-.414.083-.166.041-.311-.021-.435-.062-.124-.559-1.346-.766-1.843-.202-.484-.407-.418-.559-.426l-.476-.008a.914.914 0 0 0-.662.311c-.228.248-.869.849-.869 2.071s.89 2.402 1.014 2.568c.124.166 1.751 2.674 4.242 3.75.593.256 1.055.409 1.416.523.595.189 1.137.162 1.565.098.477-.071 1.469-.601 1.676-1.181.207-.58.207-1.077.145-1.181-.062-.104-.228-.166-.476-.29Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/riztek.tecnologia/",
    icon: (
      <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/RiztekTI/",
    icon: (
      <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/riztek-tecnologias-en-informatica/home/",
    icon: (
      <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
      </svg>
    ),
  },
];

const footerLinkClass =
  "lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:transition-colors";

export function Footer() {
  return (
    <footer className="w-full bg-[linear-gradient(180deg,#F3F7FF_0%,#DCE6FB_20%,#B8CAEE_52%,#9BB2E6_100%)] text-slate-800">
      {/* Contenedor Principal */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-8">
          
          {/* Columna Izquierda: Logo estático (sin link), descripción y redes */}
          <div className="max-w-sm">
            <div className="inline-flex items-center -my-5 sm:-my-6 mb-1 select-none">
              <Image
                src="/images/rk_logo_negro.png"
                alt="Riztek Logo"
                width={127}
                height={98}
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
              Soluciones tecnológicas a la medida, desarrollo de software y sistemas administrativos para impulsar el crecimiento de tu empresa.
            </p>

            {/* Iconos Sociales Oficiales (sin movimiento debajo de lg / en pantallas táctiles) */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl border border-slate-700/35 bg-white/10 text-slate-800 flex items-center justify-center lg:[@media(hover:hover)_and_(pointer:fine)]:transition-all lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/65 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:border-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columnas Derechas: 1 columna en móvil, 3 columnas desde tablet (sm) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 sm:gap-12 lg:gap-16">
            
            {/* Columna 1: EMPRESA */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.14em] text-slate-800 uppercase mb-3.5 sm:mb-4">
                EMPRESA
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-slate-600">
                <li>
                  <Link href="/casos-de-exito" className={footerLinkClass}>
                    Casos de éxito
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className={footerLinkClass}>
                    Sobre nosotros
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 2: SERVICIOS */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.14em] text-slate-800 uppercase mb-3.5 sm:mb-4">
                SERVICIOS
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-slate-600">
                <li>
                  <Link
                    href="/servicios/software-a-la-medida"
                    className={footerLinkClass}
                  >
                    Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/aplicaciones-moviles"
                    className={footerLinkClass}
                  >
                    Apps Móviles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/paginas-web"
                    className={footerLinkClass}
                  >
                    Páginas Web
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/software-contpaqi"
                    className={`${footerLinkClass} leading-snug block`}
                  >
                    Soluciones
                    <br className="hidden sm:inline" />{" "}
                    Contpaqi
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: CONTACTO */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.14em] text-slate-800 uppercase mb-3.5 sm:mb-4">
                CONTACTO
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-slate-600">
                <li>
                  <a href="tel:+526143779995" className={footerLinkClass}>
                    +52 614-377-9995
                  </a>
                </li>
                <li>
                  <a href="mailto:hola@riztek.com.mx" className={footerLinkClass}>
                    hola@riztek.com.mx
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/dq3rbbSXkYWTsNTi6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${footerLinkClass} leading-relaxed inline-block`}
                  >
                    Olivo Farga 17900, CP 31183
                    <br />
                    Chihuahua, Chih. México
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Línea divisoria inferior de ancho completo */}
      <div className="w-full border-t border-slate-700/20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6">
          <p className="text-xs text-slate-600">
            © 2026, created by riztek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}