<script>
	export let altText = 'Hero Image'; // Alt text for accessibility
</script>

<div
	class="hero-container relative h-[24rem] w-full overflow-hidden rounded-lg bg-gray-100 md:h-[32rem] lg:h-[40rem]"
>
	<img src="/images/hero.svg" alt={altText} class="absolute inset-0 h-full w-full object-cover" />
</div>

<style>
	.hero-container {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
</style>
