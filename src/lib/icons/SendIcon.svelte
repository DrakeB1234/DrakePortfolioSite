<script lang="ts">
  import type { IconProps } from "$lib/types/types";
  let { size = 24, color = "var(--color-white)" }: IconProps = $props();
</script>

<svg height={size} viewBox="0 -960 960 960" width={size} fill={color}
  ><path
    d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"
  /></svg
>
