<script>
  export let size = 'medium'; // small, medium, large

  // Calculate size based on prop
  $: width = size === 'small' ? 120 : size === 'medium' ? 180 : 240;
  $: height = size === 'small' ? 40 : size === 'medium' ? 60 : 80;
</script>

<div class="logo" style="width: {width}px; height: {height}px;">
  <img src="/images/logo.svg" alt="terramedic logo" />
</div>

<style>
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Prevents the logo from overflowing the container */
  }

  img {
    max-width: 100%; /* Ensures the logo scales to fit the width of the container */
    max-height: 100%; /* Ensures the logo scales to fit the height of the container */
    width: auto; /* Preserves the aspect ratio */
    height: auto; /* Preserves the aspect ratio */
  }
</style>
