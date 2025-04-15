"use client";

import { MessageCircle, Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Footer() {
  const { ref: footerRef, isVisible: footerIsVisible } = useScrollReveal();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div 
        ref={footerRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 scroll-reveal ${footerIsVisible ? 'visible' : ''}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Sidnei Nardini Advogado</h3>
            <p className="text-gray-300">
              OAB/SP 264.627
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <a
                href="tel:+5517997720489"
                className="flex items-center hover:text-yellow-400 transition-colors duration-200"
              >
                <Phone className="mr-2" size={20} />
                (17) 99772-0489
              </a>
              <a
                href="mailto:sidnei@nardiniadvogados.com.br"
                className="flex items-center hover:text-yellow-400 transition-colors duration-200"
              >
                <MessageCircle className="mr-2" size={20} />
                sidnei@nardiniadvogados.com.br
              </a>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-4">Endereço</h3>
            <div className="flex items-start">
              <MapPin className="mr-2 mt-1" size={20} />
              <p className="text-gray-300">
                Rua Carmelino Gonçalves Condessa nº 166
                <br />
                Jardim Alto Rio Preto
                <br />
                São José do Rio Preto - SP
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sidnei Nardini Advogado. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}