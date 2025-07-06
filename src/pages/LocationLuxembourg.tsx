import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Calendar, Phone, Clock, CheckCircle } from 'lucide-react';
import { ChatPopup } from '@/components/ChatPopup';

const LocationLuxembourg = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleBookingClick = () => {
    // Replace with actual Doctena URL for Luxembourg
    window.open('#', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Diététicienne à Luxembourg-Ville - Gabriela Ferent | Consultation Nutritionnelle</title>
        <meta name="description" content="Réservez votre consultation diététique à Luxembourg-Ville. Accompagnement nutritionnel personnalisé par Gabriela Ferent, diététicienne certifiée." />
        <meta name="keywords" content="diététicienne Luxembourg-Ville, nutrition Luxembourg, consultation diététique, Gabriela Ferent" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-green-25">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              🏛️ Cabinet Luxembourg-Ville
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Diététicienne à Luxembourg-Ville
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Cabinet moderne et accueillant au cœur de Luxembourg-Ville. 
              Consultation nutritionnelle personnalisée pour atteindre vos objectifs santé.
            </p>
            
            <button
              onClick={handleBookingClick}
              className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 mb-4 min-h-[64px]"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏛️</span>
                <Calendar className="h-6 w-6" />
              </div>
              Réserver ma consultation à Luxembourg-Ville
            </button>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-green-800 font-medium text-sm">
                🔒 Vos données sont traitées de manière confidentielle et sécurisée
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Luxembourg City Location
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">123 Avenue de la Liberté, 1931 Luxembourg</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+35226123456" className="text-blue-600 hover:text-blue-700">
                        +352 26 12 34 56
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 8:00-18:00</p>
                      <p className="text-gray-600">Sat: 9:00-13:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button
                    onClick={handleBookingClick}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Your Appointment Now
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Luxembourg City Clinic<br />
                  Professional Environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Location */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Our Luxembourg City Clinic?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Central Location</h3>
                <p className="text-gray-600">
                  Easily accessible by public transport and car, with convenient parking available nearby.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Hours</h3>
                <p className="text-gray-600">
                  Extended hours during weekdays and Saturday availability to fit your schedule.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Booking</h3>
                <p className="text-gray-600">
                  Simple online booking through Doctena - book your appointment in just a few clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
        <ChatPopup isOpen={isChatOpen} onToggle={handleToggleChat} />
      </div>
    </>
  );
};

export default LocationLuxembourg;