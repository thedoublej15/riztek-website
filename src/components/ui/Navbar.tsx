"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const desktopNavLinkHover =
  "lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#1E4FB8]/[0.06] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-[1px]";

const desktopDropdownItemHover =
  "lg:[@media(hover:hover)_and_(pointer:fine)]:transition-all lg:[@media(hover:hover)_and_(pointer:fine)]:duration-200 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#EEF4FF] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:translate-x-1";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/servicios");
  const isCases = pathname.startsWith("/casos-de-exito");
  const isAbout = pathname === "/nosotros";

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const supportsFineHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handleServicesMouseEnter = () => {
    if (!supportsFineHover()) return;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    if (!supportsFineHover()) return;
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 140);
  };

  const handleServicesClick = () => {
    if (supportsFineHover()) {
      setServicesOpen(true);
      return;
    }
    setServicesOpen((prev) => !prev);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="w-screen bg-transparent pt-5 px-4 sm:px-8 fixed top-0 left-0 z-50">
      <div
        className={`max-w-[1200px] mx-auto backdrop-blur-md rounded-full px-6 sm:px-8 lg:px-12 transition-[background-color,box-shadow,border-color] duration-500 ease-out ${
          isScrolled
            ? "bg-white/88 shadow-[0_8px_30px_rgba(8,27,75,0.06)] border border-white/75 ring-1 ring-slate-900/[0.04]"
            : "bg-white shadow-[0_6px_24px_rgb(0,0,0,0.05)] border border-slate-100 ring-1 ring-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-[58px]">
          
          {/* Logo */}
          <a
            href="/"
            aria-label="Ir al inicio de Riztek"
            className="flex items-center shrink-0"
          >
            <Image
              src="/images/rk_logo_original.png"
              alt="Riztek Logo"
              width={127}
              height={98}
              priority
              className="h-20 sm:h-24 w-auto object-contain"
            />
          </a>

          {/* Menú de Escritorio (solo desde 1024px para evitar saltos de línea) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
            <a
              href="/"
              className={`text-nav-link whitespace-nowrap px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                isHome
                  ? "text-[#1E4FB8] font-semibold bg-[#1E4FB8]/10 shadow-[0_0_16px_rgba(30,79,184,0.18)]"
                  : `text-[#5A687C] ${desktopNavLinkHover}`
              }`}
            >
              Inicio
            </a>

            {/* Dropdown de Servicios (auto-despliegue con puntero + clic seguro) */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={handleServicesClick}
                className={`flex items-center gap-1 text-nav-link whitespace-nowrap px-3.5 py-1.5 rounded-full transition-all duration-200 focus:outline-none cursor-pointer ${
                  isServices || servicesOpen
                    ? "text-[#1E4FB8] font-semibold bg-[#1E4FB8]/10 shadow-[0_0_16px_rgba(30,79,184,0.18)]"
                    : `text-[#5A687C] ${desktopNavLinkHover}`
                }`}
              >
                Servicios{" "}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#1E4FB8]" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                /* pt-3 actúa como puente invisible para que el cursor no pierda el hover al bajar */
                <div className="absolute top-full left-0 pt-3 w-64 z-50">
                  <div
                    className={`backdrop-blur-md rounded-2xl p-2.5 animate-in fade-in slide-in-from-top-2 duration-200 transition-[background-color,box-shadow,border-color] duration-500 ease-out ${
                      isScrolled
                        ? "bg-white/92 shadow-[0_14px_34px_rgba(8,27,75,0.10)] border border-white/80 ring-1 ring-slate-900/[0.05]"
                        : "bg-white shadow-xl border border-slate-100"
                    }`}
                  >
                    <a
                      href="/servicios/software-a-la-medida"
                      className={`block px-4 py-2.5 rounded-xl text-nav-link ${
                        pathname === "/servicios/software-a-la-medida"
                          ? "bg-[#1E4FB8]/10 text-[#1E4FB8] font-semibold"
                          : `text-[#5A687C] ${desktopDropdownItemHover}`
                      }`}
                    >
                      Software a la Medida
                    </a>
                    <a
                      href="/servicios/aplicaciones-moviles"
                      className={`block px-4 py-2.5 rounded-xl text-nav-link ${
                        pathname === "/servicios/aplicaciones-moviles"
                          ? "bg-[#1E4FB8]/10 text-[#1E4FB8] font-semibold"
                          : `text-[#5A687C] ${desktopDropdownItemHover}`
                      }`}
                    >
                      Aplicaciones Móviles
                    </a>
                    <a
                      href="/servicios/paginas-web"
                      className={`block px-4 py-2.5 rounded-xl text-nav-link ${
                        pathname === "/servicios/paginas-web"
                          ? "bg-[#1E4FB8]/10 text-[#1E4FB8] font-semibold"
                          : `text-[#5A687C] ${desktopDropdownItemHover}`
                      }`}
                    >
                      Páginas Web
                    </a>
                    <a
                      href="/servicios/software-contpaqi"
                      className={`block px-4 py-2.5 rounded-xl text-nav-link ${
                        pathname === "/servicios/software-contpaqi"
                          ? "bg-[#1E4FB8]/10 text-[#1E4FB8] font-semibold"
                          : `text-[#5A687C] ${desktopDropdownItemHover}`
                      }`}
                    >
                      Software CONTPAQi
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/casos-de-exito"
              className={`text-nav-link whitespace-nowrap px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                isCases
                  ? "text-[#1E4FB8] font-semibold bg-[#1E4FB8]/10 shadow-[0_0_16px_rgba(30,79,184,0.18)]"
                  : `text-[#5A687C] ${desktopNavLinkHover}`
              }`}
            >
              Casos de éxito
            </a>
            <a
              href="/nosotros"
              className={`text-nav-link whitespace-nowrap px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                isAbout
                  ? "text-[#1E4FB8] font-semibold bg-[#1E4FB8]/10 shadow-[0_0_16px_rgba(30,79,184,0.18)]"
                  : `text-[#5A687C] ${desktopNavLinkHover}`
              }`}
            >
              Nosotros
            </a>
          </nav>

          {/* Botón de Contacto (Escritorio) */}
          <div className="hidden lg:block shrink-0">
            <a
              href="/contacto"
              className="btn-motion inline-flex items-center justify-center px-6 py-3 rounded-full text-btn-sm text-white bg-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#173e93] shadow-sm shadow-[#1E4FB8]/25"
            >
              Contacto
            </a>
          </div>

          {/* Botón Menú Móvil y Tablet (< 1024px) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              className="p-2 rounded-xl text-[#5A687C] hover:bg-slate-900/5 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable (Móvil y Tablet < 1024px) */}
      {isOpen && (
        <div className="lg:hidden max-w-[1200px] mx-auto mt-2">
          <div
            className={`backdrop-blur-md rounded-3xl p-5 space-y-3 transition-[background-color,box-shadow,border-color] duration-500 ease-out ${
              isScrolled
                ? "bg-white/92 border border-white/80 ring-1 ring-slate-900/[0.05] shadow-[0_14px_34px_rgba(8,27,75,0.10)]"
                : "bg-white border border-slate-100 shadow-xl"
            }`}
          >
            <a
              href="/"
              className={`block px-3 py-2 rounded-xl text-base transition-colors ${
                isHome
                  ? "text-[#1E4FB8] font-semibold bg-[#1E4FB8]/10"
                  : "font-medium text-[#5A687C] hover:bg-slate-50/70"
              }`}
            >
              Inicio
            </a>
            <div className="space-y-1 pl-3 border-l-2 border-slate-200/70 my-2">
              <p className="text-eyebrow text-slate-400 py-1">Servicios</p>
              <a
                href="/servicios/software-a-la-medida"
                className={`block px-3 py-2 rounded-xl text-nav-link ${
                  pathname === "/servicios/software-a-la-medida"
                    ? "text-[#1E4FB8] font-semibold bg-[#1E4FB8]/10"
                    : "text-[#5A687C] hover:text-[#1E4FB8]"
                }`}
              >
                Software a la Medida
              </a>
              <a
                href="/servicios/aplicaciones-moviles"
                className={`block px-3 py-2 rounded-xl text-nav-link ${
                  pathname === "/servicios/aplicaciones-moviles"
                    ? "text-[#1E4FB8] font-semibold bg-[#1E4FB8]/10"
                    : "text-[#5A687C] hover:text-[#1E4FB8]"
                }`}
              >
                Aplicaciones Móviles
              </a>
              <a
                href="/servicios/paginas-web"
                className={`block px-3 py-2 rounded-xl text-nav-link ${
                  pathname === "/servicios/paginas-web"
                    ? "text-[#1E4FB8] font-semibold bg-[#1E4FB8]/10"
                    : "text-[#5A687C] hover:text-[#1E4FB8]"
                }`}
              >
                Páginas Web
              </a>
              <a
                href="/servicios/software-contpaqi"
                className={`block px-3 py-2 rounded-xl text-nav-link ${
                  pathname === "/servicios/software-contpaqi"
                    ? "text-[#1E4FB8] font-semibold bg-[#1E4FB8]/10"
                    : "text-[#5A687C] hover:text-[#1E4FB8]"
                }`}
              >
                Software CONTPAQi
              </a>
            </div>
            <a
              href="/casos-de-exito"
              className={`block px-3 py-2 rounded-xl text-base transition-colors ${
                isCases
                  ? "text-[#1E4FB8] font-semibold bg-[#1E4FB8]/10"
                  : "font-medium text-[#5A687C] hover:text-[#1E4FB8]"
              }`}
            >
              Casos de éxito
            </a>
            <a
              href="/nosotros"
              className={`block px-3 py-2 rounded-xl text-base transition-colors ${
                isAbout
                  ? "text-[#1E4FB8] font-semibold bg-[#1E4FB8]/10"
                  : "font-medium text-[#5A687C] hover:text-[#1E4FB8]"
              }`}
            >
              Nosotros
            </a>
            <div className="pt-2">
              <a
                href="/contacto"
                className="w-full flex items-center justify-center px-6 py-2.5 rounded-full text-btn-sm text-white bg-[#1E4FB8] shadow-md shadow-[#1E4FB8]/25"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}