import React from 'react';
import { Award, MessageCircle, Phone } from 'lucide-react';
import { CLUB_CONTACT } from '../../data/karateData';

interface StickyMobileBarProps {
  onOpenRegister: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenRegister }) => {
  const whatsappUrl = `https://wa.me/${CLUB_CONTACT.whatsappRaw}?text=${encodeURIComponent(
    `Bonjour Mr Ait Amar, je vous contacte concernant la section Karaté-Do du Club Hamra Annaba pour inscrire mon enfant.`
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2.5 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-md">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call to Mr Ait Amar */}
        <a
          href={`tel:${CLUB_CONTACT.phoneRaw}`}
          className="p-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center shrink-0 border border-neutral-200 min-h-[44px] min-w-[44px]"
          aria-label={`Appeler ${CLUB_CONTACT.directorName} (${CLUB_CONTACT.phoneDisplay})`}
          title={`Appeler ${CLUB_CONTACT.directorName}`}
        >
          <Phone className="w-4 h-4 text-[#DC2626]" />
        </a>

        {/* WhatsApp to Mr Ait Amar */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-[#25D366] text-black hover:bg-[#20bd5a] flex items-center justify-center shrink-0 shadow-xs min-h-[44px] min-w-[44px]"
          aria-label={`Contacter ${CLUB_CONTACT.directorName} sur WhatsApp`}
          title={`WhatsApp avec ${CLUB_CONTACT.directorName}`}
        >
          <MessageCircle className="w-4 h-4" />
        </a>

        {/* Inscription CTA (Without price mentioned) */}
        <button
          onClick={onOpenRegister}
          className="flex-1 py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors active:scale-98 min-h-[44px]"
        >
          <Award className="w-4 h-4 text-amber-200" />
          <span>Inscrire mon enfant</span>
        </button>
      </div>
    </div>
  );
};
