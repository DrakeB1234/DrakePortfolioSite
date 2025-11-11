<script lang="ts">
  import ImageCarousel from "$lib/components/ImageCarousel.svelte";
  import TechStackItem from "$lib/components/TechStackItem.svelte";
  import BackIcon from "$lib/icons/BackIcon.svelte";
  import OpenInNewIcon from "$lib/icons/OpenInNewIcon.svelte";
  import SendIcon from "$lib/icons/SendIcon.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<nav class="wrapper project-nav">
  <a href="/">
    <BackIcon />
    <p class="body">Back to Home</p>
  </a>
</nav>
<section class="wrapper screenshots">
  {#if data.projectScreenshotLinks}
    <ImageCarousel
      images={data.projectScreenshotLinks}
      interval={5000}
      height={360}
      backgroundColor={"var(--color-primary-3xdark)"}
    />
  {/if}
</section>
<main class="wrapper">
  <h1 class="heading-secondary card-title">{data.projectTitle}</h1>
  <p class="body card-subtitle">{data.projectSubTitle}</p>
  <div class="tech-stack">
    {#each data.techStack as item}
      <TechStackItem text={item.name} borderColor={item.color} />
    {/each}
  </div>
  <div class="links">
    {#if data.viewCodeLink}
      <a href={data.viewCodeLink} target="_blank">
        <OpenInNewIcon color="var(--color-primary-base)" />
        <p class="body">View code</p>
      </a>
    {/if}
    {#if data.viewLiveLink}
      <a href={data.viewLiveLink} target="_blank">
        <OpenInNewIcon color="var(--color-primary-base)" />
        <p class="body">View live</p>
      </a>
    {/if}
  </div>
  <p class="body card-text">{data.projectDescription}</p>
  {#if data.projectTextBlocks}
    <h2 class="body-large card-about-title">More about this project</h2>
    {#each data.projectTextBlocks as block}
      <p class="body card-text">{block}</p>
    {/each}
  {/if}
  {#if data.projectUsedResourcesLinks}
    <h2 class="body-large card-about-title">Used Resources</h2>
    {#each data.projectUsedResourcesLinks as item}
      <p class="body card-text">
        {item.text}: <a href={item.link} target="_blank">{item.link}</a>
      </p>
    {/each}
  {/if}
</main>

<style>
  nav.project-nav {
    position: sticky;
    top: 0;
    display: flex;
    background-color: var(--color-white);
    z-index: 10;
    border-bottom: 2px solid var(--color-neutral-base);

    & a {
      display: flex;
      align-items: center;
      gap: var(--spacing-xsmall);
      color: var(--color-primary-3xdark);
      padding: var(--spacing-base);
    }
  }
  .wrapper {
    max-width: 900px;
    padding: var(--spacing-base);
    padding-top: 0;
    padding-bottom: var(--spacing-large);

    &.screenshots {
      padding: 0;
    }

    &.project-nav {
      padding: 0;
    }
  }
  .card-title {
    margin-top: var(--spacing-large);
  }
  .card-subtitle {
    margin-top: var(--spacing-2xsmall);
    color: var(--color-neutral-xdark);
  }
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xsmall);
    margin-top: var(--spacing-base);
  }
  .links {
    margin-top: var(--spacing-large);

    & a {
      display: flex;
      align-items: center;
      gap: var(--spacing-2xsmall);
    }

    & a:not(:last-child) {
      margin-bottom: var(--spacing-small);
    }
  }
  .card-text {
    width: 90%;
    margin-top: var(--spacing-large);
    color: var(--color-neutral-xdark);
  }
  .card-about-title {
    margin-top: var(--spacing-xlarge);
  }
</style>
