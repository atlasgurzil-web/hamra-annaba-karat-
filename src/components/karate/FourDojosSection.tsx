import React, { useState } from 'react';
import { MapPin, Clock, Check, ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { HAMRA_DOJOS } from '../../data/karateData';

interface FourDojosSectionProps {
  onSelectDojo: (dojoId: string) => void;
}

export const FourDojosSection: React.FC<FourDojosSectionProps> = ({ onSelectDojo }) => {
  const [selectedDojoId, setSelectedDojoId] = useState<string>('chabou');

  const activeDojo = HAMRA_DOJOS.find((d) => d.id === selectedDojoId) || HAMRA_DOJOS[0];

  return (
    <section id="dojos" className="py-20 lg:py-24 bg-white border-b border-neutral-200/80 athletic-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
            <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
            Réseau des 4 Dojos à Annaba
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            4 Salles réparties à travers Annaba.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Inscrivez votre enfant dans la salle la plus proche de votre domicile ou de son établissement scolaire. Même programme officiel, encadrement certifié et cotisation unique de <strong className="text-neutral-900">2 000 DA/mois</strong> dans tous nos dojos.
          </p>
        </div>

        {/* 4 Dojos Horizontal Tab Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {HAMRA_DOJOS.map((dojo) => {
            const isSelected = dojo.id === selectedDojoId;
            return (
              <button
                key={dojo.id}
                onClick={() => setSelectedDojoId(dojo.id)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-red-50/50 border-[#DC2626] ring-1 ring-red-200 shadow-xs'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="text-[11px] font-bold text-[#DC2626] uppercase">
                  {dojo.quarter}
                </div>
                <div className="text-sm font-bold text-neutral-900 mt-1 line-clamp-1">
                  {dojo.name}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mt-2">
                  <Users className="w-3 h-3 text-emerald-600" />
                  <span>{dojo.spotsRemaining} places disponibles</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Dojo Card */}
        <div className="rounded-2xl bg-white border border-neutral-200 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Info & Schedule */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#DC2626] text-white">
                    {activeDojo.quarter}
                  </span>
                  <span className="text-xs text-neutral-500 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Dojo Homologué WKF
                  </span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {activeDojo.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span>{activeDojo.address}</span>
                </p>
                <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                  {activeDojo.description}
                </p>
              </div>

              {/* Schedule Breakdown */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#DC2626]" />
                  Créneaux d’entraînement hebdomadaires
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/90 space-y-1">
                    <div className="text-xs font-bold text-amber-800">Baby Karaté (4-6 ans)</div>
                    <div className="text-xs text-neutral-600">{activeDojo.schedule.baby}</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/90 space-y-1">
                    <div className="text-xs font-bold text-[#DC2626]">Jeunes (7-12 ans)</div>
                    <div className="text-xs text-neutral-600">{activeDojo.schedule.kids}</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/90 space-y-1">
                    <div className="text-xs font-bold text-blue-800">Ados & Adultes (13+)</div>
                    <div className="text-xs text-neutral-600">{activeDojo.schedule.teensAdults}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Équipements du dojo
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeDojo.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Selection Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-neutral-50 border border-neutral-200 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <div>
                    <span className="text-xs text-neutral-500">Cotisation mensuelle</span>
                    <div className="text-3xl font-extrabold text-neutral-900" style={{ fontFamily: 'var(--font-syne)' }}>
                      2 000 <span className="text-sm font-semibold text-[#DC2626]">DA/mois</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-500">Places</span>
                    <div className="text-sm font-bold text-emerald-700">
                      {activeDojo.spotsRemaining} disponibles
                    </div>
                  </div>
                </div>

                <div className="text-xs text-neutral-600 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                    <span>Dossier : extrait de naissance, 2 photos, certificat médical, autorisation parentale.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                    <span>Séance d’essai gratuite ouverte pour toute nouvelle pré-inscription.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectDojo(activeDojo.id)}
                className="w-full py-3.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>Choisir le Dojo {activeDojo.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
