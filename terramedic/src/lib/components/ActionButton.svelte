<script>
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  export let text = 'Click me';
  export let href = '/';
  export let type = 'primary'; // primary or alternative
  export let size = 'lg';

  // Create style objects for primary and secondary buttons
  const primaryStyle = `
    background-color: var(--terra-blue-color);
    transition: background-color 0.2s ease-in-out;
  `;

  const primaryHoverStyle = `
    background-color: var(--terra-dark-blue-color);
  `;

  const secondaryStyle = `
    background-color: var(--terra-green-color);
    transition: background-color 0.2s ease-in-out;
  `;

  const secondaryHoverStyle = `
    background-color: var(--terra-dark-green-color);
  `;

  // Set up the dynamic style attribute based on the type
  $: style = type === 'primary' ? primaryStyle : secondaryStyle;
  $: customClass = type === 'primary' ? 'action-button-primary' : 'action-button-secondary';
</script>

<Button
  {size}
  {href}
  color="none"
  {style}
  class={`mx-auto justify-center text-white ${customClass}`}
>
  <span class="mr-2">{text}</span>
  <ArrowRightOutline class="h-4 w-4" />
</Button>

<style>
  /* Global styles that won't be scoped */
  :global(.action-button-primary:hover) {
    background-color: var(--terra-dark-blue-color) !important;
  }

  :global(.action-button-secondary:hover) {
    background-color: var(--terra-dark-green-color) !important;
  }
</style>
