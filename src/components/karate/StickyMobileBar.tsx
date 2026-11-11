import React from 'react';
import { Award, MessageCircle } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenRegister: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenRegister }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-md">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="https://wa.me/?text=Bonjour%20Club%20Hamra%20Annaba%2C%20je%20souhaite%20des%20informations%20sur%20les%20inscriptions%20Karat%C3%A9%20%282000%20DA%2Fmois%29"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-[#25D366] text-black hover:bg-[#20bd5a] flex items-center justify-center shrink-0 shadow-xs"
          aria-label="Contacter sur WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <button
          onClick={onOpenRegister}
          className="flex-1 py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors active:scale-98"
        >
          <Award className="w-4 h-4 text-amber-200" />
          <span>Inscrire mon enfant (2 000 DA/m)</span>
        </button>
      </div>
    </div>
  );
};
