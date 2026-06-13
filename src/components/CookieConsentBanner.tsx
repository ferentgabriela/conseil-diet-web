import React, { useState, useEffect } from 'react';
import { Shield, BarChart3, Target } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTranslation } from 'react-i18next';
import { 
  hasGivenConsent, 
  setCookieConsent, 
  getCookieConsent, 
  clearTrackingCookies,
  type CookieConsentState 
} from '@/lib/cookies';

interface CookieConsentBannerProps {
  onConsentGiven?: (consent: CookieConsentState) => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onConsentGiven }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [animEnter, setAnimEnter] = useState(false);
  const [consent, setConsent] = useState<CookieConsentState>({
    analytics: false,
    functional: true,
    marketing: false
  });

  useEffect(() => {
    if (!hasGivenConsent()) {
      setIsVisible(true);
      // Trigger slide-up animation after 1.5s delay
      const timer = setTimeout(() => setAnimEnter(true), 1500);
      return () => clearTimeout(timer);
    } else {
      const existingConsent = getCookieConsent();
      if (existingConsent) {
        setConsent(existingConsent);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent: CookieConsentState = {
      analytics: true,
      functional: true,
      marketing: true
    };
    setCookieConsent(fullConsent);
    setConsent(fullConsent);
    setIsVisible(false);
    onConsentGiven?.(fullConsent);
  };

  const handleRejectAll = () => {
    const minimalConsent: CookieConsentState = {
      analytics: false,
      functional: true,
      marketing: false
    };
    setCookieConsent(minimalConsent);
    setConsent(minimalConsent);
    clearTrackingCookies();
    setIsVisible(false);
    onConsentGiven?.(minimalConsent);
  };

  const handleSavePreferences = () => {
    setCookieConsent(consent);
    if (!consent.analytics) {
      clearTrackingCookies();
    }
    setIsVisible(false);
    onConsentGiven?.(consent);
  };

  const updateConsent = (key: keyof CookieConsentState, value: boolean) => {
    if (key === 'functional') return;
    setConsent(prev => ({ ...prev, [key]: value }));
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        animEnter ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-white/90 backdrop-blur-md border-t border-slate-100 shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Main row: text left + buttons right */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Text */}
            <p className="text-sm text-slate-600 leading-relaxed flex-1">
              Pour vous offrir la meilleure expérience de navigation et analyser l'audience de notre site, nous utilisons des cookies respectueux de votre vie privée.{' '}
              <a 
                href="/mentions-legales" 
                className="underline underline-offset-2 text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap"
              >
                En savoir plus
              </a>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:flex-shrink-0">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm text-slate-500 hover:text-slate-800 underline underline-offset-2 transition-colors px-2 py-1"
              >
                Personnaliser
              </button>
              <button
                onClick={handleRejectAll}
                className="text-sm text-slate-700 border border-slate-200 rounded-lg px-4 py-2 hover:bg-slate-50 transition-colors font-medium"
              >
                Tout refuser
              </button>
              <button
                onClick={handleAcceptAll}
                className="text-sm text-white bg-green-600 rounded-lg px-5 py-2 hover:bg-green-700 transition-colors font-medium shadow-sm"
              >
                Tout accepter
              </button>
            </div>
          </div>

          {/* Customization panel */}
          {showDetails && (
            <div className="mt-4 pt-4 border-t border-slate-100 grid sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-800">Cookies fonctionnels</h4>
                    <p className="text-xs text-slate-500">Essentiels au fonctionnement du site</p>
                  </div>
                </div>
                <Switch checked={consent.functional} disabled className="ml-3" />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-800">Cookies d'analyse</h4>
                    <p className="text-xs text-slate-500">Comprendre l'utilisation du site</p>
                  </div>
                </div>
                <Switch 
                  checked={consent.analytics}
                  onCheckedChange={(checked) => updateConsent('analytics', checked)}
                  className="ml-3"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-800">Cookies marketing</h4>
                    <p className="text-xs text-slate-500">Contenu et annonces pertinents</p>
                  </div>
                </div>
                <Switch 
                  checked={consent.marketing}
                  onCheckedChange={(checked) => updateConsent('marketing', checked)}
                  className="ml-3"
                />
              </div>

              <div className="sm:col-span-3 flex justify-end gap-2 pt-2">
                <button
                  onClick={handleRejectAll}
                  className="text-sm text-slate-600 border border-slate-200 rounded-lg px-4 py-2 hover:bg-slate-50 transition-colors"
                >
                  Tout refuser
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="text-sm text-white bg-green-600 rounded-lg px-5 py-2 hover:bg-green-700 transition-colors font-medium shadow-sm"
                >
                  Sauvegarder mes préférences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};