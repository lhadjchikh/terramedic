/**
 * Google Analytics utility functions for tracking page views and events
 */

/**
 * Track a page view with Google Analytics
 * @param url - The URL of the page view to track
 * @param title - The title of the page
 */
export function trackPageView(url: string, title: string): void {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-MEASUREMENT_ID', {
      page_path: url,
      page_title: title
    });
  }
}

/**
 * Track an event with Google Analytics
 * @param eventName - The name of the event to track
 * @param eventParams - Additional parameters to include with the event
 */
export function trackEvent(eventName: string, eventParams: Record<string, unknown> = {}): void {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
  }
}

/**
 * Initialize page view tracking in SvelteKit
 * This should be called from the root +layout.svelte
 * @param navigation - The navigation object
 */
export function initPageTracking(navigation: {
  subscribe: (callback: (data: { url: URL }) => void) => void;
}): void {
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
