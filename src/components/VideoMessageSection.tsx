
import React, { useState } from 'react';
import { Play, User, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoMessageSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToCabinets = () => {
    const cabinetsSection = document.getElementById('cabinets');
    if (cabinetsSection) {
      cabinetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Un message personnel de Gabriela
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez pourquoi tant de personnes me font confiance pour leur transformation nutritionnelle
            </p>
          </div>

          {/* Video Container */}
          <div className="relative mb-8">
            <div className="relative aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              {/* Placeholder for video - you'll replace this with your AI-generated video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {!isPlaying ? (
                    <>
                      {/* Gabriela's photo placeholder */}
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center border-4 border-white shadow-lg">
                        <User className="h-16 w-16 text-green-600" />
                      </div>
                      
                      {/* Play button */}
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="group relative inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl border-4 border-green-500 hover:border-green-600 transition-all duration-300 hover:scale-110"
                      >
                        <Play className="h-8 w-8 text-green-600 ml-1 group-hover:scale-110 transition-transform duration-300" />
                        
                        {/* Animated rings */}
                        <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-30"></div>
                        <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
                      </button>
                      
                      <p className="text-green-700 font-medium mt-4">
                        Cliquez pour voir mon message
                      </p>
                    </>
                  ) : (
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                        <Heart className="h-12 w-12 text-green-600 animate-pulse" />
                      </div>
                      <p className="text-green-800 font-semibold text-lg mb-2">
                        Vidéo en cours de préparation...
                      </p>
                      <p className="text-green-600 text-sm">
                        Bientôt disponible avec un message personnel de Gabriela
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-full blur-sm"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-300/30 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* Call to action after video */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt(e) à commencer votre transformation ?
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez les centaines de personnes qui ont déjà transformé leur vie avec mon accompagnement personnalisé.
            </p>
            
            <Button
              onClick={scrollToCabinets}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Réserver ma consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <p className="text-sm text-green-600 mt-3">
              ✓ Prise en charge CNS possible • Sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoMessageSection;
