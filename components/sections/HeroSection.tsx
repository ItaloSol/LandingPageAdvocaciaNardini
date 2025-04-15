"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

export function HeroSection() {
  const parallaxRef = useParallax(0.5);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá, vim pelo site e gostaria de falar com um advogado. Pode me ajudar?"
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" ref={parallaxRef}>
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070"
          alt="Law office"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
          Excelência Jurídica ao Seu Alcance
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-200 px-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Soluções jurídicas personalizadas para proteger seus direitos e
          interesses em questões cíveis, empresariais e condominiais.
        </p>
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto hover-scale animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <MessageCircle className="mr-2" />
          Fale com um Especialista
        </Button>
      </div>
    </section>
  );
}