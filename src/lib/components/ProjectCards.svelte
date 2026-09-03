<script>
  import { PROJECT_CARD_DATA } from "../data/projectCardData";
  import { normalizeQuery } from "$lib/utils/format";
  import ProjectIcon from "./ProjectIcon.svelte";
</script>

{#each PROJECT_CARD_DATA as data}
  <a
    href={`project/${normalizeQuery(data.projectTitle)}`}
    class="card btn btn--card"
  >
    <div class="project-card">
      <div class="project-card__top flex-row">
        <ProjectIcon
          color={data.iconColor}
          link={data.iconLink}
          title={data.projectTitle}
        />
        <div class="flex-col lay-gap-none">
          <p class="text-truncate">{data.projectTitle}</p>
          <p class="text-caption-subtle text-truncate">
            {data.projectSubTitle}
          </p>
        </div>
      </div>
      <div class="project-card__pills flex-row space-above-base">
        {#each data.techStack as stack}
          <span class="pill">{stack.name}</span>
        {/each}
      </div>
      <p
        class="project-card__description text-caption-subtle text-line-clamp-3 space-above-base"
      >
        {data.projectDescription}
      </p>
    </div>
  </a>
{/each}

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    min-height: 180px;
  }

  .project-card__top {
    gap: var(--space-16);
  }

  .project-card__pills {
    flex-wrap: wrap;
    gap: var(--space-4);
  }

  .project-card__description {
    margin-bottom: auto;
  }
</style>
