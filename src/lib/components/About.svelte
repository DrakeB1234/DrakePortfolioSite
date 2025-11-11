<section class="about" id="about">
  <div class="wrapper">
    <img src="images/picofme.webp" alt="" />
    <div class="about-text">
      <p class="heading-secondary">
        Web Developer With A Passion For Efficiency
      </p>
      <p class="body">
        Im a passionate web developer with a eye for efficiency and good coding
        practices. I strive to make the quickest and most-maintainable programs
        for every project I work on.
      </p>
      <p class="body">
        I specialize in React and .NET for developing frontend and backend
        solutions. However, I can work on many different softwares or
        technologies, even if its completely new to me and get working on a
        project as quick as possible.
      </p>
    </div>
  </div>
</section>

<style>
  .about {
    background-color: var(--color-neutral-dark);
    padding: var(--spacing-2xlarge) 0;
  }
  .about > .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-large);
    justify-items: center;

    & img {
      width: 100%;
      max-width: 20em;
      max-height: 24em;
      object-fit: cover;
      filter: brightness(0.8) saturate(0.6);
      border-radius: var(--radius-base);
    }

    & p:nth-child(2) {
      margin-bottom: var(--spacing-small);
    }
  }
  .about-text {
    & .heading-secondary {
      max-width: 20em;
      margin-bottom: var(--spacing-large);
    }

    & > p:not(p.heading-secondary) {
      max-width: 20em;
      line-height: 1.7;
    }
  }

  @media (max-width: 40em) {
    .about > .wrapper {
      grid-template-columns: 1fr;
      padding: var(--spacing-large);

      & img {
        margin-top: -7em;
      }
    }
    .about-text {
      margin-top: var(--spacing-large);
    }
  }
</style>
