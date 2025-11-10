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

  const stopAutoSlide = () => {
    if (timer) {
      clearInterval(timer);
      timer = 0;
    }
  };

  const switchImageToIdx = (idx: number) => {
    current = idx;
    stopAutoSlide();
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
  <div class="arrows">
    <button onclick={() => switchNextImage(-1)}>
      <ArrowIcon color="var(--color-white)" />
    </button>
    <button onclick={() => switchNextImage(1)}>
      <ArrowIcon color="var(--color-white)" flip />
    </button>
  </div>
</div>
<div class="carousel-dots" style="background-color: {backgroundColor};">
  {#each images as _, i}
    <button
      onclick={() => switchImageToIdx(i)}
      aria-label="switch-to-image-{i}"
      class="carousel-dot-button {current === i ? 'active' : ''}"
    ></button>
  {/each}
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

  .arrows {
    position: absolute;
    z-index: 2;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-xsmall);
    transition: background-color 0.2s ease-in;

    & button {
      background-color: #0000004b;
      padding: var(--spacing-xsmall);
      border-radius: var(--radius-full);
    }

    & button:hover {
      background-color: #ffffff23;
    }
  }

  .carousel-dots {
    display: flex;
    justify-content: center;
    gap: var(--spacing-xsmall);
    padding: var(--spacing-base);
    padding-top: 0;
  }

  .carousel-dot-button {
    padding: 0;
    width: 10px;
    height: 10px;
    border-radius: var(--radius-full);
    background-color: var(--color-neutral-xdark);

    &.active {
      background-color: var(--color-white);
    }
  }
</style>
