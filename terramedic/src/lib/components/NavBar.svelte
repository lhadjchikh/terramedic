<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import Logo from './Logo.svelte';

  let activeUrl = '';
  let hidden = true; // Initialize the hidden state

  // Get current path
  if (typeof window !== 'undefined') {
    activeUrl = window.location.pathname;
  }

  // Toggle the hidden state
  function toggle() {
    hidden = !hidden;
    console.log('Hidden state:', hidden); // Debugging
  }
</script>

<div class="navbar-background relative overflow-hidden">
  <!-- Navbar Content -->
  <Navbar
    color="white"
    class="bg-opacity-75 relative z-10 border-b border-gray-200 bg-white px-4 py-2.5 lg:px-6"
  >
    <NavBrand href="/" class="relative flex items-center justify-center rounded-md bg-white p-2">
      <div class="logo-container">
        <Logo size="small" class="logo" />
      </div>
    </NavBrand>
    <NavHamburger on:click={toggle} class="relative block rounded-md bg-white p-2 shadow-md" />
    <NavUl
      class={`order-1 w-full transition-all duration-300 md:order-none md:flex md:w-auto ${
        hidden ? 'max-h-0 overflow-hidden' : 'max-h-screen'
      }`}
    >
      <NavLi href="/" active={activeUrl === '/'}>Home</NavLi>
      <NavLi href="/about" active={activeUrl === '/about'}>About</NavLi>
      <NavLi href="/volunteer" active={activeUrl === '/volunteer'}>Volunteer</NavLi>
      <NavLi href="/donate" active={activeUrl === '/donate'}>Donate</NavLi>
      <NavLi href="/other-ways" active={activeUrl === '/other-ways'}>Other Ways</NavLi>
      <NavLi href="/resources" active={activeUrl === '/resources'}>Resources</NavLi>
    </NavUl>
  </Navbar>
</div>

<style>
  .navbar-background {
    background-image: url('/images/WarmingStripes-1850-2024.png'); /* Path to the image */
    background-size: cover; /* Ensures the image covers the entire navbar */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
  }
</style>
