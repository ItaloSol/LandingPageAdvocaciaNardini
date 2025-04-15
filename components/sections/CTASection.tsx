"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CTASection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá, vim pelo site e gostaria de falar com um advogado. Pode me ajudar?"
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 text-center scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in">
          Precisa de Assistência Jurídica?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Entre em contato agora para uma consulta inicial e descubra como podemos ajudar no seu caso
        </p>
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-semibold hover-scale animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <MessageCircle className="mr-2" />
          Fale com um Especialista
        </Button>
      </div>
    </section>
  );
}