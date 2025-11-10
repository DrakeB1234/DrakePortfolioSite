<script lang="ts">
  let { activeSection }: { activeSection: string } = $props();
</script>

<nav class="navbar">
  <ul role="list">
    <li><a href="#top" class:activeNav={activeSection === "top"}>Top</a></li>
    <li>
      <a href="#projects" class:activeNav={activeSection === "projects"}
        >Projects</a
      >
    </li>
    <li>
      <a href="#about" class:activeNav={activeSection === "about"}>About</a>
    </li>
    <li>
      <a href="#contact" class:activeNav={activeSection === "contact"}
        >Contact</a
      >
    </li>
  </ul>
</nav>

<style>
  .navbar {
    position: sticky;
    inset: 0 0 0 0;
    background-color: var(--color-white);
    z-index: 10;
    border-bottom: 1px solid var(--color-neutral-base);
  }
  .navbar > ul {
    display: flex;
    justify-content: center;
    align-items: end;
    flex-wrap: wrap;
    gap: var(--spacing-large);
    padding: var(--spacing-base) var(--spacing-base);

    & > li > a {
      text-decoration: none;
      color: var(--color-primary-3xdark);
    }

    & > li > a.activeNav {
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-large);
    }
  }
</style>
