import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const AboutPracticeSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Partner in Lifelong Nutrition
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Our practice is dedicated to helping you find clarity and confidence in your diet. 
                With years of experience and advanced certifications, we provide compassionate, 
                evidence-based nutrition guidance for adults, children, and families.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Whether you want to lose weight, manage a medical condition, or simply feel your best, 
                we tailor every session to your unique needs.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassionate Care</h3>
                  <p className="text-gray-600">Personalized approach that respects your lifestyle and preferences</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Evidence-Based</h3>
                  <p className="text-gray-600">Latest nutritional science applied to practical, sustainable solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">All Ages Welcome</h3>
                  <p className="text-gray-600">Specialized care for adults, children, and families at every life stage</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center">
                <p className="text-gray-500">Professional photo of the dietician(s)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPracticeSection;