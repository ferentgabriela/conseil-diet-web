
import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gabriela Ferent - Diététicienne
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Consultations nutritionnelles au Luxembourg - Remboursées CNS ou consultations privées
          </p>
          <a
            href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-lg"
          >
            <Calendar className="h-5 w-5" />
            Prendre Rendez-vous
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
