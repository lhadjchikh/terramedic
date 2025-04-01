<script>
  import { volunteerOrganizations } from '$lib/data/volunteer-orgs.js';
  import OrganizationCard from '$lib/components/OrganizationCard.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WarmingStripes from '$lib/components/WarmingStripes.svelte';
</script>

<svelte:head>
  <title>Volunteer Opportunities | Terramedic Action Team</title>
  <meta
    name="description"
    content="Find opportunities to volunteer your time and skills to organizations fighting climate change."
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
          <li><a href="/about" class="hover:text-terra-blue text-gray-600">About</a></li>
          <li><a href="/volunteer" class="text-terra-blue font-medium">Volunteer</a></li>
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

      <h1 class="page-title mb-2 text-center">Volunteer Your Time</h1>
      <p class="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-600">
        These organizations are making a real impact on climate change and need people like you.
        Your time and skills can help build a sustainable future.
      </p>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each volunteerOrganizations as org}
          <OrganizationCard
            name={org.name}
            description={org.description}
            websiteUrl={org.websiteUrl}
            imageUrl={org.imageUrl}
            tags={org.tags}
            actionText={org.actionText}
          />
        {/each}
      </div>

      <div class="mt-12 rounded-lg bg-white p-6 shadow-sm">
        <h2 class="section-title mb-4 text-center">Why Volunteer for Climate Action?</h2>
        <p class="mb-3">
          Volunteering your time to climate organizations is one of the most effective ways to
          create change. When you volunteer, you:
        </p>
        <ul class="mb-4 list-disc space-y-2 pl-6">
          <li>Amplify your impact beyond individual actions</li>
          <li>Build community with like-minded individuals</li>
          <li>Develop new skills and knowledge</li>
          <li>Help create systemic change needed to address the climate crisis</li>
        </ul>
        <p>
          Even just a few hours a month can make a significant difference when combined with the
          efforts of others.
        </p>
      </div>
    </div>
  </main>

  <Footer />
</div>
