import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/karateData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white border-b border-neutral-200/80 athletic-grid-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
            <HelpCircle className="w-3.5 h-3.5 text-[#DC2626]" />
            Questions Fréquentes
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Réponses aux questions des parents.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Tout ce que vous devez savoir avant d’inscrire votre enfant dans la section Karaté du club Hamra Annaba.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className={`rounded-xl border transition-colors overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-50/70 border-[#DC2626]/30 shadow-xs'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-neutral-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-md bg-neutral-100 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#DC2626] bg-red-50' : 'text-neutral-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
