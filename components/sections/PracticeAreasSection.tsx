"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { 
  Scale, 
  Building2, 
  Home, 
  ChevronDown, 
  ChevronUp,
  FileText,
  ShieldAlert,
  Handshake,
  Users,
  Building,
  ScrollText,
  HeartPulse,
  Merge,
  Users2,
  Receipt,
  MessageSquare,
  Hammer,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card } from "@/components/ui/card";

interface PracticeItem {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

interface PracticeAreaProps {
  title: string;
  description: string;
  items: PracticeItem[];
  hoverColor: "hover:bg-blue-50" | "hover:bg-yellow-50";
  accentColor: string;
  icon: React.ReactNode;
  animationDelay?: number;
}

const civilLawItems = [
  {
    title: "Contratos e Negociações",
    description: "Elaboração, análise e revisão de contratos civis, com foco na proteção dos seus interesses.",
    icon: <FileText className="h-5 w-5 text-blue-600" />,
    details: [
      "Elaboração de contratos personalizados",
      "Análise e revisão de cláusulas contratuais",
      "Negociação de termos e condições",
      "Assessoria em disputas contratuais",
      "Mediação em conflitos"
    ]
  },
  {
    title: "Responsabilidade Civil",
    description: "Defesa em casos de danos morais, materiais e ações indenizatórias.",
    icon: <ShieldAlert className="h-5 w-5 text-blue-600" />,
    details: [
      "Ações de indenização por danos morais",
      "Reparação de danos materiais",
      "Responsabilidade por acidentes",
      "Defesa em ações de consumo",
      "Erro profissional"
    ]
  },
  {
    title: "Direito das Obrigações",
    description: "Assessoria em questões envolvendo obrigações contratuais e extracontratuais.",
    icon: <Handshake className="h-5 w-5 text-blue-600" />,
    details: [
      "Cumprimento de obrigações",
      "Inadimplemento contratual",
      "Execução de dívidas",
      "Cobranças judiciais",
      "Renegociação de dívidas"
    ]
  },
  {
    title: "Direito de Família",
    description: "Suporte em divórcios, pensões, guarda e demais questões familiares.",
    icon: <Users className="h-5 w-5 text-blue-600" />,
    details: [
      "Processos de divórcio",
      "Pensão alimentícia",
      "Guarda de menores",
      "Regulamentação de visitas",
      "Inventários e partilhas"
    ]
  },
];

const businessLawItems = [
  {
    title: "Constituição de Empresas",
    description: "Assessoria completa na abertura de empresas, incluindo escolha do tipo societário e registro, com adequação à LGPD.",
    icon: <Building className="h-5 w-5 text-yellow-600" />,
    details: [
      "Análise do melhor tipo societário",
      "Elaboração de contratos sociais",
      "Registro na Junta Comercial",
      "Obtenção de licenças",
      "Planejamento tributário inicial",
      "Adequação para LGPD"
    ]
  },
  {
    title: "Falências",
    description: "Assessoria jurídica em processos de falência e recuperação de ativos.",
    icon: <HeartPulse className="h-5 w-5 text-yellow-600" />,
    details: [
      "Processos de falência",
      "Recuperação de ativos",
      "Defesa de credores",
      "Liquidação de bens",
      "Concordatas"
    ]
  },
  {
    title: "Recuperação Judicial",
    description: "Suporte especializado em processos de recuperação judicial e reestruturação empresarial.",
    icon: <Scale className="h-5 w-5 text-yellow-600" />,
    details: [
      "Análise de viabilidade",
      "Elaboração do plano de recuperação",
      "Negociação com credores",
      "Assembleia de credores",
      "Acompanhamento do processo"
    ]
  }
];

const realEstateAndCondoLawItems = [
  {
    title: "Direito Imobiliário",
    description: "Assessoria completa em compra, venda e locação de imóveis.",
    icon: <Home className="h-5 w-5 text-blue-600" />,
    details: [
      "Contratos de compra e venda",
      "Locação residencial e comercial",
      "Usucapião e regularização",
      "Financiamentos imobiliários",
      "Due diligence imobiliário",
      "Acompanhamento de Compra e Venda ou Locação",
      "Due Diligence em contratos de venda e compra",
      "Ações de Despejo e Cobrança de Alugueis",
      "Ações Possessórias (Imissão/Reintegração/Usucapião)"
    ]
  },
  {
    title: "Assembleias e Convenções",
    description: "Orientação na realização de assembleias e elaboração de convenções condominiais.",
    icon: <Users2 className="h-5 w-5 text-blue-600" />,
    details: [
      "Organização de assembleias",
      "Elaboração de convenções",
      "Regimento interno",
      "Atas de reunião",
      "Orientação legal para síndicos"
    ]
  },
  {
    title: "Cobranças Condominiais",
    description: "Gestão e recuperação de taxas condominiais em atraso.",
    icon: <Receipt className="h-5 w-5 text-blue-600" />,
    details: [
      "Cobrança extrajudicial",
      "Ações de cobrança",
      "Acordos de pagamento",
      "Execução de débitos",
      "Análise de inadimplência"
    ]
  },
  {
    title: "Mediação de Conflitos",
    description: "Resolução de conflitos entre condôminos e administração.",
    icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
    details: [
      "Mediação entre vizinhos",
      "Resolução de disputas",
      "Orientação preventiva",
      "Acordos extrajudiciais",
      "Gestão de reclamações"
    ]
  },
  {
    title: "Reformas e Obras",
    description: "Assessoria jurídica em projetos de reforma e obras em condomínios.",
    icon: <Hammer className="h-5 w-5 text-blue-600" />,
    details: [
      "Análise de projetos",
      "Contratos com fornecedores",
      "Aprovações legais",
      "Responsabilidade técnica",
      "Fiscalização de obras"
    ]
  },
];

function PracticeArea({ title, description, items, hoverColor, accentColor, icon, animationDelay = 0 }: PracticeAreaProps) {
  const [openCards, setOpenCards] = useState<{ [key: string]: boolean }>({});
  const { ref: areaRef, isVisible: areaIsVisible } = useScrollReveal();

  const toggleCard = (id: string) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div 
      ref={areaRef as React.RefObject<HTMLDivElement>}
      className={`scroll-reveal ${areaIsVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <Card className={`h-full p-4 md:p-8 bg-gradient-to-br from-white ${accentColor} animate-fade-in`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="text-blue-600">{icon}</div>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-8 text-lg">{description}</p>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <Collapsible
              key={item.title}
              open={openCards[item.title]}
              onOpenChange={() => toggleCard(item.title)}
            >
              <CollapsibleTrigger 
                className={`flex items-center justify-between w-full text-left p-4 ${hoverColor} rounded-lg transition-colors animate-fade-in hover-scale`}
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
                aria-label={`Expandir ${item.title}`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-medium text-lg">{item.title}</span>
                </div>
                {openCards[item.title] ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 pr-4 pt-4 pb-4">
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, index) => (
                    <li 
                      key={index} 
                      className="flex items-center text-gray-600 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export function PracticeAreasSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá, vim pelo site e gostaria de falar com um advogado. Pode me ajudar?"
    );
    window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 bg-white">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 animate-fade-in">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <PracticeArea
              title="Direito Civil"
              description="Especialização em contratos, responsabilidade civil, direito das obrigações e família."
              items={civilLawItems}
              hoverColor="hover:bg-blue-50"
              accentColor="to-blue-50"
              icon={<Scale size={32} />}
              animationDelay={0.1}
            />
            <PracticeArea
              title="Direito Empresarial"
              description="Suporte jurídico completo para empresas, desde a constituição até operações complexas."
              items={businessLawItems}
              hoverColor="hover:bg-yellow-50"
              accentColor="to-yellow-50"
              icon={<Building2 size={32} />}
              animationDelay={0.2}
            />
            <PracticeArea
              title="Direito Imobiliário e Condominial"
              description="Assessoria completa em questões imobiliárias e condominiais, desde compra/venda até gestão de condomínios."
              items={realEstateAndCondoLawItems}
              hoverColor="hover:bg-blue-50"
              accentColor="to-blue-50"
              icon={<Home size={32} />}
              animationDelay={0.3}
            />
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white hover-scale"
            >
              <MessageCircle className="mr-2" />
              Consulte um Advogado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}