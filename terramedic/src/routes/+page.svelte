<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import ActionCards from '$lib/components/ActionCards.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import HeroImage from '$lib/components/HeroImage.svelte';
  import { Card, Heading, A, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  const images = ['/images/2025GenerationsStripes.jpg', '/images/20252024ReviewGlobal.jpg'];
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
        src="/images/2025GenerationsStripes.jpg"
        alt="Anyone can become a terramedic"
        size="large"
        title="Transform awareness into action"
        description="The warming stripes you see represent our planet's rising temperatures over time. Each colored stripe is one year - blue for cooler and red for warmer than average. The clear shift from blue to red tells the story of our warming planet."
      />

      <!-- Curved divider -->
      <div class="absolute right-0 bottom-0 left-0 h-16 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" class="h-full w-full">
          <path d="M0,150 C150,50 350,50 500,150 L500,00 L0,0 Z" class="fill-gray-50"></path>
        </svg>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="section container-narrow">
      <Heading tag="h1" class="section-title text-terra-dark-blue">
        Climate Crisis: Our Shared Challenge
      </Heading>

      <!-- Understanding Warming Stripes Section -->
      <div class="mt-16 overflow-hidden rounded-xl bg-white shadow-sm">
        <div class="flex flex-col md:flex-row">
          <div class="flex w-full items-center p-8 md:w-1/2 md:p-10">
            <div>
              <h2 class="text-terra-dark-blue mb-4 text-2xl font-bold md:text-3xl">
                Understanding Warming Stripes
              </h2>
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
              <img
                src="/images/2025GenerationsStripes.jpg"
                alt="2025 Generations Stripes"
                class="relative z-10 mx-auto w-full max-w-md rounded-lg object-contain shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Take Action Section -->
      <div class="mt-16 mb-16">
        <div class="mb-12 text-center">
          <h2 class="text-terra-dark-blue mb-4 text-2xl font-bold md:text-3xl">
            Choose Your Path to Climate Action
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-700">
            Join us in taking action. Whether you have time or money to contribute, you can make a
            difference in addressing climate change.
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
        <Card class="border-0 bg-white shadow-lg">
          <div class="px-2 py-4 md:p-8">
            <Heading
              tag="h2"
              class="text-terra-dark-blue mb-6 text-center text-2xl font-bold md:text-3xl"
              >About This Project</Heading
            >
            <p class="mb-6 text-lg text-gray-700">
              This website was created to accompany the warming stripes buttons distributed at
              climate outreach events. Our goal is to help people understand what the warming
              stripes represent and guide them toward meaningful climate action.
            </p>
            <div class="mt-8 text-center">
              <Button href="/about" color="blue" class="px-6">
                <span>Learn more about warming stripes</span>
                <ArrowRightOutline class="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  </main>

  <Footer />
</div>
