<script lang="ts">
  let { borderColor, text }: { borderColor: string; text: string } = $props();
</script>

<div class="tech-stack-item" style={`border-color: ${borderColor}`}>
  <img src={`/tech-icons/${text}.svg`} alt="" />
  <p class="body">{text}</p>
</div>

<style>
  .tech-stack-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-2xsmall);
    border: 2px solid black;
    padding: var(--spacing-2xsmall) var(--spacing-small);
    padding-left: var(--spacing-xsmall);
    border-radius: var(--radius-base);
  }
</style>
