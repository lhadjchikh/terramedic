<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import ActionCards from '$lib/components/ActionCards.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import HeroImage from '$lib/components/HeroImage.svelte';
  import { Card, Heading, A } from 'flowbite-svelte';

  const images = ['/images/2025GenerationsStripes.jpg', '/images/20252024ReviewGlobal.jpg'];
</script>

<svelte:head>
  <title>Terramedic | Climate Action Hub</title>
  <meta
    name="description"
    content="Learn about warming stripes and how you can help address climate change through volunteering or donations."
  />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <NavBar />

  <main class="flex-grow">
    <div class="container mx-auto px-4 py-8 md:py-12">
      <HeroImage
        src="/images/2025GenerationsStripes.jpg"
        alt="Anyone can become a terramedic"
        class="hero-container mb-8 rounded-lg shadow-lg"
        size="large"
        title="Transform awareness into action"
        description="The warming stripes you see represent our planet's rising temperatures over time. Each colored stripe is one year - blue for cooler and red for warmer than average. The clear shift from blue to red tells the story of our warming planet."
      />

      <div class="h-12"></div>

      <!-- Main Content -->
      <div class="mx-auto mt-8 mb-12 max-w-3xl">
        <Heading
          tag="h1"
          color="text-gray-700"
          class="mt-8 mb-4 text-center text-3xl font-extrabold md:text-4xl lg:text-5xl"
          >Climate Crisis: Our Shared Challenge</Heading
        >

        <!-- Static Image Section - Full Width -->
        <div class="flex w-full flex-wrap">
          <div class="w-full p-4 text-3xl text-gray-700 md:w-1/2">
            The warming stripes (a.k.a. climate stripes) represent our planet's rising temperatures
            over time. Each colored stripe is one year - blue for cooler and red for warmer than
            average. The clear shift from blue to red tells the story of our warming planet.
          </div>
          <div class="w-full p-4 md:w-1/2">
            <img
              src="/images/2025GenerationsStripes.jpg"
              alt="2025 Generations Stripes"
              class="w-full rounded-lg object-contain shadow-md"
            />
          </div>
        </div>

        <!-- Action Buttons Section - Full Width -->
        <div class="flex w-full flex-wrap items-center justify-center">
          <div class="w-full p-4 text-3xl text-gray-700 md:w-1/2">
            Join us in taking action. Whether you have time or money to contribute, you can make a
            difference in addressing climate change.
          </div>
          <div class="flex w-full items-center justify-center p-4 md:w-1/2">
            <ActionCards />
          </div>
        </div>

        <div class="mt-8 mb-8 text-center">
          <A href="/resources" color="text-gray-600" class="text-3xl hover:text-blue-600">
            Already a climate advocate? Find resources here →
          </A>
        </div>
      </div>

      <div class="h-12"></div>

      <!-- About Section -->
      <Card class="mx-auto max-w-3xl">
        <Heading tag="h2" class="mb-4 text-center">About This Project</Heading>
        <p class="white mb-4 text-2xl">
          This website was created to accompany the warming stripes buttons distributed at climate
          at outreach events. Our goal is to help people understand what the warming stripes
          represent and guide them toward meaningful climate action.
        </p>
        <p class="mt-6 text-center">
          <A href="/about" class="font-medium text-blue-600 hover:underline">
            Learn more about warming stripes →
          </A>
        </p>
      </Card>
    </div>
  </main>

  <Footer />
</div>
