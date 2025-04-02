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
  <div class="max-w-6xl mx-auto px-4">
    <div
      class={`hero-container relative ${heightClass} w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-blue-50`}
    >
    <!-- Background pattern -->
    <div
      class="absolute inset-0 bg-[url('/images/WarmingStripes-1850-2024.png')] bg-cover bg-center opacity-5"
    ></div>

    <!-- Main hero image and content layout -->
    <div class="relative z-10 flex h-full w-full flex-col md:flex-row">
      <!-- Left side image -->
      <div class="md:w-1/2 flex items-center justify-center p-6 md:p-8 order-2 md:order-1">
        <img {src} {alt} class="max-h-full max-w-full object-contain" />
      </div>
      
      <!-- Right side content -->
      <div class="md:w-1/2 flex flex-col justify-center p-6 md:p-12 z-10 order-1 md:order-2">
        {#if title || description}
          <div>
            {#if title}
              <h1 class="mb-4 max-w-xl text-3xl font-bold text-terra-dark-blue md:text-4xl lg:text-5xl">
                {title}
              </h1>
            {/if}

            {#if description}
              <p class="max-w-xl text-base text-gray-700 md:text-lg lg:text-xl">{description}</p>
            {/if}
            
            <div class="mt-8">
              <a href="/volunteer" class="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white shadow-md hover:bg-blue-700 transition-colors">
                Take Action Now
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
  </div>
</div>

<style>
  .hero-container {
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.2);
  }
</style>
