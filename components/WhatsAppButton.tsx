"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a small delay for smooth appearance
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá, vim pelo site e gostaria de falar com um advogado. Pode me ajudar?"
    );
    window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Iniciar conversa no WhatsApp"
      className={`fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ${
        isVisible ? "scale-100" : "scale-0"
      }`}
      style={{
        animation: isVisible ? "pulse 2s infinite" : "none",
      }}
    >
      <div className="relative">
        <MessageCircle
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
          fill="white"
        />
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </button>
  );
}