<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WarmingStripes from '$lib/components/WarmingStripes.svelte';
  import OrganizationCard from '$lib/components/OrganizationCard.svelte';
  import { resourceOrgs } from '$lib/data/resource-orgs.js';
</script>

<svelte:head>
  <title>Climate Advocate Resources | Terramedic</title>
  <meta
    name="description"
    content="Resources for climate advocates including research tools, communication strategies, and advocacy support."
  />
</svelte:head>

<div class="flex min-h-screen flex-col bg-gray-50">
  <NavBar />

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
