<script lang="ts">
	import Sidebar from '$components/Sidebar.svelte';
</script>

<header>
	<Sidebar />
	<h1>Envisionly Tech Academy</h1>
</header>
<main>
	<slot></slot>
</main>
<footer>
	<h2>Footer</h2>
</footer>

<style>
	:global(:root) {
		--envisionlyBlue: midnightblue;
		--envisionlyGold: #daa520;
	}

	:global(.screenReaderOnly) {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
