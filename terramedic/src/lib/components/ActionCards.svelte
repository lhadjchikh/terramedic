<script>
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="cards">
  <a href="/volunteer" class="card-link">
    <div class="card blue">
      <div class="card-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div class="card-content">
        <p class="tip">I have time to spare</p>
        <p class="second-text">Volunteer your free time <span class="arrow">→</span></p>
      </div>
    </div>
  </a>
  <a href="/donate" class="card-link">
    <div class="card green">
      <div class="card-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          />
        </svg>
      </div>
      <div class="card-content">
        <p class="tip">I have money to spare</p>
        <p class="second-text">Put your money to good use <span class="arrow">→</span></p>
      </div>
    </div>
  </a>
  <a href="/other-ways" class="card-link">
    <div class="card purple">
      <div class="card-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
      <div class="card-content">
        <p class="tip">I have no time and no money</p>
        <p class="second-text">We know the feeling. Don't despair <span class="arrow">→</span></p>
      </div>
    </div>
  </a>
</div>

<style>
  .cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }

  .card-link {
    text-decoration: none;
    width: 100%;
  }

  .card {
    display: flex;
    align-items: center;
    padding: 1.25rem;
    border-radius: 0.75rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    height: 100%;
  }

  .purple {
    background: linear-gradient(135deg, #8a4baf 0%, #6c3483 100%);
  }

  .blue {
    background: linear-gradient(
      135deg,
      var(--terra-blue-color) 0%,
      var(--terra-dark-blue-color) 100%
    );
  }

  .green {
    background: linear-gradient(
      135deg,
      var(--terra-green-color) 0%,
      var(--terra-dark-green-color) 100%
    );
  }

  .card-icon {
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    margin-right: 1rem;
  }

  .card-content {
    flex-grow: 1;
  }

  .tip {
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.4;
  }

  .second-text {
    font-size: 0.875rem;
    margin: 0.25rem 0 0;
    opacity: 0.9;
    display: flex;
    align-items: center;
  }

  .arrow {
    margin-left: 0.25rem;
    transition: transform 0.2s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .card:hover .arrow {
    transform: translateX(3px);
  }

  @media (min-width: 768px) {
    .cards {
      flex-direction: row;
      max-width: none;
    }

    .card {
      min-height: 130px;
    }
  }
</style>
