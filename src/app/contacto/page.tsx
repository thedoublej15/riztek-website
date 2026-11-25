import type { Metadata } from "next";
import { PageBackgroundGlow } from "@/components/ui/PageBackgroundGlow";
import { HeroContacto } from "@/components/sections/contacto/HeroContacto";
import { ContactoSection } from "@/components/sections/contacto/ContactoSection";

export const metadata: Metadata = {
  title: "Contacto | Riztek - Hablemos de tu próximo proyecto",
  description:
    "Ponte en contacto con Riztek. Cuéntanos tu reto y construyamos juntos software a la medida, soluciones CONTPAQi o plataformas web para tu empresa.",
};

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen bg-[#F3F7FF]">
      <PageBackgroundGlow />

      <div className="relative z-10 pb-20 lg:pb-28">
        <HeroContacto />
        <ContactoSection />
      </div>
    </main>
  );
}