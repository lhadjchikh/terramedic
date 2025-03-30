<script>
	import '../app.css';
	import { DarkMode } from 'flowbite-svelte';
</script>

<slot />

<!-- Optional: Add a floating theme toggle button -->
<div class="fixed bottom-4 right-4">
	<DarkMode />
</div>
