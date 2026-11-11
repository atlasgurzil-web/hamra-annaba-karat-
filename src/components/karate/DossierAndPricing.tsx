import React from 'react';
import { FileText, Camera, Activity, ShieldCheck, Check, ArrowRight, AlertCircle } from 'lucide-react';
import { REQUIRED_DOCUMENTS } from '../../data/karateData';

interface DossierAndPricingProps {
  onOpenRegister: () => void;
}

export const DossierAndPricing: React.FC<DossierAndPricingProps> = ({ onOpenRegister }) => {
  const getDocIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#DC2626]" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-amber-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      default:
        return <FileText className="w-5 h-5 text-[#DC2626]" />;
    }
  };

  return (
    <section id="tarifs" className="py-20 lg:py-24 bg-[#F8F9FA] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
            Tarifs Clairs & Pièces Justificatives
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Adhésion & Pièces du dossier d’inscription.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Un tarif unique et accessible fixé par la direction de Hamra Annaba pour permettre à tous les enfants d'accéder au Karaté-Do dans un cadre officiel homologué.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Official Pricing Card */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-neutral-200 p-8 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#DC2626] text-white">
                  Cotisation Mensuelle Unique
                </span>
                <span className="text-xs text-neutral-500 font-medium">Saison 2026/2027</span>
              </div>

              {/* Price Figures */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-5xl font-extrabold text-neutral-900 tracking-tight"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    2 000
                  </span>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-[#DC2626] uppercase">Dinars (DA)</span>
                    <span className="text-xs text-neutral-500">par mois / adhérent</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-500 mt-2">
                  Valable dans les 4 dojos (Chabou, Pont Blanc, El Bouni, Plaine Ouest).
                </p>
              </div>

              {/* Inclusions */}
              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Ce qui est inclus dans votre cotisation :
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>2 à 3 séances d’entraînement hebdomadaires</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Assurance sportive officielle contre les accidents</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Licence officielle Club Hamra Annaba & Affiliation FAK</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Préparation aux examens officiels de passage de ceintures</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Accès aux vestiaires et tatamis homologués</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenRegister}
                className="w-full py-3.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>Remplir le Formulaire de Pré-inscription</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Required Documents */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-neutral-200 p-8 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div>
                  <h3
                    className="text-xl font-bold text-neutral-900"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Dossier Administratif Requis
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    À déposer au secrétariat du dojo après votre pré-inscription en ligne.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              {/* The 4 Mandatory Documents */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {REQUIRED_DOCUMENTS.map((doc) => (
                  <div
                    key={doc.title}
                    className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/90 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-md bg-white border border-neutral-200">
                        {getDocIcon(doc.icon)}
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-neutral-600 border border-neutral-200">
                        {doc.badge}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-neutral-900">{doc.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">{doc.description}</p>
                  </div>
                ))}
              </div>

              {/* Notice */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <strong>Important pour les familles :</strong> Le certificat médical d'aptitude sportive est obligatoire avant la première séance sur les tatamis.
                </div>
              </div>
            </div>

            {/* Template Note */}
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
              <div>
                <strong className="text-neutral-900 block font-semibold">Modèle d'autorisation paternelle prêt à l'emploi</strong>
                La formule légale d'autorisation parentale est incluse sur votre récépissé téléchargeable après validation du formulaire.
              </div>
              <button
                onClick={onOpenRegister}
                className="shrink-0 px-4 py-2 rounded-lg bg-neutral-900 text-white font-bold text-xs hover:bg-neutral-800 transition-colors"
              >
                Accéder au formulaire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
