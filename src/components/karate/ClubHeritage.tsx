import React from 'react';
import { Shield, Target, Flame, HeartHandshake, Check } from 'lucide-react';
import { BUSHIDO_VALUES } from '../../data/karateData';

export const ClubHeritage: React.FC = () => {
  return (
    <section id="club" className="py-20 lg:py-24 bg-[#F8F9FA] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
            <Shield className="w-3.5 h-3.5 text-[#DC2626]" />
            L’Héritage Bônois depuis 1944
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Plus qu’un sport, une école de vie et de respect.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Fondé en 1944, le club emblématique de Hamra Annaba perpétue une tradition d’excellence athlétique et d’éducation morale. Au dojo, nous apprenons la maîtrise du corps et la droiture de l’esprit.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Visual Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <img
                src="/karate-kids-group.jpg"
                alt="Jeunes karatékas de Hamra Annaba"
                loading="lazy"
                decoding="async"
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-4 bg-white border-t border-neutral-100 flex items-center gap-3">
                <img
                  src="/hamra-annaba-logo.png"
                  alt="Logo Hamra Annaba"
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 object-contain shrink-0"
                />
                <div>
                  <h3 className="text-xs font-bold text-neutral-900 uppercase">
                    Hamra Annaba • Section Karaté-Do
                  </h3>
                  <p className="text-[11px] text-neutral-500">
                    Cotisation accessible : 2 000 DA/mois pour chaque adhérent
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars for Parents */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-start gap-4">
              <div className="p-2 rounded-lg bg-red-50 text-[#DC2626] shrink-0 mt-0.5">
                <Target className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-neutral-900">
                  Concentration & Discipline Scolaire
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  L’apprentissage des katas et le travail respiratoire renforcent l’attention et la mémoire. Les parents constatent une progression mesurable de la régularité dans le travail scolaire.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-start gap-4">
              <div className="p-2 rounded-lg bg-red-50 text-[#DC2626] shrink-0 mt-0.5">
                <Flame className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-neutral-900">
                  Confiance en Soi & Prévention du Harcèlement
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Un enfant qui maîtrise sa posture dégage une assurance naturelle qui dissuade les intimidations. Il n'agresse jamais, mais sait se faire respecter avec calme et détermination.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-start gap-4">
              <div className="p-2 rounded-lg bg-red-50 text-[#DC2626] shrink-0 mt-0.5">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-neutral-900">
                  Activité Physique Saine & Éloignement des Écrans
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Deux à trois séances hebdomadaires de dépense physique équilibrée au sein d’un groupe soudé, dans une vraie ambiance de club sportif annabi.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-neutral-600">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#DC2626]" />
                Instructeurs diplômés d'État
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#DC2626]" />
                Assurance sportive incluse
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#DC2626]" />
                Cadre bienveillant et sécurisé
              </span>
            </div>
          </div>
        </div>

        {/* The 4 Moral Code Virtues */}
        <div className="pt-10 border-t border-neutral-200/80">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Le Code Moral du Karaté-Do • ميثاق الأخلاق الرياضية
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BUSHIDO_VALUES.map((val) => (
              <div
                key={val.title}
                className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs hover:border-red-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-[#DC2626]">
                    {val.kanji}
                  </span>
                  <span className="text-xs font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded" style={{ fontFamily: 'var(--font-cairo)' }}>
                    {val.arabic}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase">
                  {val.title}
                </h4>
                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
