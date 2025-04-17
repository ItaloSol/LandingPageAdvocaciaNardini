"use client";

import { MapPin, Instagram, Facebook, Globe } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function LocationSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-white">
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green mb-4 animate-fade-in">
            Onde Estamos
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-green mb-2">
                      Escritório em São José do Rio Preto
                    </h3>
                    <p className="text-gray-600">
                      Rua Carmelino Gonçalves Condessa nº 166
                      <br />
                      Jardim Alto Rio Preto
                      <br />
                      São José do Rio Preto - SP
                      <br />
                      CEP: 15020-200
                    </p>
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold text-green mb-2">Horário de Atendimento</h4>
                  <p className="text-gray-600">
                    Segunda a Sexta
                    <br />
                    09:00 às 17:00
                  </p>
                </div>
                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold text-green mb-2">Redes Sociais</h4>
                  <div className="flex flex-col gap-2">
                    <a href="https://www.instagram.com/sidneinardini.adv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gold transition-colors">
                      <Instagram className="w-5 h-5" />
                      @sidneinardini.adv
                    </a>
                    <a href="https://www.facebook.com/nardiniadvogados" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gold transition-colors">
                      <Facebook className="w-5 h-5" />
                      Nardini Advogados
                    </a>
                    <a href="https://www.nardiniadvogados.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gold transition-colors">
                      <Globe className="w-5 h-5" />
                      www.nardiniadvogados.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 h-[400px] rounded-lg overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.1124625072387!2d-49.40418772374668!3d-20.816725186115793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad798f0a94fd%3A0xdfb9fbbf682ce8e0!2sNardini%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1711051033644!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa mostrando a localização do escritório Nardini Advogados em São José do Rio Preto"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}