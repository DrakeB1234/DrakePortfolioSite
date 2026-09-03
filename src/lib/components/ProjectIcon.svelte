<script>
  let { color, link, title } = $props();
</script>

<div class="icon-container" style="background-color: {color}">
  <img loading="lazy" width="52px" height="52px" src={`/${link}`} alt={title} />
</div>
