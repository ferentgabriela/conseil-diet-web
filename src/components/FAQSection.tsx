
import React from 'react';
import { MessageCircle, CheckCircle, Clock, Euro, MapPin, Calendar } from 'lucide-react';

interface FAQSectionProps {
  onOpenChat?: () => void;
}

const FAQSection = ({ onOpenChat }: FAQSectionProps) => {
  const expertStories = [
    {
      icon: <Euro className="h-8 w-8 text-green-600" />,
      title: "Remboursement CNS",
      question: "Mes consultations sont-elles remboursées ?",
      story: "Bonne nouvelle ! La CNS rembourse 80% de vos consultations sur prescription médicale pour le diabète, l'obésité (IMC ≥ 30), les troubles alimentaires, l'hypertension et les dyslipidémies.",
      highlight: "80% remboursé par la CNS",
      action: "Demandez une prescription à votre médecin traitant"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Durée & Fréquence",
      question: "Combien de temps durent les consultations ?",
      story: "Première consultation : 60 minutes pour un bilan complet de votre situation. Consultations de suivi : 30-45 minutes selon vos besoins. Fréquence adaptée à vos objectifs : toutes les 2-4 semaines au début, puis espacées progressivement.",
      highlight: "60 min • Suivi personnalisé",
      action: "Planning flexible selon vos disponibilités"
    },
    {
      icon: <MapPin className="h-8 w-8 text-purple-600" />,
      title: "Consultations",
      question: "Où se déroulent les consultations ?",
      story: "3 cabinets modernes au Luxembourg : Luxembourg-Ville, Ettelbruck et Insenborn. Toutes les consultations sont en présentiel pour un accompagnement optimal et personnalisé.",
      highlight: "3 cabinets • Présentiel uniquement",
      action: "Choisissez le cabinet le plus proche de chez vous"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Préparation",
      question: "Que faut-il apporter à la première consultation ?",
      story: "Pour optimiser notre première rencontre : votre prescription médicale (si consultation CNS), vos dernières analyses de sang, la liste de vos médicaments actuels et un carnet alimentaire si vous en tenez un.",
      highlight: "Prescription • Analyses • Médicaments",
      action: "Préparation simple pour un suivi efficace"
    },
    {
      icon: <Calendar className="h-8 w-8 text-emerald-600" />,
      title: "Tarifs Privés",
      question: "Quels sont les tarifs des consultations privées ?",
      story: "Les tarifs des consultations privées sont adaptés à la qualité du service proposé. Je vous communiquerai tous les détails lors de votre prise de rendez-vous pour une transparence totale.",
      highlight: "Tarifs transparents",
      action: "Information détaillée à la prise de RDV"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-green-25">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vos Questions, Mes Réponses d'Experte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avec plus de 10 ans d'expérience, je vous donne toutes les informations 
              dont vous avez besoin pour débuter votre transformation en toute sérénité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {expertStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                {/* Icon & Category */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-green-50 transition-colors">
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{story.title}</h3>
                    <p className="text-sm text-gray-500">Expert insight</p>
                  </div>
                </div>

                {/* Question */}
                <h4 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                  {story.question}
                </h4>

                {/* Expert Story */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.story}
                </p>

                {/* Highlight */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-4">
                  <p className="text-center font-bold text-green-700">
                    {story.highlight}
                  </p>
                </div>

                {/* Action */}
                <p className="text-sm text-gray-600 text-center font-medium">
                  💡 {story.action}
                </p>
              </div>
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
