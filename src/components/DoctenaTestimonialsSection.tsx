
import React, { useEffect } from 'react';

const DoctenaTestimonialsSection = () => {
  // Load Doctena testimonials script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.doctena.lu/js/widgetRatings/calendar/build.php';
    script.async = true;
    document.head.appendChild(script);

    // Add custom styles for the widget with more specific selectors
    const style = document.createElement('style');
    style.textContent = `
      /* Main widget container */
      #doctena-reviews-widget,
      div[data-toggle="doc-reviews"] {
        background-color: rgb(240, 253, 244) !important;
        border-radius: 8px !important;
        padding: 20px !important;
      }
      
      /* All nested elements within the widget */
      #doctena-reviews-widget *,
      div[data-toggle="doc-reviews"] * {
        background-color: rgb(240, 253, 244) !important;
      }
      
      /* Specific widget classes */
      .doc-review-widget,
      .doc-review-widget > div,
      .doc-review-item,
      .doc-review-content,
      .doc-review-header {
        background-color: rgb(240, 253, 244) !important;
      }
      
      /* Override any white backgrounds */
      #doctena-reviews-widget [style*="background-color: white"],
      #doctena-reviews-widget [style*="background-color:#fff"],
      #doctena-reviews-widget [style*="background-color: #ffffff"] {
        background-color: rgb(240, 253, 244) !important;
      }
    `;
    document.head.appendChild(style);

    // Apply styles after widget loads with multiple attempts
    const applyStyles = () => {
      const widget = document.querySelector('#doctena-reviews-widget');
      const widgetByAttr = document.querySelector('div[data-toggle="doc-reviews"]');
      
      if (widget || widgetByAttr) {
        const targetElement = widget || widgetByAttr;
        if (targetElement) {
          const htmlElement = targetElement as HTMLElement;
          htmlElement.style.backgroundColor = 'rgb(240, 253, 244)';
          htmlElement.style.borderRadius = '8px';
          htmlElement.style.padding = '20px';
          
          // Apply to all child elements
          const allChildren = targetElement.querySelectorAll('*');
          allChildren.forEach(child => {
            (child as HTMLElement).style.backgroundColor = 'rgb(240, 253, 244)';
          });
        }
      }
    };

    // Try applying styles at different intervals
    setTimeout(applyStyles, 1000);
    setTimeout(applyStyles, 3000);
    setTimeout(applyStyles, 5000);

    return () => {
      // Cleanup script and styles on unmount
      const existingScript = document.querySelector('script[src="https://api.doctena.lu/js/widgetRatings/calendar/build.php"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      const existingStyle = document.querySelector('style');
      if (existingStyle && existingStyle.textContent?.includes('#doctena-reviews-widget')) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Témoignages de Patients
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez les expériences de patients qui ont fait confiance à mon accompagnement
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            data-toggle="doc-reviews" 
            data-doctor-eid="492d6313-2026-4e38-ba00-ffd3a88d67de" 
            data-language="fr"
            id="doctena-reviews-widget"
            style={{ backgroundColor: 'rgb(240, 253, 244)', borderRadius: '8px', padding: '20px' }}
          ></div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Prêt(e) à commencer votre parcours nutritionnel ?
          </p>
          <a
            href="https://www.doctena.lu/en/specialty/dietitian/gabriela-ferent-1748874"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-lg"
          >
            Prendre Rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
};

export default DoctenaTestimonialsSection;
