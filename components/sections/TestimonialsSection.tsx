"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Juliana Guimarães",
    content: "Ótimo atendimento! Sempre me atenderam com rapidez e sanaram todas as minhas dúvidas. Ótimos profissionais.",
    rating: 5,
  },
  {
    name: "Dilbany Rodrigues",
    content: "Obrigada dr Nadini pelo serviço prestado. Sempre fazendo o bom trabalho com honestidade. Foi muito bem Assessorada pelo serviço dele. Indico sempre!!!!",
    rating: 5,
  },
  {
    name: "Jayne Fernanda Florindo Lomar",
    content: "Muito eficiente resolveu meu problema de inadimplencia ganhei a causa foi muito mas rapido do q imaginei pessoal muito honesto e competente estou muito satisfeita pelo servico prestado obrigada",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-white">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 animate-fade-in">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-xl font-semibold text-blue-900">5.0</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Avaliações verificadas do Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover-scale animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-blue-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">Cliente Google</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={() => window.open("https://www.google.com/maps/place/Nardini+Advogados/@-20.8167202,-49.4041724,17z/data=!4m18!1m9!3m8!1s0x94bdad798f0a94fd:0xdfb9fbbf682ce8e0!2sNardini+Advogados!8m2!3d-20.8167252!4d-49.4015975!9m1!1b1!16s%2Fg%2F11bc7srzsy!3m7!1s0x94bdad798f0a94fd:0xdfb9fbbf682ce8e0!8m2!3d-20.8167252!4d-49.4015975!9m1!1b1!16s%2Fg%2F11bc7srzsy?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D", "_blank")}
            variant="outline"
            className="bg-white hover:bg-gray-50 hover-scale"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver Todas as Avaliações no Google
          </Button>
        </div>
      </div>
    </section>
  );
}