/**
 * Optimized scroll utilities to prevent forced reflows
 */

let scrollTicking = false;
let cachedNavHeight = 0;
let cachedTrustBarHeight = 0;

// Cache DOM measurements to avoid repeated reads
const updateCachedMeasurements = () => {
  if (!cachedNavHeight || !cachedTrustBarHeight) {
    // Use CSS custom properties instead of DOM measurements when possible
    cachedTrustBarHeight = 40; // Fixed height from CSS
    cachedNavHeight = 88; // Fixed height from CSS
  }
};

/**
 * Optimized scroll to element function that prevents forced reflows
 */
export const scrollToElement = (elementId: string, offset = 0) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  updateCachedMeasurements();
  
  // Use requestAnimationFrame to batch DOM operations
  requestAnimationFrame(() => {
    const totalOffset = cachedTrustBarHeight + cachedNavHeight + offset;
    const elementTop = element.offsetTop;
    const targetPosition = Math.max(0, elementTop - totalOffset);
    
    // Use smooth scrolling with proper easing
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
};

/**
 * Throttled scroll listener to prevent performance issues
 */
export const createThrottledScrollListener = (callback: (scrolled: boolean) => void, threshold = 20) => {
  let scrolled = false;
  
  const handleScroll = () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        const newScrolled = window.scrollY > threshold;
        if (newScrolled !== scrolled) {
          scrolled = newScrolled;
          callback(scrolled);
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  };

  return handleScroll;
};

/**
 * Optimized scroll restoration for navigation
 */
export const restoreScrollPosition = (hash?: string) => {
  if (hash) {
    const elementId = hash.slice(1);
    // Delay to ensure DOM is ready
    setTimeout(() => {
      scrollToElement(elementId);
    }, 100);
  } else {
    // Use requestAnimationFrame for smooth scroll to top
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

/**
 * Create intersection observer for scroll-based animations
 */
export const createScrollObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions = {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};