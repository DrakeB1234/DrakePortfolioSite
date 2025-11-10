<script lang="ts">
  import { normalizeQuery } from "$lib/utils/format";

  type props = {
    projectTitle?: string;
    projectSubTitle?: string;
    projectDescription?: string;
    techStack?: string[];
    viewLiveLink?: string;
    iconLink?: string;
    iconColor?: string;
  };

  let {
    projectTitle = "Title",
    projectSubTitle = "Subtitle",
    projectDescription = "Project description in vivid detail.",
    techStack = [],
    iconLink = undefined,
    iconColor = undefined,
    viewLiveLink = undefined,
  }: props = $props();
</script>

<div class="project-card">
  <div class="card-header">
    <div class="card-icon" style={`background-color: ${iconColor}`}>
      <img src={iconLink} alt="" />
    </div>
    <div class="card-text">
      <p class="body-large">{projectTitle}</p>
      <p class="body card-subtitle">{projectSubTitle}</p>
    </div>
  </div>
  <div class="card-tech-stack">
    {#each techStack as item}
      <p class="caption">{item}</p>
    {/each}
  </div>
  <div class="card-description">
    <p>{projectDescription}</p>
  </div>
  <div class="card-buttons">
    <a
      class="button-link outlined"
      href={`project?q=${normalizeQuery(projectTitle)}`}>Read More</a
    >
    <a class="button-link" target="_blank" href={viewLiveLink}>View Live</a>
  </div>
</div>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-neutral-base);
    border-radius: var(--radius-large);
    padding: var(--spacing-small);
  }
  .card-header {
    display: flex;
    gap: var(--spacing-base);
    min-height: 80px;
  }
  .card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 80px;

    padding: var(--spacing-base);
    background-color: var(--color-neutral-light);
    border-radius: var(--radius-large);
  }
  .card-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
  .card-subtitle {
    color: var(--color-neutral-xdark);
  }
  .card-tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xsmall);
    margin-top: var(--spacing-base);

    & p {
      background-color: var(--color-neutral-light);
      padding: var(--spacing-2xsmall) var(--spacing-xsmall);
      border-radius: var(--radius-base);
    }
  }
  .card-description {
    text-align: left;
    margin-top: var(--spacing-base);
    margin-bottom: var(--spacing-large);

    & > p {
      color: var(--color-neutral-xdark);
    }
  }
  .card-buttons {
    display: flex;
    justify-content: end;
    gap: var(--spacing-small);
    margin-top: auto;

    & .button-link {
      padding: var(--spacing-small) var(--spacing-small);
    }
  }
</style>
