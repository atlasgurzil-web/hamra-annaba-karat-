export interface DojoLocation {
  id: string;
  name: string;
  quarter: string;
  address: string;
  description: string;
  schedule: {
    baby: string;
    kids: string;
    teensAdults: string;
  };
  features: string[];
  spotsRemaining: number;
}

export interface AgeCategory {
  id: string;
  title: string;
  ageRange: string;
  badge: string;
  subtitle: string;
  description: string;
  benefits: string[];
  scheduleWeekly: string;
  image: string;
}

export interface BeltLevel {
  name: string;
  color: string;
  hex: string;
  kyu: string;
  meaning: string;
  katas: string;
}

export const HAMRA_DOJOS: DojoLocation[] = [
  {
    id: 'chabou',
    name: 'Complexe Colonel Chabou',
    quarter: 'Centre-Ville',
    address: 'Avenue de l’ALN, Complexe Sportif Abdelkader Chabou, Annaba',
    description: 'Le dojo central et historique du club Hamra Annaba. Équipé d’une surface de tatamis officielle WKF et d’un encadrement de haut niveau.',
    schedule: {
      baby: 'Samedi & Mardi : 14h00 - 15h00',
      kids: 'Lundi, Mercredi & Samedi : 16h00 - 17h30',
      teensAdults: 'Lundi, Mercredi & Vendredi : 18h30 - 20h30',
    },
    features: ['Tatamis homologués WKF', 'Espace d’attente vitré pour les parents', 'Vestiaires rénovés & douches', 'Section Élite Compétition'],
    spotsRemaining: 14,
  },
  {
    id: 'pont-blanc',
    name: 'Salle Omnisports Pont Blanc',
    quarter: 'Pont Blanc / Annaba Centre',
    address: 'Boulevard du 1er Novembre, Quartier Pont Blanc, Annaba',
    description: 'Une salle très lumineuse et moderne, particulièrement appréciée pour la section Baby Karaté et l’école d’initiation des jeunes.',
    schedule: {
      baby: 'Dimanche & Mercredi : 14h00 - 15h00',
      kids: 'Mardi, Jeudi & Samedi : 15h30 - 17h00',
      teensAdults: 'Mardi & Jeudi : 18h00 - 20h00, Samedi : 17h00 - 19h00',
    },
    features: ['Idéal pour les enfants 4-10 ans', 'Matériel pédagogique spécifique', 'Accès facile & parking parents', 'Pédagogie bienveillante'],
    spotsRemaining: 9,
  },
  {
    id: 'el-bouni',
    name: 'Dojo Omnisports El Bouni',
    quarter: 'El Bouni',
    address: 'Cité Omnisports de Proximité, Route Principale, El Bouni, Annaba',
    description: 'Grand dojo de proximité pour les familles d’El Bouni et des quartiers environnants. Excellente ambiance martiale et forte cohésion d’équipe.',
    schedule: {
      baby: 'Lundi & Jeudi : 15h00 - 16h00',
      kids: 'Mardi, Vendredi & Samedi : 16h00 - 17h30',
      teensAdults: 'Mardi & Vendredi : 18h00 - 20h00',
    },
    features: ['Grande surface de tatamis (150 m²)', 'Préparation physique générale', 'Section Kata & Kumité', 'Tarifs familles nombreuses'],
    spotsRemaining: 18,
  },
  {
    id: 'plaine-ouest',
    name: 'Salle Martiale Plaine Ouest',
    quarter: 'Plaine Ouest / Sidi Achour',
    address: 'Complexe Sportif de Proximité, Quartier Plaine Ouest, Annaba',
    description: 'Dojo flambant neuf doté d’équipements d’entraînement de frappe, de miroirs d’alignement pour les katas et d’une climatisation réversible.',
    schedule: {
      baby: 'Samedi & Mardi : 10h00 - 11h00',
      kids: 'Lundi, Mercredi & Samedi : 17h00 - 18h30',
      teensAdults: 'Lundi, Mercredi & Vendredi : 19h00 - 21h00',
    },
    features: ['Dojo climatisé & aéré', 'Miroirs panoramiques pour Katas', 'Sacs et paos de frappe', 'Cours débutants & avancés'],
    spotsRemaining: 11,
  },
];

export const AGE_CATEGORIES: AgeCategory[] = [
  {
    id: 'baby-karate',
    title: 'Baby Karaté & Éveil Martial',
    ageRange: '4 à 6 ans',
    badge: 'Éveil & Motricité',
    subtitle: 'Canaliser l’énergie, forger la coordination et apprendre le respect en s’amusant.',
    description: 'Conçu sur mesure par nos éducateurs sportifs certifiés pour développer la psychomotricité, l’équilibre, le respect du dojo et la concentration dès le plus jeune âge.',
    benefits: [
      'Amélioration de la motricité globale et de la souplesse',
      'Apprentissage du salut (Rei) et de l’écoute active',
      'Parcours de motricité et jeux d’opposition sans danger',
      'Confiance en soi et canalisation du tempérament'
    ],
    scheduleWeekly: '2 séances / semaine (45 à 60 min)',
    image: '/karate-training-1.jpg',
  },
  {
    id: 'enfants',
    title: 'École de Karaté des Jeunes',
    ageRange: '7 à 12 ans',
    badge: 'Discipline & Technique',
    subtitle: 'L’école de la vie : maîtrise de soi, katas Shotokan traditionnels et passages de ceintures.',
    description: 'Les jeunes apprennent la rigueur du Karaté-Do Shotokan. Kihon (fondamentaux), Katas Heian officiels et initiation au combat contrôlé avec protections.',
    benefits: [
      'Discipline exemplaire et respect de l’adversaire',
      'Progression officielle par passage de ceintures (Blanche à Marron)',
      'Développement de la force, de la vitesse et de la précision',
      'Équilibre mental face aux défis scolaires et quotidiens'
    ],
    scheduleWeekly: '3 séances / semaine (1h15 à 1h30)',
    image: '/karate-dojo-kids.jpg',
  },
  {
    id: 'adolescents',
    title: 'Cadets & Juniors Compétition',
    ageRange: '13 à 17 ans',
    badge: 'Performance & Dépassement',
    subtitle: 'Préparation athlétique, tactique de combat (Kumité) et esprit d’équipe Hamra.',
    description: 'Pour les adolescents souhaitant perfectionner leur art martial ou s’engager vers les compétitions régionales et nationales sous le maillot rouge et blanc d’Annaba.',
    benefits: [
      'Préparation aux championnats de wilaya et nationaux FAK',
      'Kumité avec règles d’arbitrage officiel WKF (sécurité totale)',
      'Conditionnement physique de haut niveau et endurance',
      'Esprit d’appartenance et fraternité de club'
    ],
    scheduleWeekly: '3 à 4 séances / semaine',
    image: '/karate-kumite-kids.jpg',
  },
  {
    id: 'adultes',
    title: 'Adultes, Seniors & Self-Défense',
    ageRange: '18 ans et plus',
    badge: 'Santé & Maîtrise',
    subtitle: 'Pratique martiale complète, entretien physique, bien-être et défense personnelle.',
    description: 'Que vous soyez débutant complet ou ancien pratiquant reprenant le kimono, découvrez un entraînement adapté à votre rythme pour évacuer le stress et renforcer votre corps.',
    benefits: [
      'Renforcement musculaire profond, cardio et souplesse',
      'Techniques concrètes et efficaces de Self-Défense',
      'Préparation aux grades Dan (Ceinture Noire)',
      'Ambiance conviviale et respectueuse entre adultes'
    ],
    scheduleWeekly: '3 séances en soirée / semaine',
    image: '/karate-kata-action.jpg',
  },
];

export const BELT_LEVELS: BeltLevel[] = [
  {
    name: 'Ceinture Blanche',
    color: 'Blanche',
    hex: '#F8FAFC',
    kyu: '9e Kyu',
    meaning: 'La pureté, la page blanche et la volonté d’apprendre.',
    katas: 'Taikyoku Shodan, bases du salut et positions (Zenkutsu-Dachi).',
  },
  {
    name: 'Ceinture Jaune',
    color: 'Jaune',
    hex: '#EAB308',
    kyu: '8e Kyu',
    meaning: 'Le premier rayon de soleil qui éclaire l’esprit du jeune pratiquant.',
    katas: 'Heian Shodan, blocages fondamentaux (Age-Uke, Gedan-Barai).',
  },
  {
    name: 'Ceinture Orange',
    color: 'Orange',
    hex: '#F97316',
    kyu: '7e Kyu',
    meaning: 'L’énergie montante, la stabilité des appuis et la première accélération.',
    katas: 'Heian Nidan, coups de pied (Mae-Geri, Yoko-Geri).',
  },
  {
    name: 'Ceinture Verte',
    color: 'Verte',
    hex: '#22C55E',
    kyu: '6e Kyu',
    meaning: 'La graine qui germe, la respiration synchronisée et l’enracinement.',
    katas: 'Heian Sandan, techniques de coudes et esquives dynamiques.',
  },
  {
    name: 'Ceinture Bleue',
    color: 'Bleue',
    hex: '#3B82F6',
    kyu: '5e & 4e Kyu',
    meaning: 'L’eau fluide et le ciel infini. Vitesse, souplesse et anticipation.',
    katas: 'Heian Yondan & Heian Godan, sauts et enchaînements rapides.',
  },
  {
    name: 'Ceinture Marron',
    color: 'Marron',
    hex: '#854D0E',
    kyu: '3e à 1er Kyu',
    meaning: 'La terre solide et la maturité martiale avant la ceinture noire.',
    katas: 'Tekki Shodan, Bassai Dai, maîtrise du Kiai et précision du Kumité.',
  },
  {
    name: 'Ceinture Noire',
    color: 'Noire',
    hex: '#111827',
    kyu: '1er Dan et plus',
    meaning: 'Le véritable commencement : humilité, maîtrise parfaite de soi et dévouement au club.',
    katas: 'Kanku Dai, Jion, Empi, transmission du savoir aux plus jeunes.',
  },
];

export const REQUIRED_DOCUMENTS = [
  {
    icon: 'FileText',
    title: 'Extrait de Naissance',
    description: 'Extrait de naissance de l’adhérent (pour les mineurs et adultes) attestant de l’identité.',
    badge: 'Obligatoire',
  },
  {
    icon: 'Camera',
    title: 'Deux (02) Photos d’Identité',
    description: 'Photos récentes en couleur pour la licence sportive FAK et la carte du club Hamra.',
    badge: 'Obligatoire',
  },
  {
    icon: 'Activity',
    title: 'Certificat Médical d’Aptitude',
    description: 'Délivré par un médecin attestant la non-contre-indication à la pratique du Karaté-Do.',
    badge: 'Obligatoire',
  },
  {
    icon: 'ShieldCheck',
    title: 'Autorisation Parentale Signée',
    description: 'Autorisation du père ou du tuteur légal pour les adhérents mineurs (modèle pré-rempli fourni).',
    badge: 'Pour les mineurs',
  },
];

export const BUSHIDO_VALUES = [
  {
    kanji: '礼',
    arabic: 'الإحترام',
    title: 'Le Respect (Rei)',
    description: 'Respect du sensei, des partenaires, de l’adversaire et du dojo. La politesse est la première technique.',
  },
  {
    kanji: '勇',
    arabic: 'الشجاعة',
    title: 'Le Courage (Yū)',
    description: 'Faire face à la difficulté avec détermination, surmonter ses appréhensions sans jamais reculer.',
  },
  {
    kanji: '誠',
    arabic: 'الإنضباط',
    title: 'La Discipline (Makoto)',
    description: 'La régularité aux entraînements, la ponctualité et la constance qui forgent les vrais champions.',
  },
  {
    kanji: '克',
    arabic: 'التحكم في النفس',
    title: 'Le Contrôle de Soi (Jisei)',
    description: 'Savoir maîtriser sa force et ses émotions, canaliser l’énergie vers un esprit positif et constructif.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'À partir de quel âge un enfant peut-il débuter le karaté chez Hamra Annaba ?',
    answer: 'Nous accueillons les enfants dès l’âge de 4 ans dans notre section Baby Karaté. Les cours sont spécialement adaptés avec une pédagogie ludique axée sur la motricité, la discipline et la coordination, sans aucun coup porté.',
  },
  {
    question: 'Quel est le tarif mensuel et que comprend-il ?',
    answer: 'La cotisation est fixée à 2 000 DA par mois. Elle comprend l’accès aux entraînements hebdomadaires avec nos éducateurs diplômés, la licence sportive officielle, l’assurance et la préparation aux passages de ceintures.',
  },
  {
    question: 'Puis-je changer de dojo parmi les 4 salles si mes horaires changent ?',
    answer: 'Absolument ! Le club Hamra Annaba dispose de 4 salles à Annaba (Chabou, Pont Blanc, El Bouni et Plaine Ouest). Vous pouvez inscrire votre enfant dans la salle la plus proche de chez vous ou de son école, avec possibilité d’ajustement en accord avec la direction technique.',
  },
  {
    question: 'Faut-il acheter un kimono (karatégi) avant la première séance ?',
    answer: 'Pour la séance d’essai ou les tout premiers cours, un survêtement de sport confortable suffit amplement. Une fois l’inscription confirmée, le port du kimono blanc officiel avec l’écusson Hamra Annaba est requis pour les passages de grades.',
  },
  {
    question: 'Le karaté présente-t-il des risques de blessures pour les jeunes enfants ?',
    answer: 'Non, la sécurité de nos jeunes adhérents est notre priorité absolue. Pour les enfants, le travail s’effectue sans contact violent. Pour les combats (Kumité chez les ados), le port des protections homologuées WKF (gants en mousse, protège-dents, protège-pieds et plastron) est strictement obligatoire.',
  },
  {
    question: 'Comment se déroule l’inscription définitive avec le dossier papier ?',
    answer: 'Remplissez d’abord le formulaire en ligne sur ce site pour réserver votre place. Vous recevrez instantanément votre numéro de dossier. Il vous suffira ensuite de déposer au dojo l’extrait de naissance, les 2 photos, le certificat médical et l’autorisation parentale signée.',
  },
];

export const CLUB_CONTACT = {
  director: 'Mr Ait Amar',
  directorName: 'Mr Ait Amar',
  directorTitle: 'Responsable de la Section Karaté-Do',
  phone: '0670 72 32 11',
  phoneDisplay: '0670 72 32 11',
  phoneRaw: '0670723211',
  phoneHref: 'tel:0670723211',
  phoneInternational: '+213670723211',
  whatsappRaw: '213670723211',
  email: 'contact@hamra-annaba.dz',
  city: 'Annaba, Algérie',
};

