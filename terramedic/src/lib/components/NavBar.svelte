<script>
  import Logo from './Logo.svelte';

  let activeUrl = '';
  let isMenuOpen = false;

  // Get current path
  if (typeof window !== 'undefined') {
    activeUrl = window.location.pathname;
  }

  // Toggle mobile menu
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<div class="sticky top-0 z-50">
  <div class="navbar-background relative overflow-hidden shadow-md">
    <!-- Warming stripes visualization as a thin accent bar -->
    <div class="h-2 w-full bg-gradient-to-r from-blue-500 via-yellow-400 to-red-600"></div>

    <!-- Main navigation with center blur and clear edges -->
    <div class="relative">
      <!-- Center blur only - edges stay clear -->
      <div
        class="blur-container pointer-events-none absolute bottom-0 left-1/2 top-0 -translate-x-1/2"
      ></div>

      <div class="container-narrow relative z-10">
        <div class="flex items-center justify-between py-3">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="/" class="flex items-center">
              <div class="rounded-md bg-white p-1">
                <Logo size="small" />
              </div>
            </a>
          </div>

          <!-- Center Nav Items -->
          <div class="hidden flex-grow justify-center lg:flex">
            <ul class="flex items-center space-x-4 lg:space-x-6">
              <li><a href="/" class="nav-link {activeUrl === '/' ? 'active' : ''}">Home</a></li>
              <li>
                <a href="/about" class="nav-link {activeUrl === '/about' ? 'active' : ''}">About</a>
              </li>
              <li>
                <a href="/volunteer" class="nav-link {activeUrl === '/volunteer' ? 'active' : ''}"
                  >Volunteer</a
                >
              </li>
              <li>
                <a href="/donate" class="nav-link {activeUrl === '/donate' ? 'active' : ''}"
                  >Donate</a
                >
              </li>
              <li>
                <a
                  href="/other-actions"
                  class="nav-link {activeUrl === '/other-actions' ? 'active' : ''}">Other Actions</a
                >
              </li>
              <li>
                <a href="/resources" class="nav-link {activeUrl === '/resources' ? 'active' : ''}"
                  >Resources</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Mobile menu (toggleable) -->
        <div
          class="lg:hidden {isMenuOpen
            ? 'block'
            : 'hidden'} bg-terra-dark-blue/95 absolute left-0 right-0 z-20 shadow-lg"
        >
          <div class="space-y-1 pb-3 pt-2">
            <a href="/" class="nav-link-mobile {activeUrl === '/' ? 'active' : ''}">Home</a>
            <a href="/about" class="nav-link-mobile {activeUrl === '/about' ? 'active' : ''}"
              >About</a
            >
            <a
              href="/volunteer"
              class="nav-link-mobile {activeUrl === '/volunteer' ? 'active' : ''}">Volunteer</a
            >
            <a href="/donate" class="nav-link-mobile {activeUrl === '/donate' ? 'active' : ''}"
              >Donate</a
            >
            <a
              href="/other-actions"
              class="nav-link-mobile {activeUrl === '/other-actions' ? 'active' : ''}"
              >Other Actions</a
            >
            <a
              href="/resources"
              class="nav-link-mobile {activeUrl === '/resources' ? 'active' : ''}">Resources</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Center blur container with clear edges */
  .blur-container {
    width: 70%;
    backdrop-filter: blur(5px);
    z-index: 5;
  }

  /* Navigation links styling */
  .nav-link {
    color: white;
    font-weight: 600;
    font-size: 0.95rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }

  .nav-link.active {
    text-decoration: underline;
    text-underline-offset: 4px;
    font-weight: 700;
  }

  /* Mobile menu link styling */
  .nav-link-mobile {
    display: block;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  .nav-link-mobile.active {
    background-color: rgba(255, 255, 255, 0.1);
    font-weight: 700;
  }

  /* Background image for the navbar */
  .navbar-background {
    background-image: url('/images/WarmingStripes-1850-2024.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
