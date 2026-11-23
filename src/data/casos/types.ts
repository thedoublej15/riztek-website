export interface RetoItem {
    titulo: string;
    descripcion: string;
  }
  
  export interface ModuloItem {
    numero: string;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
  }
  
  export interface MetricaItem {
    valor: string;
    descripcion: string;
  }
  
  export interface CasoExito {
    slug: string;
    featured?: boolean;
    sector: string;
    servicio: string;
    titulo: string;
    resumen: string;
    cliente: string;
    tecnologias: string[];
    sitioWeb?: string;
    logo: string;
    coverBg: string;
    sobreLaEmpresa: {
      titulo: string;
      descripcion: string;
    };
    retoTitulo: string;
    retos: [RetoItem, RetoItem, RetoItem];
    desarrolloTitulo: string;
    modulos: ModuloItem[];
    resultadoTitulo: string;
    metricas: [MetricaItem, MetricaItem, MetricaItem];
    galeria?: string[];
  }