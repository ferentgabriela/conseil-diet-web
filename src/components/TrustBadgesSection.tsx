import React from 'react';
import { Shield, Award } from 'lucide-react';

const TrustBadgesSection = () => {
  const badges = [
    {
      name: 'Collège Médical',
      icon: Shield,
      description: 'Membre professionnel agréé',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      name: 'ANDL',
      icon: Award,
      description: 'Association des Diététiciens',
      link: 'https://www.andl.lu/project/ferent-gabriela/',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Certifications & Partenariats
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Diététicienne autorisée et reconnue par les principales institutions de santé au Luxembourg
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {badges.map((badge) => {
            const IconComponent = badge.icon;
            const content = (
              <div className={`${badge.bgColor} ${badge.borderColor} border-2 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 h-full flex flex-col items-center justify-center`}>
                <div className={`w-16 h-16 ${badge.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 border-2 ${badge.borderColor}`}>
                  <IconComponent className={`h-8 w-8 ${badge.color}`} />
                </div>
                <h3 className={`text-lg font-bold ${badge.color} mb-2`}>
                  {badge.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {badge.description}
                </p>
              </div>
            );

            if (badge.link) {
              return (
                <a
                  key={badge.name}
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  title={`Voir la certification ${badge.name}`}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={badge.name}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Code prestataire CNS : <strong className="text-gray-700">361043-09</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;