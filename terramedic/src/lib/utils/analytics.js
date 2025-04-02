/**
 * Google Analytics utility functions for tracking page views and events
 */

/**
 * Track a page view with Google Analytics
 * @param {string} url - The URL of the page view to track
 * @param {string} title - The title of the page
 */
export function trackPageView(url, title) {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-MEASUREMENT_ID', {
      page_path: url,
      page_title: title
    });
  }
}

/**
 * Track an event with Google Analytics
 * @param {string} eventName - The name of the event to track
 * @param {Object} eventParams - Additional parameters to include with the event
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
  }
}

/**
 * Initialize page view tracking in SvelteKit
 * This should be called from the root +layout.svelte
 * @param {Object} navigation - The navigation object
 */
export function initPageTracking(navigation) {
  if (typeof window !== 'undefined') {
    // Track initial page view
    trackPageView(window.location.pathname, document.title);

    // Track navigation changes
    navigation.subscribe(({ url }) => {
      if (url) {
        trackPageView(url.pathname, document.title);
      }
    });
  }
}
