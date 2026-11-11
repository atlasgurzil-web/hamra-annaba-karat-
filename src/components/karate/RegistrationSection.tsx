import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  User,
  Briefcase,
  MapPin,
  FileCheck,
  Printer,
  MessageCircle,
  AlertCircle,
  Copy,
  RotateCcw,
  Award
} from 'lucide-react';
import { HAMRA_DOJOS } from '../../data/karateData';

export interface RegistrationSectionRef {
  setDojo: (dojoId: string) => void;
  setCategory: (catId: string) => void;
  scrollToForm: () => void;
}

interface RegistrationSectionProps {
  initialDojoId?: string;
}

export const RegistrationSection = forwardRef<RegistrationSectionRef, RegistrationSectionProps>(
  ({ initialDojoId = 'chabou' }, ref) => {
    // Form State
    const [studentLastName, setStudentLastName] = useState('');
    const [studentFirstName, setStudentFirstName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState<'M' | 'F'>('M');
    const [selectedDojo, setSelectedDojo] = useState(initialDojoId);
    const [experience, setExperience] = useState<'debutant' | 'pratiquant'>('debutant');

    // Parent details requested by user
    const [parentFullName, setParentFullName] = useState('');
    const [parentProfession, setParentProfession] = useState('');
    const [parentPhone, setParentPhone] = useState('');
    const [parentEmail, setParentEmail] = useState('');

    // Dossier commitment checkboxes
    const [hasBirthCertAndPhotos, setHasBirthCertAndPhotos] = useState(true);
    const [hasMedicalCert, setHasMedicalCert] = useState(true);
    const [hasParentalAuthorization, setHasParentalAuthorization] = useState(true);

    // Confirmation state
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [dossierNumber, setDossierNumber] = useState('');
    const [copiedDossier, setCopiedDossier] = useState(false);
    const [formErrors, setFormErrors] = useState<string[]>([]);

    useImperativeHandle(ref, () => ({
      setDojo: (dojoId: string) => {
        setSelectedDojo(dojoId);
        const el = document.getElementById('inscription');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      setCategory: (_catId: string) => {
        const el = document.getElementById('inscription');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      scrollToForm: () => {
        const el = document.getElementById('inscription');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    }));

    const getCalculatedAge = () => {
      if (!birthDate) return null;
      const bDate = new Date(birthDate);
      const diff = Date.now() - bDate.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    const calculatedAge = getCalculatedAge();

    const getCategoryBadge = () => {
      if (calculatedAge === null) return 'Tous âges admis';
      if (calculatedAge >= 4 && calculatedAge <= 6) return 'Baby Karaté (4-6 ans)';
      if (calculatedAge >= 7 && calculatedAge <= 12) return 'École des Jeunes (7-12 ans)';
      if (calculatedAge >= 13 && calculatedAge <= 17) return 'Cadets / Juniors (13-17 ans)';
      return 'Section Adultes (18+ ans)';
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const errors: string[] = [];

      if (!studentLastName.trim() || !studentFirstName.trim()) {
        errors.push('Veuillez renseigner le nom et le prénom de l’élève.');
      }
      if (!birthDate) {
        errors.push('Veuillez indiquer la date de naissance de l’adhérent.');
      }
      if (!parentFullName.trim()) {
        errors.push('Veuillez renseigner le nom complet du parent ou tuteur.');
      }
      if (!parentProfession.trim()) {
        errors.push('Veuillez préciser la profession du parent (demandée par le club).');
      }
      if (!parentPhone.trim() || parentPhone.length < 9) {
        errors.push('Veuillez renseigner un numéro de téléphone valide.');
      }
      if (!parentEmail.trim() || !parentEmail.includes('@')) {
        errors.push('Veuillez renseigner une adresse email valide.');
      }
      if (!hasBirthCertAndPhotos || !hasMedicalCert || !hasParentalAuthorization) {
        errors.push('Veuillez cocher les engagements relatifs aux pièces du dossier.');
      }

      if (errors.length > 0) {
        setFormErrors(errors);
        return;
      }

      setFormErrors([]);

      const randomId = Math.floor(1000 + Math.random() * 9000);
      const generatedDossier = `HAMRA-KR-${new Date().getFullYear()}-${randomId}`;
      setDossierNumber(generatedDossier);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#DC2626', '#111827', '#E5E7EB'],
        });
      } catch (err) {
        // Fallback silently
      }
    };

    const handleCopyDossier = () => {
      navigator.clipboard.writeText(dossierNumber);
      setCopiedDossier(true);
      setTimeout(() => setCopiedDossier(false), 2500);
    };

    const handlePrintReceipt = () => {
      window.print();
    };

    const resetForm = () => {
      setIsSubmitted(false);
      setStudentLastName('');
      setStudentFirstName('');
      setBirthDate('');
      setParentFullName('');
      setParentProfession('');
      setParentPhone('');
      setParentEmail('');
    };

    const activeDojoObj = HAMRA_DOJOS.find((d) => d.id === selectedDojo) || HAMRA_DOJOS[0];

    const whatsappMessage = encodeURIComponent(
      `Bonjour Club Hamra Annaba (Section Karaté-Do) !\n\nJe confirme la pré-inscription de mon enfant :\n` +
      `• N° Dossier : ${dossierNumber}\n` +
      `• Élève : ${studentLastName.toUpperCase()} ${studentFirstName} (${calculatedAge || 'N/A'} ans)\n` +
      `• Salle : ${activeDojoObj.name} (${activeDojoObj.quarter})\n` +
      `• Catégorie : ${getCategoryBadge()}\n` +
      `• Parent : ${parentFullName} (${parentProfession})\n` +
      `• Tél : ${parentPhone}\n` +
      `• Cotisation : 2 000 DA/mois\n\n` +
      `Le dossier papier (extrait de naissance, 2 photos, certificat médical et autorisation paternelle) est en cours de préparation pour le dojo.`
    );

    return (
      <section id="inscription" className="py-20 lg:py-24 bg-white border-b border-neutral-200/80 athletic-grid-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
              <Award className="w-3.5 h-3.5 text-[#DC2626]" />
              Saison Sportive 2026/2027
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Formulaire officiel de pré-inscription.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Réservez votre place dans l’un de nos 4 dojos à Annaba. Cotisation officielle de <strong className="text-neutral-900">2 000 DA par mois</strong>.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              /* FORM CARD */
              <div
                key="form"
                className="rounded-2xl bg-white border border-neutral-200 p-6 sm:p-10 shadow-xs"
              >
                {/* Form Header Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      src="/hamra-annaba-logo.png"
                      alt="Hamra Annaba"
                      className="w-10 h-10 object-contain shrink-0"
                    />
                    <div>
                      <div className="text-xs font-bold text-neutral-900 uppercase">
                        Club Omnisports Hamra Annaba
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        Section Karaté-Do Shotokan • Annaba
                      </div>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-[11px] text-neutral-500">Cotisation mensuelle</span>
                    <div className="text-xl font-bold text-[#DC2626]" style={{ fontFamily: 'var(--font-syne)' }}>
                      2 000 DA <span className="text-xs text-neutral-500 font-normal">/ mois</span>
                    </div>
                  </div>
                </div>

                {/* Form Errors */}
                {formErrors.length > 0 && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs space-y-1 mb-6">
                    <div className="font-bold flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      Merci de corriger les éléments suivants :
                    </div>
                    <ul className="list-disc list-inside space-y-0.5">
                      {formErrors.map((err) => (
                        <li key={err}>{err}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* PART 1: ÉLÈVE */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-neutral-200 pb-2">
                      <User className="w-4 h-4 text-[#DC2626]" />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                        1. Informations de l'adhérent (Élève)
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Nom de l'élève <span className="text-[#DC2626]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={studentLastName}
                          onChange={(e) => setStudentLastName(e.target.value)}
                          placeholder="Ex: BENALI"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] text-neutral-900 text-sm outline-none transition-colors uppercase placeholder:normal-case placeholder:text-neutral-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Prénom de l'élève <span className="text-[#DC2626]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={studentFirstName}
                          onChange={(e) => setStudentFirstName(e.target.value)}
                          placeholder="Ex: Yacine"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] text-neutral-900 text-sm outline-none transition-colors placeholder:text-neutral-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Date de naissance <span className="text-[#DC2626]">*</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] text-neutral-900 text-sm outline-none transition-colors"
                        />
                        {calculatedAge !== null && (
                          <span className="text-[11px] text-emerald-700 font-medium mt-1 inline-block">
                            Âge : {calculatedAge} ans • {getCategoryBadge()}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Sexe de l'élève <span className="text-[#DC2626]">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setGender('M')}
                            className={`py-2.5 rounded-lg border text-xs font-bold transition-colors ${
                              gender === 'M'
                                ? 'bg-[#DC2626] text-white border-[#DC2626]'
                                : 'bg-neutral-50 text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                            }`}
                          >
                            Garçon
                          </button>
                          <button
                            type="button"
                            onClick={() => setGender('F')}
                            className={`py-2.5 rounded-lg border text-xs font-bold transition-colors ${
                              gender === 'F'
                                ? 'bg-[#DC2626] text-white border-[#DC2626]'
                                : 'bg-neutral-50 text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                            }`}
                          >
                            Fille
                          </button>
                        </div>
                      </div>

                      <div className="col-span-1 sm:col-span-2">
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Expérience martiale
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setExperience('debutant')}
                            className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-colors ${
                              experience === 'debutant'
                                ? 'bg-red-50 text-[#DC2626] border-[#DC2626]'
                                : 'bg-neutral-50 text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                            }`}
                          >
                            Débutant complet (Ceinture Blanche)
                          </button>
                          <button
                            type="button"
                            onClick={() => setExperience('pratiquant')}
                            className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-colors ${
                              experience === 'pratiquant'
                                ? 'bg-red-50 text-[#DC2626] border-[#DC2626]'
                                : 'bg-neutral-50 text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                            }`}
                          >
                            Déjà pratiquant (Ceinture de couleur)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PART 2: DOJO */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-neutral-200 pb-2">
                      <MapPin className="w-4 h-4 text-[#DC2626]" />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                        2. Choix de la Salle à Annaba (4 Dojos Disponibles)
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {HAMRA_DOJOS.map((dojo) => {
                        const isChosen = dojo.id === selectedDojo;
                        return (
                          <div
                            key={dojo.id}
                            onClick={() => setSelectedDojo(dojo.id)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition-colors ${
                              isChosen
                                ? 'bg-red-50/60 border-[#DC2626] ring-1 ring-red-200'
                                : 'bg-white border-neutral-200 hover:border-neutral-300'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-900">{dojo.name}</span>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                                {dojo.quarter}
                              </span>
                            </div>
                            <p className="text-[11px] text-neutral-500 mt-1 line-clamp-1">
                              {dojo.address}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* PART 3: PARENT (avec profession demandée) */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-neutral-200 pb-2">
                      <Briefcase className="w-4 h-4 text-[#DC2626]" />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                        3. Coordonnées du Parent / Tuteur Légal
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Nom complet du Père / Mère / Tuteur <span className="text-[#DC2626]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={parentFullName}
                          onChange={(e) => setParentFullName(e.target.value)}
                          placeholder="Ex: BENALI Mohamed"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] text-neutral-900 text-sm outline-none transition-colors placeholder:text-neutral-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Profession / Travail du parent <span className="text-[#DC2626]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={parentProfession}
                          onChange={(e) => setParentProfession(e.target.value)}
                          placeholder="Ex: Enseignant, Ingénieur, Commerçant..."
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] text-neutral-900 text-sm outline-none transition-colors placeholder:text-neutral-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Numéro de téléphone <span className="text-[#DC2626]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={parentPhone}
                          onChange={(e) => setParentPhone(e.target.value)}
                          placeholder="Ex: 0550 12 34 56"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] text-neutral-900 text-sm outline-none transition-colors placeholder:text-neutral-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-1">
                          Adresse e-mail <span className="text-[#DC2626]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={parentEmail}
                          onChange={(e) => setParentEmail(e.target.value)}
                          placeholder="Ex: parent.benali@gmail.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] text-neutral-900 text-sm outline-none transition-colors placeholder:text-neutral-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* PART 4: CHECKLIST */}
                  <div className="space-y-3 p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-2 mb-2">
                      <FileCheck className="w-4 h-4 text-[#DC2626]" />
                      Pièces justificatives requises au dojo
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasBirthCertAndPhotos}
                        onChange={(e) => setHasBirthCertAndPhotos(e.target.checked)}
                        className="mt-1 rounded border-neutral-300 text-[#DC2626] focus:ring-[#DC2626] w-4 h-4"
                      />
                      <span className="text-xs text-neutral-700 leading-relaxed">
                        J'atteste fournir un <strong className="text-neutral-900">extrait de naissance</strong> de l’enfant et <strong className="text-neutral-900">deux (02) photos d’identité récentes</strong> lors du premier entraînement.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasMedicalCert}
                        onChange={(e) => setHasMedicalCert(e.target.checked)}
                        className="mt-1 rounded border-neutral-300 text-[#DC2626] focus:ring-[#DC2626] w-4 h-4"
                      />
                      <span className="text-xs text-neutral-700 leading-relaxed">
                        J'atteste fournir un <strong className="text-neutral-900">certificat médical d'aptitude</strong> à la pratique du karaté-do délivré par un médecin.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasParentalAuthorization}
                        onChange={(e) => setHasParentalAuthorization(e.target.checked)}
                        className="mt-1 rounded border-neutral-300 text-[#DC2626] focus:ring-[#DC2626] w-4 h-4"
                      />
                      <span className="text-xs text-neutral-700 leading-relaxed">
                        En tant que père ou tuteur légal, j'accorde <strong className="text-neutral-900">l'autorisation paternelle</strong> pour la pratique sportive au sein du Club Hamra Annaba et accepte le règlement intérieur du dojo.
                      </span>
                    </label>
                  </div>

                  {/* SUBMIT */}
                  <div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <span>Valider la Pré-Inscription (2 000 DA/mois)</span>
                    </button>
                    <p className="text-center text-xs text-neutral-500 mt-2">
                      Récépissé officiel et numéro de dossier générés instantanément. Aucun paiement en ligne requis aujourd'hui.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              /* CONFIRMATION STATE */
              <div
                key="confirmation"
                className="rounded-2xl bg-white border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-8"
              >
                {/* Success Banner */}
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-neutral-900"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Pré-Inscription Validée avec Succès
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
                    Le dossier a été enregistré au secrétariat de la section Karaté Hamra Annaba sous le numéro officiel :
                  </p>
                </div>

                {/* Printable Official Receipt */}
                <div
                  id="printable-receipt"
                  className="p-6 rounded-xl bg-white border border-neutral-300 text-neutral-900 space-y-6"
                >
                  {/* Receipt Header */}
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/hamra-annaba-logo.png"
                        alt="Hamra Annaba"
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <div className="text-xs font-bold uppercase text-neutral-900">
                          Club Omnisports Hamra Annaba • Section Karaté-Do
                        </div>
                        <div className="text-[11px] text-neutral-500">
                          Récépissé de Pré-Inscription • Saison Sportive 2026/2027
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-neutral-500 uppercase block">N° de Dossier</span>
                      <div className="text-sm font-mono font-bold text-[#DC2626]">
                        {dossierNumber}
                      </div>
                    </div>
                  </div>

                  {/* Receipt Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1 p-3 rounded-lg bg-neutral-50 border border-neutral-200/60">
                      <span className="text-[10px] uppercase font-bold text-neutral-500">Élève Adhérent</span>
                      <div className="font-bold text-neutral-900">
                        {studentLastName.toUpperCase()} {studentFirstName}
                      </div>
                      <div className="text-neutral-600">
                        Né(e) le {birthDate} ({calculatedAge} ans) • {gender === 'M' ? 'Garçon' : 'Fille'}
                      </div>
                      <div className="text-[#DC2626] font-semibold mt-1">
                        Catégorie : {getCategoryBadge()}
                      </div>
                    </div>

                    <div className="space-y-1 p-3 rounded-lg bg-neutral-50 border border-neutral-200/60">
                      <span className="text-[10px] uppercase font-bold text-neutral-500">Dojo & Cotisation</span>
                      <div className="font-bold text-neutral-900">
                        {activeDojoObj.name}
                      </div>
                      <div className="text-neutral-600">{activeDojoObj.address}</div>
                      <div className="text-emerald-700 font-semibold mt-1">
                        Cotisation : 2 000 DA / mois
                      </div>
                    </div>

                    <div className="space-y-1 p-3 rounded-lg bg-neutral-50 border border-neutral-200/60">
                      <span className="text-[10px] uppercase font-bold text-neutral-500">Parent / Tuteur Légal</span>
                      <div className="font-bold text-neutral-900">{parentFullName}</div>
                      <div className="text-neutral-600">Profession : {parentProfession}</div>
                      <div className="text-neutral-600">Tél : {parentPhone}</div>
                    </div>

                    <div className="space-y-1 p-3 rounded-lg bg-neutral-50 border border-neutral-200/60">
                      <span className="text-[10px] uppercase font-bold text-neutral-500">Pièces à déposer au dojo</span>
                      <ul className="text-neutral-700 space-y-0.5 list-disc list-inside">
                        <li>Extrait de naissance</li>
                        <li>02 photos d'identité récentes</li>
                        <li>Certificat médical d'aptitude</li>
                        <li>Autorisation parentale signée ci-dessous</li>
                      </ul>
                    </div>
                  </div>

                  {/* Parental Authorization Legal Formula */}
                  <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 space-y-2">
                    <div className="font-bold uppercase text-neutral-900 text-[11px]">
                      Formule d'Autorisation Paternelle / Tutorale :
                    </div>
                    <p className="italic leading-relaxed">
                      « Je soussigné(e) <strong>{parentFullName}</strong>, exerçant la profession de <strong>{parentProfession}</strong>, autorise expressément mon enfant <strong>{studentFirstName} {studentLastName}</strong> à pratiquer le Karaté-Do au sein de la section officielle du Club Hamra Annaba au dojo {activeDojoObj.name}. »
                    </p>
                    <div className="flex justify-between items-end pt-4 text-[11px] text-neutral-500">
                      <span>Fait à Annaba, le {new Date().toLocaleDateString('fr-FR')}</span>
                      <span className="border-b border-dotted border-neutral-400 pb-1">Signature du parent précédée de la mention « Lu et approuvé »</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Confirmer sur WhatsApp avec le Club</span>
                  </a>

                  <button
                    onClick={handlePrintReceipt}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-sm flex items-center justify-center gap-2 border border-neutral-300 transition-colors"
                  >
                    <Printer className="w-4 h-4 text-neutral-600" />
                    <span>Imprimer le Récépissé</span>
                  </button>

                  <button
                    onClick={handleCopyDossier}
                    className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-neutral-700 font-semibold text-xs flex items-center justify-center gap-1.5 border border-neutral-300 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedDossier ? 'Copié !' : 'Copier N° Dossier'}</span>
                  </button>
                </div>

                {/* Reset */}
                <div className="text-center pt-2 border-t border-neutral-100">
                  <button
                    onClick={resetForm}
                    className="text-xs text-[#DC2626] hover:text-[#B91C1C] font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Inscrire un autre enfant</span>
                  </button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    );
  }
);
