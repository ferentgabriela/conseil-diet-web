import React from 'react';
import { CheckCircle2, Download, ExternalLink } from 'lucide-react';

interface CNSReimbursementBadgeProps {
  variant?: 'compact' | 'full';
  className?: string;
  showTarifsButton?: boolean;
}

const CNSReimbursementBadge = ({ variant = 'full', className = '', showTarifsButton = true }: CNSReimbursementBadgeProps) => {
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 bg-green-50 border border-green-300 text-green-800 px-4 py-2 rounded-full ${className}`}>
        <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
        <span className="text-sm font-semibold">Remboursée par la CNS (88-100%)</span>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-6 ${className}`}>
      <div className="flex items-start gap-3 mb-4">
        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="font-bold text-green-900 text-lg mb-2">
            Consultations sur ordonnance remboursées par la CNS
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            Consultations avec prise en charge CNS selon la nomenclature officielle sur présentation d'une ordonnance médicale valide.
          </p>
          <div className="flex flex-wrap gap-3">
            {showTarifsButton && <a 
              href="/tarifs-prise-en-charge"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
              title="Consulter le tableau détaillé des tarifs"
            >
              <Download className="h-4 w-4" />
              Voir les tarifs complets
            </a>}
            <a 
              href="https://cns.public.lu/fr/assure/remboursements/prestations-remboursees/prestations-paramedicales/dieteticiens.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              title="En savoir plus sur le site officiel de la CNS"
            >
              <ExternalLink className="h-4 w-4" />
              Site officiel CNS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNSReimbursementBadge;
