<script>
  import '../app.css';
  import { DarkMode } from 'flowbite-svelte';
</script>

<slot />

<!-- Optional: Add a floating theme toggle button -->
<div class="fixed right-4 bottom-4">
  <DarkMode />
</div>
