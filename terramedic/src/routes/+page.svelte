<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import ActionCards from '$lib/components/ActionCards.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import HeroImage from '$lib/components/HeroImage.svelte';
  import ImageModal from '$lib/components/ImageModal.svelte';
  import { Card, Heading, A, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  const images = ['/images/2025GenerationsStripes.jpg', '/images/20252024ReviewGlobal.jpg'];

  // Modal state
  let showModal = false;
  let modalImage = '/images/2025GenerationsStripes.jpg';
  let modalAlt = '2025 Generations Stripes';

  // Function to open modal
  function openModal(src, alt) {
    modalImage = src;
    modalAlt = alt;
    showModal = true;
  }

  // Function to close modal
  function closeModal() {
    showModal = false;
  }
</script>

<svelte:head>
  <title>Terramedic | Climate Action Hub</title>
  <meta
    name="description"
    content="Learn about warming stripes and how you can help address climate change through volunteering or donations."
  />
</svelte:head>

<div class="flex min-h-screen flex-col bg-gray-50">
  <NavBar />

  <main class="flex-grow">
    <!-- Hero Section -->
    <section class="relative">
      <HeroImage
        src="/images/hero.svg"
        alt="Anyone can become a terramedic"
        size="large"
        title="Turn awareness into action"
        description="The warming stripes visually tell the story of our planet's rising temperatures. Move beyond awareness and join our community of climate advocates helping to heal our planet and preserve our world for future generations."
      />

      <!-- Subtle divider -->
      <div
        class="absolute right-0 bottom-0 left-0 z-20 h-6 bg-gradient-to-b from-transparent to-gray-50"
      ></div>
    </section>

    <!-- Main Content Section -->
    <section class="section container-narrow">
      <h2 class="section-title text-terra-dark-blue">Climate Crisis: Our Shared Challenge</h2>

      <!-- Understanding Warming Stripes Section -->
      <div class="mt-16 overflow-hidden rounded-xl bg-white shadow-sm">
        <div class="flex flex-col md:flex-row">
          <div class="flex w-full items-center p-8 md:w-1/2 md:p-10">
            <div>
              <h3 class="text-terra-dark-blue mb-4 text-2xl font-bold md:text-3xl">
                Understanding Warming Stripes
              </h3>
              <p class="text-lg text-gray-700">
                The warming stripes (a.k.a. climate stripes) represent our planet's rising
                temperatures over time. Each colored stripe is one year - blue for cooler and red
                for warmer than average. The clear shift from blue to red tells the story of our
                warming planet.
              </p>
              <div class="mt-6">
                <Button href="/about" color="blue" class="font-medium">
                  <span>Learn more</span>
                  <ArrowRightOutline class="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div
            class="from-terra-blue to-terra-dark-blue w-full bg-gradient-to-br p-6 md:w-1/2 md:p-8"
          >
            <div class="relative flex h-full items-center justify-center">
              <div
                class="absolute inset-0 bg-[url('/images/WarmingStripes-1850-2024.png')] bg-cover bg-center opacity-10"
              ></div>
              <!-- Clickable image that opens modal -->
              <button
                class="relative z-10 mx-auto w-full max-w-md cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
                on:click={() =>
                  openModal('/images/2025GenerationsStripes.jpg', '2025 Generations Stripes')}
                title="Click to enlarge"
              >
                <img
                  src="/images/2025GenerationsStripes.jpg"
                  alt="2025 Generations Stripes"
                  class="w-full object-contain"
                />
                <!-- Zoom indicator overlay -->
                <div
                  class="absolute right-2 bottom-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Take Action Section -->
      <div id="take-action" class="mt-16 mb-16 scroll-mt-20 pt-4">
        <div class="mb-12 text-center">
          <h2 class="text-terra-dark-blue mb-4 text-2xl font-bold md:text-3xl">
            Choose Your Path to Climate Action
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-700">
            Join us in taking action. Whether you have time or money to contribute—or neither!—you
            can make a difference in addressing climate change and healing our planet. Become a
            terramedic!
          </p>
        </div>

        <!-- Action Cards -->
        <div class="mx-auto max-w-4xl">
          <ActionCards />
        </div>

        <!-- Resources Link -->
        <div class="mt-12 text-center">
          <A
            href="/resources"
            class="text-terra-dark-blue hover:text-terra-blue inline-flex items-center space-x-1 text-xl font-medium transition-colors"
          >
            <span>Already a climate advocate? Find resources here</span>
            <ArrowRightOutline class="ml-1 h-5 w-5" />
          </A>
        </div>
      </div>
    </section>

    <!-- About Project Section with Background -->
    <section class="from-terra-blue/10 to-terra-green/10 bg-gradient-to-br py-16">
      <div class="container-narrow">
        <!-- Match width with other panels -->
        <div class="overflow-hidden rounded-xl bg-white shadow-sm">
          <div class="flex flex-col md:flex-row">
            <!-- Button image on the left -->
            <div class="flex w-full items-center justify-center bg-gray-50 p-8 md:w-1/3 md:p-10">
              <div
                class="relative max-w-[220px] overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <img
                  src="/images/warming-stripes-button.png"
                  alt="Climate warming stripes button"
                  class="h-auto w-full"
                />
                <div class="absolute inset-0 rounded-lg ring-1 ring-gray-300/30"></div>
              </div>
            </div>

            <!-- Text content on the right -->
            <div class="flex w-full items-center p-8 md:w-2/3 md:p-10">
              <div>
                <h3 class="text-terra-dark-blue mb-4 text-2xl font-bold md:text-3xl">
                  About This Project
                </h3>
                <p class="mb-4 text-lg text-gray-700">
                  This website was created to accompany the warming stripes buttons (shown left)
                  distributed at climate outreach events.
                </p>
                <p class="mb-6 text-lg text-gray-700">
                  Our goal is to help people understand what the warming stripes represent and
                  provide clear, actionable ways to get involved in climate solutions, whether
                  through volunteering, donations, or other forms of climate advocacy.
                </p>
                <div class="mt-6">
                  <Button href="/about" color="blue" class="font-medium">
                    <span>Learn more about warming stripes</span>
                    <ArrowRightOutline class="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Footer />

  <!-- Image modal component -->
  <ImageModal show={showModal} imageSrc={modalImage} imageAlt={modalAlt} on:close={closeModal} />
</div>
