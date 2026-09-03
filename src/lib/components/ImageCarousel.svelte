<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import ArrowIcon from "$lib/icons/ArrowIcon.svelte";

  type Props = {
    images: string[];
    interval?: number;
    width?: number | "full";
    height?: number;
  };

  let {
    images,
    interval = 3000,
    width = "full",
    height = 400,
  }: Props = $props();

  let current = $state(0);
  let timer: ReturnType<typeof setInterval>;

  const stopAutoSlide = () => {
    if (timer) {
      clearInterval(timer);
      timer = 0;
    }
  };

  const switchNextImage = (value: number) => {
    const tempIdx = current + value;
    if (tempIdx < 0) {
      current = images.length - 1;
    } else {
      current = (current + value) % images.length;
    }
    stopAutoSlide();
  };

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
<div class="carousel__bottom">
  <button class="carousel__control" onclick={() => switchNextImage(-1)}>
    <ArrowIcon color="var(--color-white)" />
  </button>

  <div class="carousel-dots">
    {#each images as _, i}
      <div
        aria-label="switch-to-image-{i}"
        class="carousel-dot-button {current === i ? 'active' : ''}"
      ></div>
    {/each}
  </div>
  <button class="carousel__control" onclick={() => switchNextImage(1)}>
    <ArrowIcon color="var(--color-white)" flip />
  </button>
</div>

<style>
  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
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

  .carousel__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-16);
  }

  .carousel__control {
    cursor: pointer;
    padding: var(--space-8);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    background-color: transparent;
  }

  .carousel__control:active {
    background-color: var(--color-bg-surface-2-active);
  }

  .carousel-dots {
    display: flex;
    justify-content: center;
    gap: var(--space-4);
  }

  .carousel-dot-button {
    padding: 0;
    width: 10px;
    height: 10px;
    border-radius: var(--radius-full);
    border: 1px solid var(--color-border);
    background-color: transparent;
  }

  .carousel-dot-button.active {
    background-color: white;
  }
</style>
