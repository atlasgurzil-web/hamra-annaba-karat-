import React from 'react';
import { Shield, MapPin, Phone, Mail, Award, ArrowUp } from 'lucide-react';
import { HAMRA_DOJOS } from '../../data/karateData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-600 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-200">
          {/* Col 1: Club Crest & Heritage */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/hamra-annaba-logo.png"
                alt="Logo Club Hamra Annaba"
                className="w-11 h-11 object-contain"
              />
              <div>
                <div className="text-base font-extrabold text-neutral-900 uppercase" style={{ fontFamily: 'var(--font-syne)' }}>
                  HAMRA <span className="text-[#DC2626]">ANNABA</span>
                </div>
                <div className="text-[11px] text-neutral-500 font-medium">
                  Section Karaté-Do • Fondé en 1944
                </div>
              </div>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
              L'un des plus anciens et respectés clubs omnisports d’Algérie. Notre section de Karaté-Do forme la jeunesse bônoise à la rigueur martiale, au respect et à l’excellence sportive.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-neutral-500">
              <Shield className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>Affilié à la Fédération Algérienne de Karaté (FAK)</span>
            </div>
          </div>

          {/* Col 2: The 4 Dojos in Annaba */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              Nos 4 Dojos à Annaba
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {HAMRA_DOJOS.map((d) => (
                <div key={d.id} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/80 space-y-0.5">
                  <div className="font-bold text-neutral-900 text-xs">{d.name}</div>
                  <div className="text-[11px] font-semibold text-[#DC2626]">{d.quarter}</div>
                  <div className="text-[10px] text-neutral-500 line-clamp-1">{d.address}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Practical Info & Tarifs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#DC2626]" />
              Adhésion & Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                <span className="text-[10px] text-neutral-600 block">Cotisation mensuelle officielle</span>
                <span className="text-lg font-bold text-[#DC2626]" style={{ fontFamily: 'var(--font-syne)' }}>
                  2 000 DA / mois
                </span>
              </div>
              <div className="text-neutral-600 leading-relaxed">
                Extrait de naissance, 2 photos d'identité, certificat médical et autorisation parentale requis.
              </div>
              <div className="pt-2 flex flex-col gap-1.5 text-neutral-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Annaba, Algérie</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  <span>contact@hamra-annaba.dz</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[11px] text-neutral-600">
              © 2026 Club Omnisports Hamra Annaba (Section Karaté-Do). Tous droits réservés.
            </p>
            <p className="text-[10px] text-neutral-400 mt-0.5">
              Site officiel hébergé sur Vercel • Conception épurée selon les normes de l'Unslop.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors text-xs font-medium"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#DC2626]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
