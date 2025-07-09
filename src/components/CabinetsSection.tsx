
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Calendar, Clock, Phone } from 'lucide-react';

const CabinetsSection = () => {
  return (
    <section id="cabinets" className="py-20 bg-gradient-to-br from-green-50 via-blue-25 to-green-25 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choisissez Votre Cabinet
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            3 locations au Luxembourg pour votre convenance. Sélectionnez le cabinet le plus proche de chez vous pour prendre rendez-vous.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Luxembourg-Ville */}
          <div className="group bg-gradient-to-br from-white to-green-50 border-2 border-green-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-green-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-700 transition-colors">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Luxembourg-Ville</h3>
              <p className="text-green-600 font-medium mb-2">Centre-ville</p>
              <p className="text-sm text-gray-600">Facilement accessible en transport</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-green-600" />
                <span>Lun-Ven: 8h-18h</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-green-600" />
                <span>Accessible en bus et tram</span>
              </div>
            </div>

            <Link
              to="/luxembourg"
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Prendre RDV
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Ettelbruck */}
          <div className="group bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-blue-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ettelbruck</h3>
              <p className="text-blue-600 font-medium mb-2">Nord du Luxembourg</p>
              <p className="text-sm text-gray-600">Idéal pour le nord du pays</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>Lun-Ven: 8h-18h</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>Parking disponible</span>
              </div>
            </div>

            <Link
              to="/ettelbruck"
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Prendre RDV
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Insenborn */}
          <div className="group bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-purple-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-700 transition-colors">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Insenborn</h3>
              <p className="text-purple-600 font-medium mb-2">Proche d'Ettelbruck</p>
              <p className="text-sm text-gray-600">Cadre calme et verdoyant</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-purple-600" />
                <span>Lun-Ven: 8h-18h</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-purple-600" />
                <span>Environnement paisible</span>
              </div>
            </div>

            <Link
              to="/insenborn"
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all duration-300 text-lg shadow-md hover:shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Prendre RDV
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Additional info section */}
        <div className="text-center mt-12">
          <div className="bg-white/80 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg border border-green-200">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Informations Pratiques</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-green-600" />
                <span>Rendez-vous en ligne 24h/24</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-600" />
                <span>Confirmation immédiate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinetsSection;
