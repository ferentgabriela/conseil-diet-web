
import React from 'react';
import { MessageCircle, ChevronRight, Heart, Scale, Baby, Clock, Euro, MapPin } from 'lucide-react';

interface FAQSectionProps {
  onOpenChat?: () => void;
}

const FAQSection = ({ onOpenChat }: FAQSectionProps) => {
  const faqBlogPosts = [
    {
      id: 1,
      icon: <Scale className="h-6 w-6" />,
      category: "Perte de Poids",
      question: "Comment perdre du poids après la grossesse sans nuire à l'allaitement ?",
      summary: "La perte de poids post-grossesse nécessite une approche progressive et bienveillante, surtout pendant l'allaitement.",
      content: "Après l'accouchement, votre corps a besoin de temps pour récupérer. Il est recommandé d'attendre 6-8 semaines avant de commencer un programme de perte de poids. Pendant l'allaitement, vos besoins énergétiques sont augmentés de 300-500 calories par jour.",
      keyPoints: [
        "Reprendre une alimentation équilibrée progressivement",
        "Privilégier les aliments riches en nutriments essentiels",
        "Maintenir une hydratation optimale (2-3L d'eau/jour si allaitement)",
        "Intégrer une activité physique douce et progressive",
        "Dormir suffisamment pour réguler les hormones de la faim",
        "Éviter les régimes restrictifs qui peuvent affecter la qualité du lait"
      ],
      expertTip: "💡 Mon conseil d'experte : La perte de poids idéale pendant l'allaitement est de 0,5-1kg par semaine maximum. Patience et bienveillance sont les clés du succès."
    },
    {
      id: 2,
      icon: <Heart className="h-6 w-6" />,
      category: "Cholestérol",
      question: "Quels aliments éviter absolument pour réduire le cholestérol rapidement ?",
      summary: "Pour réduire efficacement le cholestérol, il faut limiter certains aliments tout en privilégiant ceux qui ont un effet protecteur.",
      content: "Le cholestérol sanguin provient à 80% de notre production interne et 20% de notre alimentation. Cependant, certains aliments peuvent significativement influencer ces taux, surtout chez les personnes sensibles.",
      keyPoints: [
        "Réduire les graisses saturées : charcuterie, fromages gras, beurre",
        "Éviter les graisses trans : pâtisseries industrielles, margarines hydrogénées",
        "Limiter les aliments ultra-transformés riches en sucres ajoutés",
        "Privilégier les fibres solubles : avoine, légumineuses, pommes",
        "Consommer des oméga-3 : poissons gras, noix, graines de lin",
        "Intégrer les stérols végétaux : huiles végétales, fruits à coque"
      ],
      expertTip: "💡 Mon conseil d'experte : Un changement alimentaire bien mené peut réduire le cholestérol de 10-15% en 6-8 semaines. Les résultats sur les analyses sont visibles rapidement !"
    },
    {
      id: 3,
      icon: <Baby className="h-6 w-6" />,
      category: "IMC & Obésité",
      question: "Mon IMC est de 32, pourquoi les régimes ne marchent pas sur moi ?",
      summary: "Un IMC élevé (≥30) indique une obésité qui nécessite une approche globale et personnalisée, pas juste un 'régime'.",
      content: "Avec un IMC de 32, vous êtes en obésité de grade 1. Les régimes restrictifs échouent car ils ne s'attaquent pas aux causes profondes : déséquilibres hormonaux, résistance à l'insuline, inflammation chronique ou facteurs psychologiques.",
      keyPoints: [
        "Évaluer votre composition corporelle complète (masse grasse/muscle)",
        "Identifier les facteurs contributifs : stress chronique, sommeil, hormones",
        "Adopter une alimentation anti-inflammatoire riche en nutriments",
        "Pratiquer une activité physique adaptée à votre condition physique",
        "Gérer le stress et optimiser le sommeil (7-9h/nuit)",
        "Bénéficier d'un suivi professionnel pour un plan personnalisé"
      ],
      expertTip: "💡 Mon conseil d'experte : Avec un IMC ≥30, vous pouvez bénéficier d'un remboursement CNS à 80% avec prescription médicale. C'est un avantage à saisir !"
    },
    {
      id: 4,
      icon: <Clock className="h-6 w-6" />,
      category: "Consultation",
      question: "Combien de temps faut-il pour voir des résultats avec un suivi nutritionnel ?",
      summary: "Les premiers résultats apparaissent généralement dans les 2-4 premières semaines, mais la transformation durable prend 3-6 mois.",
      content: "La rapidité des résultats dépend de votre situation de départ, vos objectifs et votre adhésion au plan nutritionnel. Voici ce à quoi vous attendre selon votre profil :",
      keyPoints: [
        "Première semaine : amélioration de l'énergie et de la digestion",
        "2-4 semaines : perte de poids visible (1-2kg), moins de fringales",
        "6-8 semaines : amélioration des analyses (cholestérol, glycémie)",
        "3 mois : nouvelles habitudes ancrées, perte de 6-10kg",
        "6 mois : transformation complète, stabilisation du poids",
        "Suivi à long terme : maintien des résultats, prévention des reprises"
      ],
      expertTip: "💡 Mon conseil d'experte : La régularité des consultations (toutes les 2-3 semaines au début) est clé pour des résultats durables. 95% de mes patients qui suivent le rythme atteignent leurs objectifs !"
    },
    {
      id: 5,
      icon: <Euro className="h-6 w-6" />,
      category: "Remboursement CNS",
      question: "Ma consultation sera-t-elle vraiment remboursée par la CNS ? Quelles sont les conditions ?",
      summary: "Oui, la CNS rembourse 80% des consultations diététiques sur prescription médicale pour certaines pathologies spécifiques.",
      content: "Le remboursement CNS est une réalité pour de nombreux patients. Voici exactement comment ça fonctionne et si vous y avez droit :",
      keyPoints: [
        "Conditions : prescription médicale obligatoire de votre médecin traitant",
        "Pathologies couvertes : diabète, obésité (IMC ≥30), troubles alimentaires",
        "Aussi couvert : hypertension, dyslipidémies, syndrome métabolique",
        "Taux de remboursement : 80% du tarif conventionnel",
        "Durée : généralement 6-12 mois selon la pathologie",
        "Renouvellement possible selon l'évolution de votre état de santé"
      ],
      expertTip: "💡 Mon conseil d'experte : Demandez à votre médecin traitant s'il peut vous prescrire des consultations diététiques. Dans 90% des cas, les conditions sont remplies !"
    },
    {
      id: 6,
      icon: <MapPin className="h-6 w-6" />,
      category: "Praticité",
      question: "Quel cabinet choisir au Luxembourg ? Y a-t-il des différences ?",
      summary: "Mes 3 cabinets (Luxembourg-Ville, Ettelbruck, Insenborn) offrent exactement la même qualité de service. Choisissez selon votre localisation.",
      content: "Tous mes cabinets sont équipés de matériel professionnel identique et offrent la même approche personnalisée. Le choix dépend uniquement de votre commodité géographique :",
      keyPoints: [
        "Luxembourg-Ville : idéal si vous travaillez en ville, parking disponible",
        "Ettelbruck : parfait pour le Nord du pays, facilement accessible",
        "Insenborn : pratique pour l'Ouest, cadre plus intimiste",
        "Même équipement : balance à impédance, consultations de même durée",
        "Même approche : consultation initiale 60min, suivis 30-45min",
        "Flexibilité : possibilité de changer de cabinet selon vos besoins"
      ],
      expertTip: "💡 Mon conseil d'experte : Choisissez le cabinet le plus proche de chez vous ou de votre travail. La régularité des rendez-vous est plus importante que la localisation !"
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
