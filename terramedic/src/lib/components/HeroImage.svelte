<script>
  import { onMount } from 'svelte';

  export let src = '/images/hero.svg';
  export let alt = 'Anyone can become a terramedic';
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

  // Add smooth scrolling for anchor links
  onMount(() => {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
  });
</script>

<div class="hero-section relative w-full overflow-hidden">
  <div class="mx-auto max-w-6xl px-4">
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
        <div class="order-2 flex items-center justify-center p-6 md:order-1 md:w-1/2 md:p-8">
          <img {src} {alt} class="max-h-full max-w-full object-contain" />
        </div>

        <!-- Right side content -->
        <div class="z-10 order-1 flex flex-col justify-center p-6 md:order-2 md:w-1/2 md:p-12">
          {#if title || description}
            <div>
              {#if title}
                <h1
                  class="text-terra-dark-blue mb-4 max-w-xl text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                  {title}
                </h1>
              {/if}

              {#if description}
                <p class="max-w-xl text-base text-gray-700 md:text-lg lg:text-xl">{description}</p>
              {/if}

              <div class="mt-8">
                <a
                  href="#take-action"
                  class="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700"
                >
                  Become a Terramedic
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
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
