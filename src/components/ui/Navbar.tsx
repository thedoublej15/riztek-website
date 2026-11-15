"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full bg-[#f8fafc]/80 backdrop-blur-md pt-5 px-4 sm:px-8 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto bg-white rounded-full shadow-[0_6px_24px_rgb(0,0,0,0.05)] border border-slate-100 px-8 lg:px-12">
        <div className="flex items-center justify-between h-[58px]">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/rk_logo_original.png"
              alt="Riztek Logo"
              width={127}
              height={98}
              priority
              className="h-20 sm:h-24 w-auto object-contain"
            />
          </Link>

          {/* Menú de Escritorio */}
          <nav className="hidden md:flex items-center gap-9">
            <Link
              href="/"
              className="text-nav-link text-[#5A687C] hover:text-[#1E4FB8] transition-colors"
            >
              Inicio
            </Link>

            {/* Dropdown de Servicios */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
                className="flex items-center gap-1 text-nav-link text-[#5A687C] hover:text-[#1E4FB8] transition-colors focus:outline-none"
              >
                Servicios{" "}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full mt-3 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 z-50 animate-in fade-in slide-in-from-top-2">
                  <Link
                    href="/servicios/software-a-la-medida"
                    className="block px-4 py-2 rounded-xl text-nav-link text-[#5A687C] hover:bg-blue-50 hover:text-[#1E4FB8] transition-colors"
                  >
                    Software a la Medida
                  </Link>
                  <Link
                    href="/servicios/aplicaciones-moviles"
                    className="block px-4 py-2 rounded-xl text-nav-link text-[#5A687C] hover:bg-blue-50 hover:text-[#1E4FB8] transition-colors"
                  >
                    Aplicaciones Móviles
                  </Link>
                  <Link
                    href="/servicios/paginas-web"
                    className="block px-4 py-2 rounded-xl text-nav-link text-[#5A687C] hover:bg-blue-50 hover:text-[#1E4FB8] transition-colors"
                  >
                    Páginas Web
                  </Link>
                  <Link
                    href="/servicios/contpaqi"
                    className="block px-4 py-2 rounded-xl text-nav-link text-[#5A687C] hover:bg-blue-50 hover:text-[#1E4FB8] transition-colors"
                  >
                    Software CONTPAQi
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/casos-de-exito"
              className="text-nav-link text-[#5A687C] hover:text-[#1E4FB8] transition-colors"
            >
              Casos de éxito
            </Link>
            <Link
              href="/nosotros"
              className="text-nav-link text-[#5A687C] hover:text-[#1E4FB8] transition-colors"
            >
              Nosotros
            </Link>
          </nav>

          {/* Botón de Contacto (Escritorio) */}
          <div className="hidden md:block">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-btn-sm text-white bg-[#1E4FB8] hover:bg-[#173e93] shadow-sm shadow-[#1E4FB8]/25 transition-all"
            >
              Contacto
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-xl text-[#5A687C] hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable (Móvil) */}
      {isOpen && (
        <div className="md:hidden bg-white mx-4 mt-2 rounded-3xl border border-slate-100 p-5 shadow-xl space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-[#5A687C] hover:bg-slate-50"
          >
            Inicio
          </Link>
          <div className="space-y-1 pl-3 border-l-2 border-slate-100 my-2">
            <p className="text-eyebrow text-slate-400 py-1">Servicios</p>
            <Link
              href="/servicios/software-a-la-medida"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-nav-link text-[#5A687C] hover:text-[#1E4FB8]"
            >
              Software a la Medida
            </Link>
            <Link
              href="/servicios/aplicaciones-moviles"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-nav-link text-[#5A687C] hover:text-[#1E4FB8]"
            >
              Aplicaciones Móviles
            </Link>
            <Link
              href="/servicios/paginas-web"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-nav-link text-[#5A687C] hover:text-[#1E4FB8]"
            >
              Páginas Web
            </Link>
            <Link
              href="/servicios/contpaqi"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-nav-link text-[#5A687C] hover:text-[#1E4FB8]"
            >
              Software CONTPAQi
            </Link>
          </div>
          <Link
            href="/casos-de-exito"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-[#5A687C] hover:text-[#1E4FB8]"
          >
            Casos de éxito
          </Link>
          <Link
            href="/nosotros"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-[#5A687C] hover:text-[#1E4FB8]"
          >
            Nosotros
          </Link>
          <div className="pt-2">
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center px-6 py-2.5 rounded-full text-btn-sm text-white bg-[#1E4FB8] hover:bg-[#173e93] shadow-md shadow-[#1E4FB8]/25"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}