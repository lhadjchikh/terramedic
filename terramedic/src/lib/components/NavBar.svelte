<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
  import Logo from './Logo.svelte';

  let activeUrl = '';
  let hidden = true; // Initialize the hidden state

  // Get current path
  if (typeof window !== 'undefined') {
    activeUrl = window.location.pathname;
  }
</script>

<div class="sticky top-0 z-50">
  <div class="navbar-background relative overflow-hidden shadow-md">
    <!-- Warming stripes visualization as a thin accent bar -->
    <div class="h-2 w-full bg-gradient-to-r from-blue-500 via-yellow-400 to-red-600"></div>

    <!-- Navbar Content -->
    <Navbar
      color="white"
      class="container-narrow bg-opacity-95 relative z-10 border-b border-gray-100 bg-white px-4 py-3 backdrop-blur-sm lg:px-6"
    >
      <NavBrand href="/" class="relative flex items-center justify-center rounded-md p-1">
        <div class="logo-container">
          <Logo size="small" class="logo" />
        </div>
      </NavBrand>

      <div class="flex items-center lg:order-2">
        <Button href="/volunteer" size="sm" color="blue" class="mr-3 hidden md:inline-flex"
          >Take Action</Button
        >
        <NavHamburger class="rounded-md bg-gray-50 p-2 shadow-sm lg:hidden" />
      </div>

      <NavUl class="order-1 w-full flex-grow justify-center lg:flex lg:items-center lg:space-x-1">
        <NavLi class="my-1.5 lg:my-0" href="/" active={activeUrl === '/'}>Home</NavLi>
        <NavLi class="my-1.5 lg:my-0" href="/about" active={activeUrl === '/about'}>About</NavLi>
        <NavLi class="my-1.5 lg:my-0" href="/volunteer" active={activeUrl === '/volunteer'}
          >Volunteer</NavLi
        >
        <NavLi class="my-1.5 lg:my-0" href="/donate" active={activeUrl === '/donate'}>Donate</NavLi>
        <NavLi class="my-1.5 lg:my-0" href="/other-ways" active={activeUrl === '/other-ways'}
          >Other Ways</NavLi
        >
        <NavLi class="my-1.5 lg:my-0" href="/resources" active={activeUrl === '/resources'}
          >Resources</NavLi
        >
      </NavUl>
    </Navbar>
  </div>
</div>

<style>
  :global(.navbar-active) {
    color: var(--terra-blue); /* Replace with your desired color variable or value */
    font-weight: 600; /* Equivalent to font-semibold */
  }

  .navbar-background {
    background-image: url('/images/WarmingStripes-1850-2024.png'); /* Path to the image */
    background-size: cover; /* Ensures the image covers the entire navbar */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
  }
</style>
