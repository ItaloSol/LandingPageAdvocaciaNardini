"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card } from "@/components/ui/card";
import { Target, Compass, Heart } from "lucide-react";

export function AboutSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-white">
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8 animate-fade-in">
            Sobre Nós
          </h2>
          <div className="prose prose-lg max-w-none mb-12 animate-fade-in animate-delay-100">
            <p className="text-gray-600 text-center mb-12">
              Há mais de 18 anos, o nosso escritório localizado na cidade de São José do Rio Preto,
              interior de São Paulo, vem sempre oferecendo aos nossos clientes as melhores soluções jurídicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 animate-fade-in hover-scale" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col items-center text-center">
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Missão</h3>
                  <p className="text-gray-600">
                    Oferecer aos nossos clientes soluções jurídicas personalizadas, eficientes e criativas,
                    com foco na incansável busca pela rápida resolução dos conflitos, provendo aos clientes
                    orientações estratégicas e assertivas na tomada de suas decisões.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-fade-in hover-scale" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col items-center text-center">
                <Compass className="h-12 w-12 text-blue-600 mb-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Visão</h3>
                  <p className="text-gray-600">
                    Ser referência em demandas jurídicas no mercado de atuação, mantendo a prestação
                    de serviços eficientes, com alto padrão de qualidade e com foco nos clientes,
                    aliado ao mais rígido padrão ético, de responsabilidade e excelência na advocacia.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-fade-in hover-scale" style={{ animationDelay: "0.4s" }}>
              <div className="flex flex-col items-center text-center">
                <Heart className="h-12 w-12 text-blue-600 mb-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Valores</h3>
                  <p className="text-gray-600">
                    Ética profissional, confiabilidade; qualidade nos serviços; agilidade; alcance
                    de resultados positivos; transparência; atendimento personalizado; permanente
                    busca por conhecimento e qualificação; plena satisfação dos clientes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}