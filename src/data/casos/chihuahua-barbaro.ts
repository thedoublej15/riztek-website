import { CasoExito } from "./types";

export const chihuahuaBarbaro: CasoExito = {
  slug: "chihuahua-barbaro",
  featured: true,
  sector: "TravelTech",
  servicio: "Software a la medida",
  titulo: "Digitalización de ventas para Chihuahua Bárbaro",
  resumen:
    "Plataforma web para centralizar la venta y gestión de recorridos turísticos. Desarrollamos un sistema de venta directa con control preciso por usuario y unidad.",
  cliente: "Chihuahua Bárbaro",
  tecnologias: ["React", "Node.js", "SQL"],
  logo: "/images/logos/22_logo_chihuahua.png",
  coverBg: "/images/projects/chihuahua-barbaro/cover_bg.jpg",
  sobreLaEmpresa: {
    titulo: "Un operador líder al límite de su tecnología",
    descripcion:
      "Chihuahua Bárbaro, principal operador de recorridos turísticos y tranvías en la región, operaba al límite de su capacidad tecnológica. Requerían un salto digital integral para escalar sus ventas y sincronizar su logística en tiempo real.",
  },
  retoTitulo: "Fricción operativa que frenaba el crecimiento",
  retos: [
    {
      titulo: "Desincronización de canales",
      descripcion:
        "Las ventas en taquillas físicas, agencias y redes sociales se registraban manualmente en hojas de cálculo, provocando sobreventa de asientos (overbooking) en temporada alta.",
    },
    {
      titulo: "Caos logístico",
      descripcion:
        "La asignación de unidades (tranvías/autobuses) y choferes/guías se hacía en pizarras físicas, dificultando la respuesta ante cambios de horario o mantenimiento de vehículos.",
    },
    {
      titulo: "Pérdida de datos financieros",
      descripcion:
        "La conciliación de cortes de caja de múltiples puntos de venta tomaba horas de trabajo administrativo diario, con alto margen de error humano.",
    },
  ],
  desarrolloTitulo: "Ingeniería implementada",
  modulos: [
    {
      numero: "MÓDULO 01",
      titulo: "Motor de Reservas Omnicanal",
      descripcion:
        "Sistema de ventas web conectado en tiempo real con puntos de venta físicos (POS). Permite a los turistas seleccionar fecha, ruta y asientos disponibles al instante, integrando pasarelas de pago seguras.",
      tecnologias: ["React", "POS", "Pagos"],
    },
    {
      numero: "MÓDULO 02",
      titulo: "Centro de Comando Logístico",
      descripcion:
        "Panel administrativo (ERP) para gestionar la flota de vehículos, registrar mantenimientos, crear matrices de horarios y asignar automáticamente guías y operadores a cada ruta.",
      tecnologias: ["ERP", "Node.js", "Flota"],
    },
    {
      numero: "MÓDULO 03",
      titulo: "Módulo de Control de Abordaje",
      descripcion:
        "Interfaz optimizada para móviles (Progressive Web App) para que los guías escaneen los boletos QR de los pasajeros al pie del tranvía, validando el manifiesto de viaje sin usar papel.",
      tecnologias: ["PWA", "QR", "Offline"],
    },
    {
      numero: "MÓDULO 04",
      titulo: "Arquitectura Cloud Centralizada",
      descripcion:
        "Base de datos robusta y escalable que sincroniza todo el ecosistema (ventas, finanzas y logística) con respaldos automáticos y reportes financieros al segundo.",
      tecnologias: ["SQL", "Cloud", "Respaldos"],
    },
  ],
  resultadoTitulo: "Resultados desde el primer mes",
  metricas: [
    {
      valor: "+250%",
      descripcion: "INCREMENTO EN VENTAS ANTICIPADAS EN LÍNEA",
    },
    {
      valor: "0%",
      descripcion: "INCIDENCIAS POR SOBREVENTA DE BOLETOS",
    },
    {
      valor: "-40%",
      descripcion: "TIEMPO INVERTIDO EN CONCILIACIÓN ADMINISTRATIVA DIARIA",
    },
  ],
  galeria: [
    "/images/projects/chihuahua-barbaro/captura_1.png",
    "/images/projects/chihuahua-barbaro/captura_2.png",
    "/images/projects/chihuahua-barbaro/captura_3.png",
  ],
};