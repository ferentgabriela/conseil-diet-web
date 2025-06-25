
import React from 'react';
import { FileText, Youtube, ExternalLink } from 'lucide-react';

const ResourcesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Informations Utiles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ressources officielles pour comprendre vos consultations diététiques au Luxembourg
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-green-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-6 group-hover:bg-green-700 transition-colors">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Documentation CNS</h3>
                  <p className="text-green-700 font-medium">Guide officiel Luxembourg</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Consultez les informations officielles de la CNS sur les remboursements 
                des consultations diététiques au Luxembourg, conditions d'éligibilité et démarches.
              </p>
              
              <a
                href="https://cns.public.lu/fr/assure/remboursements/prestations-remboursees/prestations-paramedicales/dieteticiens.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
              >
                Consulter la Documentation
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            
            <div className="group bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-red-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mr-6 group-hover:bg-red-700 transition-colors">
                  <Youtube className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Guide Vidéo</h3>
                  <p className="text-red-700 font-medium">Tutoriel complet</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Découvrez en vidéo comment fonctionnent les consultations diététiques au Luxembourg, 
                du premier rendez-vous au suivi nutritionnel personnalisé.
              </p>
              
              <a
                href="https://youtu.be/MM7UIP9_XZ4?si=s_1pNpJgK5JnzyMS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
              >
                Regarder le Guide
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Additional helpful info */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg border border-blue-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Besoin d'Aide ?</h4>
              <p className="text-gray-600 text-sm">
                Ces ressources vous aideront à mieux comprendre le processus de consultation 
                et les conditions de remboursement au Luxembourg.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
