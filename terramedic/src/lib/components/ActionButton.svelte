<script>
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import { trackEvent } from '$lib/utils/analytics';

  export let text = 'Click me';
  export let href = '/';
  export let type = 'primary'; // primary, secondary, or purple
  export let size = 'lg';
  export let id = ''; // Optional ID for more specific tracking
  export let fullWidth = false; // Whether the button should stretch full width

  // Create style objects for different button types
  const primaryStyle = `
    background-color: var(--terra-blue-color);
    transition: background-color 0.2s ease-in-out;
    width: 100%;
  `;

  const secondaryStyle = `
    background-color: var(--terra-green-color);
    transition: background-color 0.2s ease-in-out;
    width: 100%;
  `;

  const purpleStyle = `
    background-color: #8a4baf;
    transition: background-color 0.2s ease-in-out;
    width: 100%;
  `;

  // Set up the dynamic style attribute based on the type
  $: style = type === 'primary' ? primaryStyle : type === 'purple' ? purpleStyle : secondaryStyle;

  $: customClass =
    type === 'primary'
      ? 'action-button-primary'
      : type === 'purple'
        ? 'action-button-purple'
        : 'action-button-secondary';

  // Handle click event for tracking
  function handleClick() {
    // Track button click event
    trackEvent('button_click', {
      button_text: text,
      button_type: type,
      button_id: id || text.toLowerCase().replace(/\s+/g, '_'),
      destination: href
    });
  }
</script>

<Button
  {size}
  {href}
  color="none"
  {style}
  class={`justify-center text-white ${customClass} ${fullWidth ? 'w-full' : 'w-full'}`}
  on:click={handleClick}
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

  :global(.action-button-purple:hover) {
    background-color: #6c3483 !important;
  }
</style>
