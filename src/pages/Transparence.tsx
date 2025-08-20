import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Transparence = () => {
  return (
    <>
      <Helmet>
        <title>Transparence — Gabriela Ferent Diététicienne</title>
        <meta name="description" content="Déclaration de transparence et informations légales de Gabriela Ferent, diététicienne nutritionniste au Luxembourg." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Transparence
            </h1>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                Je certifie ne percevoir aucun avantage financier ou en nature de l'industrie agro-alimentaire, 
                des fabricants de compléments ou de dispositifs de santé.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Gabriela Ferent<br />
                Diététicienne autorisée
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Transparence;