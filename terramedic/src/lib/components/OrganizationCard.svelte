<script>
  import { Card, Badge, Button } from 'flowbite-svelte';

  export let name = '';
  export let description = '';
  export let websiteUrl = '';
  export let imageUrl = '';
  export let actionText = 'Visit Website';
  export let tags = [];
</script>

<Card img={imageUrl} class="h-full">
  <h3 class="mb-2 text-xl font-bold text-white">{name}</h3>

  {#if tags.length > 0}
    <div class="mb-3 flex flex-wrap gap-1">
      {#each tags as tag}
        <Badge color="blue" class="px-2 py-1">{tag}</Badge>
      {/each}
    </div>
  {/if}

  <p class="mb-4 text-gray-400">{description}</p>

  <div class="mt-auto">
    <Button color="blue" href={websiteUrl} target="_blank" rel="noopener noreferrer" class="w-full">
      {actionText}
    </Button>
  </div>
</Card>
