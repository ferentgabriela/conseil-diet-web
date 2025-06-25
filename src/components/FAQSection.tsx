
import React from 'react';
import { MessageCircle, ChevronRight, Heart, Scale, Baby, Clock, Euro, MapPin, Stethoscope, Calendar } from 'lucide-react';

interface FAQSectionProps {
  onOpenChat?: () => void;
}

const FAQSection = ({ onOpenChat }: FAQSectionProps) => {
  const faqBlogPosts = [
    {
      id: 1,
      icon: <Euro className="h-6 w-6" />,
      category: "Remboursement CNS",
      question: "Est-ce que les consultations sont remboursées par la CNS ?",
      summary: "Oui, la CNS rembourse 80% des consultations diététiques sur prescription médicale pour certaines pathologies spécifiques.",
      content: "Le remboursement CNS est une réalité pour de nombreux patients au Luxembourg. La Caisse Nationale de Santé couvre les consultations diététiques dans le cadre de pathologies reconnues, ce qui rend l'accompagnement nutritionnel accessible au plus grand nombre.",
      keyPoints: [
        "Remboursement à 80% du tarif conventionnel avec prescription médicale",
        "Pathologies couvertes : diabète, obésité (IMC ≥30), troubles cardiovasculaires",
        "Hypertension, dyslipidémies et syndrome métabolique également couverts",
        "Prescription obligatoire de votre médecin traitant ou spécialiste",
        "Durée généralement de 6-12 mois selon la pathologie",
        "Possibilité de renouvellement selon l'évolution de votre état"
      ],
      expertTip: "💡 Mon conseil d'experte : Dans 90% des cas, les conditions de remboursement sont remplies. N'hésitez pas à demander à votre médecin s'il peut vous prescrire des consultations diététiques !"
    },
    {
      id: 2,
      icon: <Stethoscope className="h-6 w-6" />,
      category: "Prescription Médicale",
      question: "Faut-il une prescription médicale pour consulter ?",
      summary: "Une prescription médicale est nécessaire uniquement pour le remboursement CNS. Vous pouvez consulter librement sans prescription.",
      content: "Vous avez le choix : consulter directement sans prescription pour un suivi privé, ou obtenir une prescription de votre médecin pour bénéficier du remboursement CNS. Les deux approches sont valides selon vos besoins et votre situation financière.",
      keyPoints: [
        "Consultation libre possible sans prescription (tarif privé)",
        "Prescription nécessaire UNIQUEMENT pour le remboursement CNS",
        "Votre médecin traitant peut facilement établir la prescription",
        "Spécialistes (endocrinologue, cardiologue) peuvent aussi prescrire",
        "Pas de délai d'attente si vous consultez directement",
        "Même qualité de service avec ou sans prescription"
      ],
      expertTip: "💡 Mon conseil d'experte : Si vous avez une pathologie (surpoids, diabète, hypertension), demandez d'abord la prescription. Sinon, vous pouvez commencer directement et demander la prescription plus tard."
    },
    {
      id: 3,
      icon: <Heart className="h-6 w-6" />,
      category: "Expertise Professionnelle",
      question: "Quelle est la différence entre une diététicienne et une nutritionniste ?",
      summary: "La diététicienne a une formation spécialisée reconnue et un titre protégé, contrairement au terme 'nutritionniste' qui peut être utilisé sans formation spécifique.",
      content: "Au Luxembourg, le titre de diététicienne est protégé et nécessite une formation universitaire spécialisée. C'est un gage de qualité et de compétence que n'offrent pas les 'coachs en nutrition' ou autres professionnels non certifiés.",
      keyPoints: [
        "Diététicienne : formation universitaire de 3-4 ans minimum",
        "Titre protégé par la loi, inscription obligatoire au Ministère de la Santé",
        "Formation en physiologie, pathologie, biochimie nutritionnelle",
        "Compétence en nutrition clinique et thérapeutique",
        "Nutritionniste : terme générique, pas de formation obligatoire",
        "Seule la diététicienne peut pratiquer la nutrition médicale"
      ],
      expertTip: "💡 Mon conseil d'experte : Vérifiez toujours les qualifications de votre professionnel. Ma formation universitaire et mon inscription officielle vous garantissent une prise en charge sérieuse et sécurisée."
    },
    {
      id: 4,
      icon: <Calendar className="h-6 w-6" />,
      category: "Première Consultation",
      question: "À quoi dois-je m'attendre lors de la première consultation ?",
      summary: "La première consultation dure 60 minutes et comprend un bilan complet de votre situation, vos habitudes alimentaires et l'établissement d'un plan personnalisé.",
      content: "Cette première rencontre est cruciale pour bien vous connaître et établir un plan adapté à votre situation unique. C'est un moment d'échange bienveillant, sans jugement, où nous prenons le temps nécessaire pour comprendre vos besoins.",
      keyPoints: [
        "Durée : 60 minutes complètes, sans précipitation",
        "Anamnèse complète : santé, habitudes, histoire pondérale",
        "Analyse de vos habitudes alimentaires actuelles",
        "Mesures anthropométriques (poids, composition corporelle)",
        "Définition d'objectifs réalistes et personnalisés",
        "Premiers conseils pratiques et plan d'action immédiat"
      ],
      expertTip: "💡 Mon conseil d'experte : Apportez vos dernières analyses sanguines si vous en avez, et n'hésitez pas à noter vos questions à l'avance. Plus je vous connais, mieux je peux vous aider !"
    },
    {
      id: 5,
      icon: <Scale className="h-6 w-6" />,
      category: "Plans Personnalisés",
      question: "Proposez-vous des plans alimentaires personnalisés ?",
      summary: "Chaque patient reçoit un plan alimentaire entièrement personnalisé, adapté à ses goûts, contraintes, pathologies et objectifs spécifiques.",
      content: "Fini les régimes génériques ! Chaque plan que je crée est unique, comme vous. Je prends en compte vos préférences alimentaires, votre mode de vie, vos contraintes professionnelles et familiales pour créer un programme que vous pourrez suivre à long terme.",
      keyPoints: [
        "Plan 100% personnalisé selon vos goûts et aversions",
        "Adaptation à vos contraintes professionnelles et familiales",
        "Prise en compte des pathologies et intolérances",
        "Menus variés et recettes pratiques incluses",
        "Ajustements réguliers selon vos progrès",
        "Liste de courses et conseils pratiques fournis"
      ],
      expertTip: "💡 Mon conseil d'experte : Un bon plan alimentaire doit s'adapter à votre vie, pas l'inverse ! Je crée des programmes que vous pouvez suivre même avec une vie bien remplie."
    },
    {
      id: 6,
      icon: <Baby className="h-6 w-6" />,
      category: "Approche Bienveillante",
      question: "Est-ce que je vais devoir me priver ou suivre un régime strict ?",
      summary: "Absolument pas ! Mon approche privilégie l'équilibre et le plaisir alimentaire. Fini les privations et la frustration.",
      content: "Ma philosophie est claire : un changement durable ne peut pas être basé sur la privation et la frustration. Je vous accompagne vers une alimentation équilibrée et plaisante, où tous les aliments ont leur place avec modération.",
      keyPoints: [
        "Aucune interdiction alimentaire drastique",
        "Apprentissage de l'équilibre et de la modération",
        "Conservation du plaisir de manger et de partager",
        "Techniques pour gérer les envies et les écarts",
        "Rééducation progressive sans choc psychologique",
        "Maintien de la vie sociale et des sorties"
      ],
      expertTip: "💡 Mon conseil d'experte : Les régimes restrictifs échouent dans 95% des cas. Mon approche bienveillante vous permet de perdre du poids durablement tout en gardant une relation saine avec la nourriture."
    },
    {
      id: 7,
      icon: <Clock className="h-6 w-6" />,
      category: "Résultats & Timing",
      question: "Quels résultats puis-je espérer et en combien de temps ?",
      summary: "Les premiers résultats apparaissent dans les 2-4 semaines. Une transformation durable s'observe généralement sur 3-6 mois selon vos objectifs.",
      content: "Je privilégie des résultats durables plutôt que spectaculaires. Chaque parcours est unique, mais voici ce que vous pouvez raisonnablement attendre selon votre situation de départ et votre engagement dans le processus.",
      keyPoints: [
        "1-2 semaines : amélioration de l'énergie et du sommeil",
        "3-4 semaines : perte de poids visible (1-2kg), moins de fringales",
        "6-8 semaines : amélioration des analyses (cholestérol, glycémie)",
        "3 mois : perte de 6-12kg, nouvelles habitudes ancrées",
        "6 mois : transformation complète et stabilisation",
        "Résultats durables si respect du suivi personnalisé"
      ],
      expertTip: "💡 Mon conseil d'experte : La régularité des consultations est clé. Mes patients qui respectent le rythme de suivi atteignent leurs objectifs dans 95% des cas !"
    },
    {
      id: 8,
      icon: <Stethoscope className="h-6 w-6" />,
      category: "Nutrition Thérapeutique",
      question: "Travaillez-vous avec des personnes ayant du diabète, de l'hypertension ou d'autres pathologies ?",
      summary: "Oui, je suis spécialisée en nutrition thérapeutique et j'accompagne régulièrement des patients avec diverses pathologies chroniques.",
      content: "Ma formation me permet de prendre en charge les pathologies nutritionnelles complexes. Je travaille en collaboration avec vos médecins pour optimiser votre état de santé par l'alimentation, souvent avec des résultats remarquables sur vos analyses.",
      keyPoints: [
        "Diabète type 1 et 2 : gestion glycémique optimisée",
        "Hypertension : approche nutritionnelle pour réduire la tension",
        "Dyslipidémies : stratégies pour améliorer le bilan lipidique",
        "Troubles digestifs : adaptation alimentaire personnalisée",
        "Pathologies rénales et hépatiques : expertise spécialisée",
        "Collaboration avec votre équipe médicale"
      ],
      expertTip: "💡 Mon conseil d'experte : L'alimentation peut considérablement améliorer vos paramètres de santé. Certains de mes patients ont pu réduire leurs médicaments grâce aux changements nutritionnels !"
    },
    {
      id: 9,
      icon: <Calendar className="h-6 w-6" />,
      category: "Praticité & Lifestyle",
      question: "Vos conseils prennent-ils en compte mes habitudes et mon emploi du temps ?",
      summary: "Absolument ! Je m'adapte entièrement à votre rythme de vie, vos contraintes professionnelles et familiales pour créer un plan réalisable au quotidien.",
      content: "Je sais que vous avez une vraie vie, avec des contraintes professionnelles, familiales et sociales. Mes conseils sont toujours adaptés à votre réalité quotidienne, sinon ils ne serviront à rien. L'objectif est que vous puissiez appliquer mes recommandations facilement.",
      keyPoints: [
        "Adaptation aux horaires de travail atypiques",
        "Solutions pour les repas d'affaires et déplacements",
        "Conseils pratiques pour les familles avec enfants",
        "Meal prep et organisation pour gagner du temps",
        "Alternatives pour les contraintes budgétaires",
        "Maintien de votre vie sociale et sorties"
      ],
      expertTip: "💡 Mon conseil d'experte : Un bon plan nutritionnel doit s'intégrer naturellement dans votre quotidien. Je trouve toujours des solutions pratiques, même pour les emplois du temps les plus chargés !"
    },
    {
      id: 10,
      icon: <MapPin className="h-6 w-6" />,
      category: "Cabinets & Rendez-vous",
      question: "Dans quelles villes se trouvent vos cabinets et comment prendre rendez-vous ?",
      summary: "Je consulte dans 3 cabinets au Luxembourg : Luxembourg-Ville, Ettelbruck et Insenborn. Prise de rendez-vous simple et flexible selon votre localisation.",
      content: "Mes trois cabinets offrent exactement la même qualité de service et sont équipés du même matériel professionnel. Choisissez simplement celui qui vous convient le mieux géographiquement ou selon vos disponibilités.",
      keyPoints: [
        "Luxembourg-Ville : centre-ville, parking disponible",
        "Ettelbruck : idéal pour le Nord du pays, facilement accessible",
        "Insenborn : parfait pour l'Ouest, cadre intimiste",
        "Même équipement et approche dans tous les cabinets",
        "Possibilité de changer de cabinet selon vos besoins",
        "Prise de rendez-vous en ligne ou par téléphone"
      ],
      expertTip: "💡 Mon conseil d'experte : Choisissez le cabinet le plus pratique pour vous - proximité domicile ou travail. La régularité des rendez-vous est plus importante que la localisation !"
    }
  ];

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-green-25">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vos Questions, Mes Réponses d'Experte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avec plus de 10 ans d'expérience, je réponds en détail aux questions 
              les plus fréquentes de mes patients au Luxembourg
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {faqBlogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                      {post.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">Par Gabriela Ferent</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {post.question}
                      </h3>
                      <p className="text-lg text-gray-600 font-medium mb-4">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {post.content}
                    </p>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Points clés à retenir :</h4>
                      <ul className="space-y-3">
                        {post.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <ChevronRight className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="text-blue-800 font-medium">
                        {post.expertTip}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Article rédigé par Gabriela Ferent</span><br />
                      Diététicienne nutritionniste certifiée Luxembourg
                    </div>
                    <button
                      onClick={scrollToCabinets}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Consultation personnalisée
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Expert Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Mon Engagement d'Experte
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-green-50 rounded-xl p-6">
                <p className="text-3xl font-bold text-green-600 mb-2">1000+</p>
                <p className="text-gray-700 font-medium">Patients accompagnés</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-3xl font-bold text-blue-600 mb-2">10+</p>
                <p className="text-gray-700 font-medium">Années d'expérience</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <p className="text-3xl font-bold text-purple-600 mb-2">95%</p>
                <p className="text-gray-700 font-medium">Satisfaction patients</p>
              </div>
            </div>
          </div>

          {/* Expert CTA */}
          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">
              Une Question Spécifique ?
            </h3>
            <p className="text-xl text-green-100 mb-6">
              N'hésitez pas à me poser directement vos questions. Je suis là pour vous accompagner.
            </p>
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              Poser ma question à Gabriela
            </button>
            <p className="text-sm text-green-200 mt-3">
              💬 Réponse rapide et personnalisée
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
