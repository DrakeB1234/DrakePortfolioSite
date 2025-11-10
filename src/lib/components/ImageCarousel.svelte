<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  type Props = {
    images: string[];
    interval?: number;
    width?: number | "full";
    height?: number;
    backgroundColor?: string;
  };

  let {
    images,
    interval = 3000,
    width = "full",
    height = 400,
    backgroundColor = "black",
  }: Props = $props();

  let current = $state(0);
  let timer: ReturnType<typeof setInterval>;

  onMount(() => {
    timer = setInterval(() => {
      current = (current + 1) % images.length;
    }, interval);
  });

  onDestroy(() => clearInterval(timer));
</script>

<div
  class="carousel"
  style="
    width: {width === 'full' ? '100%' : `${width}px`};
    height: {height}px;
    background-color: {backgroundColor};
  "
>
  <div class="carousel-inner">
    {#each images as image, i (image)}
      {#if i === current}
        <img
          src={image}
          alt="carousel"
          class="carousel-image"
          draggable="false"
          transition:fade={{ duration: 1000, easing: cubicInOut }}
        />
      {/if}
    {/each}
  </div>
</div>

<style>
  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    padding: var(--spacing-base);
    box-sizing: border-box;
  }

  .carousel-inner {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .carousel-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    user-select: none;
  }
</style>
