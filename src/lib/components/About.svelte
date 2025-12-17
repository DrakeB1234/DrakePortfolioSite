<section class="about" id="about">
  <div class="wrapper">
    <img loading="lazy" src="images/picofme.webp" alt="" />
    <div class="about-text">
      <p class="heading-secondary bold">
        Building Efficient Solutions through Clean Code
      </p>
      <p class="body">
        I don't just write code; I build systems that last. With an eye for
        optimization and a commitment to best practices, I focus on creating the
        fastest, most reliable programs possible for every client.
      </p>
      <p class="body">
        I specialize in React and .NET for developing frontend and backend
        solutions. However, I can work on many different technologies, even if
        its completely new to me; to get working on a project as quick as
        possible.
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
      filter: saturate(0.7);
      border-radius: var(--radius-base);
    }

    & p:nth-child(2) {
      margin-bottom: var(--spacing-small);
    }
  }
  .about-text {
    & .heading-secondary {
      max-width: var(--line-width-xsmall);
      margin-bottom: var(--spacing-base);
    }

    & > p:not(p.heading-secondary) {
      max-width: var(--line-width-small);
      line-height: 1.8;
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
