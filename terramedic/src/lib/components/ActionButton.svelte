<script>
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  export let text = 'Click me';
  export let href = '/';
  export let type = 'primary'; // primary or alternative
  export let size = 'lg';

  // Map our types to Flowbite color props
  $: color = type === 'primary' ? 'blue' : 'green';
</script>

<Button {color} {size} {href} class="mx-auto justify-center">
  <span class="mr-2">{text}</span>
  <ArrowRightOutline class="h-4 w-4" />
</Button>
