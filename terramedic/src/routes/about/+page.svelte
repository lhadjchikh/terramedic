<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ActionButton from '$lib/components/ActionButton.svelte';

  export let form = 'undefined';
</script>

<svelte:head>
  <title>About Warming Stripes | Terramedic</title>
  <meta
    name="description"
    content="Learn about warming stripes, what they represent, and why they are an important visualization of climate change."
  />
</svelte:head>

<div class="flex min-h-screen flex-col bg-gray-50">
  <NavBar />

  <main class="flex-grow">
    <div class="container-narrow py-12">
      <h1 class="text-terra-dark-blue mb-6 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Understanding Warming Stripes
      </h1>

      <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h2 class="text-terra-dark-blue mb-4 text-xl font-bold md:text-2xl">
          What are "Warming Stripes"?
        </h2>
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
        <h2 class="text-terra-dark-blue mb-4 text-xl font-bold md:text-2xl">Why They Matter</h2>
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
        <h2 class="text-terra-dark-blue mb-4 text-xl font-bold md:text-2xl">
          The Science Behind the Stripes
        </h2>
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
        <h2 class="text-terra-dark-blue mb-4 text-xl font-bold md:text-2xl">Take Action Now</h2>

        <div class="flex flex-col md:flex-row">
          <div class="w-full pr-0 md:w-3/5 md:pr-8">
            <p class="mb-4">
              The warming stripes are a clear call to action. The good news is that it's not too
              late to make a difference. You can help address climate change right now by
              volunteering your time or supporting climate organizations financially.
            </p>
            <p class="mb-4">
              Every contribution matters in our collective effort to address the climate crisis and
              preserve a sustainable future for generations to come.
            </p>
            <p class="mb-0 italic md:mb-4">
              "The science is clear, the future is not." - Ed Hawkins, creator of warming stripes
            </p>
          </div>

          <div class="mt-6 w-full md:mt-0 md:w-2/5">
            <div class="flex flex-col gap-4">
              <ActionButton text="Volunteer Your Time" href="/volunteer" type="primary" />
              <ActionButton
                text="Donate to Climate Organizations"
                href="/donate"
                type="secondary"
              />
              <ActionButton text="Explore Other Ways to Help" href="/other-actions" type="purple" />
            </div>
          </div>
        </div>
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

  <Footer {form} />
</div>
