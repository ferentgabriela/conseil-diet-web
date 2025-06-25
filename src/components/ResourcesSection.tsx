
import React from 'react';
import { FileText, Youtube, ExternalLink } from 'lucide-react';

const ResourcesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Informations Utiles
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-5 w-5 text-green-600" />
              <h4 className="font-semibold text-gray-900">Documentation CNS</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Informations officielles sur les remboursements diététiques
            </p>
            <a
              href="https://cns.public.lu/fr/assure/remboursements/prestations-remboursees/prestations-paramedicales/dieteticiens.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm"
            >
              Consulter <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Youtube className="h-5 w-5 text-red-600" />
              <h4 className="font-semibold text-gray-900">Guide Vidéo</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Comprendre les consultations diététiques au Luxembourg
            </p>
            <a
              href="https://youtu.be/MM7UIP9_XZ4?si=s_1pNpJgK5JnzyMS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-medium text-sm"
            >
              Regarder <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
