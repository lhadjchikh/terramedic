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
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
      </div>
      <div class="card-content">
        <p class="tip">I have time to spare.</p>
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
        <p class="tip">I have money to spare.</p>
      </div>
    </div>
  </a>
  <a href="/other-actions" class="card-link">
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
            d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>
      </div>
      <div class="card-content">
        <p class="tip">No time. No money.</p>
        <p class="second-text">(We know the feeling!)</p>
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
