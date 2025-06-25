
import React from 'react';
import { ExternalLink, CheckCircle, Phone } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Types de Consultations
          </h2>
          <p className="text-xl text-gray-600">
            Choisissez le type de consultation adapté à vos besoins
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* CNS Consultations */}
          <div className="bg-white border rounded-lg p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Consultations CNS</h3>
                <p className="text-green-600 font-medium">Remboursées à 80%</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 mb-4">Sur prescription médicale pour :</p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Diabète (type 1 et 2)</li>
                <li>• Obésité (IMC ≥ 30)</li>
                <li>• Troubles du comportement alimentaire</li>
                <li>• Hypertension artérielle</li>
                <li>• Dyslipidémies</li>
                <li>• Syndrome métabolique</li>
              </ul>
            </div>

            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
            >
              Réserver <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Private Consultations */}
          <div className="bg-white border rounded-lg p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Consultations Privées</h3>
                <p className="text-blue-600 font-medium">Accès direct</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 mb-4">Disponible pour :</p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Perte de poids</li>
                <li>• Rééquilibrage alimentaire</li>
                <li>• Nutrition sportive</li>
                <li>• Allergies et intolérances</li>
                <li>• Accompagnement grossesse</li>
                <li>• Bien-être nutritionnel</li>
              </ul>
            </div>

            <a
              href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Réserver <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
