<script>
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="cards">
  <a href="/volunteer">
    <div class="card blue">
      <p class="tip">I have time to spare</p>
      <p class="second-text">Volunteer your free time →</p>
    </div>
  </a>
  <a href="/donate">
    <div class="card green">
      <p class="tip">I have money to spare</p>
      <p class="second-text">Put your money to good use →</p>
    </div>
  </a>
  <a href="/other-ways">
    <div class="card purple">
      <p class="tip">I have no time and no money</p>
      <p class="second-text">We know the feeling. Don't despair →</p>
    </div>
  </a>
</div>

<style>
  /* From Uiverse.io by kamehame-ha */
  .cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .cards .purple {
    background-color: #8a4baf;
  }

  .cards .blue {
    background-color: var(--terra-blue-color);
  }

  .cards .green {
    background-color: var(--terra-green-color);
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100px;
    width: 250px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
  }

  .cards .card p.tip {
    font-size: 1em;
    font-weight: 700;
  }

  .cards .card p.second-text {
    font-size: 0.7em;
  }

  .cards .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover:has(.card:hover) > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }

  .cards:hover > .card {
    filter: none;
    transform: none;
  }

  .cards:not(:hover) > .card {
    filter: none;
    transform: none;
  }
</style>
