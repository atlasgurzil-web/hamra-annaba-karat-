import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, X, ZoomIn } from 'lucide-react';

interface GalleryPhoto {
  src: string;
  title: string;
  subtitle: string;
  tag: string;
  aspect: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: '/karate-training-1.jpg',
    title: 'Alignement & Frappes Fondamentales (Tsuki)',
    subtitle: 'Les jeunes karatékas apprennent la posture d’ancrage au sol et l’énergie du kiai.',
    tag: 'Entraînement',
    aspect: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    src: '/karate-kids-group.jpg',
    title: 'L’Équipe des Jeunes Karatékas de Hamra Annaba',
    subtitle: 'Une véritable camaraderie sous les couleurs historiques rouge et blanche.',
    tag: 'Esprit de Club',
    aspect: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    src: '/karate-dojo-kids.jpg',
    title: 'Travail des Katas Shotokan au Dojo',
    subtitle: 'Répétition rigoureuse des katas sous la direction des maîtres ceintures noires.',
    tag: 'Katas Heian',
    aspect: 'col-span-1 row-span-1',
  },
  {
    src: '/karate-kata-action.jpg',
    title: 'Précision du Geste & Équilibre',
    subtitle: 'Exécution d’un kata supérieur avec une grande concentration martiale.',
    tag: 'Compétition',
    aspect: 'col-span-1 row-span-1',
  },
  {
    src: '/karate-kumite-kids.jpg',
    title: 'Assauts Kumité Contrôlés & Protégés WKF',
    subtitle: 'Gants, casques et protège-pieds obligatoires pour une sécurité totale.',
    tag: 'Kumité Protégé',
    aspect: 'col-span-1 md:col-span-2 row-span-1',
  },
];

export const PhotoGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section id="galerie" className="py-20 lg:py-24 bg-[#F8F9FA] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
            <Camera className="w-3.5 h-3.5 text-[#DC2626]" />
            La Vie au Dojo
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Nos jeunes pratiquants en action.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Un aperçu authentique des entraînements dans nos dojos à Annaba, de l’éveil des plus jeunes au perfectionnement des ceintures avancées.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              onClick={() => setActivePhoto(photo)}
              className={`group relative rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 cursor-pointer min-h-[220px] shadow-xs ${photo.aspect}`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#DC2626] text-white">
                  {photo.tag}
                </span>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#DC2626]" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm font-bold">
                  {photo.title}
                </h3>
                <p className="text-[11px] text-neutral-300 line-clamp-1 mt-0.5">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActivePhoto(null)}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/20 text-white hover:bg-white/40"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="max-w-4xl w-full rounded-2xl overflow-hidden bg-white shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] bg-neutral-100">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 pt-2 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#DC2626] text-white uppercase">
                    {activePhoto.tag}
                  </span>
                  <span className="text-xs text-neutral-500">Club Hamra Annaba</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{activePhoto.title}</h3>
                <p className="text-xs text-neutral-600">{activePhoto.subtitle}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
