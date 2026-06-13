import React from 'react';
import { ShieldCheck, Microscope } from 'lucide-react';
const IndependenceSection = () => {
  return <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Une Approche Indépendante et Scientifique
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Contrairement aux approches commerciales, mes recommandations sont basées uniquement sur la science et vos besoins médicaux.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8" style={{ alignItems: 'stretch' }}>
            {/* Independence Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Indépendance Totale
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed flex-1 text-[15px]">
                Je ne vends <strong>aucun complément alimentaire</strong> ni produit commercial. 
                Mes conseils sont libres de tout conflit d'intérêts financiers avec l'industrie agro-alimentaire.
              </p>
            </div>

            {/* Science-Based Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Microscope className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  100% basé sur la science
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed flex-1 text-[15px]">
                Toutes mes recommandations nutritionnelles s'appuient sur les <strong>données scientifiques actuelles</strong> et votre évaluation médicale personnalisée.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          
        </div>
      </div>
    </section>;
};
export default IndependenceSection;