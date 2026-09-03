<script lang="ts">
  import { page } from "$app/state";
  import ImageCarousel from "$lib/components/ImageCarousel.svelte";
  import ProjectIcon from "$lib/components/ProjectIcon.svelte";
  import type { ProjectCardData } from "$lib/data/projectCardData";
  import BackIcon from "$lib/icons/BackIcon.svelte";
  import OpenInNewIcon from "$lib/icons/OpenInNewIcon.svelte";

  const data: ProjectCardData = page.data.projectObj;
</script>

<main class="wrapper">
  <a class="btn" href="/">
    <BackIcon />
    <p class="body">Return</p>
  </a>
  <div class="screenshots space-above-sm">
    {#if data.projectScreenshotLinks}
      <ImageCarousel
        images={data.projectScreenshotLinks}
        interval={3000}
        height={360}
      />
    {/if}
  </div>
  <div class="project__content space-above-base">
    <div class="project__top flex-row">
      <ProjectIcon
        color={data.iconColor}
        link={data.iconLink}
        title={data.projectTitle}
      />
      <div class="project__top__text flex-col">
        <h1 class="text-heading-2">{data.projectTitle}</h1>
        <h2 class="text-caption-subtle">{data.projectSubTitle}</h2>
      </div>
    </div>

    <div class="project__pills flex-row space-above-base">
      {#each data.techStack as stack}
        <span class="pill flex-row" style="border-color: {stack.color};">
          <img
            loading="lazy"
            width="24px"
            height="24px"
            src={`/tech-icons/${stack.name}.svg`}
            alt=""
          />
          {stack.name}
        </span>
      {/each}
    </div>

    <p class="text-body-subtle text-max-width-base space-above-lg">
      {data.projectDescription}
    </p>

    <div class="project__links flex-row space-above-lg">
      {#if data.viewCodeLink}
        <a href={data.viewCodeLink} class="btn btn--outlined" target="_blank">
          <OpenInNewIcon />
          Github Repo
        </a>
      {/if}
      {#if data.viewLiveLink}
        <a href={data.viewLiveLink} class="btn btn--outlined" target="_blank">
          <OpenInNewIcon />
          Live Site
        </a>
      {/if}
    </div>

    <hr class="space-above-xlg" />

    {#if data.projectTextBlocks}
      <p class="text-heading-3 space-above-lg">More About This Project</p>
      <ul class="project__list space-above-base">
        {#each data.projectTextBlocks as block}
          <li class="project__list-item text-body-subtle text-max-width-lg">
            {block}
          </li>
        {/each}
      </ul>
    {/if}
    {#if data.projectLinks}
      <p class="text-heading-3 space-above-xlg">Additonal Links</p>
      <ul class="project__list space-above-base">
        {#each data.projectLinks as item}
          <li class="project__list-item text-body-subtle text-max-width-lg">
            {item.text}:
            <a href={item.link} class="project__link" target="_blank"
              >{item.link}</a
            >
          </li>
        {/each}
      </ul>
    {/if}
    {#if data.projectUsedResourcesLinks}
      <p class="text-heading-3 space-above-xlg">Used Resources</p>
      <ul class="project__list space-above-base">
        {#each data.projectUsedResourcesLinks as item}
          <li class="project__list-item text-body-subtle text-max-width-lg">
            {item.text}:
            <a href={item.link} class="project__link" target="_blank"
              >{item.link}</a
            >
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</main>

<style>
  main {
    padding-top: var(--space-8);
    padding-bottom: var(--space-36);
    background-color: var(--color-bg-surface-1);
  }

  .btn:hover {
    background-color: var(--color-bg-surface-1-active);
  }

  a.btn {
    gap: var(--space-8);
    padding: var(--space-8) var(--space-12);
  }

  .screenshots {
    background-color: var(--color-bg-surface-dark);
  }

  .project__content {
    padding: var(--space-16);
  }

  .project__top {
    gap: var(--space-16);
  }

  .project__top__text {
    gap: 0;
  }

  .project__pills > .pill {
    gap: var(--space-4);
    border-width: 2px;
    background-color: transparent;
  }

  .project__list {
    padding-left: var(--space-16);
  }

  .project__list-item:not(:first-child) {
    margin-top: var(--space-12);
  }

  .project__link {
    color: var(--color-bg-primary);
  }
</style>
