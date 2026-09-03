<script lang="ts">
  import { page } from "$app/state";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<main>
  <Navbar activeSection={""} />
  <div>
    <h1 class="text-heading-2">{page.status}: {page.error?.message}</h1>
    <a href="/" class="space-above-sm">Go back Home</a>
  </div>
</main>

<style>
  div {
    display: grid;
    place-items: center;
    padding: var(--space-16);
  }
</style>
