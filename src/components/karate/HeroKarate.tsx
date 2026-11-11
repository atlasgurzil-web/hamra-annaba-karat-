import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, MapPin, ArrowRight, ChevronRight, Check } from 'lucide-react';

interface HeroKarateProps {
  onOpenRegister: (dojoId?: string) => void;
  onExploreDojos: () => void;
}

const HERO_SLIDES = [
  {
    image: '/karate-training-1.jpg',
    tag: 'Entraînement au Dojo',
    title: 'Rigueur, posture et apprentissage des frappes fondamentales (Tsuki & Kiai)',
    caption: 'Dojo Hamra Annaba • École des jeunes ceintures blanches et de couleur',
  },
  {
    image: '/karate-kids-group.jpg',
    tag: 'Esprit de Club',
    title: 'Une tradition sportive transmise aux jeunes générations depuis 1944',
    caption: 'Les jeunes karatékas de Hamra Annaba réunis après l’entraînement',
  },
  {
    image: '/karate-dojo-kids.jpg',
    tag: 'Katas Shotokan',
    title: 'Précision du geste, équilibre et respect des katas Heian traditionnels',
    caption: 'Travail technique face aux miroirs sous la supervision des instructeurs',
  },
  {
    image: '/karate-kumite-kids.jpg',
    tag: 'Kumité Protégé WKF',
    title: 'Combats d’entraînement contrôlés selon les règles officielles de sécurité',
    caption: 'Protections homologuées obligatoires pour une pratique sans risque',
  },
];

export const HeroKarate: React.FC<HeroKarateProps> = ({ onOpenRegister, onExploreDojos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white border-b border-neutral-200/80 athletic-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic & Professional Club Headline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
                Section Officielle Karaté-Do • WKF Shotokan
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200">
                <MapPin className="w-3 h-3 text-neutral-500" />
                4 Dojos à Annaba
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-xs font-bold tracking-wider text-[#DC2626] uppercase">
                Club Omnisports Hamra Annaba • Fondé en 1944
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.12]"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Forger le caractère et la discipline martiale de vos enfants.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
              La section officielle de Karaté-Do Shotokan du club historique <strong className="text-neutral-900 font-semibold">Hamra Annaba</strong> accueille garçons et filles dès 4 ans (Baby Karaté), adolescents et adultes dans 4 salles réparties à travers Annaba. Encadrement diplômé, respect et rigueur sportive.
            </p>

            {/* 3 Calm Stat Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/90">
                <div className="text-2xl font-bold text-neutral-900 flex items-baseline gap-1" style={{ fontFamily: 'var(--font-syne)' }}>
                  <span>2 000</span>
                  <span className="text-xs font-semibold text-[#DC2626]">DA/mois</span>
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">Cotisation mensuelle fixe</div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/90">
                <div className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-syne)' }}>
                  4 Dojos
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">Chabou, Pont Blanc, El Bouni...</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-neutral-50 border border-neutral-200/90">
                <div className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-syne)' }}>
                  Dès 4 ans
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">Baby Karaté & École des jeunes</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenRegister()}
                className="px-6 py-3.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <span>Inscrire mon enfant (2 000 DA)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreDojos}
                className="px-5 py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-sm border border-neutral-200 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Consulter les 4 Salles à Annaba</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </button>
            </div>

            {/* Trust Checklist */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-neutral-500 pt-1">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Tatamis officiels WKF
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Dossier simple (extrait, 2 photos, certificat)
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Séance d'essai sans engagement
              </span>
            </div>
          </div>

          {/* Right Column: Crisp Editorial Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-sm">
              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={HERO_SLIDES[currentSlide].image}
                    alt={HERO_SLIDES[currentSlide].title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#DC2626] text-white shadow-xs">
                    {HERO_SLIDES[currentSlide].tag}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/90 backdrop-blur-xs text-neutral-800 border border-neutral-200/80">
                    Hamra Annaba
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-xs border border-neutral-200/80 shadow-xs">
                  <p className="text-xs font-bold text-neutral-900 line-clamp-1">
                    {HERO_SLIDES[currentSlide].title}
                  </p>
                  <p className="text-[11px] text-neutral-600 mt-0.5">
                    {HERO_SLIDES[currentSlide].caption}
                  </p>
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="p-3 bg-neutral-50 border-t border-neutral-200">
                <div className="text-[11px] font-semibold text-neutral-500 mb-2 flex items-center justify-between">
                  <span>Photographies du club au dojo</span>
                  <span className="font-mono text-neutral-700">{currentSlide + 1} / {HERO_SLIDES.length}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.tag}
                      onClick={() => setCurrentSlide(idx)}
                      className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                        currentSlide === idx
                          ? 'border-[#DC2626] ring-2 ring-red-100'
                          : 'border-transparent opacity-65 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.tag}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quiet Club Footnote */}
            <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 px-1">
              <span>Union Sportive Musulmane Bônoise (1944)</span>
              <span className="font-semibold text-[#DC2626]">Section Karaté Officielle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
