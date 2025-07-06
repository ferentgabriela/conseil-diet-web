
import React from 'react';
import { Scale, Heart, Zap, Baby, Salad, Stethoscope } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Scale,
      title: "Weight Management & Healthy Eating",
      description: "Sustainable weight loss and healthy lifestyle changes"
    },
    {
      icon: Stethoscope,
      title: "Nutrition for Medical Conditions",
      description: "Specialized guidance for diabetes, hypertension, and digestive disorders"
    },
    {
      icon: Zap,
      title: "Sports Nutrition & Performance",
      description: "Optimize your athletic performance with proper nutrition"
    },
    {
      icon: Baby,
      title: "Pediatric Nutrition",
      description: "Supporting healthy growth and development in children"
    },
    {
      icon: Heart,
      title: "Pre- and Post-Natal Nutrition",
      description: "Nutritional support during pregnancy and breastfeeding"
    },
    {
      icon: Salad,
      title: "Meal Planning & Education",
      description: "Learn to make informed food choices for lasting health"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center bg-white rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              Not sure where to start? Book an introductory consultation to explore how we can help.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
