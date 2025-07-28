
import React from 'react';
import { CheckCircle, Shield, Heart } from 'lucide-react';

interface AISummaryBlockProps {
  variant?: 'default' | 'services' | 'cabinets';
}

const AISummaryBlock = ({ variant = 'default' }: AISummaryBlockProps) => {
  const renderContent = () => {
    switch (variant) {
      case 'services':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Résumé des Services - Gabriela Ferent
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Consultations CNS (Remboursées)
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Remboursement CNS jusqu'à 80% sur prescription</li>
                  <li>• Diabète type 1 et 2, obésité (IMC ≥30)</li>
                  <li>• Troubles alimentaires, hypertension</li>
                  <li>• Cholestérol, syndrome métabolique</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Consultations Privées
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Perte de poids personnalisée</li>
                  <li>• Rééquilibrage alimentaire</li>
                  <li>• Nutrition anti-inflammatoire et grossesse</li>
                  <li>• Allergies alimentaires</li>
                </ul>
              </div>
            </div>
          </>
        );
      case 'cabinets':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cabinets Gabriela Ferent - Informations Pratiques
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800">Luxembourg-Ville</h3>
                <p className="text-sm text-gray-600">Centre-ville • Transport public</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800">Ettelbruck</h3>
                <p className="text-sm text-gray-600">Nord Luxembourg • Parking</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800">Insenborn</h3>
                <p className="text-sm text-gray-600">Cadre calme • Proche Ettelbruck</p>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              En Bref - Diététicienne Luxembourg
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Consultations CNS remboursées jusqu'à 80% sur prescription médicale</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Spécialisée en perte de poids, diabète, nutrition post-grossesse</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">3 cabinets au Luxembourg : Luxembourg-Ville, Ettelbruck, Insenborn</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Diplômée et expérimentée - 1000+ transformations réussies</span>
              </li>
            </ul>
          </>
        );
    }
  };

  return (
    <div className="ai-summary p-6 my-8">
      {renderContent()}
    </div>
  );
};

export default AISummaryBlock;
