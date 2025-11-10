<script lang="ts">
  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  import EmailIcon from "$lib/icons/EmailIcon.svelte";
  import { onMount } from "svelte";
  import CircuitIcon from "$lib/icons/CircuitIcon.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import About from "$lib/components/About.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Projects from "$lib/components/Projects.svelte";

  let activeSection = "top";
  const stickyNavHeight = 60;

  let sections: HTMLElement[] = [];

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
</script>

<main>
  <section class="hero-section" id="top">
    <div class="wrapper">
      <h1 class="heading-primary">Hey, I'm Drake!</h1>
      <h2 class="subheading-primary">Web Developer</h2>
    </div>
  </section>
  <Navbar {activeSection} />
  <Projects />
  <About />
  <Contact />
  <footer class="footer">
    <button class="resume-button outlined">Download CV</button>
    <div class="icon-container">
      <CircuitIcon size={90} />
    </div>
    <p class="caption">Drake Buentello 2025</p>
    <ul role="list">
      <li>
        <a
          href="https://github.com/DrakeB1234"
          target="_blank"
          aria-label="github"><GithubIcon size={40} /></a
        >
      </li>
      <li>
        <a
          href="mailto:drakebuentello@gmail.com"
          target="_blank"
          aria-label="email"><EmailIcon size={40} /></a
        >
      </li>
    </ul>
  </footer>
</main>

<style>
  .hero-section {
    display: flex;
    align-items: center;

    background-color: var(--color-primary-2xdark);
    background: linear-gradient(
      120deg,
      var(--color-primary-2xdark) 65%,
      var(--color-primary-base) 100%
    );

    & > div.wrapper {
      padding: var(--spacing-3xlarge) var(--spacing-2xlarge);
    }
  }
  .footer {
    padding: var(--spacing-2xlarge);
    padding-bottom: var(--spacing-large);
    background-color: var(--color-primary-2xdark);
    text-align: center;
    color: var(--color-white);

    & > button.resume-button {
      margin-inline: auto;
      color: var(--color-white);

      &:hover {
        background-color: var(--color-primary-3xdark);
      }
    }

    & > .icon-container {
      display: flex;
      justify-content: center;
      padding-top: var(--spacing-3xlarge);
      padding-bottom: var(--spacing-2xlarge);
    }

    & ul {
      display: flex;
      justify-content: center;
      gap: var(--spacing-base);
      margin-top: var(--spacing-base);
    }
  }

  @media (max-width: 40em) {
    .hero-section > div.wrapper {
      padding: var(--spacing-3xlarge) var(--spacing-large);
    }
  }
</style>
