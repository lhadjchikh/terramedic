<script>
  import SignupForm from './SignupForm.svelte';
</script>

<footer class="bg-terra-dark-blue mt-16 pt-12 pb-8 text-gray-800">
  <!-- Top warming stripes accent bar -->
  <div class="mb-8 h-1.5 w-full bg-gradient-to-r from-blue-500 via-yellow-400 to-red-600"></div>

  <div class="container-narrow">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
      <div class="md:col-span-1">
        <div class="text-terra-blue-dark mb-2 text-2xl font-bold">Terramedic</div>
        <p class="mb-4 max-w-md text-gray-600">
          Climate action starts with you. Join our community of change-makers dedicated to
          addressing the climate crisis.
        </p>

        <!-- Social Media Icons -->
        <div class="mt-4 flex space-x-4">
          <!-- GitHub Icon -->
          <a
            href="https://github.com/lhadjchikh/terramedic"
            class="text-gray-800 transition-colors hover:text-gray-800"
          >
            <img src="/images/github-logo.svg" alt="GitHub" class="h-6 w-6" />
          </a>

          <!-- Bluesky Icon -->
          <!-- <a
            href="https://bsky.app/profile/terramedic.bsky.social"
            class="text-gray-800 transition-colors hover:text-gray-800"
          >
            <img src="/images/bluesky-logo.svg" alt="Bluesky" class="h-6 w-6" />
          </a> -->
        </div>
      </div>

      <div class="md:col-span-2">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 class="mb-3 text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Navigation
            </h3>
            <ul class="space-y-2">
              <li>
                <a href="/" class="text-gray-600 transition-colors hover:text-gray-800">Home</a>
              </li>
              <li>
                <a href="/about" class="text-gray-600 transition-colors hover:text-gray-800"
                  >About Warming Stripes</a
                >
              </li>
              <li>
                <a href="/volunteer" class="text-gray-600 transition-colors hover:text-gray-800"
                  >Volunteer</a
                >
              </li>
              <li>
                <a href="/donate" class="text-gray-600 transition-colors hover:text-gray-800"
                  >Donate</a
                >
              </li>
              <li>
                <a href="/other-actions" class="text-gray-600 transition-colors hover:text-gray-800"
                  >Other Ways to Help</a
                >
              </li>
              <li>
                <a href="/resources" class="text-gray-600 transition-colors hover:text-gray-800"
                  >Resources for Advocates</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="mb-3 text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Resources
            </h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="https://showyourstripes.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center text-gray-600 transition-colors hover:text-gray-800"
                >
                  Show Your Stripes
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1 h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://climate.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center text-gray-600 transition-colors hover:text-gray-800"
                >
                  NASA Climate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1 h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.ipcc.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center text-gray-600 transition-colors hover:text-gray-800"
                >
                  IPCC
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1 h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div class="mb-6">
              <h3 class="mb-3 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Contact
              </h3>
              <ul class="space-y-2">
                <li class="text-gray-600">info@terramedic.org</li>
              </ul>
            </div>
            
            <!-- Newsletter Sign-up Form -->
            <SignupForm />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 border-t border-gray-700 pt-6">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <p class="text-sm text-gray-800">
          © {new Date().getFullYear()} Terramedic Corps. Created for climate activism.
        </p>
        <p class="mt-2 text-sm text-gray-800 md:mt-0">
          Data sourced from Show Your Stripes and climate science organizations.
        </p>
      </div>
    </div>
  </div>
</footer>
