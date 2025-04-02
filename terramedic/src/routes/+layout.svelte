<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { initPageTracking } from '$lib/utils/analytics';

  // Initialize Google Analytics tracking
  initPageTracking(page);

  // Force light mode and remove any dark mode settings
  onMount(() => {
    if (typeof window !== 'undefined') {
      // Remove dark class from the document element
      document.documentElement.classList.remove('dark');
      // Remove any stored theme preference
      localStorage.removeItem('color-theme');
    }
  });
</script>

<slot />
