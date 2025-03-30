<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroImage from '$lib/components/HeroImage.svelte';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { Card, Heading, A } from 'flowbite-svelte';

	const images = ['/images/2025GenerationsStripes.jpg', '/images/20252024ReviewGlobal.jpg'];
</script>

<svelte:head>
	<title>terramedic | Climate Action</title>
	<meta
		name="description"
		content="Learn about warming stripes and how you can help address climate change through volunteering or donations."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<NavBar />

	<main class="flex-grow">
		<div class="container mx-auto px-4 py-8 md:py-12">
			<div
				class="hero-container relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100"
			>
				<img
					src="/images/hero.svg"
					alt="Anyone can become a terramedic"
					class="absolute inset-0 h-full w-full object-contain"
				/>
			</div>

			<!-- Main Content -->
			<div class="mx-auto mb-12 max-w-3xl">
				<Heading tag="h1" class="mb-4 text-center text-3xl font-extrabold md:text-4xl lg:text-5xl"
					>Climate Crisis: Our Shared Challenge</Heading
				>
				<div class="flex flex-col items-center gap-8 md:flex-row">
					<!-- Static Image -->
					<div class="w-full flex-shrink-0 md:w-1/2">
						<img
							src="/images/2025GenerationsStripes.jpg"
							alt="2025 Generations Stripes"
							class="w-full rounded-lg object-contain shadow-md"
						/>
					</div>

					<!-- Text Content -->
					<div class="w-full text-center md:w-1/2 md:text-left">
						<p class="mb-6 text-2xl text-gray-700">
							The warming stripes you see represent our planet's rising temperatures over time. Each
							colored stripe is one year - blue for cooler and red for warmer than average. The
							clear shift from blue to red tells the story of our warming planet.
						</p>
						<p class="mb-10 text-3xl text-gray-700">
							Join us in taking action. Whether you have time or money to contribute, you can make a
							difference in addressing climate change.
						</p>

						<!-- Action Buttons -->
						<div class="mb-6 flex flex-col justify-center gap-4 sm:flex-row sm:gap-8">
							<ActionButton text="I have time to spare" href="/volunteer" type="primary" />
							<ActionButton text="I have money to spare" href="/donate" type="secondary" />
						</div>

						<div class="text-center text-3xl md:text-left">
							<A href="/other-ways" class="text-blue-600 hover:underline">
								No time or money? We know the feeling. See other ways you can help →
							</A>
						</div>
					</div>
				</div>

				<div class="mt-2 text-center">
					<A href="/resources" color="text-gray-600" class="text-3xl hover:text-blue-600">
						Already a climate advocate? Find resources here →
					</A>
				</div>
			</div>

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

<style>
	.hero-container {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
</style>
