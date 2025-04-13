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
        Terramedic and Warming Stripes
      </h1>

      <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h2 class="text-terra-dark-blue mb-4 text-xl font-bold md:text-2xl">What We Do</h2>
        <p class="mb-4">
          Terramedic turns awareness into action by connecting people who want to solve climate
          change with meaningful ways to heal our planet.
        </p>
      </div>

      <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h2 class="text-terra-dark-blue mb-4 text-xl font-bold md:text-2xl">
          What are Warming Stripes?
        </h2>
        <p class="mb-4">
          Terramedic promotes warming stripes everywhere we go because they communicate the story of
          climate change so powerfully and simply.
        </p>
        <p class="mb-4">
          Created by climate scientist Ed Hawkins in 2018, warming stripes represent the average
          temperature for individual years, relative to the average temperature over a baseline
          period, typically 1971-2000. Red stripes represent years that were warmer than the
          baseline average, from lighter to deeper tones for the bigger differences. Blue stripes
          show the same for cooler years. Together, they paint the picture of a warming planet.
        </p>
      </div>

      <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h2 class="text-terra-dark-blue mb-4 text-xl font-bold md:text-2xl">
          The Science Behind the Stripes
        </h2>
        <p class="mb-4">
          <em>The science is clear, the future is not.</em> - Ed Hawkins
        </p>
        <p class="mb-4">
          The data used to create warming stripes comes from multiple scientific sources, including:
          NASA's Goddard Institute for Space Studies, NOAA's National Centers for Environmental
          Information, UK Met Office Hadley Centre, and the Berkeley Earth Surface Temperature
          project. These organizations maintain long-term temperature records using thousands of
          weather stations around the world, as well as ocean data from ships and buoys. Even with
          slight differences between these datasets, they all show the same overall pattern: a rapid
          warming trend, especially since the 1980s.
        </p>
        <p class="mb-4">
          The stripes buttons at Terramedic events help people get involved. The first step is
          wearing one and telling people what it means. The second step is up to you.
        </p>
      </div>

      <div class="mb-10 rounded-lg bg-white p-6 shadow-sm">
        <h2 class="text-terra-dark-blue mb-4 text-xl font-bold md:text-2xl">Take Action Now</h2>

        <div class="flex flex-col md:flex-row">
          <div class="w-full pr-0 md:w-3/5 md:pr-8">
            <p class="mb-4">
              You can help address climate change right now by volunteering your time or supporting
              climate organizations. Every contribution matters. Choose a path here to get started.
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
