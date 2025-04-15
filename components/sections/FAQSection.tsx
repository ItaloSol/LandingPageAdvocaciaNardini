"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Quanto tempo leva para resolver meu caso?",
    answer: "O prazo pode variar dependendo da complexidade do caso. Durante a primeira consulta, após análise detalhada, forneceremos uma estimativa mais precisa.",
  },
  {
    question: "Quais são os custos envolvidos?",
    answer: "Os honorários são definidos de acordo com a natureza do serviço. Trabalhamos com transparência e apresentamos todos os custos previamente.",
  },
  {
    question: "Como funciona o processo de contratação?",
    answer: "Iniciamos com uma consulta para entender seu caso, depois apresentamos uma proposta detalhada de serviços e, após acordo, formalizamos o contrato.",
  },
  {
    question: "Vocês atendem em outras cidades?",
    answer: "Sim, além do atendimento presencial em São Paulo, realizamos atendimento remoto para clientes de todo o Brasil.",
  },
];

export function FAQSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-gray-50">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900 animate-fade-in">
          Perguntas Frequentes
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Tire suas principais dúvidas sobre nossos serviços
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-blue-900 hover:text-blue-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}