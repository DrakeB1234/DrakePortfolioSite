<script lang="ts">
  import ProjectShell from "$lib/components/ProjectShell.svelte";
  import { PROJECT_CARD_DATA } from "$lib/data/projectCardData";

  let data = PROJECT_CARD_DATA.find((e) => e.projectTitle === "Music Maestro");

  if (!data) data = PROJECT_CARD_DATA[0];
</script>

<ProjectShell {data} />
