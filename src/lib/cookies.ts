// Cookie utility functions for patient activity tracking

export interface CookieConsentState {
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const PATIENT_ACTIVITY_KEY = 'patient-activity';

// Basic cookie functions
export const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

export const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

// Cookie consent functions
export const getCookieConsent = (): CookieConsentState | null => {
  const consent = getCookie(COOKIE_CONSENT_KEY);
  if (!consent) return null;
  try {
    return JSON.parse(consent);
  } catch {
    return null;
  }
};

export const setCookieConsent = (consent: CookieConsentState) => {
  setCookie(COOKIE_CONSENT_KEY, JSON.stringify(consent), 365);
};

export const hasGivenConsent = (): boolean => {
  return getCookieConsent() !== null;
};

// Patient activity tracking functions
export interface PatientActivity {
  visitCount: number;
  lastVisit: string;
  pagesVisited: string[];
  timeSpent: number;
  referrer: string;
  actions: {
    type: string;
    timestamp: string;
    data?: any;
  }[];
}

export const getPatientActivity = (): PatientActivity => {
  const consent = getCookieConsent();
  if (!consent?.analytics) {
    return {
      visitCount: 0,
      lastVisit: new Date().toISOString(),
      pagesVisited: [],
      timeSpent: 0,
      referrer: '',
      actions: []
    };
  }

  const activity = getCookie(PATIENT_ACTIVITY_KEY);
  if (!activity) {
    return {
      visitCount: 1,
      lastVisit: new Date().toISOString(),
      pagesVisited: [window.location.pathname],
      timeSpent: 0,
      referrer: document.referrer,
      actions: []
    };
  }

  try {
    return JSON.parse(activity);
  } catch {
    return {
      visitCount: 1,
      lastVisit: new Date().toISOString(),
      pagesVisited: [window.location.pathname],
      timeSpent: 0,
      referrer: document.referrer,
      actions: []
    };
  }
};

export const updatePatientActivity = (updates: Partial<PatientActivity>) => {
  const consent = getCookieConsent();
  if (!consent?.analytics) return;

  const current = getPatientActivity();
  const updated = { ...current, ...updates };
  setCookie(PATIENT_ACTIVITY_KEY, JSON.stringify(updated), 365);
};

export const trackPatientAction = (type: string, data?: any) => {
  const consent = getCookieConsent();
  if (!consent?.analytics) return;

  const activity = getPatientActivity();
  activity.actions.push({
    type,
    timestamp: new Date().toISOString(),
    data
  });
  
  // Keep only last 50 actions to prevent cookie size issues
  if (activity.actions.length > 50) {
    activity.actions = activity.actions.slice(-50);
  }
  
  updatePatientActivity(activity);
};

// Clean up cookies when consent is revoked
export const clearTrackingCookies = () => {
  deleteCookie(PATIENT_ACTIVITY_KEY);
  // Clear any other tracking cookies here
};
