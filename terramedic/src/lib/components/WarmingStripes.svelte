<script>
  // Path to the static image
  const imagePath = '/images/WarmingStripes-1850-2024.png';
</script>

<div class="warming-stripes flex h-24 w-full overflow-hidden rounded-lg md:h-32">
  <img
    src={imagePath}
    alt="Warming stripes visualization (1850-2024)"
    class="h-full w-full rounded-lg object-cover"
  />
</div>

<style>
  .warming-stripes {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>
