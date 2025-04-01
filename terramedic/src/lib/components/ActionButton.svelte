<script>
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  export let text = 'Click me';
  export let href = '/';
  export let type = 'primary'; // primary or alternative
  export let size = 'lg';

  // Dynamically set the Tailwind class based on the type
  $: buttonClass = type === 'primary' ? 'bg-terra-blue text-white' : 'bg-terra-green text-white';
</script>

<Button class={`mx-auto justify-center ${buttonClass}`} {size} {href}>
  <span class="mr-2">{text}</span>
  <ArrowRightOutline class="h-4 w-4" />
</Button>
