<script>
  export let src = '/images/hero.svg';
  export let alt = 'Hero Image';
  export let title = '';
  export let description = '';
  export let size = 'medium'; // small, medium, large

  // Determine height based on size
  $: heightClass =
    size === 'small'
      ? 'h-[20rem] md:h-[24rem] lg:h-[28rem]'
      : size === 'medium'
        ? 'h-[24rem] md:h-[32rem] lg:h-[40rem]'
        : 'h-[32rem] md:h-[40rem] lg:h-[48rem]';
</script>

<div class="hero-section relative w-full overflow-hidden">
  <div
    class={`hero-container relative ${heightClass} from-terra-dark-blue to-terra-blue w-full overflow-hidden rounded-xl bg-gradient-to-br`}
  >
    <!-- Background pattern -->
    <div
      class="absolute inset-0 bg-[url('/images/WarmingStripes-1850-2024.png')] bg-cover bg-center opacity-20"
    ></div>

    <!-- Main hero image -->
    <img {src} {alt} class="absolute inset-0 z-10 h-full w-full object-contain" />

    <!-- Content overlay -->
    {#if title || description}
      <div
        class="absolute right-0 bottom-0 left-0 z-20 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8 lg:p-10"
      >
        <div class="container-narrow">
          {#if title}
            <h1 class="mb-2 max-w-3xl text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {title}
            </h1>
          {/if}

          {#if description}
            <p class="max-w-2xl text-base text-white/90 md:text-lg lg:text-xl">{description}</p>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .hero-container {
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.2);
  }
</style>
