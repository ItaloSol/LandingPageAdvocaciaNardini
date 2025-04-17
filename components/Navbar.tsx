"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Problemas que Resolvemos", href: "#problemas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="relative">
            <div>
             <div>
                <Image
                  src="/images/logo-nav.webp"
                  alt="Nardini Advogados"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 'auto', height: '100%' }}
                  priority
                />
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled ? "text-green" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                const message = encodeURIComponent(
                  "Olá, vim pelo site e gostaria de falar com o Dr. Sidnei Nardini. Pode me ajudar?"
                );
                window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
              }}
              size="sm"
              className={`${
                isScrolled
                  ? "bg-gold hover:bg-gold/90 text-white"
                  : "bg-white text-green hover:bg-gold/10"
              }`}
            >
              Fale com um Advogado
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-green" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-green" : "text-white"} />
            )}
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-40 md:hidden">
              <div className="flex flex-col items-center justify-center h-full gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-green hover:text-gold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Olá, vim pelo site e gostaria de falar com o Dr. Sidnei Nardini. Pode me ajudar?"
                    );
                    window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gold hover:bg-gold/90 text-white"
                >
                  Fale com um Advogado
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}