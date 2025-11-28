import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface CNSReimbursementBadgeProps {
  variant?: 'compact' | 'full';
  className?: string;
}

const CNSReimbursementBadge = ({ variant = 'full', className = '' }: CNSReimbursementBadgeProps) => {
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 bg-green-50 border border-green-300 text-green-800 px-4 py-2 rounded-full ${className}`}>
        <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
        <span className="text-sm font-semibold">Remboursée par la CNS (88-100%)</span>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-5 ${className}`}>
      <div className="flex items-start gap-3">
        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-green-900 text-lg mb-2">
            Consultations sur ordonnance remboursées par la CNS
          </h3>
          <p className="text-gray-700 text-sm">
            Prise en charge de 88% à 100% pour les pathologies reconnues : diabète, obésité, troubles alimentaires, hypertension, dyslipidémies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CNSReimbursementBadge;
