<script lang="ts">
  let { activeSection }: { activeSection: string } = $props();
</script>

<nav class="navbar">
  <div class="navbar__content flex-row">
    <a href="/" class="navbar__logo">
      <img src="/logo.svg" alt="Logo" />
    </a>
    <div class="navbar__links flex-row mobile-hide">
      <a href="#home" class:active={activeSection === "home"}>Home</a>
      <a href="#projects" class:active={activeSection === "projects"}
        >Projects</a
      >
      <a href="#about" class:active={activeSection === "about"}>About</a>

      <a href="#contact" class:active={activeSection === "contact"}>Contact</a>
    </div>
    <div class="navbar__mobile-links flex-row mobile-show">
      <a href="#contact" class:active={activeSection === "contact"}>Contact</a>
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: sticky;
    inset: 0 0 0 0;
    bottom: unset;
    background-color: var(--color-bg-surface-1);
    z-index: 10;
    border-bottom: 1px solid var(--color-border-subtle);
    box-shadow: var(--shadow-1);
  }
  .navbar__content {
    max-width: var(--app-max-width);
    margin: 0 auto;
    padding: var(--space-12) var(--space-16);
  }
  .navbar__logo {
    margin-right: var(--space-36);
  }
  .navbar__logo img {
    width: 36px;
    height: auto;
  }
  .navbar__links {
    gap: var(--space-24);
  }
  .navbar__mobile-links {
    width: 100%;
    justify-content: end;
  }

  a.active {
    font-weight: var(--font-weight-bold);
  }
</style>
