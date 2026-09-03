<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={"/logo.svg"} />
	<title>Drake Portfolio</title>
</svelte:head>

{@render children()}
