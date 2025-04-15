'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import Image from 'next/image';
import { useParallax } from '@/hooks/useParallax';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

export function HeroSection() {
  const parallaxRef = useParallax(0.5);
  const [name, setName] = useState('');

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá, meu nome é ${name} e gostaria de falar com um advogado. Pode me ajudar?`
    );
    window.open(`https://wa.me/5517997720489?text=${message}`, '_blank');
  };

  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" ref={parallaxRef as React.RefObject<HTMLDivElement>}>
        <Image
          src="/images/logo.png"
          alt="Estátua da Justiça"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
          Excelência Jurídica ao Seu Alcance
        </h1>
        <p
          className="text-lg md:text-2xl mb-8 text-gray-200 px-4 animate-fade-in"
          animate-fade-in animate-delay-100
        >
          Soluções jurídicas personalizadas para proteger seus direitos e
          interesses em questões cíveis, empresariais e condominiais.
        </p>
        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Phone className="w-5 h-5 text-green-400" />
            <span className="text-lg font-medium text-green-400">Atendimento Imediato</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full md:w-64 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <p className="text-xs text-white/60 mt-2">
                Resposta em até 5 minutos no horário comercial
              </p>
            </div>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto hover-scale transition-all duration-300 shadow-lg hover:shadow-xl"
              disabled={!name.trim()}
            >
              <MessageCircle className="mr-2" />
              Fale com um Advogado
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}