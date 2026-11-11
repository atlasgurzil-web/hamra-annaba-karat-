import React, { useState } from 'react';
import { Award, BookOpen, ChevronRight } from 'lucide-react';
import { BELT_LEVELS } from '../../data/karateData';

export const BeltProgression: React.FC = () => {
  const [activeBeltIndex, setActiveBeltIndex] = useState(0);

  const activeBelt = BELT_LEVELS[activeBeltIndex];

  return (
    <section id="ceintures" className="py-20 lg:py-24 bg-white border-b border-neutral-200/80 athletic-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
            <Award className="w-3.5 h-3.5 text-[#DC2626]" />
            La Voie de la Ceinture Blanche à la Ceinture Noire
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            La progression des grades Shotokan.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Chaque passage de ceinture chez Hamra Annaba est une étape solennelle célébrée au dojo. L’élève apprend la valeur du travail régulier, de la patience et du mérite sportif.
          </p>
        </div>

        {/* Belts Selector Bar */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-8">
          {BELT_LEVELS.map((belt, idx) => {
            const isActive = idx === activeBeltIndex;
            return (
              <button
                key={belt.name}
                onClick={() => setActiveBeltIndex(idx)}
                className={`flex-1 min-w-[110px] p-3 rounded-xl border text-center transition-all ${
                  isActive
                    ? 'bg-neutral-50 border-[#DC2626] ring-1 ring-red-200 shadow-xs'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div
                  className="w-full h-3 rounded-full mb-2 border border-black/10"
                  style={{ backgroundColor: belt.hex }}
                />
                <div className="text-xs font-bold text-neutral-900 truncate">
                  {belt.color}
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5">
                  {belt.kyu}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Belt Card */}
        <div className="rounded-2xl bg-white border border-neutral-200 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Belt Emblem Visual */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-neutral-50 border border-neutral-200 text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xs border-2 border-neutral-300 mb-3"
                style={{ backgroundColor: activeBelt.hex }}
              >
                <span className="text-2xl font-bold text-neutral-800">
                  {activeBelt.kyu.split(' ')[0]}
                </span>
              </div>
              <h3
                className="text-xl font-bold text-neutral-900"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {activeBelt.name}
              </h3>
              <span className="text-xs font-semibold text-[#DC2626] mt-1">
                Grade officiel : {activeBelt.kyu}
              </span>
            </div>

            {/* Meaning & Katas */}
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Signification Martiale
                </span>
                <p className="text-base text-neutral-800 font-medium leading-relaxed">
                  « {activeBelt.meaning} »
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Katas & Notions techniques pour ce grade :
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 font-mono">
                  {activeBelt.katas}
                </p>
              </div>

              <div className="text-xs text-neutral-500 flex items-center gap-1.5 pt-1">
                <ChevronRight className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span>Les passages de ceintures ont lieu deux fois par an (décembre et juin) sous la direction de la commission technique de Hamra Annaba.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
