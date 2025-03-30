<script>
	import ActionButton from '$lib/components/ActionButton.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WarmingStripes from '$lib/components/WarmingStripes.svelte';
</script>

<svelte:head>
	<title>Other Ways to Help | Terramedic Action Team</title>
	<meta
		name="description"
		content="Learn about other ways to address climate change even without spare time or money."
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
					<li><a href="/volunteer" class="hover:text-terra-blue text-gray-600">Volunteer</a></li>
					<li><a href="/donate" class="hover:text-terra-blue text-gray-600">Donate</a></li>
					<li><a href="/other-ways" class="text-terra-blue font-medium">Other Ways</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<main class="flex-grow">
		<div class="container-narrow py-8">
			<div class="mb-8">
				<WarmingStripes />
			</div>

			<h1 class="page-title mb-2 text-center">Other Ways to Make a Difference</h1>
			<p class="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-600">
				Even if you don't have spare time or money right now, there are still meaningful ways you
				can contribute to climate action.
			</p>

			<div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
				<h2 class="section-title">Yale Climate Connections Solutions Hub</h2>
				<p class="mb-4">
					The <a
						href="https://yaleclimateconnections.org/solutions/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-terra-blue hover:underline">Yale Climate Connections Solutions Hub</a
					> is an excellent resource for anyone looking to take climate action, regardless of their circumstances.
					It provides:
				</p>

				<ul class="mb-4 list-disc space-y-2 pl-6">
					<li>Accessible information about climate solutions at different scales</li>
					<li>Evidence-based approaches that make a meaningful difference</li>
					<li>Options that fit diverse lifestyles, resources, and circumstances</li>
					<li>Regular updates on climate news and developments</li>
				</ul>

				<div class="mt-6">
					<ActionButton
						text="Visit the Yale Climate Solutions Hub"
						href="https://yaleclimateconnections.org/solutions/"
						type="primary"
					/>
				</div>
			</div>

			<div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
				<h2 class="section-title">Small Steps with Big Impact</h2>
				<p class="mb-4">
					These actions require minimal time or financial investment but can still make a
					difference:
				</p>

				<div class="mb-4 grid gap-4 md:grid-cols-2">
					<div class="rounded-lg bg-gray-50 p-4">
						<h3 class="font-display mb-2 text-lg font-semibold">Start Conversations</h3>
						<p>
							Simply talking about climate change with friends, family, and colleagues helps
							normalize the topic and spread awareness. Sharing what you've learned about warming
							stripes is a great starting point.
						</p>
					</div>

					<div class="rounded-lg bg-gray-50 p-4">
						<h3 class="font-display mb-2 text-lg font-semibold">Make Climate-Conscious Choices</h3>
						<p>
							When making everyday decisions about food, transportation, or purchases, consider the
							climate impact. Even small changes in routine can add up over time.
						</p>
					</div>

					<div class="rounded-lg bg-gray-50 p-4">
						<h3 class="font-display mb-2 text-lg font-semibold">Stay Informed</h3>
						<p>
							Follow reliable climate news sources and subscribe to newsletters. Being informed
							helps you make better decisions and identify opportunities to take action when your
							circumstances change.
						</p>
					</div>

					<div class="rounded-lg bg-gray-50 p-4">
						<h3 class="font-display mb-2 text-lg font-semibold">Use Your Voice</h3>
						<p>
							Contact elected officials when key climate votes arise. A quick phone call or email
							can be completed in minutes but helps demonstrate public support for climate action.
						</p>
					</div>
				</div>
			</div>

			<div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
				<h2 class="section-title">The Power of Community</h2>
				<p class="mb-4">
					Remember that addressing climate change is a collective effort. While individual actions
					matter, systemic changes driven by communities, businesses, and governments are essential
					for meaningful progress.
				</p>
				<p class="mb-4">
					By learning about climate solutions and sharing that knowledge, you're already
					contributing to the broader movement. As your circumstances change, you may find new
					opportunities to engage more deeply through volunteering or donations.
				</p>
				<p class="mt-6 text-center italic">
					"The most important thing you can do to fight climate change: talk about it." - Dr.
					Katharine Hayhoe
				</p>
			</div>

			<div class="text-center">
				<p class="mb-4">When you're ready to take the next step:</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a href="/volunteer" class="btn btn-primary">Explore Volunteer Options</a>
					<a href="/donate" class="btn btn-secondary">Consider Donation Options</a>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>
