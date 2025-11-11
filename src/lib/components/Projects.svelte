<script>
  import ProjectCard from "./ProjectCard.svelte";
  import { PROJECT_CARD_DATA } from "../data/projectCardData";
</script>

<section class="projects" id="projects">
  <div class="wrapper">
    <h3 class="heading-secondary">Projects</h3>
    <div class="projects-grid">
      {#each PROJECT_CARD_DATA as cardData}
        <ProjectCard
          projectTitle={cardData.projectTitle}
          projectSubTitle={cardData.projectSubTitle}
          projectDescription={cardData.projectDescription}
          techStack={cardData.techStack}
          viewCodeLink={cardData.viewCodeLink}
          viewLiveLink={cardData.viewLiveLink}
          iconLink={cardData.iconLink}
          iconColor={cardData.iconColor}
        />
      {/each}
    </div>
  </div>
</section>

<style>
  .projects {
    text-align: center;
    padding-top: var(--spacing-2xlarge);
    margin-bottom: var(--spacing-2xlarge);
  }
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-base);
    padding: var(--spacing-large);
    padding-top: var(--spacing-xlarge);
  }

  @media (max-width: 40em) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
