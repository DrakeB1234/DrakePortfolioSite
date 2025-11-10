<script lang="ts">
  import type { IconProps } from "$lib/types/types";
  let {
    size = 24,
    color = "var(--color-primary-3xdark)",
    flip = false,
  }: IconProps = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  height={size}
  viewBox="0 0 24 24"
  width={size}
  fill="none"
  transform={flip ? "scale(-1,1)" : undefined}
>
  <path
    stroke={color}
    stroke-linecap="round"
    stroke-width="2"
    d="m16.289 3.423-8.224 8.223a.5.5 0 0 0 0 .708l8.224 8.223"
  />
</svg>
