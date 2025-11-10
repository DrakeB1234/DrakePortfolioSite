<script lang="ts">
  import type { IconProps } from "$lib/types/types";
  let { size, color = "var(--color-primary-xdark)" }: IconProps = $props();
</script>

<svg height={size} width={size} viewBox="0 0 66 66">
  <mask id="a" fill={color}>
    <rect width="52" height="52" x="7" y="7" rx="4" />
  </mask>
  <rect
    width="52"
    height="52"
    x="7"
    y="7"
    stroke={color}
    fill="none"
    stroke-width="12"
    mask="url(#a)"
    rx="4"
  />
  <path
    fill="none"
    stroke={color}
    stroke-width="2"
    d="M35 41a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm9-11a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-17-4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
  />
  <path
    fill={color}
    d="M13 27h5v-6.5a2 2 0 0 1 2-2h7V13h2.5v5.5a2 2 0 0 1-2 2H20V27a2 2 0 0 1-2 2h-5v-2Zm33 18.734c0-1.663-3-2.164-3-4.722V37h2v4.012c0 1.232 3.043 2.549 3.043 4.171L48 53h-2v-7.266ZM21.778 46c1.663 0 2.164-3 4.722-3h5v2h-5c-1.232 0-2.548 3.043-4.17 3.043L13 48v-2h8.778ZM13 37h16.172a2 2 0 0 0 1.414-.586l2.828-2.828A2 2 0 0 0 34 32.172V30.74a2 2 0 0 1 .481-1.302l4.92-5.74A2 2 0 0 1 40.92 23H46V13h2v10a2 2 0 0 1-2 2h-5.039a2 2 0 0 0-1.561.75l-2.962 3.702a2 2 0 0 0-.438 1.25v1.47a2 2 0 0 1-.586 1.414l-4.828 4.828a2 2 0 0 1-1.414.586H13v-2Z"
  />
  <path
    fill={color}
    d="M37 13h2v4.205a2 2 0 0 1-.546 1.373L30.5 27 29 25.5l7.368-6.907a2 2 0 0 0 .632-1.46V13ZM14 1.5a1.5 1.5 0 0 1 3 0V7h-3V1.5Zm7 0a1.5 1.5 0 0 1 3 0V7h-3V1.5Zm7 0a1.5 1.5 0 0 1 3 0V7h-3V1.5Zm7 0a1.5 1.5 0 0 1 3 0V7h-3V1.5Zm7 0a1.5 1.5 0 0 1 3 0V7h-3V1.5Zm7 0a1.5 1.5 0 0 1 3 0V7h-3V1.5Zm3 63a1.5 1.5 0 0 1-3 0V59h3v5.5Zm-7 0a1.5 1.5 0 0 1-3 0V59h3v5.5Zm-7 0a1.5 1.5 0 0 1-3 0V59h3v5.5Zm-7 0a1.5 1.5 0 0 1-3 0V59h3v5.5Zm-7 0a1.5 1.5 0 0 1-3 0V59h3v5.5Zm-7 0a1.5 1.5 0 0 1-3 0V59h3v5.5ZM1.5 14a1.5 1.5 0 0 0 0 3H7v-3H1.5Zm0 7a1.5 1.5 0 0 0 0 3H7v-3H1.5Zm0 7a1.5 1.5 0 0 0 0 3H7v-3H1.5Zm0 7a1.5 1.5 0 0 0 0 3H7v-3H1.5Zm0 7a1.5 1.5 0 0 0 0 3H7v-3H1.5Zm0 7a1.5 1.5 0 0 0 0 3H7v-3H1.5Zm63-35a1.5 1.5 0 0 1 0 3H59v-3h5.5Zm0 7a1.5 1.5 0 0 1 0 3H59v-3h5.5Zm0 7a1.5 1.5 0 0 1 0 3H59v-3h5.5Zm0 7a1.5 1.5 0 0 1 0 3H59v-3h5.5Zm0 7a1.5 1.5 0 0 1 0 3H59v-3h5.5Zm0 7a1.5 1.5 0 0 1 0 3H59v-3h5.5Z"
  />
</svg>
