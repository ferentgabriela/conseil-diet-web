import { useEffect, useRef } from 'react';
import { 
  getPatientActivity, 
  updatePatientActivity, 
  trackPatientAction,
  getCookieConsent 
} from '@/lib/cookies';

export const usePatientTracking = () => {
  const startTimeRef = useRef<number>(Date.now());
  const lastPathRef = useRef<string>(window.location.pathname);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent?.analytics) return;

    // Track page visit
    const activity = getPatientActivity();
    const currentPath = window.location.pathname;
    
    // Update visit count and last visit
    updatePatientActivity({
      visitCount: activity.visitCount + 1,
      lastVisit: new Date().toISOString(),
      pagesVisited: [...new Set([...activity.pagesVisited, currentPath])],
    });

    // Track page view action
    trackPatientAction('page_view', {
      path: currentPath,
      title: document.title,
      referrer: document.referrer
    });

    lastPathRef.current = currentPath;
  }, []);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent?.analytics) return;

    // Track time spent on page when user leaves or page changes
    const handleBeforeUnload = () => {
      const timeSpent = Date.now() - startTimeRef.current;
      const activity = getPatientActivity();
      
      updatePatientActivity({
        timeSpent: activity.timeSpent + timeSpent
      });

      trackPatientAction('page_exit', {
        path: lastPathRef.current,
        timeSpent: timeSpent
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        handleBeforeUnload();
      } else {
        startTimeRef.current = Date.now();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Track specific patient actions
  const trackAction = (actionType: string, data?: any) => {
    const consent = getCookieConsent();
    if (!consent?.analytics) return;

    trackPatientAction(actionType, data);
  };

  // Track button clicks, form submissions, etc.
  const trackInteraction = (element: string, action: string, data?: any) => {
    trackAction('interaction', {
      element,
      action,
      ...data
    });
  };

  // Track appointment bookings
  const trackAppointmentAction = (action: 'started' | 'completed' | 'abandoned', data?: any) => {
    trackAction('appointment', {
      action,
      ...data
    });
  };

  // Track chat interactions
  const trackChatAction = (action: string, data?: any) => {
    trackAction('chat', {
      action,
      ...data
    });
  };

  return {
    trackAction,
    trackInteraction,
    trackAppointmentAction,
    trackChatAction
  };
};