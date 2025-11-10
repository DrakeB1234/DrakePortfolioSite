<script lang="ts">
  import type { IconProps } from "$lib/types/types";
  let { size = 24, color = "var(--color-primary-3xdark)" }: IconProps = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  height={size}
  viewBox="0 -960 960 960"
  width={size}
  fill={color}
  ><path
    d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
  /></svg
>
