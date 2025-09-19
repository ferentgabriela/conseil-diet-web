// Utility to manage layout measurements and prevent forced reflows

let cachedMeasurements: {
  trustBarHeight: number;
  navigationHeight: number;
  stickyBarHeight: number;
  timestamp: number;
} | null = null;

const CACHE_DURATION = 1000; // Cache for 1 second

export const getCachedMeasurements = () => {
  const now = Date.now();
  
  // Return cached measurements if they're fresh
  if (cachedMeasurements && (now - cachedMeasurements.timestamp) < CACHE_DURATION) {
    return cachedMeasurements;
  }
  
  // Use requestAnimationFrame to read measurements at the right time
  return new Promise<typeof cachedMeasurements>((resolve) => {
    requestAnimationFrame(() => {
      const trustBarElement = document.querySelector('div[class*="bg-green-50"]') || 
                            document.querySelector('[style*="nav-trust-bar"]');
      const navigationElement = document.querySelector('nav');
      const stickyBarElement = document.querySelector('[data-sticky-booking-bar]');
      
      cachedMeasurements = {
        trustBarHeight: trustBarElement?.clientHeight || 40,
        navigationHeight: navigationElement?.clientHeight || 88,
        stickyBarHeight: stickyBarElement?.clientHeight || 60,
        timestamp: now
      };
      
      resolve(cachedMeasurements);
    });
  });
};

// Fixed measurements for better performance (estimated from design)
export const FIXED_MEASUREMENTS = {
  trustBarHeight: 40,      // Desktop: 48px, Mobile: 40px
  navigationHeight: 88,    // Estimated average
  stickyBarHeight: 60,     // Estimated
  extraPadding: 20
} as const;

// Throttled scroll handler to reduce reflow frequency
export const createThrottledScrollHandler = (handler: () => void, delay = 16) => {
  let timeoutId: number | null = null;
  
  return () => {
    if (timeoutId) return;
    
    timeoutId = window.setTimeout(() => {
      handler();
      timeoutId = null;
    }, delay);
  };
};

// Safe scroll to section function that minimizes reflows
export const scrollToSection = (sectionId: string, additionalOffset = 0) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  
  // Use fixed measurements to avoid getBoundingClientRect calls
  const { trustBarHeight, navigationHeight, extraPadding } = FIXED_MEASUREMENTS;
  const totalOffset = trustBarHeight + navigationHeight + additionalOffset + extraPadding;
  
  // Read position in requestAnimationFrame to avoid forced reflow
  requestAnimationFrame(() => {
    const elementTop = element.offsetTop;
    const targetPosition = Math.max(0, elementTop - totalOffset);
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
};