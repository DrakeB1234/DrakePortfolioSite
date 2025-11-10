<script lang="ts">
	import favicon from "$lib/assets/Logo.svg";
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Drake Portfolio</title>
</svelte:head>

{@render children()}
