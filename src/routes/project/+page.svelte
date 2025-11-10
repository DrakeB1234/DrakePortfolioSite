<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<h1>{data.projectTitle}</h1>
<p>This is the project page of my portfolio site.</p>
