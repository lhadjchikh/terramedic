<script>
  import Logo from '$lib/components/Logo.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WarmingStripes from '$lib/components/WarmingStripes.svelte';
  import OrganizationCard from '$lib/components/OrganizationCard.svelte';
  import { resourceOrgs } from '$lib/data/resource-orgs.js';
</script>

<svelte:head>
  <title>Climate Advocate Resources | Terramedic Corps</title>
  <meta
    name="description"
    content="Resources for climate advocates including research tools, communication strategies, and advocacy support."
  />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <header class="bg-white shadow-sm">
    <div class="container-narrow flex items-center justify-between py-4">
      <a href="/" class="flex items-center">
        <Logo size="small" />
      </a>
      <nav>
        <ul class="flex space-x-4 md:space-x-6">
          <li><a href="/" class="hover:text-terra-blue text-gray-600">Home</a></li>
          <li><a href="/about" class="hover:text-terra-blue text-gray-600">About</a></li>
          <li>
            <a href="/volunteer" class="hover:text-terra-blue text-gray-600">Volunteer</a>
          </li>
          <li>
            <a href="/donate" class="hover:text-terra-blue text-gray-600">Donate</a>
          </li>
          <li><a href="/resources" class="text-terra-blue font-medium">Resources</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="flex-grow">
    <div class="container-narrow py-8">
      <div class="mb-8">
        <WarmingStripes />
      </div>

      <h1 class="page-title mb-2 text-center">Resources for Climate Advocates</h1>
      <p class="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-600">
        Tools, research, and support for those already engaged in climate advocacy work.
      </p>

      <div class="mb-12 grid gap-8 md:grid-cols-2">
        {#each resourceOrgs as org}
          <OrganizationCard
            name={org.name}
            description={org.description}
            websiteUrl={org.websiteUrl}
            imageUrl={org.imageUrl}
            actionText={org.actionText}
            tags={org.tags}
          />
        {/each}
      </div>
    </div>
  </main>

  <Footer />
</div>
