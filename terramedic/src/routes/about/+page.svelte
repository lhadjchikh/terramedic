<script>
  import Logo from '$lib/components/Logo.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WarmingStripes from '$lib/components/WarmingStripes.svelte';
  import ActionButton from '$lib/components/ActionButton.svelte';
</script>

<svelte:head>
  <title>About Warming Stripes | Terramedic Action Team</title>
  <meta
    name="description"
    content="Learn about warming stripes, what they represent, and why they are an important visualization of climate change."
  />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <header class="bg-white shadow-sm">
    <div class="container-narrow flex items-center justify-between py-4">
      <a href="/" class="flex items-center">
        <Logo size="small" />
      </a>
      <nav>
        <ul class="flex space-x-6">
          <li><a href="/" class="hover:text-terra-blue text-gray-600">Home</a></li>
          <li><a href="/about" class="text-terra-blue font-medium">About</a></li>
          <li>
            <a href="/volunteer" class="hover:text-terra-blue text-gray-600">Volunteer</a>
          </li>
          <li>
            <a href="/donate" class="hover:text-terra-blue text-gray-600">Donate</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="flex-grow">
    <div class="container-narrow py-8">
      <div class="mb-8">
        <WarmingStripes />
      </div>

      <h1 class="page-title mb-6 text-center">Understanding Warming Stripes</h1>

      <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h2 class="section-title">What are "Warming Stripes"?</h2>
        <p class="mb-4">
          Warming stripes (sometimes called "climate stripes") are a data visualization created by
          climate scientist Ed Hawkins in 2018. Each colored stripe represents the average
          temperature for a single year, relative to the average temperature over a baseline period
          (typically 1971-2000).
        </p>
        <p class="mb-4">
          <strong>Blue stripes</strong> represent years that were <strong>cooler</strong>
          than the baseline average.
          <strong>Red stripes</strong> represent years that were <strong>warmer</strong> than the baseline
          average.
        </p>
        <p>
          The warming stripes tell a clear visual story: our planet has warmed significantly over
          the past century, with recent decades showing the most dramatic warming.
        </p>
      </div>

      <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h2 class="section-title">Why They Matter</h2>
        <p class="mb-4">
          The beauty of warming stripes lies in their simplicity. They communicate the reality of
          climate change without technical graphs, numbers, or distracting elements. This makes the
          climate crisis accessible and understandable to everyone.
        </p>
        <p class="mb-4">
          The visualization has become an iconic symbol of climate change, appearing on:
        </p>
        <ul class="mb-4 list-disc space-y-1 pl-6">
          <li>Weather forecasts and news broadcasts</li>
          <li>Public murals and art installations</li>
          <li>T-shirts, ties, and other clothing</li>
          <li>Face masks and accessories</li>
          <li>And now, the buttons you've received!</li>
        </ul>
      </div>

      <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h2 class="section-title">The Science Behind the Stripes</h2>
        <p class="mb-4">
          The data used to create warming stripes comes from multiple scientific sources, including:
        </p>
        <ul class="mb-4 list-disc space-y-1 pl-6">
          <li>NASA's Goddard Institute for Space Studies</li>
          <li>NOAA's National Centers for Environmental Information</li>
          <li>UK Met Office Hadley Centre</li>
          <li>Berkeley Earth Surface Temperature project</li>
        </ul>
        <p class="mb-4">
          These organizations maintain long-term temperature records using thousands of weather
          stations around the world, as well as ocean data from ships and buoys.
        </p>
        <p>
          While there may be small differences between these datasets, they all show the same
          overall pattern: a rapid warming trend, especially since the 1980s.
        </p>
      </div>

      <div class="mb-10 rounded-lg bg-white p-6 shadow-sm">
        <h2 class="section-title">Take Action Now</h2>
        <p class="mb-6">
          The warming stripes are a clear call to action. The good news is that it's not too late to
          make a difference. You can help address climate change by:
        </p>

        <div class="mb-6 flex flex-col justify-center gap-4 sm:flex-row sm:gap-8">
          <ActionButton text="Volunteer Your Time" href="/volunteer" type="primary" />
          <ActionButton text="Donate to Climate Organizations" href="/donate" type="secondary" />
        </div>

        <p class="text-center italic">
          "The science is clear, the future is not." - Ed Hawkins, creator of warming stripes
        </p>
      </div>

      <div class="text-center">
        <a
          href="https://showyourstripes.info/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-terra-blue inline-block hover:underline"
        >
          Visit ShowYourStripes.info for more information →
        </a>
      </div>
    </div>
  </main>

  <Footer />
</div>
