import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart3, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  const [consent, setConsent] = useState<CookieConsentState>({
    analytics: false,
    functional: true, // Always true for essential cookies
    marketing: false
  });

  useEffect(() => {
    // Check if user has already given consent
    if (!hasGivenConsent()) {
      setIsVisible(true);
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
      functional: true, // Essential cookies only
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
    // Functional cookies are always required
    if (key === 'functional') return;
    
    setConsent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs">
      <Card className="bg-background/90 backdrop-blur-sm border shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="pb-2 pt-3 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cookie className="h-3 w-3 text-primary" />
              <CardTitle className="text-xs font-medium">Cookies</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-5 w-5 p-0 hover:bg-muted"
              aria-label="Fermer la bannière de cookies"
            >
              <X className="h-2.5 w-2.5" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-2 pt-1 px-4 pb-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Nous utilisons des cookies pour améliorer votre expérience.
          </p>

          {showDetails && (
            <div className="space-y-4 border-t pt-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <h4 className="font-medium">Cookies fonctionnels</h4>
                      <p className="text-sm text-muted-foreground">
                        Essentiels au fonctionnement du site (toujours activés)
                      </p>
                    </div>
                  </div>
                  <Switch checked={consent.functional} disabled />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium">Cookies d'analyse</h4>
                      <p className="text-sm text-muted-foreground">
                        Nous aident à comprendre comment vous utilisez notre site
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={consent.analytics}
                    onCheckedChange={(checked) => updateConsent('analytics', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-purple-600" />
                    <div>
                      <h4 className="font-medium">Cookies marketing</h4>
                      <p className="text-sm text-muted-foreground">
                        Pour vous proposer du contenu et des annonces pertinentes
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={consent.marketing}
                    onCheckedChange={(checked) => updateConsent('marketing', checked)}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1.5 pt-2 border-t">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
              className="w-full text-xs h-7"
            >
              {showDetails ? 'Masquer' : 'Personnaliser'}
            </Button>
            
            {showDetails ? (
              <div className="flex gap-1.5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  className="flex-1 text-xs h-7"
                >
                  Refuser tout
                </Button>
                <Button
                  size="sm"
                  onClick={handleSavePreferences}
                  className="flex-1 text-xs h-7"
                >
                  Sauvegarder
                </Button>
              </div>
            ) : (
              <div className="flex gap-1.5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  className="flex-1 text-xs h-7"
                >
                  Refuser
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="flex-1 text-xs h-7"
                >
                  Accepter
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};