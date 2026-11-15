import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <main style={{ backgroundColor: '#1E4FB8', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Contenido temporal de prueba */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Procesos más rápidos, Negocios más eficientes
        </h1>
        <p className="text-lg text-slate-600">
          Aquí iremos armando sección por sección el diseño de Riztek.
        </p>
      </section>
      </main>
    </main>
  );
}