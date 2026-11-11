import React from 'react';
import { Check, Clock, Award, ArrowRight } from 'lucide-react';
import { AGE_CATEGORIES } from '../../data/karateData';

interface AgeCategoriesSectionProps {
  onSelectCategory: (catId: string) => void;
}

export const AgeCategoriesSection: React.FC<AgeCategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="programmes" className="py-20 lg:py-24 bg-[#F8F9FA] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
            <Award className="w-3.5 h-3.5 text-[#DC2626]" />
            Programmes par Tranches d’Âge
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Une pédagogie adaptée à chaque étape de l’enfance.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            De la motricité ludique du tout-petit aux exigences de la compétition officielle, chaque karatéka progresse avec rigueur et bienveillance sous la conduite de nos instructeurs ceintures noires.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AGE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-xs hover:border-neutral-300 transition-colors flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative h-56 bg-neutral-100 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#DC2626] text-white shadow-xs">
                    {category.ageRange}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/95 text-neutral-800 border border-neutral-200">
                    {category.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-xs border border-neutral-200/80">
                  <h3
                    className="text-lg font-bold text-neutral-900"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#DC2626] font-medium mt-0.5">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                      Bénéfices pour l'adhérent :
                    </span>
                    <ul className="space-y-1.5">
                      {category.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{category.scheduleWeekly}</span>
                  </div>

                  <button
                    onClick={() => onSelectCategory(category.id)}
                    className="px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Choisir ce groupe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
