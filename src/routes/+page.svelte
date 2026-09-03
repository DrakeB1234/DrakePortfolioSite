<script lang="ts">
  import EmailIcon from "$lib/icons/EmailIcon.svelte";
  import { onMount } from "svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import ProjectCards from "$lib/components/ProjectCards.svelte";

  let activeSection = "home";
  const stickyNavHeight = 61;
  const resumeChangedFileName = "Drake-Resume-2026.pdf";

  let sections: HTMLElement[] = [];

  function handleContactSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const emailInput = form.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;
    const messageInput = form.querySelector("textarea") as HTMLTextAreaElement;

    const email = emailInput.value;
    const message = messageInput.value;

    if (!email || !message) {
      alert("Please fill in both the email and message fields.");
      return;
    }
  }

  onMount(() => {
    sections = Array.from(
      document.querySelectorAll("section[id]"),
    ) as HTMLElement[];

    sections = Array.from(
      document.querySelectorAll("section[id]"),
    ) as HTMLElement[];

    let sectionOffsets = sections.map((section) => section.offsetTop);

    const handleScroll = () => {
      const scrollPos = window.scrollY + stickyNavHeight + 1;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sectionOffsets[i] <= scrollPos) {
          if (activeSection === sections[i].id) return;
          activeSection = sections[i].id;
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleDownloadCvPressed = () => {
    const confirmed = confirm(
      `Do you want to download ${resumeChangedFileName}?`,
    );
    if (!confirmed) return;

    const link = document.createElement("a");
    link.href = "/files/resume.pdf";
    link.download = resumeChangedFileName;
    link.click();
  };
</script>

<main>
  <Navbar {activeSection} />
  <section class="hero-section" id="home">
    <div class="wrapper">
      <div class="hero-section__content">
        <p class="text-ui-xlg">Hello, I'm Drake!</p>
        <p class="space-above-sm">Software / Web Developer</p>
      </div>
    </div>
  </section>

  <section class="section" id="projects">
    <div class="wrapper">
      <p class="text-heading-2">Projects</p>
      <div class="projects-grid space-above-lg">
        <ProjectCards />
      </div>
    </div>
  </section>

  <section class="section" id="about">
    <div class="wrapper">
      <div class="about">
        <div class="about__image">
          <img
            loading="lazy"
            width="300px"
            height="300px"
            src="images/picofme.webp"
            alt=""
          />
        </div>
        <div class="about__text">
          <h2 class="text-heading-1 text-max-width-sm">
            What Software Development Means to Me
          </h2>
          <p class="text-max-width-lg space-above-base">
            Creating software has always been a passion of mine. I enjoy the
            process of taking an idea and turning it into a functional
            application. The ability to create something from scratch and see it
            come to life is incredibly rewarding, and it motivates me to
            continue learning and improving my skills as a developer.
          </p>
          <p class="text-max-width-lg space-above-lg">
            Every project I work on is an opportunity to learn and grow as a
            developer. I strive to write clean, maintainable code that not only
            meets the requirements of the project but also adheres to best
            practices and industry standards. I believe that clean code is the
            foundation of efficient solutions, and I am committed to delivering
            high quality work that exceeds expectations.
          </p>
          <p class="text-max-width-lg space-above-base">
            I specialize in React and .NET for developing frontend and backend
            applications. However, I am always eager to explore new technologies
            and frameworks to expand my skill set and stay up-to-date with the
            latest trends in software development.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="contact">
    <p class="text-heading-2">Get in Contact with Me!</p>
    <form
      onsubmit={handleContactSubmit}
      class="contact__inputs flex-col space-above-lg"
    >
      <input
        id="email"
        type="email"
        placeholder="yourname@email.com"
        autocomplete="email"
      />
      <textarea id="message" placeholder="message"></textarea>
      <button type="submit" class="btn contact__submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="24px"
          height="24px"
          fill="var(--color-on-bg-primary)"
          ><path
            d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"
          /></svg
        >
        Send
      </button>
    </form>
  </section>

  <footer class="footer section">
    <div class="wrapper flex-col">
      <button onclick={handleDownloadCvPressed} class="btn btn--outlined"
        >Download CV</button
      >
      <img
        loading="lazy"
        width="60px"
        height="60px"
        src="/icons/portfolio-circuit.svg"
        alt=""
        class="space-above-xlg"
      />
      <div class="footer__links flex-row space-above-xlg">
        <a
          href="https://github.com/DrakeB1234"
          target="_blank"
          aria-label="github"
          ><img
            loading="lazy"
            width="40px"
            height="40px"
            src="/tech-icons/Github.svg"
            alt=""
          /></a
        >
        <a
          href="mailto:drakebuentello@gmail.com"
          target="_blank"
          aria-label="email"><EmailIcon size={40} /></a
        >
      </div>
      <p class="text-caption space-above-base">Drake Buentello 2026</p>
    </div>
  </footer>
</main>

<style>
  .hero-section {
    display: flex;
    align-items: center;
    height: 48dvh;

    background-color: var(--color-primary-2xdark);

    background: linear-gradient(
      120deg,
      oklch(22% 0.02 265) 44%,
      var(--color-bg-primary) 100%
    );
  }

  .hero-section__content {
    padding-left: var(--space-16);
    color: var(--color-white);
  }

  .hero-section__content > p {
    color: var(--color-white);
  }

  .section {
    padding: var(--space-36) var(--space-24);
  }

  .section#projects {
    padding-block: 8dvh;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: stretch;

    overflow: hidden;

    gap: var(--space-12);
  }

  .section#about {
    background-color: var(--color-bg-surface-2);
    padding-block: 10dvh;
  }

  .about {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--space-36);
  }

  .about__image {
    max-width: 280px;
    max-height: 280px;
    border-radius: var(--radius-lg);
    overflow: hidden;

    margin-inline: auto;
  }

  .about__text {
    margin-bottom: auto;
  }

  .section#contact {
    padding-block: 12dvh;

    text-align: center;
    background-color: var(--color-bg-primary);
  }

  .section#contact p {
    color: var(--color-on-bg-primary);
  }

  .contact__inputs {
    max-width: 400px;
    margin-inline: auto;
    gap: var(--space-12);
  }

  .contact__submit {
    padding: var(--space-8) var(--space-16);
    background-color: transparent;
    border: 2px solid var(--color-on-bg-primary);
    color: var(--color-on-bg-primary);
  }

  .contact__submit:hover {
    background-color: var(--color-bg-primary-active);
  }

  .footer {
    padding-top: 8dvh;
    background-color: var(--color-bg-surface-dark);
  }

  .footer .btn,
  .footer p {
    margin-inline: auto;
    color: var(--color-on-bg-primary);
  }

  .footer img {
    width: 60px;
    margin-inline: auto;
  }

  .footer__links {
    gap: var(--space-16);
    justify-content: center;
  }

  .footer__links img {
    width: 40px;
  }

  @media (max-width: 768px) {
    .about {
      grid-template-columns: 1fr;
      gap: var(--space-52);
    }
  }
</style>
