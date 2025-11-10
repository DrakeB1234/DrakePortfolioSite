<section class="about" id="about">
  <div class="about-text">
    <p class="heading-secondary">Web Developer With A Passion For Efficiency</p>
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
  <img src="images/picofme.webp" alt="" />
</section>

<style>
  .about {
    background-color: var(--color-neutral-dark);
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;

    & > img {
      align-self: stretch;
      width: 100%;
      max-height: 34em;
      object-fit: cover;
      filter: brightness(0.8) saturate(0.6);
    }

    & p:nth-child(2) {
      margin-bottom: var(--spacing-small);
    }
  }
  .about-text {
    width: fit-content;
    padding: var(--spacing-2xlarge);
    justify-self: center;

    & .heading-secondary {
      max-width: 20em;
      margin-bottom: var(--spacing-large);
    }

    & > p:not(p.heading-secondary) {
      width: 100%;
      max-width: 22em;
    }
  }

  @media (max-width: 40em) {
    .about {
      grid-template-columns: 1fr;

      & > img {
        order: -1;
        width: clamp(10em, 100%, 20em);
        margin-top: -20px;
        border-radius: var(--radius-base);
      }
    }
  }
</style>
