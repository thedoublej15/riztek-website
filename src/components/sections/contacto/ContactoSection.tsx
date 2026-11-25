"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Script from "next/script";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Navigation,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/526143779995",
    icon: (
      <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.758.458 3.475 1.329 4.988L2 22l5.182-1.359a9.927 9.927 0 0 0 4.849 1.265h.004c5.515 0 9.969-4.454 9.969-9.969A9.914 9.914 0 0 0 19.08 4.92 9.908 9.908 0 0 0 12.031 2Zm0 18.221h-.003a8.234 8.234 0 0 1-4.197-1.15l-.301-.179-3.075.806.821-2.998-.196-.312a8.218 8.218 0 0 1-1.263-4.388c0-4.555 3.706-8.261 8.263-8.261 2.207 0 4.281.86 5.841 2.421a8.208 8.208 0 0 1 2.419 5.842c0 4.556-3.707 8.219-8.26 8.219Zm4.532-6.185c-.248-.124-1.469-.725-1.697-.808-.228-.083-.393-.124-.559.124-.166.248-.642.808-.787.974-.145.166-.29.186-.538.062-.248-.124-1.048-.386-1.996-1.232-.738-.658-1.236-1.471-1.381-1.719-.145-.248-.015-.382.109-.506.112-.111.248-.29.373-.435.124-.145.165-.248.248-.414.083-.166.041-.311-.021-.435-.062-.124-.559-1.346-.766-1.843-.202-.484-.407-.418-.559-.426l-.476-.008a.914.914 0 0 0-.662.311c-.228.248-.869.849-.869 2.071s.89 2.402 1.014 2.568c.124.166 1.751 2.674 4.242 3.75.593.256 1.055.409 1.416.523.595.189 1.137.162 1.565.098.477-.071 1.469-.601 1.676-1.181.207-.58.207-1.077.145-1.181-.062-.104-.228-.166-.476-.29Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/RiztekTI/",
    icon: (
      <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/riztek.tecnologia/",
    icon: (
      <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/riztek-tecnologias-en-informatica/home/",
    icon: (
      <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
      </svg>
    ),
  },
];

const inputBaseClass =
  "w-full rounded-xl bg-[#F4F6FA] border border-slate-200/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1E4FB8] focus:ring-2 focus:ring-[#1E4FB8]/15 transition-all";

const contactLinkClass =
  "lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:transition-colors";

export function ContactoSection() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot

  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

  const renderTurnstile = useCallback(() => {
    if (
      typeof window === "undefined" ||
      !window.turnstile ||
      !turnstileContainerRef.current ||
      !siteKey
    ) {
      return;
    }

    if (widgetIdRef.current !== null) {
      window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    widgetIdRef.current = window.turnstile.render(
      turnstileContainerRef.current,
      {
        sitekey: siteKey,
        theme: "light",
        callback: (token: string) => {
          setTurnstileToken(token);
        },
        "expired-callback": () => {
          setTurnstileToken("");
        },
        "error-callback": () => {
          setTurnstileToken("");
        },
      }
    );
  }, [siteKey]);

  useEffect(() => {
    renderTurnstile();
    return () => {
      if (
        typeof window !== "undefined" &&
        window.turnstile &&
        widgetIdRef.current !== null
      ) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderTurnstile]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("error");
      setFeedbackMessage(
        "Por favor espera a que complete la verificación de seguridad."
      );
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          empresa,
          correo,
          telefono,
          mensaje,
          turnstileToken,
          website,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedbackMessage(
          data.error || "No se pudo enviar tu mensaje. Intenta de nuevo."
        );
        setTurnstileToken("");
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }
        return;
      }

      setStatus("success");
      setFeedbackMessage(
        "¡Mensaje enviado con éxito! Nuestro equipo te responderá en menos de 24 horas hábiles."
      );
      setNombre("");
      setEmpresa("");
      setCorreo("");
      setTelefono("");
      setMensaje("");
      setTurnstileToken("");

      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch {
      setStatus("error");
      setFeedbackMessage(
        "Ocurrió un error de conexión. Verifica tu internet e intenta nuevamente."
      );
      setTurnstileToken("");
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.reset(widgetIdRef.current);
      }
    }
  }

  // Enlace inteligente de WhatsApp: si ya escribió datos, prellena el saludo
  const whatsappText =
    nombre || mensaje
      ? `Hola Riztek, soy ${nombre || "un prospecto"}${
          empresa ? ` de ${empresa}` : ""
        }. ${mensaje ? mensaje : "Me gustaría información sobre sus servicios."}`
      : "Hola Riztek, me gustaría platicar sobre un proyecto para mi empresa.";

  const whatsappHref = `https://wa.me/526143779995?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <section
      aria-label="Formulario e información de contacto"
      className="w-full px-4 sm:px-8"
    >
      {/* SDK de Cloudflare Turnstile */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderTurnstile}
      />

      <div className="max-w-[1136px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-start gap-6 lg:gap-7">
        {/* COLUMNA IZQUIERDA (7 cols): Tarjeta de Formulario */}
        <Reveal className="lg:col-span-7 bg-white rounded-[26px] p-7 sm:p-9 lg:p-10 border border-slate-200/70 shadow-[0_10px_30px_rgba(8,27,75,0.04)] text-left">
          <h2 className="font-space font-bold text-xl sm:text-[23px] text-slate-900 leading-snug mb-2">
            Envíanos un mensaje
          </h2>
          <p className="text-xs sm:text-sm text-[#5A687C] leading-relaxed mb-7">
            Completa el formulario y nuestro equipo te responderá en menos de 24
            horas hábiles.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Campo trampa invisible anti-bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Sitio web</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            {/* Fila 1: Nombre y Empresa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-xs font-semibold text-slate-800 mb-2"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className={inputBaseClass}
                />
              </div>

              <div>
                <label
                  htmlFor="empresa"
                  className="block text-xs font-semibold text-slate-800 mb-2"
                >
                  Empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  required
                  placeholder="Nombre de tu empresa"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  className={inputBaseClass}
                />
              </div>
            </div>

            {/* Fila 2: Correo y Teléfono */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label
                  htmlFor="correo"
                  className="block text-xs font-semibold text-slate-800 mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  placeholder="correo@empresa.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  className={inputBaseClass}
                />
              </div>

              <div>
                <label
                  htmlFor="telefono"
                  className="block text-xs font-semibold text-slate-800 mb-2"
                >
                  Teléfono{" "}
                  <span className="font-normal text-slate-400">(Opcional)</span>
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="614 000 0000"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className={inputBaseClass}
                />
              </div>
            </div>

            {/* Fila 3: ¿Qué necesitas? */}
            <div>
              <label
                htmlFor="mensaje"
                className="block text-xs font-semibold text-slate-800 mb-2"
              >
                ¿Qué necesitas?
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                placeholder="Cuéntanos sobre tu proyecto, objetivos o el problema que quieras resolver..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className={`${inputBaseClass} resize-y min-h-[118px]`}
              />
            </div>

            {/* Widget de Cloudflare Turnstile */}
            <div className="pt-1">
              <div ref={turnstileContainerRef} className="min-h-[65px]" />
            </div>

            {/* Alertas de estado */}
            {status === "success" && (
              <div
                role="status"
                className="flex items-start gap-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 px-4 py-3 text-xs sm:text-sm text-emerald-800"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-xl bg-red-50 border border-red-200/80 px-4 py-3 text-xs sm:text-sm text-red-700"
              >
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {/* Botones de Acción con movimiento uniforme (HeroButton / SectionButton) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1E4FB8] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_24px_-6px_rgba(30,79,184,0.45)] cursor-pointer disabled:opacity-65 disabled:cursor-not-allowed lg:[@media(hover:hover)_and_(pointer:fine)]:transition-all lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:ease-out lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#173e93] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_14px_28px_-6px_rgba(30,79,184,0.55)]"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar mensaje</span>
                    <ArrowRight className="w-4 h-4 shrink-0 lg:[@media(hover:hover)_and_(pointer:fine)]:transition-transform lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-200 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-[0_2px_10px_rgba(15,23,41,0.03)] lg:[@media(hover:hover)_and_(pointer:fine)]:transition-all lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:ease-out lg:[@media(hover:hover)_and_(pointer:fine)]:hover:border-[#1E4FB8]/45 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_10px_24px_-8px_rgba(30,79,184,0.18)]"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.758.458 3.475 1.329 4.988L2 22l5.182-1.359a9.927 9.927 0 0 0 4.849 1.265h.004c5.515 0 9.969-4.454 9.969-9.969A9.914 9.914 0 0 0 19.08 4.92 9.908 9.908 0 0 0 12.031 2Zm0 18.221h-.003a8.234 8.234 0 0 1-4.197-1.15l-.301-.179-3.075.806.821-2.998-.196-.312a8.218 8.218 0 0 1-1.263-4.388c0-4.555 3.706-8.261 8.263-8.261 2.207 0 4.281.86 5.841 2.421a8.208 8.208 0 0 1 2.419 5.842c0 4.556-3.707 8.219-8.26 8.219Zm4.532-6.185c-.248-.124-1.469-.725-1.697-.808-.228-.083-.393-.124-.559.124-.166.248-.642.808-.787.974-.145.166-.29.186-.538.062-.248-.124-1.048-.386-1.996-1.232-.738-.658-1.236-1.471-1.381-1.719-.145-.248-.015-.382.109-.506.112-.111.248-.29.373-.435.124-.145.165-.248.248-.414.083-.166.041-.311-.021-.435-.062-.124-.559-1.346-.766-1.843-.202-.484-.407-.418-.559-.426l-.476-.008a.914.914 0 0 0-.662.311c-.228.248-.869.849-.869 2.071s.89 2.402 1.014 2.568c.124.166 1.751 2.674 4.242 3.75.593.256 1.055.409 1.416.523.595.189 1.137.162 1.565.098.477-.071 1.469-.601 1.676-1.181.207-.58.207-1.077.145-1.181-.062-.104-.228-.166-.476-.29Z" />
                </svg>
                <span>Escríbenos por WhatsApp</span>
              </a>
            </div>

            {/* Nota de confidencialidad */}
            <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
              Al enviar este formulario aceptas nuestro aviso de privacidad. Tu
              información será tratada de forma confidencial.
            </p>
          </form>
        </Reveal>

        {/* COLUMNA DERECHA (5 cols): Datos directos + Mapa + Redes */}
        <Reveal
          delay={120}
          className="lg:col-span-5 bg-white rounded-[26px] p-7 sm:p-8 lg:p-9 border border-slate-200/70 shadow-[0_10px_30px_rgba(8,27,75,0.04)] text-left flex flex-col justify-between"
        >
          {/* Lista de datos de contacto */}
          <div className="space-y-6 mb-7">
            {/* Teléfono / WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] shrink-0 mt-0.5">
                <Phone className="w-[18px] h-[18px]" />
              </div>
              <div>
                <span className="block text-[10px] font-bold tracking-[0.12em] text-slate-400 uppercase mb-1">
                  TELÉFONO / WHATSAPP
                </span>
                <a
                  href="tel:+526143779995"
                  className={`font-space font-bold text-base sm:text-[17px] text-slate-900 ${contactLinkClass}`}
                >
                  614-377-9995
                </a>
              </div>
            </div>

            {/* Correo */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] shrink-0 mt-0.5">
                <Mail className="w-[18px] h-[18px]" />
              </div>
              <div>
                <span className="block text-[10px] font-bold tracking-[0.12em] text-slate-400 uppercase mb-1">
                  CORREO
                </span>
                <a
                  href="mailto:hola@riztek.com.mx"
                  className={`font-space font-bold text-base sm:text-[17px] text-slate-900 break-all ${contactLinkClass}`}
                >
                  hola@riztek.com.mx
                </a>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#1E4FB8] shrink-0 mt-0.5">
                <MapPin className="w-[18px] h-[18px]" />
              </div>
              <div>
                <span className="block text-[10px] font-bold tracking-[0.12em] text-slate-400 uppercase mb-1">
                  UBICACIÓN
                </span>
                <a
                  href="https://maps.app.goo.gl/dq3rbbSXkYWTsNTi6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs sm:text-[13px] font-semibold text-slate-800 leading-relaxed block ${contactLinkClass}`}
                >
                  Olivo Farga 17900, CP: 31183
                  <br />
                  Chihuahua, Chih. México
                </a>
              </div>
            </div>
          </div>

          {/* Mapa embebido con píldora flotante "Abrir en Maps" */}
          <div className="relative w-full h-[210px] sm:h-[225px] rounded-[20px] overflow-hidden border border-slate-200/80 bg-[#EAF0FA] mb-6 group">
            <a
              href="https://maps.app.goo.gl/dq3rbbSXkYWTsNTi6"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-[11px] font-semibold text-slate-800 shadow-[0_4px_14px_rgba(15,23,41,0.12)] border border-slate-200/70 lg:[@media(hover:hover)_and_(pointer:fine)]:transition-all lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:ease-out lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:border-[#1E4FB8]/45 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_8px_18px_rgba(30,79,184,0.18)]"
            >
              <Navigation className="w-3 h-3 text-[#1E4FB8]" />
              <span>Abrir en Maps</span>
            </a>

            <iframe
              title="Ubicación de Riztek en Chihuahua"
              src="https://maps.google.com/maps?q=Olivo%20Farga%2017900,%2031183%20Chihuahua,%20Chih.,%20Mexico&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[calc(100%+260px)] -mt-[130px] border-0 saturate-[0.75] contrast-[0.96] lg:[@media(hover:hover)_and_(pointer:fine)]:transition-all lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:group-hover:saturate-100"
            />
          </div>

          {/* Barra inferior: SÍGUENOS */}
          <div className="flex items-center gap-3.5 pt-1">
            <span className="text-[10px] font-bold tracking-[0.14em] text-slate-400 uppercase">
              SÍGUENOS
            </span>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-full border border-slate-200/90 bg-white text-slate-700 flex items-center justify-center lg:[@media(hover:hover)_and_(pointer:fine)]:transition-all lg:[@media(hover:hover)_and_(pointer:fine)]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:ease-out lg:[@media(hover:hover)_and_(pointer:fine)]:hover:border-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#EEF4FF]/60 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}